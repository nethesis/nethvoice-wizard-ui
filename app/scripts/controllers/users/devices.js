'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersDevicesCtrl
 * @description
 * # UsersDevicesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersDevicesCtrl', function($scope, DeviceService, UtilService) {
    $scope.devices = {};

    $scope.getDeviceList = function(reload) {
      $scope.view.changeRoute = reload;
      DeviceService.list().then(function(res) {
        $scope.devices = res.data;
        $scope.view.changeRoute = false;
        if (UtilService.isEmpty($scope.devices)) {
          $scope.wizard.nextState = false;
        }
      }, function(err) {
        console.log(err);
      });
    };
  });