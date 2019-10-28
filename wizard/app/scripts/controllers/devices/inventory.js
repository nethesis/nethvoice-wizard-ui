'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesInventoryCtrl
 * @description
 * # InventoryCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesInventoryCtrl', function ($scope, PhoneService, ModelService, UtilService) {
    // $scope.phones = []; //// uncomment
    $scope.phones = [ //// delete
      { mac: "00:04:13:11:22:31", model: "snom100", display_name: "Snom" },
      { mac: "0C:38:3E:99:88:72", model: "fanvil-600", display_name: "Fanvil" },
      { mac: "00:15:65:55:55:53", model: null, display_name: "Yealink" },
      { mac: "00:04:13:11:22:34", model: "snom200", display_name: "Snom" },
      { mac: "00:04:13:11:22:35", model: "snom100", display_name: "Snom" },
      { mac: "00:04:13:11:22:36", model: null, display_name: "Snom" },
      { mac: "0C:38:3E:99:88:77", model: null, display_name: "Fanvil" },
      { mac: "00:15:65:55:55:58", model: null, display_name: "Yealink" }
    ];
    $scope.models = [];
    $scope.macVendorMap = UtilService.macVendorMap();
    $scope.addPhonesTotalSteps = 2;

    $scope.pastedMacs = []; //// uncomment
    $scope.showPasteMacError = [];
    // $scope.pastedMacs = ["00:04:13:11:22:33", "0C:38:3E:11:22:33"]; //// delete

    $scope.getPhones = function () {
      // PhoneService.getPhones().then(function(res) {

      ////
      // var res = JSON.parse(' \
      //   [{ \
      //     "mac": "01-23-45-67-89-AB", \
      //     "model": "acme19.2", \
      //     "display_name": "Acme", \
      //     "model_url": "/tancredi/api/v1/models/acme19.2", \
      //     "phone_url": "/tancredi/api/v1/phones/01-23-45-67-89-AB" \
      //   },{ \
      //     "mac": "01-23-45-76-98-DE", \
      //     "model": "acme15.0", \
      //     "display_name": "Acme", \
      //     "model_url": "/tancredi/api/v1/models/acme15.0", \
      //     "phone_url": "/tancredi/api/v1/phones/01-23-45-76-98-DE" \
      //   }]'
      // );
      // var res = []; ////

      // $scope.phones = res;
      // console.log("$scope.phones", $scope.phones); ////

      // }, function(err) {
      //   console.log(err);
      // });

      //// getModels() must be invoked AFTER a successful call to GET /phones
      $scope.getModels();

      linkModelsToPhones();

      console.log('getPhones():'); ////
      console.log($scope.phones); ////
    };

    $scope.getModels = function () {
      // ModelService.getModels().then(function(res) {

      ////
      // var res = JSON.parse(' \
      //   [{ \
      //     "name": "snom100", \
      //     "display_name": "Snom IP phone v100", \
      //     "model_url": "/tancredi/api/v1/models/snom100" \
      //   },{ \
      //     "name": "snom200", \
      //     "display_name": "Snom IP phone v200", \
      //     "model_url": "/tancredi/api/v1/models/snom200" \
      //   },{ \
      //     "name": "fanvil-600", \
      //     "display_name": "Fanvil IP phone v600", \
      //     "model_url": "/tancredi/api/v1/models/fanvil600" \
      //   },{ \
      //     "name": "fanvil-700", \
      //     "display_name": "Fanvil IP phone v700", \
      //     "model_url": "/tancredi/api/v1/models/fanvil700" \
      //   }]'
      // );

      var res = [
        {
          "name": "snom100",
          "display_name": "Snom IP phone v100",
          "model_url": "/tancredi/api/v1/models/snom100"
        }, {
          "name": "snom200",
          "display_name": "Snom IP phone v200",
          "model_url": "/tancredi/api/v1/models/snom200"
        }, {
          "name": "fanvil-600",
          "display_name": "Fanvil IP phone v600",
          "model_url": "/tancredi/api/v1/models/fanvil600"
        }, {
          "name": "fanvil-700",
          "display_name": "Fanvil IP phone v700",
          "model_url": "/tancredi/api/v1/models/fanvil700"
        }, {
          "name": "yealink-1000",
          "display_name": "Yealink IP phone v1000",
          "model_url": "/tancredi/api/v1/models/yealink1000"
        }
      ];

      // var res = []; ////

      $scope.models = res;

      console.log("$scope.models", $scope.models); ////

      // }, function(err) {
      //   console.log(err);
      // });
    }

    $scope.addPhonesNextStep = function () {
      $scope.addPhonesStep++;
    }

    $scope.addPhonesPreviousStep = function () {
      $scope.addPhonesStep--;
    }

    $scope.showAddPhonesModal = function () {
      $scope.addPhonesStep = 1;
      $scope.addPhonesType = 'scan';
      $('#add-phone').modal("show");
    }

    $scope.hideAddPhonesModal = function () {
      $('#add-phone').modal("hide");
    }

    $scope.inputMacManualChanged = function () {
      $scope.clearValidationErrorsManual();

      // update model list

      if (!$scope.manualMac) {
        $scope.manualVendor = null;
        $scope.manualFilteredModels = [];
        return;
      }
      var vendor = $scope.macVendorMap[$scope.manualMac.substring(0, 8)];

      if (vendor) {
        $scope.manualVendor = UtilService.capitalize(vendor);
        $scope.manualFilteredModels = $scope.models.filter(function (model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
      } else {
        $scope.manualVendor = null;
        $scope.manualFilteredModels = [];
      }
    }

    $scope.addPhonesFinish = function () {
      switch ($scope.addPhonesType) {
        case "scan":
          addPhonesScan();
          break;
        case "paste":
          addPhonesPaste();
          break;
        case "manual":
          $scope.hideAddPhonesModal();
          $scope.getPhones();
          break;
      }
    }

    function addPhonesScan() {
      ////
      console.log('addPhonesScan()'); ////
    }

    $scope.clearValidationErrorsManual = function () {
      $scope.showManualMacError = false;
    }

    $scope.clearValidationErrorsPaste = function (index) {
      if (typeof index !== 'undefined') {
        // clear error at index
        $scope.showPasteMacError[index] = false;
      } else {
        // clear all errors
        $scope.showPasteMacError = [];
      }
    }

    function addPhonesPaste() {
      $scope.clearValidationErrorsPaste();
      var firstErrorIndex = null;

      // check validation errors
      for (var index = 0; index < $scope.pastedMacs.length; index++) {
        if (!UtilService.checkMacAddress($scope.pastedMacs[index])) {
          $scope.showPasteMacError[index] = true;

          if (firstErrorIndex === null) {
            firstErrorIndex = index;
          }
        }
      }

      // if there are validation errors, focus the first and return
      if (firstErrorIndex !== null) {
        $('#paste-mac-' + firstErrorIndex).focus();
        return;
      }

      // add all phones
      for (var index = 0; index < $scope.pastedMacs.length; index++) {
        var mac = $scope.pastedMacs[index];
        var model = $scope.pastedModels[index];
        var vendor = $scope.pastedVendors[index];
        addPhone(mac, model, vendor);
      }

      $scope.hideAddPhonesModal();
      $scope.getPhones();
    }

    function addPhone(mac, model, vendor) {
      var phone = {
        "mac": mac,
        "model": model ? model.name : null,
        "display_name": vendor
      }

      console.log('addPhone()', phone); ////

      $scope.phones.push(phone); //// remove

      // PhoneService.createPhone(phone).then(function(res) { ////
      //   ////
      // }, function(err) {
      //   console.log(err);
      // });
    }

    $scope.addPhonesManual = function () {
      $scope.clearValidationErrorsManual();

      if (!UtilService.checkMacAddress($scope.manualMac)) {
        $scope.showManualMacError = true;
        $('#manual-mac').focus();
        return;
      }

      var phone = {
        "mac": $scope.manualMac,
        "model": $scope.manualModel ? $scope.manualModel.name : null,
        "display_name": $scope.manualVendor
      }

      console.log('addPhonesManual()', phone); ////

      $scope.phones.push(phone); //// remove

      // PhoneService.createPhone(phone).then(function(res) { ////
      //   ////
      // }, function(err) {
      //   console.log(err);
      // });

      $scope.manualMac = "";
      $scope.manualModel = null;
      $scope.manualFilteredModels = [];
      $('#manual-mac').focus();
    }

    $scope.parsePastedMacs = function () {
      if ($scope.pastedMacsText.length < 2) {
        $scope.pastedMacsText = "";
        return;
      }

      // remove separators (if any)
      $scope.pastedMacsText = $scope.pastedMacsText.replace(/,|;/g, ' ')

      // split MAC addresses on whitespace
      $scope.pastedMacs = $scope.pastedMacsText.split(/\s+/);

      $scope.pastedVendors = [];
      $scope.pastedModels = [];
      $scope.pasteFilteredModels = [];
      $scope.pastedMacsText = "";

      for (var index = 0; index < $scope.pastedMacs.length; index++) {
        // update model list
        $scope.inputMacPasteChanged(index);
      }
    }

    $scope.inputMacPasteChanged = function (index) {
      $scope.clearValidationErrorsPaste(index);

      if (!$scope.pastedMacs[index]) {
        $scope.pastedVendors[index] = null;
        $scope.pasteFilteredModels[index] = [];
        return;
      }
      var vendor = $scope.macVendorMap[$scope.pastedMacs[index].substring(0, 8)];

      if (vendor) {
        $scope.pastedVendors[index] = UtilService.capitalize(vendor);
        $scope.pasteFilteredModels[index] = $scope.models.filter(function (model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
      } else {
        $scope.pastedVendors[index] = null;
        $scope.pasteFilteredModels[index] = [];
      }
    }

    $scope.setPhoneModel = function (phone) {
      //// RestService by now doesn't have a patch method

      // PhoneService.setPhoneModel({
      //   model: phone.modelObj.name
      // }).then(function (res) {}, function (err) {
      //   console.log(err);
      // });

      if (phone.modelObj) {
        phone.model = phone.modelObj.name;
      } else {
        phone.model = null;
      }

      console.log('setPhoneModel()'); ////
      console.log($scope.phones); ////
    };

    $scope.filteredModels = function (mac) {
      var vendor = $scope.macVendorMap[mac.substring(0, 8)];

      if (vendor) {
        var filteredModels = $scope.models.filter(function (model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
        return filteredModels;

        // var filteredModelNames = []; ////
        // for (var model of filteredModels) {
        //   filteredModelNames.push(model.name);
        // }
        // return filteredModelNames;
      } else {
        return [];
      }
    }

    function linkModelsToPhones() {
      for (var phone of $scope.phones) {
        var modelObj = $scope.models.find(function (modelObj) {
          return modelObj.name === phone.model;
        });
        phone.modelObj = modelObj;
      }
    }

    $scope.showDeletePhoneModal = function (phone) {
      $scope.phoneToDelete = phone;
    }

    $scope.deletePhone = function () {

      console.log('deletePhone()'); ////

      // PhoneService.deletePhone($scope.phoneToDelete.mac).then(function(res) { ////
      //   ////
      // }, function(err) {
      //   console.log(err);
      // });

      $scope.phones = $scope.phones.filter(function (phone) { ////
        return phone.mac !== $scope.phoneToDelete.mac;
      });

      $('#deletePhoneModal').modal('hide');
      $scope.getPhones();
    }

    $scope.deletePastedMac = function (index) {

      console.log('deletePastedMac(), index', index); ////

      $scope.pastedMacs.splice(index, 1);
      $scope.showPasteMacError.splice(index, 1);
      $scope.pastedVendors.splice(index, 1);
      $scope.pastedModels.splice(index, 1);
      $scope.pasteFilteredModels.splice(index, 1);
    }

    $scope.orderByValue = function (value) {
      return value;
    };

    $scope.setAddPhonesType = function (value) {
      $scope.addPhonesType = value;
    };

    $scope.getPhones();
  });
