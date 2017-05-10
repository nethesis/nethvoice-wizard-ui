'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ApplicationService
 * @description
 * # ApplicationService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ApplicationService', function ($q, $http, RestService, RestServiceCTI) {
    this.allSources = function () {
      return $q(function (resolve, reject) {
        RestService.get('/dbconn').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.allCards = function () {
      return $q(function (resolve, reject) {
        RestService.get('/applications/customer_cards').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.allDBTypes = function () {
      return $q(function (resolve, reject) {
        RestService.get('/dbconn/type').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.checkConnectionSource = function (obj) {
      return $q(function (resolve, reject) {
        RestServiceCTI.post('/dbconn/test', obj).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.createSource = function (obj) {
      return $q(function (resolve, reject) {
        RestService.post('/dbconn', obj).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.deleteSource = function (id) {
      return $q(function (resolve, reject) {
        RestService.delete('/dbconn/' + id).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.createCard = function (obj) {
      return $q(function (resolve, reject) {
        RestService.post('/dbconn', obj).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.deleteDelete = function (id) {
      return $q(function (resolve, reject) {
        RestService.delete('/dbconn/' + id).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };
  });
