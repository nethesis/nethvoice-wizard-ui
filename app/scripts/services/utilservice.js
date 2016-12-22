'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.UtilService
 * @description
 * # UtilService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('UtilService', function ($interval, $q, RestService) {
    this.isEmpty = function (obj, nested) {
      if (nested) {
        var empties = [];
        for (var o in obj) {
          empties.push(Object.keys(obj[o]).length == 0);
        }
        return empties.every(Boolean);
      } else {
        return Object.keys(obj).length == 0;
      }
    };

    this.randomPassword = function (len) {
      var text = "";
      var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
      return text;
    };

    this.taskStatus = function (task) {
      return $q(function (resolve, reject) {
        RestService.get('/tasks/' + task).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.maskToCidr = function (obj) {
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

    this.hashNetwork = function (network) {
      return CryptoJS.MD5(network.ip + '/' + this.maskToCidr(network.netmask));
    };

    this.extractTrunkInfo = function (trunk) {
      var infos = trunk.split('_');
      return {
        vendor: infos[0],
        mac: infos[1] && infos[1].replace(/(.{2})/g,"$1:").slice(0, -1) || '',
        tech: infos[2] && infos[2].toUpperCase() || '',
        port: infos[3]
      }
    };
  });
