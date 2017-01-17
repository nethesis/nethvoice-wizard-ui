'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersExtensionsCtrl
 * @description
 * # UsersExtensionsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersExtensionsCtrl', function($scope, UserService, UtilService) {
    $scope.users = {};
    $scope.onSave = false;

    $scope.getUserList = function(reload) {
      $scope.view.changeRoute = reload;
      UserService.list().then(function(res) {
        $scope.users = res.data;
        $scope.view.changeRoute = false;
        if (UtilService.isEmpty($scope.users)) {
          $scope.wizard.nextState = false;
        }
      }, function(err) {
        $scope.users = {}
        $scope.view.changeRoute = false;
        console.log(err);
      });
    };

    $scope.createUser = function(user) {
      $scope.onSave = true;
      UserService.create(user).then(function(res) {
        UserService.setPassword(user.username, {
          password: UtilService.randomPassword(8)
        }).then(function(res) {
          $scope.onSave = false;
          $('#createUser').modal('hide');
          $scope.newUser = {};
          $scope.getUserList(false);
        }, function(err) {
          $scope.onSave = false;
          console.log(err);
        });
      }, function(err) {
        $scope.onSave = false;
        console.log(err);
      });
    };

    $scope.setMainExtension = function(user) {
      user.isInAction = true;
      UserService.createMainExtension({
        username: user.username,
        extension: user.default_extension !== 'none' ? user.default_extension : user.temp_ext
      }).then(function(res) {
        user.isInAction = false;
        $scope.getUserList(false);
      }, function(err) {
        user.isInAction = false;
        console.log(err);
      });
    }

    $scope.getUserList(true);
  });