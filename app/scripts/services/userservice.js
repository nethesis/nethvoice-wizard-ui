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
    this.count = function() {
      return $q(function(resolve, reject) {
        RestService.get('/users/count').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

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

    this.createMainExtension = function(obj) {
      return $q(function(resolve, reject) {
        RestService.post('/mainextensions', obj).then(function(res) {
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

    this.deletePhysicalExtension = function(ext) {
      return $q(function(resolve, reject) {
        RestService.delete('/physicalextensions/' + ext).then(function(res) {
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