'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersExtensionsCtrl
 * @description
 * # UsersExtensionsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersExtensionsCtrl', function ($scope, $location, ConfigService, UserService, UtilService) {
    $scope.users = {};
    $scope.onSave = false;
    $scope.lockOnList = false;

    $scope.availableUsersFilters = ['all', 'configured', 'unconfigured'];
    $scope.selectedUsersFilter = $scope.availableUsersFilters[0];

    ConfigService.getConfig().then(function (res) {
      switch (res.data.result) {
        case 'unknown':
          $scope.view.changeRoute = false;
          $scope.showConfigSwitch = true;
          $location.path('/users');
          break;
        case 'legacy':
          $scope.mode.isLegacy = true;
          break;
        case 'uc':
          $scope.mode.isLegacy = false;
          break;
      }
    }, function (err) {
      console.log(err);
    });

    $scope.getUserList = function (reload) {
      $scope.view.changeRoute = reload;
      if (!$scope.lockOnList) {
        $scope.lockOnList = true;
        UserService.list(true).then(function (res) {
          $scope.users = res.data;
          $scope.view.changeRoute = false;
          if (UtilService.isEmpty($scope.users)) {
            $scope.wizard.nextState = false;
          } else {
            $scope.wizard.nextState = true;
          }
          $scope.lockOnList = false;
        }, function (err) {
          $scope.users = {}
          $scope.view.changeRoute = false;
          $scope.lockOnList = false;
          console.log(err);
        });
      }
    };

    $scope.createUser = function (user) {
      $scope.onSave = true;
      UserService.create(user).then(function (res) {
        UserService.setPassword(user.username, {
          password: UtilService.randomPassword(8)
        }).then(function (res) {
          $scope.onSave = false;
          $('#createUser').modal('hide');
          $scope.newUser = {};
          $scope.getUserList(false);
        }, function (err) {
          $scope.onSave = false;
          console.log(err);
        });
      }, function (err) {
        $scope.onSave = false;
        console.log(err);
      });
    };

    $scope.setMainExtension = function (user) {
      user.isInAction = true;
      UserService.createMainExtension({
        username: user.username,
        extension: user.default_extension !== 'none' ? user.default_extension : user.temp_ext
      }).then(function (res) {
        user.isInAction = false;
        $scope.getUserList(false);
      }, function (err) {
        user.isInAction = false;
        console.log(err);
      });
    }

    $scope.getUserList(true);
  });
