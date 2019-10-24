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
        RestService.get('/models').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };
  });
