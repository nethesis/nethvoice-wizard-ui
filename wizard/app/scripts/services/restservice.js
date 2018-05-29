'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.RestService
 * @description
 * # RestService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('RestService', function($q, $http, LocalStorageService) {

    this.setAuthHeader = function(user, hash) {
      $http.defaults.headers.common.User = user;
      $http.defaults.headers.common.Secretkey = hash;
      LocalStorageService.set('secretkey', { user: user, hash: hash.toString() });
    };

    this.getHash = function(username, password) {
      var pwdHash = CryptoJS.SHA1(password);
      var hash = CryptoJS.SHA1(username + pwdHash + customConfig.SECRET_KEY);
      return hash;
    };

    this.get = function(endpoint) {
      return $q(function(resolve, reject) {
        $http.get(customConfig.BASE_API_URL + endpoint).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(response) {
          reject(response);
        });
      });
    };

    this.post = function(endpoint, data) {
      return $q(function(resolve, reject) {
        $http.post(customConfig.BASE_API_URL + endpoint, data).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(response) {
          reject(response);
        });
      });
    };

    this.put = function(endpoint, data) {
      return $q(function(resolve, reject) {
        $http.put(customConfig.BASE_API_URL + endpoint, data).then(function successCallback(response) {
          resolve(response);
        }, function errorCallback(response) {
          reject(response);
        });
      });
    };

    this.delete = function(endpoint, data) {
      return $q(function(resolve, reject) {
        if (data) {
          $http.delete(customConfig.BASE_API_URL + endpoint, { data: data }).then(function successCallback(response) {
            resolve(response);
          }, function errorCallback(response) {
            reject(response);
          });
        } else {
          $http.delete(customConfig.BASE_API_URL + endpoint).then(function successCallback(response) {
            resolve(response);
          }, function errorCallback(response) {
            reject(response);
          });
        }
      });
    };
  });