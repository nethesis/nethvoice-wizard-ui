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
        vendor: infos[0] && infos[1] ? infos[0] : null,
        mac: infos[1] && infos[1].replace(/(.{2})/g, "$1:").slice(0, -1) || null,
        tech: infos[2] && infos[2].toUpperCase() || null,
        port: infos[3] || null
      }
    };

    this.intersectTwoObj = function (list1, list2, isUnion) {
      return list1.filter(function (current) {
        return list2.filter(function (current_b) {
          return current_b.trunkid == current.trunkid
        }).length == 0
      });
    };

    this.macVendorMap = {
      "0C383E": "fanvil",
      "7C2F80": "gigaset",
      "005058": "sangoma",
      "000413": "snom",
      "001565": "yealink",
      "805E0C": "yealink",
      "805EC0": "yealink",
      "9C7514": "yealink"
    };

    this.getVendor = function (macAddress) {
      // remove separators
      macAddress = macAddress.toUpperCase().replace(/:/g, "").replace(/-/g, "");
      var vendor = this.macVendorMap[macAddress.substring(0, 6)];

      if (vendor) {
        vendor = this.capitalize(vendor);
      }

      return vendor;
    };

    this.capitalize = function (s) {
      if (typeof s !== 'string') {
        return '';
      }
      return s.charAt(0).toUpperCase() + s.slice(1)
    };

    this.checkMacAddress = function (macAddress) {
      var regExp = /^[a-f0-9:]{17}|[a-f0-9-]{17}|[a-f0-9]{12}$/i;
      return regExp.test(macAddress);
    };

    this.checkNetmask = function (netmask) {
      var regExp = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;
      return regExp.test(netmask)
    };

    this.findDuplicates = function (array) {
      let findDuplicatesInArray = arr => arr.filter((item, index) => arr.indexOf(item) != index)
      return [...new Set(findDuplicatesInArray(array))];
    }
  });
