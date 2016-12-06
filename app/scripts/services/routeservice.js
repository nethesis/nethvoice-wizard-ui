'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.RouteService
 * @description
 * # RouteService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('RouteService', function ($q, RestService) {
    // Retrieve inbounds routes
    this.inbounds = function() {
      return $q(function(resolve, reject) {
        RestService.get('/inboundroutes').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    // Delete inbounds routes
    this.deleteInboundRoute = function(extension, cid) {
      return $q(function(resolve, reject) {
        RestService.delete('/inboundroutes/' + extension + '-' + cid).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

  });
