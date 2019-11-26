'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:BulkdevicesCtrl
 * @description
 * # BulkdevicesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('BulkdevicesCtrl', function ($scope, PhoneService, UserService) {
    $scope.phones = [];
    $scope.numFiltered = 0;
    $scope.numSelected = 0;

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
    $scope.models = [];

    $scope.$watch("phones", function (newValue, oldValue) {
      // count phones filtered, phones selected and check if all selected phones have the same model
      $scope.numFiltered = 0;
      $scope.numSelected = 0;
      $scope.allSelectedSameModel = true;
      var sameModel = null;

      for (var phone of $scope.phones) {
        if (phone.filtered) {
          $scope.numFiltered++;
        }

        if (phone.selected) {
          $scope.numSelected++;

          if (sameModel == null) {
            sameModel = phone.model;
          } else {
            if (phone.model !== sameModel) {
              $scope.allSelectedSameModel = false;
            }
          }
        }
      }
    }, true);

    $scope.getPhones = function () {
      console.log("getPhones(), phonesTancredi", $scope.phonesTancredi); ////

      PhoneService.getPhonesMock($scope.phonesTancredi).then(function (phonesTancredi) { ////
        $scope.getModels();
        $scope.phones = [];

        for (var phoneTancredi of phonesTancredi) {
          var phone = PhoneService.buildPhone(phoneTancredi, $scope.models);
          phone.filtered = true;
          $scope.phones.push(phone);
        }

        console.log("getPhones()", $scope.phones); ////

        $scope.getUsers();
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getUsers = function () {
      // UserService.list(true).then(function (res) { ////
      //   $scope.users = res.data;
      // }, function (err) {
      //   console.log(err);
      // });

      $scope.users = [ ///// mockup
        {
          "username": "user1",
          "webPhone": true,
          "devices": [
            {
              "extension": 201,
              "mac": "00:04:13:11:22:31"
            }
          ]
        },
        {
          "username": "user2",
          "webPhone": false,
          "devices": [
            {
              "extension": 202,
              "mac": "0C:38:3E:99:88:72"
            }
          ]
        },
        {
          "username": "user3",
          "webPhone": true,
          "devices": [
            {
              "extension": 203,
              "mac": "00:15:65:55:55:53"
            }
          ]
        },
        {
          "username": "user4",
          "webPhone": false,
          "devices": [
            {
              "extension": 204,
              "mac": "00:04:13:11:22:34"
            }
          ]
        }
      ];

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
        phone.template = "template2";

      }

      $scope.getGroups();
    }

    $scope.getGroups = function () {
      $scope.groups = ["Assistenza", "Commerciale", "Sviluppo"]; //// mockup

      ///// mockup
      $scope.groupUserMap = {
        "Assistenza": [
          "user1",
          "user2"
        ],
        "Commerciale": [
          "user2",
          "user3"
        ],
        "Sviluppo": [
          "user1",
          "user2",
          "user3"
        ]
      }
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
        var groupUsernames = $scope.groupUserMap[$scope.filteredGroup];

        for (var username of groupUsernames) {
          var user = $scope.users.find(function (user) {
            return user.username === username;
          });

          for (var device of user.devices) {
            var phone = $scope.phones.find(function (phone) {
              return phone.mac === device.mac;
            });

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
      $scope.templates = ["template1", "template2", "template3"]; ///// mockup
    }

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

    $scope.bulkTemplateSave = function () {
      for (var phone of $scope.phones) {
        if (phone.selected) {
          phone.template = $scope.bulkTemplate;
        }
      }
      $('#bulkTemplateModal').modal('hide');
    }

    $scope.bulkWebPhoneSave = function () {
      for (var phone of $scope.phones) {
        if (phone.selected && phone.user) {
          phone.user.webPhone = $scope.bulkWebPhone;
        }
      }
      $('#bulkWebPhoneModal').modal('hide');
    }

    $scope.bulkRebootSave = function () {
      $scope.bulkReboot = $('#reboot-datetimepicker-value').val();

      for (var phone of $scope.phones) {
        if (phone.selected) {
          phone.nextReboot = $scope.bulkReboot;
        }
      }
      $('#bulkRebootModal').modal('hide');
    }

    // $scope.bulkEditSave = function () { ////
    //   console.log("bulkEditSave"); ////

    //   // workaround to handle bulk next reboot value
    //   $scope.bulkReboot = $('#reboot-datetimepicker-value').val();
    //   // $('#reboot-datetimepicker').datetimepicker('setDate', $scope.bulkReboot);

    //   console.log("bulkEditSave, $scope.bulkReboot", $scope.bulkReboot); /////

    //   for (var phone of $scope.phones) {
    //     if (phone.selected) {
    //       phone.template = $scope.bulkTemplate;
    //       phone.nextReboot = $scope.bulkReboot;
    //       if (phone.user) {
    //         phone.user.webPhone = $scope.bulkWebPhone;
    //       }
    //     }
    //   }
    //   $('#bulkEdit').modal('hide');
    // }

    // $scope.showEditModal = function () { ////
    //   $('#bulkEdit').modal('show');
    // }

    $scope.showSetTemplateModal = function () {
      $scope.bulkTemplate = null;

      if ($scope.numSelected == 1) {
        // show current template in modal
        for (var phone of $scope.phones) {
          if (phone.selected) {
            $scope.bulkTemplate = phone.template;
            break;
          }
        }
      }
      $('#bulkTemplateModal').modal('show');
    }

    $scope.showSetWebPhoneModal = function () {
      $scope.bulkWebPhone = null;

      if ($scope.numSelected == 1) {
        // show current web phone status in modal
        for (var phone of $scope.phones) {
          if (phone.selected) {
            if (phone.user) {
              $scope.bulkWebPhone = phone.user.webPhone;
            }
            break;
          }
        }
      }
      $('#bulkWebPhoneModal').modal('show');
    }

    $scope.showSetRebootModal = function () {
      $scope.bulkReboot = null;

      if ($scope.numSelected == 1) {
        // show current reboot value in modal
        for (var phone of $scope.phones) {
          if (phone.selected) {
            $scope.bulkReboot = phone.nextReboot;
            break;
          }
        }
      }
      $('#reboot-datetimepicker-value').val($scope.bulkReboot);
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
    $scope.getPhones();
    $scope.getTemplates();
  });
