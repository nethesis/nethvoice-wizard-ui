'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProfileService
 * @description
 * # ProfileService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ProfileService', function ($q, RestService) {
    this.allProfiles = function () {
      return $q(function (resolve, reject) {
        RestService.get('/cti/profiles').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.getProfile = function (id) {
      return $q(function (resolve, reject) {
        RestService.get('/cti/profiles/' + id).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.allPermissions = function () {
      return $q(function (resolve, reject) {
        RestService.get('/cti/permissions').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.getUserProfile = function (id) {
      return $q(function (resolve, reject) {
        RestService.get('/cti/profiles/users/' + id).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.setUserProfile = function (id, obj) {
      return $q(function (resolve, reject) {
        RestService.post('/cti/profiles/users/' + id, obj).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.create = function (obj) {
      return $q(function (resolve, reject) {
        RestService.post('/cti/profiles', obj).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.update = function (id, obj) {
      return $q(function (resolve, reject) {
        RestService.post('/cti/profiles/' + id, obj).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.delete = function (id) {
      return $q(function (resolve, reject) {
        RestService.delete('/cti/profiles/' + id).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

  });
