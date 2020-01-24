'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesCtrl
 * @description
 * # DevicesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesCtrl', function ($scope, $location) {

    console.log("DEVICES");
    $scope.view.changeRoute = false

    $scope.nextStep = function () {
      $location.path("/devices/inventory")  
    }

    $scope.prevStep = function () {
      $location.path("/users/profiles")
    }

  });
