'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.UserService
 * @description
 * # UserService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('UserService', function($q, RestService) {
    this.list = function() {
      return $q(function(resolve, reject) {
        RestService.get('/users').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.create = function(obj) {
      return $q(function(resolve, reject) {
        RestService.post('/users', obj).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.setPassword = function(username, obj) {
      return $q(function(resolve, reject) {
        RestService.post('/users/' + username + '/password', obj).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.createVirtualExtension = function(obj) {
      return $q(function(resolve, reject) {
        RestService.post('/virtualextensions', obj).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };
  });