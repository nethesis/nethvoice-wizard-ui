'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:MigrationCtrl
 * @description
 * # MigrationCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('MigrationCtrl', function ($scope, $location) {
    $scope.view.changeRoute = false;
    $scope.startUpgrade = function () {
      $location.path('/migration/users');
    }
  });
