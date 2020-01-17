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
        RestService.get('/configuration/userprovider').then(function(res) {
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

    this.getNetworks = function() {
      return $q(function(resolve, reject) {
        RestService.get('/configuration/networks').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.getWizard = function() {
      return $q(function(resolve, reject) {
        RestService.get('/configuration/wizard').then(function(res) {
          resolve(res.data);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.setWizard = function(wizard) {
      return $q(function(resolve, reject) {
        RestService.post('/configuration/wizard', wizard).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.setPBXLang = function(lang) {
      return $q(function(resolve, reject) {
        RestService.post('/settings/language', lang).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.setDefaultPBXLang = function(lang) {
      return $q(function(resolve, reject) {
        RestService.post('/settings/defaultlanguage', lang).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.getProvisioningInfo = function () {
      return $q(function (resolve, reject) {
        RestService.get('/provisioning/engine').then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        });
      });
    }

  });