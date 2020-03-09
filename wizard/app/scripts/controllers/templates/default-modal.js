'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DefaultModalUICtrl
 * @description
 * # DefaultModalUICtrl
 * Controller of the nethvoiceWizardUiApp
 */

angular.module('nethvoiceWizardUiApp')
  .controller('DefaultModalUICtrl', function ($scope, $interval, $location, ModelService, PhoneService) {

    // $scope.defaultSettings
    
    $scope.globalsUi = $scope.buildDefaultSettingsUI()

  })
