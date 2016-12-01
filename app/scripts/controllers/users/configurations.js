'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersConfigurationsCtrl
 * @description
 * # UsersConfigurationsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersConfigurationsCtrl', function($scope, UserService, DeviceService, UtilService) {
    $scope.users = {};
    $scope.selectedUser = {};
    $scope.devices = {};

    $scope.initGraphics = function() {
      jQuery(".bootstrap-switch").bootstrapSwitch();
    };

    $scope.getUserList = function(reload) {
      $scope.view.changeRoute = reload;
      UserService.list().then(function(res) {
        $scope.users = res.data;
        $scope.view.changeRoute = false;
        $scope.selectedUser = $scope.users[0];
        if ($scope.mode.isLegacy && UtilService.isEmpty($scope.users)) {
          $scope.wizard.nextState = false;
        }
      }, function(err) {
        console.log(err);
      });
    };

    $scope.getDeviceList = function(key) {
      DeviceService.phoneList().then(function(res) {
        $scope.devices = res.data;
        if (UtilService.isEmpty($scope.devices)) {
          $scope.wizard.nextState = false;
        }
      }, function(err) {
        console.log(err);
      });
    };

    $scope.selectUser = function(id) {
      $scope.selectedUser = $scope.users.filter(function(obj) {
        if (obj.id == id) {
          return obj;
        }
      })[0];
    }

    $scope.initGraphics();

    $scope.getUserList(true);
    $scope.getDeviceList();
  });