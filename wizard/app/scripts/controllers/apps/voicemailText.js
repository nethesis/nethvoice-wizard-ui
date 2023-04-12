"use strict";

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:AppsVoicemailTextCtrl
 * @description
 * # AppsVoicemailTextCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular
  .module("nethvoiceWizardUiApp")
  .controller("AppsVoicemailTextCtrl", function ($rootScope, $scope) {
    $scope.voicemailTextEnabled = false;
    $scope.toggleVoicemailText = function () {
      $scope.voicemailTextEnabled == !$scope.voicemailTextEnabled;
    };
  });
