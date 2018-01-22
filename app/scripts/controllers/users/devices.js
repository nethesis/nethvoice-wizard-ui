'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersDevicesCtrl
 * @description
 * # UsersDevicesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersDevicesCtrl', function ($scope, $interval, ConfigService, DeviceService, UtilService) {
    $scope.allDevices = {};
    $scope.allModels = {};
    $scope.networks = {};
    $scope.networkLength = 0;
    $scope.tasks = {};
    $scope.scanned = false;

    $scope.orderByValue = function (value) {
      return value;
    };

    $scope.getPhoneModelList = function () {
      DeviceService.phoneModelList().then(function (res) {
        $scope.allModels = res.data;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getNetworkList = function () {
      $scope.view.changeRoute = true;
      ConfigService.getNetworks().then(function (res) {
        $scope.networks = res.data;
        for (var eth in res.data) {
          $scope.tasks[eth] = {};
          $scope.allDevices[eth] = {};
        }
        $scope.networkLength = Object.keys(res.data).length;
        $scope.view.changeRoute = false;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getPhoneList = function (key, network, callback) {
      DeviceService.phoneListByNetwork(network).then(function (res) {
        $scope.allDevices[key] = res.data;
        $scope.tasks[key].currentProgress = 100;
        $scope.scanned = true;
        callback(null);
      }, function (err) {
        if (err.status !== 404) {
          $scope.tasks[key].currentProgress = -1;
        } else {
          $scope.tasks[key].currentProgress = 100;
        }
        callback(err);
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
              $scope.getPhoneList(key, network, function (err) {
                if (err) {
                  console.log(err);
                }
              });
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

    $scope.setPhoneModel = function (device) {
      DeviceService.setPhoneModel({
        mac: device.mac,
        vendor: device.manufacturer,
        model: device.model
      }).then(function (res) {}, function (err) {
        console.log(err);
      });
    };

    $scope.getNetworkList();
    $scope.getPhoneModelList();
  });
