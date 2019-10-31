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

    // Mock: create a new phone instance and add it to the phone inventory; it succeeds with probability prob
    this.createPhoneMock = function (phone, phones, prob) {
      // if probability is not passed, always succeeds
      if (!prob) {
        prob = 1;
      }
      var success = !!prob && Math.random() <= prob;

      return $q(function (resolve, reject) {
        if (success) {
          var res = {
            "mac": phone.mac,
            "model": phone.model,
            "display_name": phone.display_name,
            "tok1": "99999999-6e80-41ff-9437-c4b1413975db",
            "tok2": "99999999-b860-498f-8bfa-4947e170873b",
            "model_url": "/tancredi/api/v1/models/" + phone.model,
            "variables": {
              "var1": "value1",
              "var2": "value2"
            }
          }
          phones.push(phone);
          resolve(res);
        } else {
          var err = {
            "type": "https://github.com/nethesis/tancredi/wiki/problems#mock-error",
            "title": "Mock: an error has occured (success prob: " + prob + ")"
          }
          reject({ "error": err, "phone": phone });
        }
      });
    };
    
    // Remove a phone from the inventory
    this.deletePhone = function (mac) {
      return $q(function (resolve, reject) {
        RestService.delete('/phones/' + mac).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    }
  });
