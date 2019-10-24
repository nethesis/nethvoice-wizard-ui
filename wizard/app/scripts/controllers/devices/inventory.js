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
      {mac: "00:04:13:11:22:33", model: "snom100", display_name: "Snom"},
      {mac: "0C:38:3E:99:88:77", model: "fanvil-600", display_name: "Fanvil"},
      {mac: "00:15:65:55:55:55", model: null, display_name: "Yealink"},
      {mac: "00:04:13:11:22:33", model: "snom200", display_name: "Snom"},
      {mac: "00:04:13:11:22:33", model: "snom100", display_name: "Snom"},
      {mac: "00:04:13:11:22:33", model: null, display_name: "Snom"},
      {mac: "0C:38:3E:99:88:77", model: null, display_name: "Fanvil"},
      {mac: "00:15:65:55:55:55", model: null, display_name: "Yealink"}
    ];
    $scope.models = [];
    $scope.macVendorMap = UtilService.macVendorMap();
    $scope.addPhonesTotalSteps = 2;

    $scope.pastedMacs = []; //// uncomment
    // $scope.pastedMacs = ["00:04:13:11:22:33", "0C:38:3E:11:22:33"]; //// delete

    $scope.getPhones = function() {
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

      console.log('getPhones():'); ////
      console.log($scope.phones); ////
    };

    $scope.getModels = function() {
      // ModelService.getModels().then(function(res) {
      
      ////
      var res = JSON.parse(' \
        [{ \
          "name": "snom100", \
          "display_name": "Snom IP phone v100", \
          "model_url": "/tancredi/api/v1/models/snom100" \
        },{ \
          "name": "snom200", \
          "display_name": "Snom IP phone v200", \
          "model_url": "/tancredi/api/v1/models/snom200" \
        },{ \
          "name": "fanvil-600", \
          "display_name": "Fanvil IP phone v600", \
          "model_url": "/tancredi/api/v1/models/fanvil600" \
        },{ \
          "name": "fanvil-700", \
          "display_name": "Fanvil IP phone v700", \
          "model_url": "/tancredi/api/v1/models/fanvil700" \
        }]'
      );

      // var res = []; ////

      $scope.models = res;

      console.log("$scope.models", $scope.models); ////

      // }, function(err) {
      //   console.log(err);
      // });
    }

    $scope.addPhonesNextStep = function() {
      $scope.addPhonesStep++;
    }

    $scope.addPhonesPreviousStep = function() {
      $scope.addPhonesStep--;
    }

    $scope.showAddPhonesModal = function() {
      $scope.addPhonesStep = 1;
      $scope.addPhonesType = 'scan';
      $('#add-phone').modal("show");
    }

    $scope.hideAddPhonesModal = function() {
      $('#add-phone').modal("hide");
    }

    $scope.updateManualModelSelect = function() {
      var vendor = $scope.macVendorMap[$scope.manualMac.substring(0, 8)];

      if (vendor) {
        $scope.manualVendor = UtilService.capitalize(vendor);
        $scope.manualFilteredModels = $scope.models.filter(function(model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
      } else {
        $scope.manualVendor = null;
        $scope.manualFilteredModels = [];
      }
    }

    $scope.addPhonesFinish = function() {
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

    function addPhonesPaste() {
      
      console.log('addPhonesPaste()'); ////

      for (var index = 0; index < $scope.pastedMacs.length; index++) {
        var mac = $scope.pastedMacs[index];
        var model = $scope.pastedModels[index];
        var vendor = $scope.pastedVendors[index];
        addPhone(mac, model, vendor);
      }

      // $scope.hideAddPhonesModal(); //// uncomment
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

    $scope.addPhonesManual = function() {
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
      $('#manual-mac').focus();
    }

    $scope.parsePastedMacs = function() {
      if ($scope.pastedMacsText.length < 2) {
        $scope.pastedMacsText = "";
        return;
      }

      $scope.pastedMacs = $scope.pastedMacsText.split(/\s+/);
      $scope.pastedVendors = [];
      $scope.pastedModels = [];
      $scope.pasteFilteredModels = [];
      $scope.pastedMacsText = "";

      for (var index = 0; index < $scope.pastedMacs.length; index++) {
        $scope.updatePasteModelSelect(index);
      }
    }

    $scope.updatePasteModelSelect = function(index) {
      var vendor = $scope.macVendorMap[$scope.pastedMacs[index].substring(0, 8)];

      if (vendor) {
        $scope.pastedVendors[index] = UtilService.capitalize(vendor);
        $scope.pasteFilteredModels[index] = $scope.models.filter(function(model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
      } else {
        $scope.pastedVendors[index] = null;
        $scope.pasteFilteredModels[index] = [];
      }
    }

    $scope.setPhoneModel = function(phone) {
      //// RestService by now doesn't have a patch method

      // PhoneService.setPhoneModel({
      //   model: phone.model
      // }).then(function (res) {}, function (err) {
      //   console.log(err);
      // });

      console.log('setPhoneModel()'); ////
    };

    $scope.filteredModels = function(mac) {
      var vendor = $scope.macVendorMap[mac.substring(0, 8)];

      if (vendor) {
        var filteredModels = $scope.models.filter(function(model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });        
        // return filteredModels; ////

        var filteredModelNames = []; ////
        for (var model of filteredModels) {
          filteredModelNames.push(model.name);
        }
        return filteredModelNames;
      } else {
        return [];
      }
    }

    $scope.getPhones();
    $scope.getModels();
  });
