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
    $scope.allModels = {};
    $scope.networks = {};
    $scope.networkLength = 0;
    $scope.tasks = {};
    $scope.trunks = {};
    $scope.selectedDevice = {};

    $scope.selectDevice = function(device, network) {
      device.gateway = network.gateway;
      $scope.selectedDevice = device;
    }

    $scope.getModelDescription = function(device) {
      var obj = $scope.allModels[device.manufacturer].filter(function(obj) {
        if (obj.id == device.model) {
          return obj;
        }
      })[0];
      return obj && obj.model && obj.description ? {
        description: obj.description,
        model: obj.model
      } : '';
    };

    $scope.getGatewayModelList = function() {
      DeviceService.gatewayModelList().then(function(res) {
        $scope.allModels = res.data;
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


    $scope.deleteGw = function() {
      for (var i = 0; i < $scope.gateways.length; i++) {
        if ($scope.gateways[i].mac === $scope.currentGw.mac) {
          $scope.gateways.splice(i, 1);
        }
      }
      $scope.searchGw();
      // TrunkService.deleteGw().then(function(res) {
      // }, function(err) {
      //   if (err.status !== 200) {
      //     $scope.login.showError = true;
      //     $scope.login.isLogged = false;
      //     $('#loginTpl').show();
      //     $location.path('/login');
      //   }
      //   console.log(err);
      // });
    };

    $scope.updateExtraFields = function() {
      var tempArr = $scope.allModels[$scope.selectedDevice.manufacturer];
      var startedNumber = appConfig.TRUNKS_STARTED_NUM;
      for (var i = 0; i < tempArr.length; i++) {
        if (tempArr[i].model === $scope.selectedDevice.model) {
          if ($scope.sipTrunks.length > 0) {
            startedNumber = parseInt($scope.sipTrunks[$scope.sipTrunks.length - 1]) + 1;
          }
          // add isdn trunk fields
          $scope.selectedDevice.trunks_isdn = [];
          for (var k = 0; k < tempArr[i].n_isdn_trunks; k++) {
            $scope.selectedDevice.trunks_isdn.push({
              name: startedNumber + k,
              type: 'pp'
            });
          }
          // add pri trunk fields
          $scope.selectedDevice.trunks_pri = [];
          for (var k = 0; k < tempArr[i].n_pri_trunks; k++) {
            $scope.selectedDevice.trunks_pri.push({
              linked_trunk: startedNumber + k
            });
          }
          // add fxo trunk fields
          $scope.selectedDevice.trunks_fxo = [];
          for (var k = 0; k < tempArr[i].n_fxo_trunks; k++) {
            $scope.selectedDevice.trunks_fxo.push({
              number: '',
              linked_trunk: startedNumber + k
            });
          }
          // add fxs ext fields
          $scope.selectedDevice.extens_fxs = [];
          for (var k = 0; k < tempArr[i].n_fxs_ext; k++) {
            $scope.selectedDevice.extens_fxs.push({
              linked_ext: ''
            });
          }
        }
      }
    };

    $scope.updateGwList = function() {
      TrunkService.updateGwList().then(function(res) {
        // console.log(res);
      }, function(err) {
        if (err.status !== 200) {
          // $scope.login.showError = true;
          // $scope.login.isLogged = false;
          // $('#loginTpl').show();
          // $location.path('/login');
        }
        console.log(err);
      });

    };


    $scope.showNewGwDialog = function() {
      $('#newGwDialog').modal('show');
    };

    $scope.hideNewGwDialog = function() {
      $('#newGwDialog').modal('hide');
    };

    $scope.addNewGw = function() {
      var newGw = {
        ip: $scope.newGw.ip,
        mac: $scope.newGw.mac,
        model: $scope.newGw.model,
        vendor: $scope.newGw.vendor
      };
      newGw.trunks_fxo = [];
      for (var i = 0; i < $scope.newGw.model.n_fxo_trunks; i++) {
        newGw.trunks_fxo.push({
          number: '',
          linked_trunk: parseInt($scope.sipTrunks[$scope.sipTrunks.length - 1]) + i
        });
      }
      newGw.trunks_pri = [];
      for (var i = 0; i < $scope.newGw.model.n_pri_trunks; i++) {
        newGw.trunks_pri.push({
          linked_trunk: parseInt($scope.sipTrunks[$scope.sipTrunks.length - 1]) + i
        });
      }
      newGw.trunks_isdn = [];
      for (var i = 0; i < $scope.newGw.model.n_isdn_trunks; i++) {
        newGw.trunks_isdn.push({
          name: parseInt($scope.sipTrunks[$scope.sipTrunks.length - 1]) + i,
          type: 'pmp'
        });
      }
      newGw.extens_fxs = [];
      for (var i = 0; i < $scope.newGw.model.n_fxs_ext; i++) {
        newGw.extens_fxs.push({
          linked_ext: ''
        });
      }
      $scope.gateways.push(newGw);
      $scope.newGw = undefined;
      this.hideNewGwDialog();
    };

    $scope.saveConfig = function() {
      // todo....
      $scope.props.saving[$scope.currentGw.mac] = true;
      setTimeout(function() {
        $scope.props.saving[$scope.currentGw.mac] = false;
        $scope.$apply();
      }, 1000);
    };

    $scope.getNetworkList();
    // $scope.getGatewayList('', {
    //   ip: '192.168.5.102',
    //   netmask: '255.255.255.0'
    // });
    $scope.getGatewayModelList();
    $scope.getSipTrunks();

  });