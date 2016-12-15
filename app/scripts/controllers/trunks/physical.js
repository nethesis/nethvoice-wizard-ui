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

    $scope.selectDevice = function(device, network) {
      device.gateway = network.gateway;
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
      var startedNumber = appConfig.TRUNKS_STARTED_NUM;
      for (var i = 0; i < tempArr.length; i++) {
        if (tempArr[i].id === device.model) {
          if ($scope.sipTrunks.length > 0) {
            startedNumber = (parseInt($scope.sipTrunks[$scope.sipTrunks.length - 1]) || appConfig.TRUNKS_STARTED_NUM) + 1;
          }
          // add isdn trunk fields
          device.trunks_isdn = [];
          for (var k = 0; k < tempArr[i].n_isdn_trunks; k++) {
            device.trunks_isdn.push({
              name: startedNumber + k,
              type: 'pp'
            });
          }
          // add pri trunk fields
          device.trunks_pri = [];
          for (var k = 0; k < tempArr[i].n_pri_trunks; k++) {
            device.trunks_pri.push({
              linked_trunk: startedNumber + k
            });
          }
          // add fxo trunk fields
          device.trunks_fxo = [];
          for (var k = 0; k < tempArr[i].n_fxo_trunks; k++) {
            device.trunks_fxo.push({
              number: '',
              linked_trunk: startedNumber + k
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
      $scope.newGateway.ipv4 = network.network.slice(0, -1);
      $scope.newGateway.gateway = network.gateway;
    };

    $scope.hideGatewayDialog = function() {
      $scope.newGateway = {};
      $('#newGwDialog').modal('hide');
    };

    $scope.saveConfig = function(device, isNew) {
      $scope.onSave = true;
      if (isNew) {
        device.ipv4_new = '';
      }
      DeviceService.saveGatewayConfig(device).then(function(res) {
        $scope.onSave = false;
        $scope.hideGatewayDialog();
        if (isNew) {
          $scope.allDevices[device.network_key].push(device);
        }
        device.isConfigured = true;
      }, function(err) {
        $scope.onSave = false;
        console.log(err);
      });
    };

    $scope.getNetworkList();
    $scope.getGatewayModelList();
    $scope.getSipTrunks();

  });