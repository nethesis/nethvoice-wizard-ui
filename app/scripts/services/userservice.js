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

    this.createPhysicalExtension = function(obj) {
      return $q(function(resolve, reject) {
        RestService.post('/physicalextensions', obj).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.deletePhysicalExtension = function(obj) {
      return $q(function(resolve, reject) {
        RestService.post('/physicalextensions/unlink', obj).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.getVoiceMail = function(extension) {
      return $q(function(resolve, reject) {
        RestService.get('/voicemails/' + extension).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.createVoiceMail = function(obj) {
      return $q(function(resolve, reject) {
        RestService.post('/voicemails', obj).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.getMobileExtension = function(username) {
      return $q(function(resolve, reject) {
        RestService.get('/mobiles/' + username).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.createMobileExtension = function(obj) {
      return $q(function(resolve, reject) {
        RestService.post('/mobiles', obj).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

  });