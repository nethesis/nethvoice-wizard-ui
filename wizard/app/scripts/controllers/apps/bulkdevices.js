'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:BulkdevicesCtrl
 * @description
 * # BulkdevicesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('BulkdevicesCtrl', function ($scope, $filter, PhoneService, ModelService, UserService, ProfileService) {
    $scope.models = [];
    $scope.phones = [];
    $scope.numFiltered = 0;
    $scope.numSelected = 0;
    $scope.uiLoaded = false;
    $scope.errors = [];
    $scope.errorId = 0;

    var chooseModel = {
      "id": 0,
      "display_name": $filter('translate')('Choose') + "..."
    };

    $scope.phonesTancredi = [ //// mockup
      { mac: "11-22-33-44-55-66", model: null, display_name: null },
      { mac: "00-04-13-11-22-31", model: "snom100", display_name: "Snom" },
      { mac: "0C-38-3E-99-88-72", model: "fanvil-600", display_name: "Fanvil" },
      { mac: "00-15-65-55-55-53", model: "fanvil-600", display_name: "Yealink" },
      { mac: "00-04-13-11-22-34", model: "snom200", display_name: "Snom" },
      { mac: "00-04-13-11-22-35", model: "snom100", display_name: "Snom" },
      { mac: "00-04-13-11-22-36", model: "snom200", display_name: "Snom" },
      { mac: "0C-38-3E-99-88-77", model: null, display_name: "Fanvil" },
      { mac: "00-15-65-55-55-58", model: null, display_name: "Yealink" }
    ];

    function init() {
      $scope.uiLoaded = false;
      initDateTimePicker();

      Promise.all([
        ModelService.getModels(),
        UserService.list(true),
        PhoneService.getPhones(),
        ProfileService.allGroups(),
        PhoneService.getDelayedReboot()
      ]).then(function (res) {
        gotModels(res[0].data);
        gotUsers(res[1].data);
        gotPhones(res[2].data);
        gotGroups(res[3].data);
        gotDelayedReboot(res[4].data);
        $scope.uiLoaded = true;
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving data");
        $scope.uiLoaded = true;
      });
    }

    $scope.$watch("phones", function (newValue, oldValue) {
      $scope.numFiltered = 0;
      $scope.numSelected = 0;
      $scope.allSelectedSameVendor = null;
      $scope.allSelectedSameModel = "";
      $scope.allSelectedSameReboot = "";

      // remove 'Choose' option from models
      $scope.models = $scope.models.filter(function (model) {
        return model.id !== 0;
      });

      for (var phone of $scope.phones) {
        if (phone.filtered) {
          $scope.numFiltered++;
        }

        if (phone.selected) {
          $scope.numSelected++;

          // check if all phones selected have the same vendor
          if ($scope.allSelectedSameVendor == null && phone.vendor) {
            $scope.allSelectedSameVendor = phone.vendor;
          } else if (phone.vendor !== $scope.allSelectedSameVendor || !phone.vendor) {
            $scope.allSelectedSameVendor = false;
          }

          // check if all phones selected have the same model
          if ($scope.allSelectedSameModel === "") {
            $scope.allSelectedSameModel = phone.model;
          } else if (phone.model !== $scope.allSelectedSameModel) {
            $scope.allSelectedSameModel = false;
          }

          // check if all phones selected have the same reboot time
          if ($scope.allSelectedSameReboot === "") {
            $scope.allSelectedSameReboot = phone.delayedReboot;
          } else if (phone.delayedReboot !== $scope.allSelectedSameReboot) {
            $scope.allSelectedSameReboot = false;
          }
        }
      }
    }, true);

    $scope.deleteError = function (errorId) {
      // console.log("deleting error", errorId); ////

      $scope.errors = $scope.errors.filter(function (error) {
        var keep = error.id !== errorId; ////
        // console.log("keep", error.id, keep);
        return keep;
      });
    }

    function addErrorNotification(error, i18nMessage) {
      error.i18nMessage = i18nMessage;
      error.id = $scope.errorId;
      $scope.errorId++;
      $scope.errors.push(error);

      // console.log("error length", $scope.errors.length); ////
      // for (var error of $scope.errors) { ////
      //   console.log("error", error.id);
      // }
      // console.log("-----"); ////
    }

    function gotDelayedReboot(rebootData) {
      console.log("reboot data", rebootData); ////

      // clear old reboot times
      for (var phone of $scope.phones) {
        phone.delayedReboot = null;
      }

      // set updated reboot times
      for (const [mac, time] of Object.entries(rebootData)) {
        var phone = $scope.phones.find(function (phone) {
          return phone.mac === mac;
        });

        if (phone) {
          phone.delayedReboot = time.hours + ":" + time.minutes;
        }
      }
    }

    function getDelayedReboot() {
      $scope.uiLoaded = false;

      PhoneService.getDelayedReboot().then(function (success) {
        $scope.uiLoaded = true;
        gotDelayedReboot(success.data);
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving delayed reboot data");
        $scope.uiLoaded = true;
      });
    }

    function gotPhones(phones) {
      $scope.filteredGroup = null;
      $scope.filteredModel = null;
      $scope.phones = [];

      for (var phoneTancredi of phones) { //// uncomment
        // for (var phoneTancredi of $scope.phonesTancredi) { //// mockup
        var phone = PhoneService.buildPhone(phoneTancredi, $scope.models);
        phone.filtered = true;
        $scope.phones.push(phone);
      }

      //// mockup associate users and phones
      // for (var i = 0; i < $scope.users.length; i++) {
      //   setPhysicalExtension($scope.users[i], $scope.phones[i]);
      // }

      // set phone.user
      for (var phone of $scope.phones) {
        var phoneUser = $scope.users.find(function (user) {
          for (var device of user.devices) {
            if (device.mac === phone.mac) {
              return true;
            }
          }
        });

        if (phoneUser) {
          phone.user = phoneUser;
        }

        //// mockup: get next reboot date
        // phone.delayedReboot = moment().format('HH:mm');
      }
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

    function setPhysicalExtension(user, device) { //// mockup, remove
      var model = null;
      if (device.model) {
        model = device.model.name;
      }

      UserService.createPhysicalExtension({
        mainextension: user.default_extension,
        mac: device.mac || null,
        model: model,
        line: null,
        web_user: 'admin',
        web_password: 'admin'
      }).then(function (res) {
        console.log("associated", user, device); ////
      }, function (err) {
        console.log(err);
      });
    };

    function gotUsers(users) {
      // normalize MAC address of user devices
      for (var user of users) {
        for (var device of user.devices) {
          if (device.mac) {
            var normalizedMac = PhoneService.normalizeMacAddress(device.mac);
            device.mac = normalizedMac;
          }
        }
      }
      $scope.users = users;
    }

    $scope.getUsers = function () {
      $scope.uiLoaded = false;

      UserService.list(true).then(function (res) {
        $scope.uiLoaded = true;
        gotUsers(res.data);
        console.log("users", $scope.users); ////
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving users");
        $scope.uiLoaded = true;
      });
    }

    function gotGroups(groups) {
      $scope.groups = groups;

      // associate users and groups
      for (var user of $scope.users) {
        setUserGroups(user);
      }
    }

    $scope.getGroups = function () {
      $scope.uiLoaded = false;

      ProfileService.allGroups().then(function (res) {
        $scope.uiLoaded = true;
        gotGroups(res.data);
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving groups");
        $scope.uiLoaded = true;
      });
    }

    function setUserGroups(user) {
      ProfileService.getUserGroup(user.id).then(function (res) {
        user.groups = res.data;
      }, function (err) {
        if (err.status != 404) {
          console.log(err);
        }
      });
    }

    $scope.clearFilters = function () {
      $scope.filteredGroup = null;
      $scope.filteredModel = null;
      $scope.filterPhones();
    }

    $scope.filterPhones = function () {
      var defaultFilterValue = false;

      if (!$scope.filteredGroup && !$scope.filteredModel) {
        // no filter, show all phones
        defaultFilterValue = true;
      }

      // clear selection and set default filter value
      for (var phone of $scope.phones) {
        phone.filtered = defaultFilterValue;
        phone.selected = false;
      }

      if (!$scope.filteredGroup && !$scope.filteredModel) {
        // no filter, nothing else to do
        return;
      }

      if ($scope.filteredGroup) {
        var users = $scope.users.filter(function (user) {
          return user.groups.includes($scope.filteredGroup.id);
        })

        for (var user of users) {
          for (var device of user.devices) {
            var phone = $scope.phones.find(function (phone) {
              return phone.mac === device.mac;
            });

            if (phone) {
              if ($scope.filteredModel) {
                // group and model selected
                if (phone.model && phone.model.name === $scope.filteredModel.name) {
                  phone.filtered = true;
                }
              } else {
                // group selected only
                phone.filtered = true;
              }
            }
          }
        }
      } else {
        // model selected only
        for (var phone of $scope.phones) {
          if (phone.model && phone.model.name === $scope.filteredModel.name) {
            phone.filtered = true;
          }
        }
      }
    }

    function gotModels(models) {
      $scope.models = models;
    }

    $scope.getModels = function () {
      $scope.uiLoaded = false;

      ModelService.getModels().then(function (res) {
        $scope.uiLoaded = true;
        gotModels(res.data);
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving models");
        $scope.uiLoaded = true;
      });
    }

    $scope.bulkModelSave = function () {
      var model = null;
      if ($scope.bulkModel) {
        model = $scope.bulkModel.name;
      }
      var setModelPromises = [];

      for (var phone of $scope.phones) {
        if (phone.selected) {
          setModelPromises.push(PhoneService.setPhoneModel(phone.mac, model));
        }
      }
      $scope.uiLoaded = false;

      Promise.all(setModelPromises).then(function (success) {
        $scope.uiLoaded = true;
        $scope.getPhones();
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error setting phone model");
        $scope.uiLoaded = true;
      });
      $('#bulkModelModal').modal('hide');
    }

    function bulkRebootSet() {
      var tokens = $scope.bulkReboot.split(":");
      var hours = tokens[0];
      var minutes = tokens[1];
      var rebootData = {};

      for (var phone of $scope.phones) {
        if (phone.selected) {
          rebootData[phone.mac] = {
            "hours": hours,
            "minutes": minutes
          }
        }
      }
      $scope.uiLoaded = false;
      PhoneService.setPhoneDelayedReboot(rebootData).then(function (success) {
        // reload updated data
        $scope.uiLoaded = true;
        getDelayedReboot();
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error setting delayed reboot");
        $scope.uiLoaded = true;
      });
    }

    function bulkRebootCancel() {
      var rebootCancelMacs = [];

      for (var phone of $scope.phones) {
        if (phone.selected) {
          rebootCancelMacs.push(phone.mac);
        }
      }
      $scope.uiLoaded = false;
      PhoneService.deletePhoneDelayedReboot(rebootCancelMacs).then(function (success) {
        // reload updated data
        $scope.uiLoaded = true;
        getDelayedReboot();
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error canceling delayed reboot");
        $scope.uiLoaded = true;
      });
    }

    $scope.bulkRebootSave = function () {
      if ($scope.bulkRebootSwitch) {
        $scope.bulkReboot = $('#reboot-timepicker-value').val();
      } else {
        $scope.bulkReboot = null;
      }

      if ($scope.bulkReboot) {
        bulkRebootSet();
      } else {
        bulkRebootCancel();
      }
      $('#bulkRebootModal').modal('hide');
    }

    // for (var phone of $scope.phones) { ////
    //   if (phone.selected) {
    //     if ($scope.bulkReboot) {
    // delayedRebootPromises.push(PhoneService.setPhoneDelayedReboot(phone.mac, hours, minutes)); ////

    // } else {
    // clear delayed reboot
    // delayedRebootPromises.push(PhoneService.deletePhoneDelayedReboot(phone.mac)); ////
    //     }
    //   }
    // }
    // $scope.uiLoaded = false;

    // Promise.all(delayedRebootPromises).then(function (success) {
    //   // reload updated data
    //   $scope.uiLoaded = true;
    //   getDelayedReboot();
    // }, function (err) {
    //   console.log(err);
    //   addErrorNotification(err.data, "Error setting delayed reboot");

    //   $scope.$apply(function () {
    //     $scope.uiLoaded = true;
    //   });
    // });
    // }

    // function setPhoneDelayedReboot(phone, delayedReboot) { ////
    //   $scope.uiLoaded = false;

    //   if (!delayedReboot) {
    //     // clear delayed reboot
    //     PhoneService.deletePhoneDelayedReboot(mac).then(function (success) {
    //       // reload updated data
    //       getDelayedReboot();
    //     }, function (err) {
    //       console.log(err);
    //       addErrorNotification(err.data, "Error setting delayed reboot");
    //       $scope.uiLoaded = true;
    //     });
    //   } else {
    //     var tokens = delayedReboot.split(":");
    //     var hours = tokens[0];
    //     var minutes = tokens[1];
    //     PhoneService.setPhoneDelayedReboot(phone.mac, hours, minutes).then(function (success) {
    //       // reload updated data
    //       getDelayedReboot();
    //     }, function (err) {
    //       console.log(err);
    //       addErrorNotification(err.data, "Error setting delayed reboot");
    //       $scope.uiLoaded = true;
    //     });
    //   }
    // }

    $scope.showSetModelModal = function () {
      $scope.filteredModels = $scope.models.filter(function (model) {
        return model.name.toLowerCase().startsWith($scope.allSelectedSameVendor.toLowerCase());
      });

      if ($scope.allSelectedSameModel != false) {
        $scope.bulkModel = $scope.allSelectedSameModel;
      } else {
        $scope.bulkModel = chooseModel;
        $scope.filteredModels.push(chooseModel);
      }
      $('#bulkModelModal').modal('show');
    }

    $scope.showSetRebootModal = function () {
      $scope.bulkReboot = $scope.allSelectedSameReboot;

      if ($scope.bulkReboot != false || $scope.bulkReboot === "") {
        // phonese selected have the same reboot value
        if ($scope.bulkReboot) {
          $scope.bulkRebootSwitch = true;
        } else {
          // same none reboot value
          $scope.bulkRebootSwitch = false;
        }
        $('#reboot-timepicker-value').val($scope.bulkReboot);
      } else {
        // phonese selected have different reboot values
        $scope.bulkRebootSwitch = false;
        $('#reboot-timepicker-value').val(null);
      }
      $('#bulkRebootModal').modal('show');
    }

    $scope.selectAllOrNoneToggle = function () {
      var value = null;

      if ($scope.numSelected !== $scope.numFiltered) {
        // select all
        value = true;
      } else {
        // select none
        value = false;
      }

      for (var phone of $scope.phones) {
        if (phone.filtered) {
          phone.selected = value;
        }
      }
    }

    function initDateTimePicker() {
      // initialize reboot-timepicker
      $('#reboot-timepicker').datetimepicker({
        allowInputToggle: true,
        format: 'HH:mm',
        keyBinds: {
          enter: function () {
            this.hide();
          }
        }
      });
    }

    init();
  });
