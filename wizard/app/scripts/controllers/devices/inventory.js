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
    $scope.phonesTancredi = []; //// mockup, delete

    //// UtilService.getVendor() restituisce sempre il vendor già maiuscolo, rimuovere tutti i capitalize()

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
    $scope.addPhonesTotalSteps = 2; //// todo delete

    $scope.tasks = {}; ////
    $scope.networkScans = 0;

    $scope.pastedMacs = [];
    // $scope.showPasteMacError = []; ////
    // $scope.pastedMacUnknownVendors = []; ////

    $scope.successfulAddPhones = [];
    $scope.failedAddPhones = [];

    // $scope.cpApplyAllSelModelDisabled = true; // used by copy/paste addition gui ////

    $scope.getPhones = function () {
      console.log("getPhones(), phonesTancredi", $scope.phonesTancredi); ////

      PhoneService.getPhonesMock($scope.phonesTancredi).then(function (phonesTancredi) { ////
        $scope.getModels();
        $scope.phones = [];

        for (var phoneTancredi of phonesTancredi) {
          var phone = buildPhone(phoneTancredi);
          $scope.phones.push(phone);
        }

        console.log("getPhones()", $scope.phones); ////
      }, function (err) {
        console.log(err);
      });
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
      // $scope.modelsMap = getModelsMap($scope.models); //// remove? issues when comparing with filteredModels

      console.log("$scope.models", $scope.models); ////

      // }, function(err) { ////
      //   console.log(err);
      // });
    }

    // function getModelsMap(models) { /////
    //   var modelsMap = {};

    //   for (var model of models) {
    //     modelsMap[model.name] = {
    //       "name": model.name,
    //       "display_name": model.display_name,
    //       "model_url": model.model_url
    //     };
    //   }
    //   return modelsMap;
    // };

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
      $("#adding-modal").on('shown.bs.modal', function () {
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
      var vendor = UtilService.getVendor($scope.manualMac);

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

    $scope.clearValidationErrorsPaste = function (phone) {
      if (typeof phone !== 'undefined') {
        // clear errors for a phone
        phone.error = false;
        phone.unknownVendor = false;
      } else {
        // clear all errors
        $scope.macDuplicates = [];

        for (var phone of $scope.phonesToAdd) {
          phone.error = false;
          phone.unknownVendor = false;
        }
      }
    }

    function validatePhonesToAdd() {
      $scope.clearValidationErrorsPaste();
      var firstErrorIndex = null;
      var macsPhonesToAdd = [];

      for (var index = 0; index < $scope.phonesToAdd.length; index++) {
        var phone = $scope.phonesToAdd[index];
        var mac = phone.mac;
        macsPhonesToAdd.push(mac);

        // check MAC address 
        if (!UtilService.checkMacAddress(mac)) {
          phone.error = true;

          if (firstErrorIndex === null) {
            firstErrorIndex = index;
          }
        }

        // check vendor
        var vendor = UtilService.getVendor(mac);
        if (!vendor) {
          phone.unknownVendor = true;
        } else {
          phone.vendor = vendor;
        }
      }

      // check duplicates
      $scope.macDuplicates = UtilService.findDuplicates(macsPhonesToAdd);

      if (firstErrorIndex === null && $scope.macDuplicates.length) {
        firstErrorIndex = $scope.phonesToAdd.indexOf($scope.macDuplicates[0]);
      }

      // if there are validation errors, focus the first and return
      if (firstErrorIndex !== null) {
        setTimeout(function () {
          $('#mac-phone-to-add-' + firstErrorIndex).focus();
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

    $scope.addPhonesPaste = function () { //// should become addPhones(), used by all add methods
      if (!$scope.phonesToAdd || $scope.phonesToAdd.length == 0) {
        return;
      }

      console.log("addPhonesPaste(), $scope.phonesToAdd", $scope.phonesToAdd); ////

      var validationOk = validatePhonesToAdd();

      if (!validationOk) {
        return;
      }

      $scope.pendingRequestsAddPhones = $scope.phonesToAdd.length;
      $scope.failedAddPhones = [];

      //// show loader on UI?

      // add all phones
      for (var phone of $scope.phonesToAdd) {
        var phoneTancredi = buildPhoneTancredi(phone.mac, phone.model, phone.vendor);

        PhoneService.createPhoneMock(phoneTancredi, 0.7).then(function (phoneTancrediResult) {
          $scope.phonesTancredi.push(phoneTancrediResult); //// mockup

          var phone = buildPhone(phoneTancrediResult);

          console.log("success", phone.mac); ////
          $scope.pendingRequestsAddPhones--;

          $scope.successfulAddPhones.push(phone);

          if ($scope.pendingRequestsAddPhones == 0) {
            showResultsAddPhones();
          }
        }, function (err) {
          console.log("fail", err); ////
          console.log(err.error.title);
          $scope.pendingRequestsAddPhones--;
          $scope.failedAddPhones.push(err.phone); //// todo show error description in UI?

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
        $scope.deletePhoneToAdd(phone);
      }
      $scope.getPhones();
    }

    // builds a phone object starting from a phone object got from Tancredi
    function buildPhone(phoneTancredi) {
      var mac = phoneTancredi.mac;
      var model;
      var filteredModels = $scope.filteredModels(mac);

      if (phoneTancredi.model) {
        // model = $scope.modelsMap[phoneTancredi.model]; ////
        model = filteredModels.find(function (m) {
          return phoneTancredi.model === m.name;
        });
      }

      var vendor = phoneTancredi.display_name;
      if (!vendor) {
        vendor = UtilService.getVendor(mac);
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

    // builds a phone object that can be passed to Tancredi
    function buildPhoneTancredi(mac, model, vendor) {
      if (model) {
        model = model.name;
      }

      if (!vendor) {
        vendor = UtilService.getVendor(mac);

        if (vendor) {
          vendor = UtilService.capitalize(vendor);
        }
      }

      var phone = {
        "mac": mac,
        "model": model,
        "display_name": vendor
      }

      console.log("buildPhoneTancredi(): built phone", phone); ////

      return phone;
    }

    function validateAddPhonesManual() {
      $scope.clearValidationErrorsManual();

      // check vendor
      var vendor = UtilService.getVendor($scope.manualMac);
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
      var phoneTancredi = buildPhoneTancredi($scope.manualMac, $scope.manualModel ? $scope.manualModel.name : null);

      PhoneService.createPhoneMock(phoneTancredi, 0.7).then(function (phoneTancrediResult) {
        $scope.phonesTancredi.push(phoneTancredi); //// mockup

        var phone = buildPhone(phoneTancrediResult);
        console.log("success", phoneTancrediResult.mac); ////
        $scope.successfulAddPhones.push(phone);
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

      // remove separators (if any)
      $scope.pastedMacsText = $scope.pastedMacsText.replace(/,|;/g, ' ').trim();

      // split MAC addresses on whitespace
      $scope.pastedMacs = $scope.pastedMacsText.split(/\s+/);

      // $scope.pastedVendors = []; //// delete?
      $scope.pastedModels = []; //// delete?
      $scope.pasteFilteredModels = []; //// delete?

      $scope.pastedMacsText = "";
      $scope.phonesToAdd = [];

      for (var index = 0; index < $scope.pastedMacs.length; index++) {
        var phone = { "mac": $scope.pastedMacs[index] };
        $scope.phonesToAdd.push(phone);

        // update model list
        $scope.macPhoneToAddChanged(phone);
      }

      // perform validation
      validatePhonesToAdd();

      $scope.getVendorApplyToAllList();
    }

    $scope.vendorApplyToAllChanged = () => {
      console.log("vendorApplyToAllChanged(), vendorApplyToAll", $scope.vendorApplyToAll); ////

      if (!$scope.vendorApplyToAll) {
        $scope.modelApplyToAllList = [];
        return;
      }

      $scope.modelApplyToAllList = $scope.models.filter(function (model) {
        return model.name.toLowerCase().startsWith($scope.vendorApplyToAll.toLowerCase());
      });
    }

    $scope.modelApplyToAllChanged = () => { //// delete?
      console.log("modelApplyToAllChanged, modelApplyToAll", $scope.modelApplyToAll); ////
    }

    $scope.getVendorApplyToAllList = () => {
      var vendorApplyToAllSet = new Set();

      for (var phone of $scope.phonesToAdd) {
        var vendor = phone.vendor;
        if (!vendor) {
          vendor = UtilService.getVendor(phone.mac);
          phone.vendor = vendor;
        }

        if (vendor) {
          vendorApplyToAllSet.add(vendor);
        }
      }

      $scope.vendorApplyToAllList = [...vendorApplyToAllSet];
    }

    // section for mac copy/paste addition - start
    //
    // copy/paste addition: extract all brands and models
    // $scope.linkVendorsToModels = () => {
    //   /////// delete?
    //   $scope.cpAllModels = {}; // all models
    //   for (let i = 0; i < $scope.phonesToAdd.length; i++) {
    //     for (let k = 0; k < $scope.phonesToAdd[i].filteredModels.length; k++) {
    //       if (!$scope.cpAllModels[$scope.phonesToAdd[i].filteredModels[k].name]) {
    //         $scope.cpAllModels[$scope.phonesToAdd[i].filteredModels[k].name] = $scope.phonesToAdd[i].filteredModels[k];
    //       }
    //     }
    //   }
    //   let tempBrand;
    //   $scope.cpAllBrands = {}; // all brands
    //   for (let i = 0; i < $scope.phonesToAdd.length; i++) {
    //     tempBrand = UtilService.getVendor($scope.phonesToAdd[i].mac);
    //     if (tempBrand) { // controlla il formato del mac, se contiene i : o meno
    //       var tempBrandCapitalized = UtilService.capitalize(tempBrand);
    //       $scope.cpAllBrands[tempBrandCapitalized] = [];
    //       for (const key in $scope.cpAllModels) {
    //         if (key.indexOf(tempBrand) !== -1) {
    //           $scope.cpAllBrands[tempBrandCapitalized].push($scope.cpAllModels[key]);
    //         }
    //       }
    //     }
    //   }
    // };

    // $scope.getCpAllBrandsLength = () => { ////
    //   if ($scope.cpAllBrands) {
    //     return Object.keys($scope.cpAllBrands).length;
    //   } else {
    //     return 0;
    //   }
    // };

    // copy/paste addition: user has selected one brand
    // $scope.cpAllBrandsChanged = () => { ////
    //   $scope.cpAllSelModels = [];
    //   for (const b in $scope.cpAllBrands) {
    //     if (b === $scope.cpAllBrandsValue) {
    //       $scope.cpAllSelModels = $scope.cpAllBrands[b];
    //     }
    //   }
    // };

    // copy/paste addition: user has selected one model
    // $scope.cpAllModelsChanged = () => { ////
    //   if ($scope.cpAllSelModelsValue !== null && $scope.cpAllSelModelsValue !== '') {
    //     $scope.cpApplyAllSelModelDisabled = false;
    //   } else {
    //     $scope.cpApplyAllSelModelDisabled = true;
    //   }
    // };

    $scope.applyModelToAll = () => {
      for (var phone of $scope.phonesToAdd) {
        var vendor = phone.vendor;
        if (!vendor) {
          vendor = UtilService.getVendor($scope.phonesToAdd[i].mac);
          phone.vendor = vendor;
        }

        if (vendor && $scope.modelApplyToAll.name.toLowerCase().startsWith(vendor.toLowerCase())) {
          phone.model = $scope.modelApplyToAll;
        }
      }
    }

    // copy/paste addition: apply the selected model to all devices of that type
    // $scope.cpApplyAllSelModel = () => { /////////
    //   let tempBrand;
    //   let indexToSet = {}; // indexes of combobox array models
    //   for (let i = 0; i < $scope.phonesToAdd.length; i++) {
    //     tempBrand = UtilService.getVendor($scope.phonesToAdd[i].mac);

    //     if (tempBrand) {
    //       tempBrand = UtilService.capitalize(tempBrand);
    //     }

    //     if (!indexToSet[tempBrand]) {
    //       indexToSet[tempBrand] = [];
    //     }
    //     indexToSet[tempBrand].push(i);
    //   }
    //   for (let i = 0; i < $scope.cpAllSelModels.length; i++) { // set model for combobox array models
    //     if ($scope.cpAllSelModels[i].name === $scope.cpAllSelModelsValue) {
    //       for (let k = 0; k < indexToSet[$scope.cpAllBrandsValue].length; k++) {
    //         $scope.pastedModels[indexToSet[$scope.cpAllBrandsValue][k]] = $scope.cpAllSelModels[i];
    //       }
    //       return;
    //     }
    //   }
    // };
    // section for mac copy/paste addition - end

    $scope.macPhoneToAddChanged = function (phone) {
      $scope.clearValidationErrorsPaste(phone);

      if (!phone.mac) {
        phone.vendor = null;
        phone.filteredModels = [];
        return;
      }
      var vendor = UtilService.getVendor(phone.mac);

      if (vendor) {
        phone.vendor = UtilService.capitalize(vendor);
        phone.filteredModels = $scope.models.filter(function (model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
      } else {
        phone.vendor = null;
        phone.filteredModels = [];

        // unknown vendor warning
        if (phone.mac.length >= 8) {
          phone.unknownVendor = true;
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

      var phoneTancredi = $scope.phonesTancredi.find(function (phoneTancredi) { //// mockup
        return phoneTancredi.mac === phone.mac;
      });

      if (phone.model) { //// mockup
        phoneTancredi.model = phone.model.name;
      } else {
        phoneTancredi.model = null;
      }

      console.log('setPhoneModel()', phone); ////
    };

    $scope.filteredModels = function (mac) { //// move inside UtilService?
      var vendor = UtilService.getVendor(mac);

      if (vendor) {
        var filteredModels = $scope.models.filter(function (model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
        return filteredModels;
      } else {
        return [];
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

      $scope.phonesTancredi = $scope.phonesTancredi.filter(function (phone) { //// mockup
        return phone.mac !== $scope.phoneToDelete.mac;
      });

      $('#deletePhoneModal').modal('hide');
      $scope.getPhones();
    }

    $scope.deletePhoneToAdd = function (phoneToDelete) {
      // $scope.pastedMacs.splice(index, 1); //// delete
      // $scope.showPasteMacError.splice(index, 1);
      // $scope.pastedVendors.splice(index, 1);
      // $scope.pastedModels.splice(index, 1);
      // $scope.pasteFilteredModels.splice(index, 1);
      // $scope.pastedMacUnknownVendors.splice(index, 1);

      $scope.phonesToAdd = $scope.phonesToAdd.filter(function (phone) {
        return phone.mac.toUpperCase() !== phoneToDelete.mac.toUpperCase();
      });

      $scope.getVendorApplyToAllList();
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
