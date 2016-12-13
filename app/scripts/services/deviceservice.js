'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.DeviceService
 * @description
 * # DeviceService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('DeviceService', function($q, RestService, UtilService) {
    this.phoneList = function() {
      return $q(function(resolve, reject) {
        RestService.get('/devices/phones/list').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.phoneListByNetwork = function(network) {
      return $q(function(resolve, reject) {
        RestService.get('/devices/phones/list/' + UtilService.hashNetwork(network)).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.gatewayList = function() {
      return $q(function(resolve, reject) {
        RestService.get('/devices/gateways/list').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.gatewayListByNetwork = function(network) {
      return $q(function(resolve, reject) {
        RestService.get('/devices/gateways/list/' + UtilService.hashNetwork(network)).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.phoneModelList = function() {
      return $q(function(resolve, reject) {
        RestService.get('/devices/phones/manufacturers').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.gatewayModelList = function() {
      return $q(function(resolve, reject) {
        RestService.get('/devices/gateways/manufacturers').then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.startScan = function(network) {
      return $q(function(resolve, reject) {
        RestService.post('/devices/scan', {
          network: network.ip + '/' + UtilService.maskToCidr(network.netmask)
        }).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    }

    this.setPhoneModel = function(obj) {
      return $q(function(resolve, reject) {
        RestService.post('/devices/phones/model', obj).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    }
  });