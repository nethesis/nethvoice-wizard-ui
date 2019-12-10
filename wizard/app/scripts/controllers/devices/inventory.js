'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesInventoryCtrl
 * @description
 * # InventoryCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesInventoryCtrl', function ($scope, $interval, $q, $timeout, PhoneService, ModelService, UtilService, ConfigService, DeviceService, LocalStorageService) {
    $scope.phones = [];
    $scope.models = [];
    $scope.tasks = {};
    $scope.networkScanInProgress = false;
    $scope.uiLoaded = false;
    $scope.pastedMacs = [];
    $scope.successfulAddPhones = [];
    $scope.failedAddPhones = [];
    $scope.errors = [];
    $scope.errorId = 0;
    $scope.modelLoaders = {};

    function gotModels(models) {
      $scope.models = models;
    }

    function gotPhones(phonesTancredi) {
      $scope.phones = [];

      for (var phoneTancredi of phonesTancredi) {
        var phone = PhoneService.buildPhone(phoneTancredi, $scope.models);
        $scope.phones.push(phone);
      }
    }

    function gotNetworks(networks) {
      // assign network names
      for (const [networkName, network] of Object.entries(networks)) {
        network.name = networkName;
      }
      $scope.networks = networks;

      for (var eth in $scope.networks) {
        $scope.tasks[eth] = {};
      }
    }

    function init() {
      $scope.uiLoaded = false;
      $scope.hideInventoryHelp = LocalStorageService.get('hideInventoryHelp');

      Promise.all([
        ModelService.getModels(),
        PhoneService.getPhones(),
        ConfigService.getNetworks()
      ]).then(function (res) {
        gotModels(res[0].data);
        gotPhones(res[1].data);
        gotNetworks(res[2].data);

        $scope.$apply(function () {
          $scope.uiLoaded = true;
        });
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving data");
        $scope.uiLoaded = true;
      });
    }

    $scope.setHideInventoryHelp = function () {
      $scope.hideInventoryHelp = true;
      LocalStorageService.set('hideInventoryHelp', $scope.hideInventoryHelp);
    }

    $scope.getPhones = function () {
      $scope.uiLoaded = false;

      PhoneService.getPhones().then(function (success) {
        $scope.uiLoaded = true;
        gotPhones(success.data);
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving phones");
        $scope.uiLoaded = true;
      });
    };

    $scope.getModels = function () {
      $scope.uiLoaded = false;

      ModelService.getModels().then(function (success) {
        $scope.uiLoaded = true;
        gotModels(success.data);
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving models");
        $scope.uiLoaded = true;
      });
    }

    // modal used to add mac using different methods
    $scope.showGenericAddingModal = val => {
      $scope.addModalType = val;
      $('#adding-modal').modal("show");
    };

    $scope.showPasteModal = () => {
      $scope.phonesToAdd = [];
      $scope.pastedMacs = [];
      $scope.successfulAddPhones = [];
      $scope.failedAddPhones = [];
      $scope.pendingRequestsAddPhones = 0;
      $scope.showResultsAddPhones = false;
      $scope.showGenericAddingModal('copypaste');
      initCopyPasteMacUI();
    }

    let initCopyPasteMacUI = () => {
      initPopovers();

      $("#adding-modal").on('shown.bs.modal', function () {
        $('#paste-textarea').focus();
      });
    };

    function initPopovers() {
      $('[data-toggle=popover]').popovers()
        .on('hidden.bs.popover', function (e) {
          $(e.target).data('bs.popover').inState.click = false;
        });
    }

    $scope.showManualModal = function () {
      $scope.phonesToAdd = [];
      $scope.successfulAddPhones = [];
      $scope.failedAddPhones = [];
      $scope.pendingRequestsAddPhones = 0;
      $scope.showResultsAddPhones = false;
      $scope.showGenericAddingModal('manual');

      $timeout(function () {
        $('#manual-mac').focus();
      }, 500);
    }

    $scope.showScanModal = function () {
      $scope.phonesToAdd = [];
      $scope.successfulAddPhones = [];
      $scope.failedAddPhones = [];
      $scope.pendingRequestsAddPhones = 0;
      $scope.showResultsAddPhones = false;
      $scope.showNoPhoneToAddFromNetwork = false;
      $scope.showGenericAddingModal('scanning');
    }

    $scope.addPhoneManual = function () {
      var validationOk = validateAddPhonesManual();

      if (!validationOk) {
        return;
      }

      var phone = {
        "mac": $scope.manualMac,
        "model": $scope.manualModel,
        "vendor": $scope.manualVendor,
        "filteredModels": $scope.manualFilteredModels
      };

      $scope.phonesToAdd.push(phone);
      $scope.getVendorApplyToAllList();
      validatePhonesToAdd();

      $scope.manualMac = "";
      $scope.manualModel = null;
      $scope.manualFilteredModels = [];
      $('#manual-mac').focus();
    }

    $scope.inputMacManualChanged = function () {
      $scope.clearValidationErrorsManual();

      if (!$scope.manualMac) {
        $scope.manualVendor = null;
        $scope.manualFilteredModels = [];
        return;
      }

      // update model list
      var vendor = PhoneService.getVendor($scope.manualMac);

      if (vendor) {
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

    $scope.netmaskToScanChanged = function () {
      $scope.showNetmaskToScanError = false;
    }

    $scope.startNetworkScan = function () {
      $scope.showNetmaskToScanError = false;
      $scope.showNoPhoneToAddFromNetwork = false;

      var netName = $scope.networkToScan.name;

      if ($scope.networkToScan && (!$scope.networkToScan.netmask || !PhoneService.checkNetmask($scope.networkToScan.netmask))) {
        $scope.showNetmaskToScanError = true;
      }

      if ($scope.showNetmaskToScanError) {
        return;
      }

      // start scan
      $scope.phonesToAdd = [];
      $scope.networkScanInProgress = true;
      $scope.tasks[netName].currentProgress = Math.floor((Math.random() * 50) + 10);
      DeviceService.startScan($scope.networkToScan).then(function (res) {
        $scope.tasks[netName].promise = $interval(function () {
          UtilService.taskStatus(res.data.result).then(function (res) {
            if (res.data.progress < 100) {
              $scope.tasks[netName].currentProgress = res.data.progress;
              $scope.tasks[netName].errorCount = 0;
            } else if (res.data.progress == 100) {
              $scope.tasks[netName].currentProgress = res.data.progress;
              $scope.tasks[netName].errorCount = 0;
              $interval.cancel($scope.tasks[netName].promise);
              networkScanCompleted($scope.networkToScan);
            } else {
              console.log(res.error);
              if ($scope.tasks[netName].errorCount < appConfig.MAX_TRIES) {
                $scope.tasks[netName].errorCount++;
              } else {
                $interval.cancel($scope.tasks[netName].promise);
                $scope.networkScanInProgress = false;
                $scope.tasks[netName].currentProgress = -1;
              }
            }
          }, function (err) {
            console.log(err);
            if ($scope.tasks[netName].errorCount < appConfig.MAX_TRIES) {
              $scope.tasks[netName].errorCount++;
            } else {
              $interval.cancel($scope.tasks[netName].promise);
              $scope.networkScanInProgress = false;
              $scope.tasks[netName].currentProgress = -1;
            }
          });
        }, appConfig.INTERVAL_POLLING);
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error scanning network");
        $scope.tasks[netName].currentProgress = -1;
      });
    }

    function networkScanCompleted(network) {
      DeviceService.phoneListByNetwork(network).then(function (res) {
        // skip phones already present in inventory
        var phonesFromScan = res.data.filter(function (phoneFromScan) {
          var macFromScan = phoneFromScan.mac.replace(/:/g, "-");

          var alreadyPresent = $scope.phones.find(function (phone) {
            return phone.mac === macFromScan;
          });
          return !alreadyPresent;
        });

        if (phonesFromScan.length == 0) {
          $scope.showNoPhoneToAddFromNetwork = true;
        }

        for (var phoneFromScan of phonesFromScan) {
          var phoneToAdd = {
            "mac": phoneFromScan.mac.replace(/:/g, "-"),
            "ipv4": phoneFromScan.ipv4
          }
          $scope.phonesToAdd.push(phoneToAdd);

          // update model list
          $scope.macPhoneToAddChanged(phoneToAdd);
        }
        $scope.getVendorApplyToAllList();
        $scope.networkScanInProgress = false;
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving network scan results");
        $scope.networkScanInProgress = false;
      });
    }

    $scope.cancelAllNetworkScans = function (netName) {
      for (var netName in $scope.tasks) {
        $interval.cancel($scope.tasks[netName].promise);
        $scope.networkScanInProgress = false;
      }
    }

    $scope.clearValidationErrorsManual = function () {
      $scope.showManualMacError = false;
      $scope.manualMacUnknownVendor = false;
      $scope.manualMacDuplicated = false;
    }

    $scope.clearValidationErrorsPhonesToAdd = function (phone) {
      if (typeof phone !== 'undefined') {
        // clear errors for a phone
        phone.validationError = false;
        phone.unknownVendor = false;
      } else {
        // clear all errors
        $scope.macDuplicates = [];

        for (var phone of $scope.phonesToAdd) {
          phone.validationError = false;
          phone.unknownVendor = false;
        }
      }
    }

    function validatePhonesToAdd() {
      $scope.clearValidationErrorsPhonesToAdd();
      var firstErrorIndex = null;
      var macsPhonesToAdd = [];

      for (var index = 0; index < $scope.phonesToAdd.length; index++) {
        var phone = $scope.phonesToAdd[index];
        var mac = phone.mac;
        macsPhonesToAdd.push(mac);

        // check MAC address 
        if (!PhoneService.checkMacAddress(mac)) {
          phone.validationError = true;

          if (firstErrorIndex === null) {
            firstErrorIndex = index;
          }
        }

        // check vendor
        var vendor = PhoneService.getVendor(mac);
        if (!vendor) {
          phone.unknownVendor = true;
        } else {
          phone.vendor = vendor;
        }
      }

      // check duplicates
      $scope.macDuplicates = UtilService.findDuplicates(macsPhonesToAdd);

      if (firstErrorIndex === null && $scope.macDuplicates.length) {
        firstErrorIndex = $scope.phonesToAdd.findIndex(function (phone) {
          return phone.mac === $scope.macDuplicates[0];
        });
      }

      // if there are validation errors, focus the first and return
      if (firstErrorIndex !== null && firstErrorIndex >= 0) {
        $timeout(function () {
          $('#mac-phone-to-add-' + firstErrorIndex).focus();
        }, 400);

        return false;
      } else {
        return true;
      }
    }

    $scope.addPhones = function () {
      if (!$scope.phonesToAdd || $scope.phonesToAdd.length == 0) {
        return;
      }

      var validationOk = validatePhonesToAdd();

      if (!validationOk) {
        return;
      }

      $scope.pendingRequestsAddPhones = $scope.phonesToAdd.length;
      $scope.failedAddPhones = [];

      $scope.addPhonesInProgress = true;

      // add all phones
      for (var phone of $scope.phonesToAdd) {
        var phoneTancredi = PhoneService.buildPhoneTancredi(phone.mac, phone.model, phone.vendor);
        // set formatted MAC
        phone.mac = phoneTancredi.mac;

        PhoneService.createPhone(phoneTancredi).then(function (success) {
          var phone = PhoneService.buildPhone(success.data, $scope.models);
          $scope.pendingRequestsAddPhones--;
          $scope.successfulAddPhones.push(phone);

          if ($scope.pendingRequestsAddPhones == 0) {
            showResultsAddPhones();
          }
        }, function (err) {
          console.log(err.error.data.title);
          $scope.pendingRequestsAddPhones--;
          $scope.failedAddPhones.push(err);

          if ($scope.pendingRequestsAddPhones == 0) {
            showResultsAddPhones();
          }
        });
      }
    }

    function showResultsAddPhones() {
      $scope.addPhonesInProgress = false;
      $scope.showResultsAddPhones = true;

      for (var phone of $scope.successfulAddPhones) {
        $scope.deletePhoneToAdd(phone);
      }

      // show server errors on UI
      for (var error of $scope.failedAddPhones) {
        var errorPhone = error.phone;

        var phone = $scope.phonesToAdd.find(function (p) {
          return p.mac === errorPhone.mac;
        });

        phone.serverError = error.error.data.title;
      }

      // server error popovers
      $timeout(function () {
        initPopovers();
      }, 500);

      $scope.getPhones();
    }

    function validateAddPhonesManual() {
      $scope.clearValidationErrorsManual();

      // check duplicated MAC
      var duplicatedPhone = $scope.phonesToAdd.find(function (phone) {
        return phone.mac === $scope.manualMac;
      });

      if (duplicatedPhone) {
        $scope.manualMacDuplicated = true;
      }

      if (!PhoneService.checkMacAddress($scope.manualMac)) {
        $scope.showManualMacError = true;
      }

      if ($scope.manualMacDuplicated || $scope.showManualMacError) {
        $('#manual-mac').focus();
        return false;
      } else {
        return true;
      }
    }

    $scope.getManualFilteredModelsCount = () => {
      return $scope.manualFilteredModels && $scope.manualFilteredModels.length > 0 ? false : true;
    };

    $scope.parsePastedMacs = function () {
      // remove separators (if any)
      $scope.pastedMacsText = $scope.pastedMacsText.replace(/,|;/g, ' ').trim();

      // split MAC addresses on whitespace
      $scope.pastedMacs = $scope.pastedMacsText.split(/\s+/);

      $scope.pastedMacsText = "";
      $scope.phonesToAdd = [];

      for (var index = 0; index < $scope.pastedMacs.length; index++) {
        var phone = { "mac": $scope.pastedMacs[index] };
        $scope.phonesToAdd.push(phone);

        // update model list
        $scope.macPhoneToAddChanged(phone);
      }

      validatePhonesToAdd();
      $scope.getVendorApplyToAllList();
    }

    $scope.vendorApplyToAllChanged = () => {
      if (!$scope.vendorApplyToAll) {
        $scope.modelApplyToAllList = [];
        return;
      }

      $scope.modelApplyToAllList = $scope.models.filter(function (model) {
        return model.name.toLowerCase().startsWith($scope.vendorApplyToAll.toLowerCase());
      });
    }

    $scope.getVendorApplyToAllList = () => {
      var vendorApplyToAllSet = new Set();

      for (var phone of $scope.phonesToAdd) {
        var vendor = phone.vendor;
        if (!vendor) {
          vendor = PhoneService.getVendor(phone.mac);
          phone.vendor = vendor;
        }

        if (vendor) {
          vendorApplyToAllSet.add(vendor);
        }
      }

      $scope.vendorApplyToAllList = [...vendorApplyToAllSet];
    }

    $scope.applyModelToAll = () => {
      for (var phone of $scope.phonesToAdd) {
        var vendor = phone.vendor;
        if (!vendor) {
          vendor = PhoneService.getVendor(phone.mac);
          phone.vendor = vendor;
        }

        if (vendor && $scope.modelApplyToAll.name.toLowerCase().startsWith(vendor.toLowerCase())) {
          var model = phone.filteredModels.find(function (m) {
            return m.name === $scope.modelApplyToAll.name;
          })

          if (model) {
            phone.model = model;
          }
        }
      }
    }

    $scope.macPhoneToAddChanged = function (phone) {
      $scope.clearValidationErrorsPhonesToAdd(phone);

      if (!phone.mac) {
        phone.vendor = null;
        phone.filteredModels = [];
        return;
      }

      // re-check duplicated MAC
      var macsPhonesToAdd = [];

      for (var p of $scope.phonesToAdd) {
        macsPhonesToAdd.push(p.mac);
      }
      $scope.macDuplicates = UtilService.findDuplicates(macsPhonesToAdd);

      // check vendor
      var vendor = PhoneService.getVendor(phone.mac);

      if (vendor) {
        phone.vendor = vendor;
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
      var model = null;
      if (phone.model) {
        model = phone.model.name;
      }
      $scope.modelLoaders[phone.mac] = 'loading';

      PhoneService.setPhoneModel(phone.mac, model).then(function (res) {
        $scope.modelLoaders[phone.mac] = 'success';
        $timeout(function () {
          $scope.modelLoaders[phone.mac] = null;
        }, 3000);
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error setting phone model");
        $scope.modelLoaders[phone.mac] = 'fail';
        $timeout(function () {
          $scope.modelLoaders[phone.mac] = null;
        }, 3000);
      });
    };

    $scope.showDeletePhoneModal = function (phone) {
      $scope.phoneToDelete = phone;
    }

    $scope.deletePhone = function () {
      $scope.uiLoaded = false;

      PhoneService.deletePhone($scope.phoneToDelete.mac).then(function (res) {
        $scope.getPhones();

        // delete delayed reboot (if present)
        PhoneService.deletePhoneDelayedReboot([$scope.phoneToDelete.mac]).then(function (res) {
          $scope.uiLoaded = true;
        }, function (err) {
          console.log(err);
          addErrorNotification(err.data, "Error canceling delayed reboot");
          $scope.uiLoaded = true;
        });
        $('#deletePhoneModal').modal('hide');
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error deleting phone");
        $scope.uiLoaded = true;
      });
    }

    $scope.deletePhoneToAdd = function (phoneToDelete) {
      $scope.phonesToAdd = $scope.phonesToAdd.filter(function (phone) {
        return phone.mac.toUpperCase() !== phoneToDelete.mac.toUpperCase();
      });

      $scope.getVendorApplyToAllList();
    }

    $scope.deletePhoneToAddIndex = function (index) {
      $scope.phonesToAdd.splice(index, 1);
      $scope.getVendorApplyToAllList();
    }

    $scope.orderByValue = function (value) {
      return value;
    };

    $scope.getNetworks = function () {
      $scope.uiLoaded = false;

      ConfigService.getNetworks().then(function (success) {
        $scope.uiLoaded = true;
        gotNetworks(success.data);
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving network interfaces");
        $scope.uiLoaded = true;
      });
    };

    $scope.deleteError = function (errorId) {
      $scope.errors = $scope.errors.filter(function (error) {
        return error.id !== errorId;
      });
    }

    function addErrorNotification(error, i18nMessage) {
      error.i18nMessage = i18nMessage;
      error.id = $scope.errorId;
      $scope.errorId++;
      $scope.errors.push(error);
    }

    $scope.postModels = function () { //// mockup
      var models = [
        {
          "name": "snom100",
          "display_name": "Snom IP phone v100"
        }, {
          "name": "snom200",
          "display_name": "Snom IP phone v200"
        }, {
          "name": "fanvil-600",
          "display_name": "Fanvil IP phone v600"
        }, {
          "name": "fanvil-700",
          "display_name": "Fanvil IP phone v700"
        }, {
          "name": "yealink-1000",
          "display_name": "Yealink IP phone v1000"
        }
      ];

      for (var model of models) {
        ModelService.createModel(model).then(function (success) {
          console.log("postModels", success); ////
        }, function (err) {
          console.log(err);
        });
      }
    }

    // $scope.postModels(); ////
    init();
  });
