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

    /**
     * HTTP get request to retrieve sip trunks.
     *
     * @method getSipTrunks
     */
    this.getSipTrunks = function() {
      return $q(function(resolve, reject) {
        RestService.get('/trunks/sip').then(function(res) {
          resolve(res.data);
        }, function(err) {
          reject(err);
        });
      });
    };

    /**
     * HTTP get request to retrieve providers.
     *
     * @method getProviders
     */
    this.getProviders = function() {
      return $q(function(resolve, reject) {
        RestService.get('/providers').then(function(res) {
          resolve(res.data);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.saveConfig = function() {
      // todo...
    };

    this.createTrunkVoip = function() {
      // todo...
    };

    this.getVoipProviders = function() {
      // todo...
    };
  });
