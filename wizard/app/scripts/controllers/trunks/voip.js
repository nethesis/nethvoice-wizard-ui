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

    $scope.getProvidersList = function (reload) {
      $scope.view.changeRoute = reload;
      TrunkService.getProviders().then(function (res) {
        $scope.providers = res;
        $scope.view.changeRoute = false;
      }, function (err) {
        console.log(err);
        $scope.view.changeRoute = false;
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
        //trunks
        TrunkService.count().then(function (res) {
          $scope.menuCount.trunks = res.data;
        }, function (err) {
          console.log(err);
        });
      }, function (err) {
        console.log(err);
        $scope.onSaveSuccess = false;
        $scope.onSaveError = true;
      });
    };

    $scope.getProvidersList(true);

    // Set default codecs
    $scope.retrieveCodecs().then(function (res) {
      $scope.availableCodecs = res.map(function (a) {
        return a.codec;
      });

      for (var c in res) {
        if (res[c].enabled) {
          $scope.trunk.codecs = [res[c].codec];
        }
      }
    }, function (err) {
      console.log(err);
    });

  });
