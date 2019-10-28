'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.PhoneService
 * @description
 * # PhoneService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('PhoneService', function ($q, RestService) {

    // Retrieve the complete phone inventory
    this.getPhones = function () {
      return $q(function (resolve, reject) {
        RestService.get('/phones').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    // Create a new phone instance and add it to the phone inventory
    this.createPhone = function (phone) {
      return $q(function (resolve, reject) {
        RestService.post('/phones', phone).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    // Remove a phone from the inventory
    this.deletePhone = function(mac) {
      return $q(function (resolve, reject) {
        RestService.delete('/phones/' + mac).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    }
  });
