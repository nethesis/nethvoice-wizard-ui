'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ModelService
 * @description
 * # ModelService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ModelService', function ($q, RestService) {

    // Retrieve the complete (phone) models collection
    this.getModels = function () {
      return $q(function (resolve, reject) {
        RestService.tget('/tancredi/api/v1/models').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.createModel = function (model) {
      return $q(function (resolve, reject) {
        RestService.tpost('/tancredi/api/v1/models', model).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };
  });
