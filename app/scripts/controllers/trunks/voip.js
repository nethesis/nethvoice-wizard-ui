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

    // test data to take from the server
    $scope.providers = [
      { provider: 'eutelia', description: 'Eutelia' },
      { provider: 'messagenet', description: 'MessageNet' },
      { provider: 'squillo', description: 'Squillo.it (NGI)' },
      { provider: 'skype', description: 'Skype Connect' },
      { provider: 'voipvoice', description: 'VoipVoice' },
      { provider: 'enjoip', description: 'Enjoip' },
      { provider: 'cheapnet', description: 'Cheapnet' }
    ];
    $scope.trunk = {
      provider: 'eutelia',
      codecs: ['alaw', 'ulaw'],
      force_codec: true
    };

    $scope.getVoipProviders = function() {
      // TrunkService.getVoipProviders
    };

    $scope.create = function() {
      // TrunkService.createTrunkVoip
      console.log($scope.trunk);
    };

  });