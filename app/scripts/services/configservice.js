'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ConfigService
 * @description
 * # ConfigService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ConfigService', function($q, RestService) {
    this.getConfig = function() {
      return $q(function(resolve, reject) {
        RestService.get('/configuration/mode').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.setConfig = function(mode) {
      return $q(function(resolve, reject) {
        RestService.post('/configuration/mode', {
          mode: mode
        }).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };
  });