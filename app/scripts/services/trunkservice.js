'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.TrunkService
 * @description
 * # TrunkService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('TrunkService', function ($q, RestService) {

    this.updateGwList = function() {
      // todo...
      // return $q(function(resolve, reject) {
      //   // todo complete with correct rest api endpoint
      //   // to get the gateway list
      //   //
        // resolve();
      //   // RestService.get('/api_endpoint').then(function(res) {
      //   //   resolve(res);
      //   // }, function(err) {
      //   //   reject(err);
      //   // });
      // });
    };

    this.saveConfig = function() {
      // todo...
    };

    this.deleteGw = function() {
      // todo...
    };

    this.createTrunkVoip = function() {
      // todo...
    };

    this.getVoipProviders = function() {
      // todo...
    };

  });
