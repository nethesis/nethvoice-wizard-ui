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
    $scope.templates = [];
    $scope.numFiltered = 0;
    $scope.numSelected = 0;
    $scope.uiLoaded = false;
    $scope.errors = [];

    var chooseTemplate = {
      "id": 0,
      "name": $filter('translate')('Choose') + "..."
    };

    $scope.phonesTancredi = [ //// mockup
      { mac: "00:04:13:11:22:31", model: "snom100", display_name: "Snom" },
      { mac: "0C:38:3E:99:88:72", model: "fanvil-600", display_name: "Fanvil" },
      { mac: "00:15:65:55:55:53", model: "fanvil-600", display_name: "Yealink" },
      { mac: "00:04:13:11:22:34", model: "snom200", display_name: "Snom" },
      { mac: "00:04:13:11:22:35", model: "snom100", display_name: "Snom" },
      { mac: "00:04:13:11:22:36", model: "snom200", display_name: "Snom" },
      { mac: "0C:38:3E:99:88:77", model: null, display_name: "Fanvil" },
      { mac: "00:15:65:55:55:58", model: null, display_name: "Yealink" }
    ];

    $scope.$watch("phones", function (newValue, oldValue) {
      $scope.numFiltered = 0;
      $scope.numSelected = 0;
      $scope.allSelectedSameModel = null;
      $scope.allSelectedSameTemplate = "";
      $scope.allSelectedSameReboot = "";

      // remove 'Choose' option from templates
      $scope.templates = $scope.templates.filter(function (template) {
        return template.id !== 0;
      });

      for (var phone of $scope.phones) {
        if (phone.filtered) {
          $scope.numFiltered++;
        }

        if (phone.selected) {
          $scope.numSelected++;

          // check if all phones selected have the same model
          if ($scope.allSelectedSameModel == null && phone.model) {
            $scope.allSelectedSameModel = phone.model;
          } else if (phone.model !== $scope.allSelectedSameModel || !phone.model) {
            $scope.allSelectedSameModel = false;
          }

          // check if all phones selected have the same template
          if ($scope.allSelectedSameTemplate === "") {
            $scope.allSelectedSameTemplate = phone.template;
          } else if (phone.template !== $scope.allSelectedSameTemplate) {
            $scope.allSelectedSameTemplate = false;
          }

          // check if all phones selected have the same reboot datetime
          if ($scope.allSelectedSameReboot === "") {
            $scope.allSelectedSameReboot = phone.nextReboot;
          } else if (phone.nextReboot !== $scope.allSelectedSameReboot) {
            $scope.allSelectedSameReboot = false;
          }
        }
      }

      // if not all phones selected have the same template, add 'Choose' option
      if (!$scope.allSelectedSameTemplate) {
        $scope.templates.push(chooseTemplate);
      }
    }, true);

    function addErrorNotification(error, errorMessage) {
      error.message = errorMessage;
      $scope.errors.push(error);
    }

    $scope.getPhones = function () {
      $scope.uiLoaded = false;

      PhoneService.getPhones().then(function (success) {
        $scope.phones = [];

        // for (var phoneTancredi of success.data) { //// uncomment
        for (var phoneTancredi of $scope.phonesTancredi) { //// mockup
          var phone = PhoneService.buildPhone(phoneTancredi, $scope.models);
          phone.filtered = true;
          $scope.phones.push(phone);
        }
        $scope.getUsers();
        $scope.uiLoaded = true;
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

    $scope.getUsers = function () {
      $scope.uiLoaded = false;

      UserService.list(true).then(function (res) { //// uncomment
        $scope.users = res.data;

        // $scope.users = [ ///// mockup
        //   {
        //     "username": "user1",
        //     "devices": [
        //       {
        //         "extension": 201,
        //         "mac": "00:04:13:11:22:31"
        //       }
        //     ]
        //   },
        //   {
        //     "username": "user2",
        //     "devices": [
        //       {
        //         "extension": 202,
        //         "mac": "0C:38:3E:99:88:72"
        //       }
        //     ]
        //   },
        //   {
        //     "username": "user3",
        //     "devices": [
        //       {
        //         "extension": 203,
        //         "mac": "00:15:65:55:55:53"
        //       }
        //     ]
        //   },
        //   {
        //     "username": "user4",
        //     "devices": [
        //       {
        //         "extension": 204,
        //         "mac": "00:04:13:11:22:34"
        //       }
        //     ]
        //   }
        // ];

        console.log("users", $scope.users); ////

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

          //// mockup: set next reboot date
          phone.nextReboot = moment().format('YYYY/MM/DD HH:mm');

          //// mockup: set phone template
          phone.template = $scope.templates[0];
        }
        $scope.uiLoaded = true;
        $scope.getGroups();
      }, function (err) { //// uncomment
        console.log(err);
        addErrorNotification(err.data, "Error retrieving users");
        $scope.uiLoaded = true;
      });
    }

    $scope.getGroups = function () {
      $scope.uiLoaded = false;

      ProfileService.allGroups().then(function (res) {
        $scope.groups = res.data;
        $scope.uiLoaded = true;
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving groups");
        $scope.uiLoaded = true;
      });

      // $scope.groups = ["Assistenza", "Commerciale", "Sviluppo"]; //// mockup

      // ///// mockup
      // $scope.groupUserMap = {
      //   "Assistenza": [
      //     "user1",
      //     "user2"
      //   ],
      //   "Commerciale": [
      //     "user2",
      //     "user3"
      //   ],
      //   "Sviluppo": [
      //     "user1",
      //     "user2",
      //     "user3"
      //   ]
      // }


      // associate users and groups
      for (var user of $scope.users) {
        setUserGroups(user);
      }
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

        // var groupUsernames = $scope.groupUserMap[$scope.filteredGroup];

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

    $scope.getTemplates = function (model) {
      $scope.templates = [ ///// mockup
        {
          "id": 1,
          "name": "template1"
        },
        {
          "id": 2,
          "name": "template2"
        },
        {
          "id": 3,
          "name": "template3"
        }
      ];

      $scope.getPhones();
    }

    $scope.getModels = function () {
      $scope.uiLoaded = false;

      ModelService.getModels().then(function (res) {
        $scope.models = res.data;
        $scope.getTemplates();
      }, function (err) {
        console.log(err);
        addErrorNotification(err.data, "Error retrieving models");
        $scope.uiLoaded = true;
      });
    }

    $scope.bulkTemplateSave = function () {
      for (var phone of $scope.phones) {
        if (phone.selected) {
          phone.template = $scope.bulkTemplate;
        }
      }
      $('#bulkTemplateModal').modal('hide');
    }

    $scope.bulkRebootSave = function () {
      if ($scope.bulkRebootSwitch) {
        $scope.bulkReboot = $('#reboot-datetimepicker-value').val();
      } else {
        $scope.bulkReboot = null;
      }

      for (var phone of $scope.phones) {
        if (phone.selected) {
          phone.nextReboot = $scope.bulkReboot;
        }
      }
      $('#bulkRebootModal').modal('hide');
    }

    $scope.showSetTemplateModal = function () {
      if ($scope.allSelectedSameTemplate !== false) {
        $scope.bulkTemplate = $scope.allSelectedSameTemplate;
      } else {
        $scope.bulkTemplate = chooseTemplate;
      }

      // remove 'Choose...' option if it's not the initial value
      if ($scope.bulkTemplate !== chooseTemplate) {
        $scope.templates = $scope.templates.filter(function (template) {
          return template.id !== 0;
        });
      }
      $scope.initialBulkTemplate = $scope.bulkTemplate;
      $('#bulkTemplateModal').modal('show');
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
        $('#reboot-datetimepicker-value').val($scope.bulkReboot);
      } else {
        // phonese selected have different reboot values
        $scope.bulkRebootSwitch = false;
        $('#reboot-datetimepicker-value').val(null);
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
      // initialize reboot-datetimepicker
      $('#reboot-datetimepicker').datetimepicker({
        minDate: new Date(),
        allowInputToggle: true,
        showTodayButton: false,
        toolbarPlacement: 'bottom',
        sideBySide: true,
        format: 'YYYY/MM/DD HH:mm',
        icons: {
          today: 'today-button-pf'
        }
      });
    }

    initDateTimePicker();
    $scope.getModels();
  });
