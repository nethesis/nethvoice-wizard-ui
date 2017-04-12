'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:TrunksVoipCtrl
 * @description
 * # TrunksVoipCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('TrunksVoipCtrl', function ($scope, TrunkService, CodecService) {

    $scope.providers = {};
    $scope.onSaveSuccess = false;
    $scope.onSaveError = false;

    $scope.trunk = {
      forceCodec: true,
      codecs: ['alaw', 'ulaw']
    };

    $scope.retrieveCodecs = function () {
      return CodecService.getVoipCodecs();
    }

    $scope.getProvidersList = function () {
      TrunkService.getProviders().then(function (res) {
        $scope.providers = res;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.create = function () {
      TrunkService.createTrunkVoip($scope.trunk).then(function (res) {
        $scope.trunk = {
          forceCodec: true,
          codecs: ['alaw', 'ulaw']
        };
        $scope.onSaveSuccess = true;
        $scope.onSaveError = false;
        $scope.ctiTrunksConfig();
      }, function (err) {
        console.log(err);
        $scope.onSaveSuccess = false;
        $scope.onSaveError = true;
      });
    };

    $scope.getProvidersList();

    // Set default codecs
    $scope.retrieveCodecs().then(function (res) {
      $scope.availableCodecs = res.map(function (a) {
        return a.codec;
      });

      $scope.trunk.codecs = res.map(function (a) {
        if (a.enabled)
          return a.codec;
      });
    }, function (err) {
      console.log(err);
    });

    $scope.ctiTrunksConfig = function () {
      TrunkService.ctiConfigurationTrunks().then(function (res) {
        console.log(res);
      }, function (err) {
        console.log(err);

      });
    };

  });
