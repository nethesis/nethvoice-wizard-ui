'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersDevicesCtrl
 * @description
 * # UsersDevicesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersDevicesCtrl', function($scope, ConfigService, DeviceService, UtilService) {
    $scope.devices = {};
    $scope.networks = {};
    $scope.networkLength = 0;
    $scope.tasks = {};

    $scope.getNetworkList = function() {
      $scope.view.changeRoute = true;
      ConfigService.getNetworks().then(function(res) {
        $scope.networks = res.data;
        for (var eth in res.data) {
          $scope.tasks[eth] = {};
        }
        $scope.networkLength = Object.keys(res.data).length;
        $scope.view.changeRoute = false;
      }, function(err) {
        console.log(err);
      });
    };

    $scope.getDeviceList = function(key) {
      DeviceService.list().then(function(res) {
        $scope.devices = res.data;
        $scope.tasks[key].currentProgress = 100;
        if (UtilService.isEmpty($scope.devices)) {
          $scope.wizard.nextState = false;
        }
      }, function(err) {
        console.log(err);
        $scope.tasks[key].currentProgress = -1;
      });
    };

    $scope.startScan = function(key, network) {
      $scope.tasks[key].startScan = true;
      DeviceService.startScan(network).then(function(res) {
        $scope.tasks[key].promise = $interval(function() {
          UtilService.taskStatus(res.data.result).then(function(res) {
            if (res.data.progress < 100) {
              $scope.tasks[key].errorCount = 0;
              $scope.tasks[key].currentProgress = res.data.progress;
            } else if (res.data.progress == 100) {
              $scope.tasks[key].errorCount = 0;
              $interval.cancel($scope.tasks[key].promise);
              $scope.getDeviceList(key);
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
        }, 5000);
      }, function(err) {
        // $scope.tasks[key].currentProgress = 0;
        // var a = setInterval(function() {
        //   $scope.tasks[key].currentProgress++;
        //   $scope.$apply();
        //   if ($scope.tasks[key].currentProgress == 100) {
        //     clearInterval(a);
        //     $scope.getDeviceList();
        //   }
        // }, 30);
        $scope.tasks[key].currentProgress = -1;
        console.log(err);
      });
    };

    $scope.getNetworkList();
  });