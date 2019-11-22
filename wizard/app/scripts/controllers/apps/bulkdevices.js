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

    $scope.getPhones = function () {
      console.log("getPhones(), phonesTancredi", $scope.phonesTancredi); ////

      PhoneService.getPhonesMock($scope.phonesTancredi).then(function (phonesTancredi) { ////
        $scope.getModels();
        $scope.phones = [];

        for (var phoneTancredi of phonesTancredi) {
          var phone = PhoneService.buildPhone(phoneTancredi, $scope.models);
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

        //// mockup: set reboot date
        phone.nextReboot = moment().format('YYYY/MM/DD HH:mm');
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

    $scope.selectModel = function (model) {
      $scope.selectedModel = model;
      $scope.selectPhones();
    }

    $scope.selectByGroup = function (group) {
      $scope.selectedGroup = group;
      $scope.selectPhones();
    }

    $scope.selectPhones = function () {
      // clear selection
      for (var phone of $scope.phones) {
        phone.selected = false;
      }
      $scope.firstPhoneSelected = null; //// delete firstPhoneSelected ?

      if (!$scope.selectedGroup && !$scope.selectedModel) {
        // no group or model selected
        return;
      }

      if ($scope.selectedGroup) {
        var groupUsernames = $scope.groupUserMap[$scope.selectedGroup];

        for (var username of groupUsernames) {
          var user = $scope.users.find(function (user) {
            return user.username === username;
          });

          for (var device of user.devices) {
            var phone = $scope.phones.find(function (phone) {
              return phone.mac === device.mac;
            });

            if ($scope.selectedModel) {
              // group and model selected
              if (phone.model && phone.model.name === $scope.selectedModel.name) {
                phone.selected = true;

                if (!$scope.firstPhoneSelected) { //// delete firstPhoneSelected ?
                  $scope.firstPhoneSelected = phone;
                }
              }
            } else {
              // group selected only
              phone.selected = true;

              if (!$scope.firstPhoneSelected) { //// delete firstPhoneSelected ?
                $scope.firstPhoneSelected = phone;
              }
            }
          }
        }
      } else {
        // model selected only
        for (var phone of $scope.phones) {
          if (phone.model && phone.model.name === $scope.selectedModel.name) {
            phone.selected = true;

            if (!$scope.firstPhoneSelected) { //// delete firstPhoneSelected ?
              $scope.firstPhoneSelected = phone;
            }
          }
        }
      }
    }

    $scope.getTemplates = function (model) {
      $scope.templates = ["template1", "template2", "template3"]; ///// mockup
    }

    ///// invoked many times, check performance with hundreds of phones
    $scope.getNumSelected = function () {
      console.log("getNumSelected() invoked"); /////

      var numSelected = 0;

      for (var phone of $scope.phones) {
        if (phone.selected) {
          numSelected++;
        }
      }
      return numSelected;
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

    $scope.bulkEditSave = function () {
      console.log("bulkEditSave"); ////
      //// ...
      $('#bulkEdit').modal('hide');
    }

    $scope.showEditModal = function () {
      $('#bulkEdit').modal('show');

      // prepare delayed-reboot-datetimepicker
      $(function () {
        $('#delayed-reboot-datetimepicker').datetimepicker({
          allowInputToggle: true,
          showTodayButton: false,
          toolbarPlacement: 'bottom',
          sideBySide: true,
          format: 'YYYY/MM/DD HH:mm',
          icons: {
            today: 'today-button-pf'
          }
        });
      });
    }

    $scope.selectAllOrNone = function (value) {
      $scope.selectedGroup = null;
      $scope.selectedModel = null;

      for (var phone of $scope.phones) {
        phone.selected = value;
      }
    }

    $scope.manualSelectionChanged = function (phone) {
      $scope.selectedGroup = null;
      $scope.selectedModel = null;

      // set firstPhoneSelected
      $scope.firstPhoneSelected = null; //// delete firstPhoneSelected ?

      for (var phone of $scope.phones) {
        if (phone.selected) {
          $scope.firstPhoneSelected = phone; //// delete firstPhoneSelected ?
          return;
        }
      }
    }

    // returns if all selected phones have the same model
    $scope.allSelectedSameModel = function () {
      var model = null;

      for (var phone of $scope.phones) {
        if (phone.selected) {
          if (model == null) {
            model = phone.model;
          } else {
            if (phone.model !== model) {
              return false;
            }
          }
        }
      }
      return true;
    }

    $scope.getPhones();
    $scope.getTemplates();
  });
