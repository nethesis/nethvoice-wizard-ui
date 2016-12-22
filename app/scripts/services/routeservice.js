'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.RouteService
 * @description
 * # RouteService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('RouteService', function($q, RestService) {
    this.countIn = function() {
      return $q(function(resolve, reject) {
        RestService.get('/inboundroutes/count').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.countOut = function() {
      return $q(function(resolve, reject) {
        RestService.get('/outboundroutes/count').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    // Retrieve inbounds routes
    this.getInbounds = function() {
      return $q(function(resolve, reject) {
        RestService.get('/inboundroutes').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    // Retrieve outbounds routes
    this.getOutbounds = function() {
      return $q(function(resolve, reject) {
        RestService.get('/outboundroutes').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    // Retrieve default outbounds routes
    this.getDefaultOutbounds = function() {
      return $q(function(resolve, reject) {
        RestService.get('/outboundroutes/defaults').then(function(res) {
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