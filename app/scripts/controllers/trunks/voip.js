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

    // current data trunk
    $scope.trunk = {
      provider: '',
      force_codec: true,
      codec: ['alaw', 'ulaw']
    };
    $scope.providers = [];

    $scope.init = function() {
      $scope.initGraphics();
      TrunkService.getProviders().then(function(res) {
        $scope.providers = res;
        $scope.trunk.provider = $scope.providers[0].provider;
      }, function(err) {
        if (err.status !== 200) {
          $scope.error.show = true;
          $scope.error.msg = 'retrieving providers';
        }
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

    $scope.create = function() {
      // TrunkService.createTrunkVoip
      console.log($scope.trunk);
    };

  });
