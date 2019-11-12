'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesInventoryCtrl
 * @description
 * # InventoryCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesInventoryCtrl', function ($scope, $interval, $q, PhoneService, ModelService, UtilService, ConfigService, DeviceService) {
    $scope.phones = [];
    // $scope.phones = [ //// mockup
    //   { mac: "00:04:13:11:22:31", model: "snom100", display_name: "Snom" },
    //   { mac: "0C:38:3E:99:88:72", model: "fanvil-600", display_name: "Fanvil" },
    //   { mac: "00:15:65:55:55:53", model: null, display_name: "Yealink" },
    //   { mac: "00:04:13:11:22:34", model: "snom200", display_name: "Snom" },
    //   { mac: "00:04:13:11:22:35", model: "snom100", display_name: "Snom" },
    //   { mac: "00:04:13:11:22:36", model: null, display_name: "Snom" },
    //   { mac: "0C:38:3E:99:88:77", model: null, display_name: "Fanvil" },
    //   { mac: "00:15:65:55:55:58", model: null, display_name: "Yealink" }
    // ];
    $scope.models = [];
    $scope.macVendorMap = UtilService.macVendorMap();
    $scope.addPhonesTotalSteps = 2;

    $scope.tasks = {}; ////
    $scope.networkScans = 0;

    $scope.pastedMacs = [];
    $scope.showPasteMacError = [];
    $scope.pastedMacUnknownVendors = [];

    $scope.successfulAddPhones = [];
    $scope.failedAddPhones = [];

    $scope.cpApplyAllSelModelDisabled = true; // used by copy/paste addition gui

    $scope.getPhones = function () {
      // PhoneService.getPhones().then(function(res) { ////
      //
      // }, function(err) {
      //   console.log(err);
      // });

      //// getModels() must be invoked after a successful call to GET /phones
      $scope.getModels();
      linkModelsToPhones();

      console.log("getPhones()", $scope.phones); ////
    };

    $scope.getModels = function () {
      // ModelService.getModels().then(function(res) { ////

      var res = [ //// mockup
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

      $scope.models = res;

      console.log("$scope.models", $scope.models); ////

      // }, function(err) { ////
      //   console.log(err);
      // });
    }

    $scope.addPhonesNextStep = function () {
      $scope.addPhonesStep++;
    }

    $scope.addPhonesPreviousStep = function () {
      $scope.addPhonesStep--;
    }

    // modal used to add mac using different methods
    $scope.showGenericAddingModal = val => {
      $scope.addModalType = val;
      $('#adding-modal').modal("show");
    };

    $scope.showPasteModal = () => {
      $scope.pastedMacs = [];
      $scope.successfulAddPhones = [];
      $scope.failedAddPhones = [];
      $scope.pendingRequestsAddPhones = 0;
      $scope.showResultsAddPhones = false;
      $scope.showGenericAddingModal('copypaste');
      initCopyPasteMacUI();
    }

    let initCopyPasteMacUI = () => {
      $('[data-toggle=popover]').popovers()
        .on('hidden.bs.popover', function (e) {
          $(e.target).data('bs.popover').inState.click = false;
        });
        $("#adding-modal").on('shown.bs.modal', function(){
          $('#paste-textarea').focus();
      });
    };

    $scope.showManualModal = function () {
      $scope.successfulAddPhones = [];
      $scope.failedAddPhones = [];
      $scope.pendingRequestsAddPhones = 0;
      $scope.showResultsAddPhones = false;
      $scope.showGenericAddingModal('manual');
    }

    $scope.showScanModal = function () {
      $scope.successfulAddPhones = [];
      $scope.failedAddPhones = [];
      $scope.pendingRequestsAddPhones = 0;
      $scope.showResultsAddPhones = false;
      $scope.showGenericAddingModal('scanning');
    }

    $scope.showAddPhonesModal = function () { ////
      $scope.addPhonesStep = 1;
      $scope.addPhonesType = 'scan';
      $('#add-phone').modal("show");
    }

    $scope.hideAddPhonesModal = function () { ////
      $('#add-phone').modal("hide");
    }

    $scope.inputMacManualChanged = function () {
      $scope.clearValidationErrorsManual();

      if (!$scope.manualMac) {
        $scope.manualVendor = null;
        $scope.manualFilteredModels = [];
        return;
      }

      // update model list
      var vendor = $scope.macVendorMap[$scope.manualMac.substring(0, 8)];

      if (vendor) {
        $scope.manualVendor = UtilService.capitalize(vendor);
        $scope.manualFilteredModels = $scope.models.filter(function (model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
      } else {
        $scope.manualVendor = null;
        $scope.manualFilteredModels = [];

        // unknown vendor warning
        if ($scope.manualMac.length >= 8) {
          $scope.manualMacUnknownVendor = true;
        }
      }
    }

    $scope.addPhonesFinish = function () { ////
      switch ($scope.addPhonesType) {
        case "scan":
          startNetworkScan();
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

    $scope.networkToScanChanged = function () {
      $scope.showSelectNetworkToScanError = false;
    }

    $scope.netmaskToScanChanged = function () {
      $scope.showNetmaskToScanError = false;
    }

    function startNetworkScan() {

      console.log('startNetworkScan()', $scope.networkToScan); ////

      // input validation

      $scope.showSelectNetworkToScanError = false;
      $scope.showNetworkScanInProgressError = false;
      $scope.showNetmaskToScanError = false;

      if (!$scope.networkToScan) {
        $scope.showSelectNetworkToScanError = true;
        return;
      }

      var netName = $scope.networkToScan.name;

      if ($scope.tasks[netName].currentProgress > 0 && $scope.tasks[netName].currentProgress < 100) {
        $scope.showNetworkScanInProgressError = true;
      }

      if ($scope.networkToScan && (!$scope.networkToScan.netmask || !UtilService.checkNetmask($scope.networkToScan.netmask))) {
        $scope.showNetmaskToScanError = true;
      }

      if ($scope.showSelectNetworkToScanError || $scope.showNetworkScanInProgressError || $scope.showNetmaskToScanError) {
        return;
      }

      // start scan
      $scope.networkScans++;
      $scope.hideAddPhonesModal();
      $scope.tasks[netName].currentProgress = Math.floor((Math.random() * 50) + 10);
      DeviceService.startScan($scope.networkToScan).then(function (res) {
        $scope.tasks[netName].promise = $interval(function () {
          UtilService.taskStatus(res.data.result).then(function (res) {
            if (res.data.progress < 100) {
              console.log('progress < 100, res.data', res.data); ////
              $scope.tasks[netName].currentProgress = res.data.progress;
              $scope.tasks[netName].errorCount = 0;
            } else if (res.data.progress == 100) {
              console.log('progress == 100, res.data', res.data); ////
              $scope.tasks[netName].currentProgress = res.data.progress;
              $scope.tasks[netName].errorCount = 0;
              $interval.cancel($scope.tasks[netName].promise);
              $scope.networkScans--;

              // scan complete notification
              $scope.networkScanCompleted = true;
              setTimeout(function () {
                $scope.networkScanCompleted = false;
                $scope.$apply();
              }, 3000);

              //// todo: add the phones to the inventory (similar to addPhonesPaste() )

              //// var phones = res.data.phones
              var phones = [ //// mockup
                { mac: "00:04:13:11:22:91", model: "snom100" },
                { mac: "0C:38:3E:99:88:92", model: "fanvil-600" },
                { mac: "00:15:65:55:55:93", model: "yealink-1000" },
                { mac: "00:04:13:11:22:94", model: null }
              ];

              // add all phones
              for (var phone of phones) {
                addPhone(phone); ////
              }
              $scope.getPhones();
            } else {
              console.log(res.error);
              if ($scope.tasks[netName].errorCount < appConfig.MAX_TRIES) {
                $scope.tasks[netName].errorCount++;
              } else {
                $interval.cancel($scope.tasks[netName].promise);
                $scope.networkScans--;
                $scope.tasks[netName].currentProgress = -1;
              }
            }
          }, function (err) {
            console.log(err);
            if ($scope.tasks[netName].errorCount < appConfig.MAX_TRIES) {
              $scope.tasks[netName].errorCount++;
            } else {
              $interval.cancel($scope.tasks[netName].promise);
              $scope.networkScans--;
              $scope.tasks[netName].currentProgress = -1;
            }
          });
        }, appConfig.INTERVAL_POLLING);
      }, function (err) {
        $scope.tasks[netName].currentProgress = -1;
        console.log(err);
      });
    }

    $scope.clearValidationErrorsManual = function () {
      $scope.showManualMacError = false;
      $scope.manualMacUnknownVendor = false;
    }

    $scope.clearValidationErrorsPaste = function (index) {
      if (typeof index !== 'undefined') {
        // clear errors at index
        $scope.showPasteMacError[index] = false;
        $scope.pastedMacUnknownVendors[index] = false;
      } else {
        // clear all errors
        $scope.showPasteMacError = [];
        $scope.macDuplicates = [];
        $scope.pastedMacUnknownVendors = [];
      }
    }

    function validateAddPhonesPaste() {
      $scope.clearValidationErrorsPaste();
      var firstErrorIndex = null;

      for (var index = 0; index < $scope.pastedMacs.length; index++) {
        var mac = $scope.pastedMacs[index];
        // check MAC address 
        if (!UtilService.checkMacAddress(mac)) {
          $scope.showPasteMacError[index] = true;

          if (firstErrorIndex === null) {
            firstErrorIndex = index;
          }
        }

        // check vendor
        var vendor = $scope.macVendorMap[mac.substring(0, 8)];
        if (!vendor) {
          $scope.pastedMacUnknownVendors[index] = true;
        }
      }

      // check duplicates
      $scope.macDuplicates = UtilService.findDuplicates($scope.pastedMacs);

      if (firstErrorIndex === null && $scope.macDuplicates.length) {
        firstErrorIndex = $scope.pastedMacs.indexOf($scope.macDuplicates[0]);
      }

      // if there are validation errors, focus the first and return
      if (firstErrorIndex !== null) {
        setTimeout(function () {
          $('#paste-mac-' + firstErrorIndex).focus();
        }, 200);

        return false;
      } else {
        return true;
      }
    }

    // used to add phones with different methods
    $scope.addPhonesGeneric = () => {
      if ($scope.addModalType === 'copypaste') {
        $scope.addPhonesPaste();
      } else if ($scope.addModalType === 'manual') {
        $scope.addPhonesManual();
        showResultsAddPhones();
      }
    };

    $scope.addPhonesPaste = function () {
      var validationOk = validateAddPhonesPaste();

      if (!validationOk) {
        return;
      }

      $scope.pendingRequestsAddPhones = $scope.pastedMacs.length;
      $scope.failedAddPhones = [];

      // add all phones
      for (var index = 0; index < $scope.pastedMacs.length; index++) {
        var mac = $scope.pastedMacs[index];
        var model = $scope.pastedModels[index];
        var phone = buildPhone(mac, model); ////

        PhoneService.createPhoneMock(phone, $scope.phones, 0.7).then(function (res) {
          console.log("success", res.mac); ////
          $scope.pendingRequestsAddPhones--;
          $scope.successfulAddPhones.push(res);

          if ($scope.pendingRequestsAddPhones == 0) {
            showResultsAddPhones();
          }
        }, function (err) {
          console.log("fail", err); ////
          console.log(err.error.title);
          $scope.pendingRequestsAddPhones--;
          $scope.failedAddPhones.push(err.phone);

          if ($scope.pendingRequestsAddPhones == 0) {
            showResultsAddPhones();
          }
        });
      }
    }

    function showResultsAddPhones() {
      console.log("showResultsAddPhones()"); ////

      $scope.showResultsAddPhones = true;

      for (var phone of $scope.successfulAddPhones) {
        console.log("deleting succesful mac", phone.mac); ////
        deletePastedMacStr(phone.mac);
      }
      $scope.getPhones();
    }

    // builds a phone object that can be passed to Tancredi
    function buildPhone(mac, model) {
      // if model variable is structured extract its name
      if (model && model.hasOwnProperty('name')) {
        model = model.name;
      }

      var vendor = $scope.macVendorMap[mac.substring(0, 8)];
      if (vendor) {
        vendor = UtilService.capitalize(vendor);
      }

      var phone = {
        "mac": mac,
        "model": model,
        "display_name": vendor
      }
      return phone;
    }

    function validateAddPhonesManual() {
      $scope.clearValidationErrorsManual();

      // check vendor
      var vendor = $scope.macVendorMap[$scope.manualMac.substring(0, 8)];
      if (!vendor) {
        $scope.manualMacUnknownVendor = true;
      }

      if (!UtilService.checkMacAddress($scope.manualMac)) {
        $scope.showManualMacError = true;
        $('#manual-mac').focus();
        return false;
      } else {
        return true;
      }
    }

    $scope.getManualFilteredModelsCount = () => {
      return $scope.manualFilteredModels && $scope.manualFilteredModels.length > 0 ? false : true;
    };

    $scope.addPhonesManual = function () {
      var validationOk = validateAddPhonesManual();

      if (!validationOk) {
        return;
      }
      let phone = buildPhone($scope.manualMac, $scope.manualModel ? $scope.manualModel.name : null);
      PhoneService.createPhoneMock(phone, $scope.phones, 0.7).then(function (res) {
        console.log("success", res.mac); ////
        $scope.successfulAddPhones.push(res);
        showResultsAddPhones();
      }, function (err) {
        console.log("fail", err); ////
        console.log(err.error.title);
        $scope.failedAddPhones.push(err.phone);
        showResultsAddPhones();
      });

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

      // todo: set maxlength attribute to <textarea> to limit user input

      // remove separators (if any)
      $scope.pastedMacsText = $scope.pastedMacsText.replace(/,|;/g, ' ').trim();

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

      // perform validation
      validateAddPhonesPaste();

      // get all pasted brands
      $scope.getAllPastedBrands();
    }

    // section for mac copy/paste addition - start
    //
    // copy/paste addition: extract all brands and models
    $scope.getAllPastedBrands = () => {
      $scope.cpAllModels = {}; // all models
      for (let i = 0; i < $scope.pasteFilteredModels.length; i++) {
        for (let k = 0; k < $scope.pasteFilteredModels[i].length; k++) {
          if (!$scope.cpAllModels[$scope.pasteFilteredModels[i][k].name]) {
            $scope.cpAllModels[$scope.pasteFilteredModels[i][k].name] = $scope.pasteFilteredModels[i][k];
          }
        }
      }
      let tempBrand;
      $scope.cpAllBrands = {}; // all brands
      for (let i = 0; i < $scope.pastedMacs.length; i++) {
        tempBrand = UtilService.macVendorMap()[$scope.pastedMacs[i].substring(0,8)];
        if (tempBrand) { // controlla il formato del mac, se contiene i : o meno
          $scope.cpAllBrands[tempBrand] = [];
          for (const key in $scope.cpAllModels) {
            if (key.indexOf(tempBrand) !== -1) {
              $scope.cpAllBrands[tempBrand].push($scope.cpAllModels[key]);
            }
          }
        }
      }
    };

    $scope.getCpAllBrandsLenght = () => {
      if ($scope.cpAllBrands) {
        return Object.keys($scope.cpAllBrands).length;
      } else {
        return 0;
      }
    };

    // copy/paste addition: user has selected one brand
    $scope.cpAllBrandsChanged = () => {
      $scope.cpAllSelModels = [];
      for (const b in $scope.cpAllBrands) {
        if (b === $scope.cpAllBrandsValue) {
          $scope.cpAllSelModels = $scope.cpAllBrands[b];
        }
      }
    };

    // copy/paste addition: user has selected one model
    $scope.cpAllModelsChanged = () => {
      if ($scope.cpAllSelModelsValue !== null && $scope.cpAllSelModelsValue !== '') {
        $scope.cpApplyAllSelModelDisabled = false;
      } else {
        $scope.cpApplyAllSelModelDisabled = true;
      }
    };

    // copy/paste addition: apply the selected model to all devices of that type
    $scope.cpApplyAllSelModel = () => {
      let tempBrand;
      let indexToSet = {}; // indexes of combobox array models
      for (let i = 0; i < $scope.pastedMacs.length; i++) {
        tempBrand = UtilService.macVendorMap()[$scope.pastedMacs[i].substring(0,8)];
        if (!indexToSet[tempBrand]) {
          indexToSet[tempBrand] = [];
        }
        indexToSet[tempBrand].push(i);
      }
      for (let i = 0; i < $scope.cpAllSelModels.length; i++) { // set model for combobox array models
        if ($scope.cpAllSelModels[i].name === $scope.cpAllSelModelsValue) {
          for (let k = 0; k < indexToSet[$scope.cpAllBrandsValue].length; k++) {
            $scope.pastedModels[indexToSet[$scope.cpAllBrandsValue][k]] = $scope.cpAllSelModels[i];
          }
          return;
        }
      }
    };
    // section for mac copy/paste addition - end

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

        // unknown vendor warning
        if ($scope.pastedMacs[index].length >= 8) {
          $scope.pastedMacUnknownVendors[index] = true;
        }
      }
    }

    $scope.setPhoneModel = function (phone) {
      //// RestService by now doesn't have a patch method!

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

      console.log('setPhoneModel()', phone); ////
    };

    $scope.filteredModels = function (mac) { //// move inside UtilService?
      var vendor = $scope.macVendorMap[mac.substring(0, 8)];

      if (vendor) {
        var filteredModels = $scope.models.filter(function (model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
        return filteredModels;
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

      $scope.phones = $scope.phones.filter(function (phone) { //// mockup
        return phone.mac !== $scope.phoneToDelete.mac;
      });

      $('#deletePhoneModal').modal('hide');
      $scope.getPhones();
    }

    function deletePastedMacStr(mac) {
      var index = $scope.pastedMacs.indexOf(mac);

      if (index != -1) {
        $scope.deletePastedMac(index);
      }
    }

    $scope.deletePastedMac = function (index) {
      $scope.pastedMacs.splice(index, 1);
      $scope.showPasteMacError.splice(index, 1);
      $scope.pastedVendors.splice(index, 1);
      $scope.pastedModels.splice(index, 1);
      $scope.pasteFilteredModels.splice(index, 1);
      $scope.pastedMacUnknownVendors.splice(index, 1);
      $scope.getAllPastedBrands();
    }

    $scope.orderByValue = function (value) {
      return value;
    };

    $scope.setAddPhonesType = function (value) {
      $scope.addPhonesType = value;
    };

    $scope.getNetworks = function () {
      // ConfigService.getNetworks().then(function (res) { ////
      //   $scope.networks = res.data;

      var networks = { //// mockup
        "enp0s3": {
          "network": "192.168.5.0",
          "ip": "192.168.5.92",
          "netmask": "255.255.255.0",
          "gateway": "192.168.5.92"
        },
        "enp0s8": {
          "network": "10.3.0.0",
          "ip": "10.3.3.15",
          "netmask": "255.255.0.0",
          "gateway": "10.3.3.15"
        }
      };

      // assign network names
      for (var key in networks) {
        if (networks.hasOwnProperty(key)) {
          networks[key].name = key;
        }
      }

      $scope.networks = networks;

      console.log("$scope.networks", $scope.networks); ////

      for (var eth in $scope.networks) {
        $scope.tasks[eth] = {}; ////
      }
      // }, function (err) { ////
      //   console.log(err);
      // });
    };

    $scope.getPhones();
    $scope.getNetworks();
  });
