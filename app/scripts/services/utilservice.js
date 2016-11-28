'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.UtilService
 * @description
 * # UtilService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('UtilService', function($interval, $q, RestService) {
    this.isEmpty = function(obj) {
      return Object.keys(obj).length == 0;
    };

    this.randomPassword = function(len) {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    };

    this.taskStatus = function(task) {
      return $q(function(resolve, reject) {
        RestService.get('/tasks/' + task).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    };

    this.maskToCidr = function(obj) {
      if (obj === undefined) {
        return '';
      }
      var maskNodes = obj.match(/(\d+)/g);
      var cidr = 0;
      for (var i in maskNodes) {
        cidr += (((maskNodes[i] >>> 0).toString(2)).match(/1/g) || []).length;
      }
      return cidr;
    }
  });