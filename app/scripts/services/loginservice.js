'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.LoginService
 * @description
 * # LoginService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('LoginService', function($q, LocalStorageService, RestService) {

    this.setCredentials = function(username, password) {
      LocalStorageService.set('credentials', { username: username, password: password });
    };

    this.removeCredentials = function() {
      LocalStorageService.set('credentials', null);
    };

    this.getCredentials = function() {
      return LocalStorageService.get('credentials');
    };

    this.login = function(username, password) {
      return $q(function(resolve, reject) {
        var hash = RestService.getHash(username, password);
        RestService.setAuthHeader(username, hash);
        RestService.get('/login').then(function(res) {
          res.hash = hash;
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.logout = function(token) {
      return $q(function(resolve, reject) {
        User.logout({
          access_token: token,
        }, function(data) {
          $securityService.reset();
          resolve(data);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.getCurrentLoggeduser = function() {
      return LocalStorageService.get('currentLoggedUser');
    };
  });
