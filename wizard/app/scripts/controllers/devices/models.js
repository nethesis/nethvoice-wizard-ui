'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesModelsCtrl
 * @description
 * # DevicesTemplatesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesModelsCtrl', function ($scope, ModelService, ProvFanvilService, $translate, $timeout) {

    $scope.globalUi = ModelService.getDefaultsUI()
    $scope.view.changeRoute = true

    $scope.inventoryModels = {}
    $scope.loadingModels = {}

    $scope.newModelSourceName = ""
    $scope.newModelCustomName = ""
    $scope.newModelShown = false

    var modelNameChecking = "",
        currentModelChanged = false

    // get all models
    var getModels = function () {
      ModelService.getModels().then(function (res) {
        $scope.inventoryModels = res.data
        $scope.view.changeRoute = false
      }, function (err) {
        $scope.view.changeRoute = false
        console.log(err)
      })
    }

    // function for the currentModel creation
    $scope.setCurrentModel = function (name) {
      if ($scope.currentModel.name != name) {
        currentModelChanged = false
        $scope.loadingModels[name] = true
        $scope.buildModel(name).then(function (res) {

          console.log("CURRENT MODEL", $scope.currentModel)

          setTimeout(function () {
            $scope.loadingModels[name] = false
            $scope.$apply()
          }, 1000)
        }, function (err) {
          console.log(err)
        })
      } else {
        $scope.currentModel.hidden = !$scope.currentModel.hidden
      }
    }

    $scope.checkCurrentModelStatus = function (name) {
      if ($scope.currentModel.name != name) {
        if (currentModelChanged) {
          console.log("CURRENT MODEL CHANGED ")
          modelNameChecking = name
          $("#modelChangeConfirm").modal("show")
        } else {
          $scope.setCurrentModel(name)
        }
      } else {
        $scope.currentModel.hidden = !$scope.currentModel.hidden
      }
    }

    $scope.onModelSetContinue = function () {
      $("#modelChangeConfirm").modal("hide")
      $scope.setCurrentModel(modelNameChecking)
    }

    $scope.onVariableChanged = function (variable) {
      if (!currentModelChanged) {
        currentModelChanged = true
      }
      $scope.currentModel.changedVariables.push(variable)
      console.log("CURRENT MODEL", $scope.currentModel)
    }

    $scope.createPhone = function () {
      ModelService.addPhone({
        "mac": "9C-75-14-14-23-34"
      }).then(function (res) {
        console.log("RES POST", res);
      }, function (err) {
        console.log(err)
      })
    }

    $scope.listPhones = function () {
      ModelService.getPhones().then(function (res) {
        console.log("RES GET", res)
      }, function (err) {
        console.log(err)
      })
    }

    // $scope.createModel = function () {
    //   ModelService.addModel({
    //     "name": "Fanvil-X5S",
    //     "display_name": "Fanvil-X5S",
    //     "variables": {
    //       "language_fanvil" : "English",
    //       "language_fanvil2" : "English",
    //       "soft_key1" : "dsskey2",
    //       "call_waiting" : 0,
    //       "audio_fanvil" : 0,
    //       "default_ringtone": "Type 1",
    //       "dss_transfer": "2",
    //       "time_format": "0",
    //       "date_format" : "off",
    //       "soft_key3" : "dnd",
    //       "ldap_base" : "dc:phonebook,dc:nh",
    //       "ldap_name_attr" : "cn o",
    //       "ldap_name_display" : "%cn %o",
    //       "ldap_name_filter" : "(|(cn:%)(o:%))",
    //       "ldap_number_filter" : "(|(telephoneNumber:%)(mobile:%)(homePhone:%))",
    //       "ldap_server" : "192.168.11.1",
    //       "provisioning_type" : "https",
    //       "timezone_fanvil" : "Europe/Rome",
    //       "timezone_name_fanvil" : "UTC-10",
    //       "adminpw" : "admin",
    //       "userpw" : "guest",
    //       "tones_fanvil" : "15",
    //       "voice_vlan_enable" : "0",
    //       "voice_vlan_id" : "0",
    //       "data_vlan_id" : "0",
    //       "voice_vlan_signalling" : "0",
    //       "voice_vlan_voice_priority" : "0",
    //       "data_vlan_priority" : "0",
    //       "dhcp_enable" : "66",
    //       "pnp_enable" : "0",
    //       "call_waiting" : 0,
    //       "model" : "X5S",
    //       "model_template" : "snom-MODEL.tmpl"
    //     }
    //   }).then(function (res) {
    //     console.log("RES GET", res);
    //   }, function (err) {
    //     console.log(err)
    //   })
    // }

    $scope.listModels = function () {
      ModelService.getModels().then(function (res) {
        console.log("RES GET", res);
      }, function (err) {
        console.log(err)
      })
    }

    $scope.showNewModelModal = function () {
      $("#newModelModal").modal("show")
      $scope.newModelShown = true
    }

    var displayNameToName = function (dname) {
      for (var model in $scope.inventoryModels) {
        if ($scope.inventoryModels[model].display_name = dname) {
          return $scope.inventoryModels[model].name
        }
      }
    }

    $scope.createNewModel = function () {
      var name = displayNameToName($scope.newModelSourceName)
      ModelService.getModel(name).then(function (res) {
        ModelService.createModel({
          "name": $scope.newModelSourceName + "-" + $scope.newModelCustomName + '-' + Date.now(),
          "display_name": $scope.newModelSourceName + "-" + $scope.newModelCustomName,
          "variables": res.data.variables
        }).then(function (res) {
          $("#newModelModal").modal("hide")
          $scope.newModelSourceName = ''
          $scope.newModelCustomName = ''
          getModels()
          setTimeout(function () {
            $('#modelFromSelect').selectpicker('refresh');
          }, 500)
        }, function (err) {
          console.log(err)
        })
      }, function (err) {
        console.log(err)
      })
    }

    // $scope.getDefaults = function () {
    //   ModelService.getDefaults().then(function (res) {
    //     console.log("RES", res);
    //   }, function (err) {
    //     console.log("RES", res);
    //   })
    // }

    // initialisation
    angular.element(document).ready(function () {
      getModels()
    })

  })


