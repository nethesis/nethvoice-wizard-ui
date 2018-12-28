'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:AdminSettingsCtrl
 * @description
 * # AdminSettingsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('AdminSettingsCtrl', function ($scope, UserService, RestService, RestServiceCTI) {
    $scope.wizard.isEnd = false;
    $scope.view.changeRoute = false;

    $scope.create = function () {
      if ($scope.admin.password === $scope.admin.confirmPassword) {
        UserService.setPassword('admin', {
          password: $scope.admin.password
        }).then(function (res) {
          var hash = RestService.getHash('admin', $scope.admin.password);
          RestService.setAuthHeader('admin', hash);
          RestServiceCTI.setAuthHeader('admin', hash);
          $scope.onSaveSuccess = true;
          $scope.onSaveError = false;
          $scope.wizard.isEnd = true;
        }, function (err) {
          $scope.onSaveSuccess = false;
          $scope.onSaveError = true;
        });
      } else {
        $scope.onSaveSuccess = false;
        $scope.onSaveError = true;
      }
    };
  });
