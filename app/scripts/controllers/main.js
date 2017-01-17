'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('MainCtrl', function($scope, $location, $http) {
    if ($scope.login.isLogged && $scope.wizard.isWizard) {
      $location.path('/users');
    }
  });