'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.DashboardService
 * @description
 * # DashboardService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('DashboardService', function ($q, RestServiceCTI) {
    this.getUsers = function () {
      return $q(function (resolve, reject) {
        RestServiceCTI.get('/user/endpoints/all').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };
    this.getExtensions = function () {
      return $q(function (resolve, reject) {
        RestServiceCTI.get('/astproxy/extensions').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };
  });
