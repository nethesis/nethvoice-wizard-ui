'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.PhoneService
 * @description
 * # PhoneService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('PhoneService', function ($q, RestService, UtilService) {

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

    // Retrieve the complete phone inventory
    this.getPhones = function () {
      return $q(function (resolve, reject) {
        RestService.tget('/tancredi/api/v1/phones').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    // Mock: retrieve the complete phone inventory
    this.getPhonesMock = function (mockPhones) { //// remove
      return $q(function (resolve, reject) {
        if (mockPhones) {
          // return the input phones list
          resolve(mockPhones);
        } else {
          // return an empty list
          resolve([]);
        }
      });
    };

    // Create a new phone instance and add it to the phone inventory
    this.createPhone = function (phone) {
      return $q(function (resolve, reject) {
        RestService.tpost('/tancredi/api/v1/phones', phone).then(function (res) {
          resolve(res);
        }, function (err) {
          reject({ "error": err, "phone": phone });
        });
      });
    };

    // Mock: create a new phone instance and add it to the phone inventory; it succeeds with probability prob
    this.createPhoneMock = function (phone, prob) { //// remove
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

    this.setPhoneModel = function (mac, model) {
      return $q(function (resolve, reject) {
        RestService.tpatch('/tancredi/api/v1/phones/' + mac, { "model": model }).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    // Remove a phone from the inventory
    this.deletePhone = function (mac) {
      return $q(function (resolve, reject) {
        RestService.tdelete('/tancredi/api/v1/phones/' + mac).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    }

    this.getDelayedReboot = function () {
      return $q(function (resolve, reject) {
        RestService.get('/phones/reboot').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    }

    this.setPhoneDelayedReboot = function (mac, hours, minutes) {
      return $q(function (resolve, reject) {
        RestService.post('/phones/reboot/' + mac + "/" + hours + "/" + minutes).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    }

    this.deletePhoneDelayedReboot = function (mac) {
      return $q(function (resolve, reject) {
        RestService.delete('/phones/reboot/' + mac).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    }

    this.getVendor = function (macAddress) {
      // remove separators
      macAddress = macAddress.toUpperCase().replace(/:|-/g, "");
      var vendor = this.macVendorMap[macAddress.substring(0, 6)];

      if (vendor) {
        vendor = UtilService.capitalize(vendor);
      }
      return vendor;
    };

    this.checkMacAddress = function (macAddress) {
      // remove separators
      var macAddressNoSep = macAddress.replace(/:|-/g, "");
      var regExp = /^[0-9a-fA-F]{12}$/;
      return regExp.test(macAddressNoSep);
    };

    this.checkNetmask = function (netmask) {
      var regExp = /^(((255\.){3}(255|254|252|248|240|224|192|128|0+))|((255\.){2}(255|254|252|248|240|224|192|128|0+)\.0)|((255\.)(255|254|252|248|240|224|192|128|0+)(\.0+){2})|((255|254|252|248|240|224|192|128|0+)(\.0+){3}))$/;
      return regExp.test(netmask)
    };

    this.getFilteredModels = function (mac, models) {
      var vendor = this.getVendor(mac);

      if (vendor) {
        var filteredModels = models.filter(function (model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
        return filteredModels;
      } else {
        return [];
      }
    }

    // Builds a phone starting from a phone got from Tancredi
    this.buildPhone = function (phoneTancredi, models) {
      var mac = phoneTancredi.mac;
      var model;
      var filteredModels = this.getFilteredModels(mac, models);

      if (phoneTancredi.model) {
        model = filteredModels.find(function (m) {
          return phoneTancredi.model === m.name;
        });
      }

      var vendor = phoneTancredi.display_name;
      if (!vendor) {
        vendor = this.getVendor(mac);
      }

      if (vendor) {
        vendor = UtilService.capitalize(vendor);
      }

      var phone = {
        "mac": mac,
        "model": model,
        "vendor": vendor,
        "filteredModels": filteredModels
      }
      return phone;
    }

    // Builds a phone object that can be passed to Tancredi
    this.buildPhoneTancredi = function (mac, model, vendor) {
      if (model) {
        model = model.name;
      }

      if (!vendor) {
        vendor = this.getVendor(mac);
      }

      mac = this.formatMac(mac);

      var phone = {
        "mac": mac,
        "model": model,
        "display_name": vendor
      }
      return phone;
    }

    // Format a MAC address using hyphens as separators
    this.formatMac = function (mac) {
      mac = mac.toUpperCase();
      // remove all but alphanumeric characters
      mac = mac.replace(/\W/ig, '');
      // append an hyphen after every two characters
      mac = mac.replace(/(.{2})/g, "$1-");
      // remove trailing hyphen
      mac = mac.substring(0, mac.length - 1);
      return mac;
    }
  });
