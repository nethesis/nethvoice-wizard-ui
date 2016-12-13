'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:TrunksVoipCtrl
 * @description
 * # TrunksVoipCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('TrunksVoipCtrl', function($scope, TrunkService) {

    $scope.providers = {};
    $scope.availableCodecs = ['alaw', 'ulaw'];

    $scope.trunk = {
      force_codec: true,
      codecs: ['alaw', 'ulaw']
    };

    $scope.getProvidersList = function() {
      TrunkService.getProviders().then(function(res) {
        $scope.providers = res;
      }, function(err) {
        console.log(err);
      });
    };

    $scope.initGraphics = function() {
      jQuery(".bootstrap-switch").bootstrapSwitch();
      $('#bootstrap-switch').on('switchChange.bootstrapSwitch', $scope.updateForceCodec);
      $('#bootstrap-switch').bootstrapSwitch('state', $scope.trunk.force_codec);
    };

    $scope.updateForceCodec = function(event, state) {
      $scope.trunk.force_codec = state;
    };

    $scope.initGraphics();
    $scope.getProvidersList();

  });