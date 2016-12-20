'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:TrunksPhysicalCtrl
 * @description
 * # TrunksPhysicalCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('TrunksPhysicalCtrl', function($scope, $location, $interval, TrunkService, ConfigService, UtilService, DeviceService) {

    $scope.allDevices = {};
    $scope.allVendors = {};
    $scope.allModels = {};
    $scope.networks = {};
    $scope.networkLength = 0;
    $scope.tasks = {};
    $scope.sipTrunks = {};
    $scope.selectedDevice = {};
    $scope.newGateway = {};
    $scope.onSave = false;
    $scope.onSaveSuccess = false;
    $scope.onSaveError = false;
    $scope.onDeleteSuccess = false;

    $scope.selectDevice = function(device, network, networkName) {
      device.gateway = network.gateway;
      device.ipv4_green = network.ip;
      device.netmask_green = network.netmask;
      device.network_name = networkName
      if (device.isConnected) {
        device.ipv4_new = device.ipv4;
      } else {
        device.ipv4 = device.ipv4_new;
      }
      $scope.selectedDevice = device;
    }

    $scope.getModelDescription = function(device) {
      if (device && device.manufacturer && device.model) {
        var obj = $scope.allModels[device.manufacturer].filter(function(obj) {
          if (obj.id == device.model) {
            return obj;
          }
        })[0];
        return obj && obj.model && obj.description ? {
          description: obj.description,
          model: obj.model
        } : '';
      } else {
        return {
          description: ''
        };
      }
    };

    $scope.getGatewayModelList = function() {
      DeviceService.gatewayModelList().then(function(res) {
        $scope.allModels = res.data;
        $scope.allVendors = Object.keys($scope.allModels);
      }, function(err) {
        console.log(err);
      });
    };

    $scope.getSipTrunks = function() {
      TrunkService.getSipTrunks().then(function(res) {
        $scope.sipTrunks = res.map(function(obj) {
          return obj.channelid;
        });
      }, function(err) {
        console.log(err);
      });
    };

    $scope.getNetworkList = function() {
      $scope.view.changeRoute = true;
      ConfigService.getNetworks().then(function(res) {
        $scope.networks = res.data;
        for (var eth in res.data) {
          $scope.tasks[eth] = {};
          $scope.allDevices[eth] = {};
        }
        $scope.networkLength = Object.keys(res.data).length;
        $scope.view.changeRoute = false;
        for (var n in $scope.networks) {
          $scope.startScan(n, $scope.networks[n]);
        }
      }, function(err) {
        console.log(err);
      });
    };

    $scope.getGatewayList = function(key, network) {
      DeviceService.gatewayListByNetwork(network).then(function(res) {
        $scope.allDevices[key] = res.data;
        $scope.tasks[key].currentProgress = 100;
        $scope.onSave = false;
        $scope.onSaveSuccess = false;
        $scope.onSaveError = false;
        $scope.onDeleteSuccess = false;
      }, function(err) {
        console.log(err);
        $scope.tasks[key].currentProgress = -1;
      });
    };

    $scope.startScan = function(key, network) {
      if ($scope.tasks[key].currentProgress > 0 && $scope.tasks[key].currentProgress < 100) {
        return true;
      }
      $scope.tasks[key].startScan = true;
      $scope.tasks[key].currentProgress = Math.floor((Math.random() * 50) + 10);
      DeviceService.startScan(network).then(function(res) {
        $scope.tasks[key].promise = $interval(function() {
          UtilService.taskStatus(res.data.result).then(function(res) {
            if (res.data.progress < 100) {
              $scope.errorCount = 0;
            } else if (res.data.progress == 100) {
              $scope.tasks[key].errorCount = 0;
              $interval.cancel($scope.tasks[key].promise);
              $scope.getGatewayList(key, network);
            } else {
              console.log(res.error);
              if ($scope.tasks[key].errorCount < appConfig.MAX_TRIES) {
                $scope.tasks[key].errorCount++;
              } else {
                $interval.cancel($scope.tasks[key].promise);
                $scope.tasks[key].currentProgress = -1;
              }
            }
          }, function(err) {
            console.log(err);
            if ($scope.tasks[key].errorCount < appConfig.MAX_TRIES) {
              $scope.tasks[key].errorCount++;
            } else {
              $interval.cancel($scope.tasks[key].promise);
              $scope.tasks[key].currentProgress = -1;
            }
          });
        }, appConfig.INTERVAL_POLLING);
      }, function(err) {
        $scope.tasks[key].currentProgress = -1;
        console.log(err);
      });
    };

    $scope.updateExtraFields = function(device) {
      var tempArr = $scope.allModels[device.manufacturer];
      var base_num = device.manufacturer === 'Patton' ? 0 : 1;
      for (var i = 0; i < tempArr.length; i++) {
        if (tempArr[i].id === device.model) {
          // add isdn trunk fields
          device.trunks_isdn = [];
          for (var k = 0; k < tempArr[i].n_isdn_trunks; k++) {
            device.trunks_isdn.push({
              name: k + base_num,
              type: 'pp'
            });
          }
          // add pri trunk fields
          device.trunks_pri = [];
          for (var k = 0; k < tempArr[i].n_pri_trunks; k++) {
            device.trunks_pri.push({
              name: k + base_num
            });
          }
          // add fxo trunk fields
          device.trunks_fxo = [];
          for (var k = 0; k < tempArr[i].n_fxo_trunks; k++) {
            device.trunks_fxo.push({
              name: k + base_num,
              number: '',
            });
          }
          // add fxs ext fields
          device.users_fxs = [];
          for (var k = 0; k < tempArr[i].n_fxs_ext; k++) {
            device.users_fxs.push({
              linked_user: ''
            });
          }
        }
      }
      device.name = device.manufacturer + '-' + $scope.getModelDescription(device, true).description;
    };

    $scope.setNewGateway = function(network_key, network) {
      $scope.newGateway.network_key = network_key;
      $scope.newGateway.network = network.network;
      $scope.newGateway.ipv4_new = network.network.slice(0, -1);
      $scope.newGateway.gateway = network.gateway;
    };

    $scope.hideGatewayDialog = function() {
      $scope.newGateway = {};
      $('#newGwDialog').modal('hide');
    };

    $scope.saveConfig = function(device, isNew) {
      device.onSave = true;
      device.onSaveSuccess = false;
      device.onSaveError = false;
      device.onDeleteSuccess = false;
      if (isNew) {
        device.ipv4 = '';
      }
      DeviceService.saveGatewayConfig(device).then(function(res) {
        $scope.hideGatewayDialog();
        if (isNew) {
          device.id = res.data.id
          $scope.allDevices[device.network_key].push(device);
        }
        device.ipv4 = device.ipv4_new;
        device.isConfigured = true;
        // push configuration
        if (!isNew && device.isConnected) {
          $scope.pushConfig(device);
        } else {
          device.onSave = false;
          device.onDeleteSuccess = false;
        }
      }, function(err) {
        device.onSave = false;
        device.onSaveSuccess = false;
        device.onSaveError = true;
        device.onDeleteSuccess = false;
        console.log(err);
      });
    };

    $scope.pushConfig = function(device) {
      DeviceService.pushGatewayConfig({
        name: device.name,
        ipv4_green: '',
        netmask_green: ''
      }).then(function(res) {
        device.onSave = false;
        device.onSaveSuccess = true;
        device.onSaveError = false;
        device.onDeleteSuccess = false;
      }, function(err) {
        console.log(err);
        device.onSave = false;
        device.onSaveSuccess = false;
        device.onSaveError = true;
        device.onDeleteSuccess = false;
      });
    };

    $scope.downConfig = function(device) {
      DeviceService.downloadConfig(device.name).then(function(res) {
        var config = 'data:text/plain;charset=utf-8,' + res.data;
        var encodedUri = encodeURI(config);
        var link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', device.name + '.cfg');
        link.click();
      }, function(err) {
        console.log(err);
      });
    };

    $scope.deleteConfig = function(device) {
      device.onSave = true;
      DeviceService.deleteGatewayConfig(device.id).then(function(res) {
        device.onSave = false;
        device.onSaveSuccess = false;
        device.onSaveError = false;
        device.onDeleteSuccess = true;
        $scope.selectedDevice = {};
        $scope.getGatewayList(device.network_name, {
          netmask: device.netmask_green,
          ip: device.ipv4_green
        });
      }, function(err) {
        console.log(err);
        device.onSave = false;
        device.onSaveSuccess = false;
        device.onSaveError = false;
        device.onDeleteSuccess = false;
      });
    };

    $scope.getNetworkList();
    $scope.getGatewayModelList();
    $scope.getSipTrunks();

  });