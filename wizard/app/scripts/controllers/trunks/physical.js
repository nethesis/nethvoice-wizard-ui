'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:TrunksPhysicalCtrl
 * @description
 * # TrunksPhysicalCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('TrunksPhysicalCtrl', function ($scope, $location, $interval, UserService, TrunkService, ConfigService, UtilService, DeviceService) {

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
    $scope.scanned = false;
    $scope.users = [];

    $scope.getUserList = function () {
      UserService.list(false).then(function (res) {
        $scope.users = res.data;
        var index = 0;
        for (var u in $scope.users) {
          if ($scope.users[u].default_extension !== 'none') {
            index = u;
            break;
          } else {
            continue;
          }
        }
      }, function (err) {
        console.log(err);
      });
    };

    $scope.selectDevice = function (device, network, networkName) {
      device.network_name = networkName
      if (device.isConnected) {
        device.ipv4_new = device.ipv4;
      } else {
        device.ipv4 = device.ipv4_new;
      }
      $scope.selectedDevice = device;
      if (!device.isConfigured) {
        $scope.selectedDevice.netmask_green = network.netmask;
        $scope.selectedDevice.gateway = network.gateway;
        $scope.selectedDevice.ipv4_green = network.ip;
      }
    };

    $scope.close = function (device) {
      device.onSave = false;
      device.onSaveSuccess = false;
      device.onError = false;
      device.onDeleteSuccess = false;
      device.onPushSuccess = false;
    };

    $scope.getModelDescription = function (device) {
      if (device && device.manufacturer && device.model) {
        var obj = $scope.allModels[device.manufacturer].filter(function (obj) {
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

    $scope.getGatewayModelList = function () {
      DeviceService.gatewayModelList().then(function (res) {
        $scope.allModels = res.data;
        $scope.allVendors = Object.keys($scope.allModels);
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getNetworkList = function (reload) {
      $scope.view.changeRoute = reload;
      ConfigService.getNetworks().then(function (res) {
        $scope.networks = res.data;
        for (var eth in res.data) {
          $scope.tasks[eth] = {};
          $scope.allDevices[eth] = [];
        }
        $scope.networkLength = Object.keys(res.data).length;
        $scope.view.changeRoute = false;
      }, function (err) {
        console.log(err);
        $scope.view.changeRoute = false;
      });
    };

    $scope.getGatewayList = function (key, network) {
      DeviceService.gatewayListByNetwork(network).then(function (res) {
        $scope.allDevices[key] = res.data;
        $scope.tasks[key].currentProgress = 100;
        $scope.onSave = false;
        $scope.scanned = true;
      }, function (err) {
        console.log(err);
        $scope.tasks[key].currentProgress = -1;
      });
    };

    $scope.startScan = function (key, network) {
      if ($scope.tasks[key].currentProgress > 0 && $scope.tasks[key].currentProgress < 100) {
        return true;
      }
      $scope.tasks[key].startScan = true;
      $scope.tasks[key].currentProgress = Math.floor((Math.random() * 50) + 10);
      DeviceService.startScan(network).then(function (res) {
        $scope.tasks[key].promise = $interval(function () {
          UtilService.taskStatus(res.data.result).then(function (res) {
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
          }, function (err) {
            console.log(err);
            if ($scope.tasks[key].errorCount < appConfig.MAX_TRIES) {
              $scope.tasks[key].errorCount++;
            } else {
              $interval.cancel($scope.tasks[key].promise);
              $scope.tasks[key].currentProgress = -1;
            }
          });
        }, appConfig.INTERVAL_POLLING);
      }, function (err) {
        $scope.tasks[key].currentProgress = -1;
        console.log(err);
      });
    };

    $scope.updateExtraFields = function (device) {
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
          device.trunks_fxs = [];
          for (var k = 0; k < tempArr[i].n_fxs_ext; k++) {
            device.trunks_fxs.push({
              name: k + base_num,
              linked_extension: ''
            });
          }
        }
      }
      device.name = device.manufacturer + '-' + $scope.getModelDescription(device, true).description;
    };

    $scope.setNewGateway = function (network_key, network) {
      $scope.newGateway.network_key = network_key;
      $scope.newGateway.network = network.network;
      $scope.newGateway.ipv4_new = network.network.slice(0, -1);
      $scope.newGateway.ipv4_green = network.ip;
      $scope.newGateway.gateway = network.gateway;
      $scope.newGateway.netmask_green = network.netmask;
    };

    $scope.hideGatewayDialog = function () {
      $scope.newGateway = {};
      $('#newGwDialog').modal('hide');
    };

    $scope.saveConfig = function (device, isNew) {
      device.onSave = true;
      device.onSaveSuccess = false;
      device.onError = false;
      device.onDeleteSuccess = false;
      device.onPushSuccess = false;
      if (isNew) {
        device.ipv4 = '';
      }
      DeviceService.saveGatewayConfig(device).then(function (res) {
        $scope.hideGatewayDialog();
        device.id = res.data.id
        if (isNew) {
          $scope.allDevices[device.network_key].push(device);
        }
        device.ipv4 = device.ipv4_new;
        device.isConfigured = true;
        device.onSave = false;
        if (!isNew) {
          device.onSaveSuccess = true;
        }
        device.onError = false;
        device.onDeleteSuccess = false;
        device.onPushSuccess = false;
        //trunks
        TrunkService.count().then(function (res) {
          $scope.menuCount.trunks = res.data;
        }, function (err) {
          console.log(err);
        });
      }, function (err) {
        device.onSave = false;
        device.onSaveSuccess = false;
        device.onError = true;
        device.onDeleteSuccess = false;
        device.onPushSuccess = false;
        console.log(err);
      });
    };

    $scope.pushConfig = function (device) {
      device.onSave = true;
      DeviceService.pushGatewayConfig({
        name: device.name,
        ipv4_green: '',
        netmask_green: ''
      }).then(function (res) {
        device.onSave = false;
        device.onSaveSuccess = false;
        device.onError = false;
        device.onDeleteSuccess = false;
        device.onPushSuccess = true;
      }, function (err) {
        console.log(err);
        device.onSave = false;
        device.onSaveSuccess = false;
        device.onError = true;
        device.onDeleteSuccess = false;
        device.onPushSuccess = false;
      });
    };

    $scope.downConfig = function (device) {
      device.onSave = true;
      DeviceService.downloadConfig(device.name).then(function (res) {
        var config = 'data:text/plain;charset=utf-8,' + res.data;
        var encodedUri = encodeURI(config);
        var link = document.createElement('a');
        link.setAttribute('href', encodedUri);
        link.setAttribute('download', device.name + '.cfg');
        link.click();
        device.onSave = false;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.deleteConfig = function (device) {
      device.onSave = true;
      DeviceService.deleteGatewayConfig(device.id).then(function (res) {
        device.onSave = false;
        device.onSaveSuccess = false;
        device.onError = false;
        device.onDeleteSuccess = true;
        device.onPushSuccess = false;
        $scope.selectedDevice = {};
        $scope.getGatewayList(device.network_name, {
          netmask: device.netmask_green,
          ip: device.ipv4_green
        });
        //trunks
        TrunkService.count().then(function (res) {
          $scope.menuCount.trunks = res.data;
        }, function (err) {
          console.log(err);
        });
      }, function (err) {
        console.log(err);
        device.onSave = false;
        device.onSaveSuccess = false;
        device.onError = true;
        device.onDeleteSuccess = false;
        device.onPushSuccess = false;
      });
    };

    $scope.getNetworkList(true);
    $scope.getGatewayModelList();
    $scope.getUserList();

  });
