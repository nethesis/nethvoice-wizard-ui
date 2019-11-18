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

    $scope.globalUi = {
      "name": "Default Settings",
      "data": [{
          "variable": "id_addr",
          "default_value": "",
          "description": "IP address of phone server",
          "type": "text"
        },
        {
          "variable": "id_addr",
          "default_value": "",
          "description": "Configuration Type",
          "type": "list",
          "options": [
            {
              "text": "TFTP/FTP",
              "value": "tftp"
            },
            {
              "text": "Web",
              "value": "http"
            }
          ]
        },
        {
          "variable": "config_firm_dir",
          "default_value": "/var/lib/tftpnethvoice/",
          "description": "Global Final Config & Firmware Directory",
          "type": "text"
        },
        {
          "variable": "time_zone",
          "default_value": "",
          "description": "Time Zone",
          "type": "list",
          "options": [
            {
              "text": "Italian/Italy",
              "value": "it"
            }
          ]
        }
      ]
    }

    $scope.inventoryModels = {}
    $scope.loadingModels = {}
    $scope.currentModel = {
      ui: {},
      variables: {},
      name: {},
      openedSection: "",
      openedExpKeys: "",
      showingKeys: "",
      showingExpKeys: ""
    }

    var getModelUI = function (model) {
      switch (model.brand.toLowerCase()) {

        case "fanvil":
          var map = getModelMap(ProvFanvilService.map(), model.name)
          return {
            map: map,
            softKeys: ProvFanvilService.softKeysUI(map),
            lineKeys: ProvFanvilService.lineKeysUI(map),
            expKeys: ProvFanvilService.expKeysUI(map),
            preference: ProvFanvilService.preferenceUI(map),
            general: ProvFanvilService.generalUI(map),
            network: ProvFanvilService.networkUI(map),
            provisioning: ProvFanvilService.provisioningUI(map),
          }
          break;
      
        case "gigaset":
          return {}
          break;
      
        case "sangoma":
          return {}
          break;
          
        case "snom":
          return {}
          break;

        case "yealink":
          return {}
          break;

        default:
          return null
          break;
      }

    }

    var getModelMap = function (map, name) {
      for (var fam in map) {
        if (map[fam][name] != null) {
          return map[fam][name]
        }
      }
    }

    // get all models
    var getModels = function () {
      ModelService.getModels().then(function (res) {
        $scope.inventoryModels = res.data
      }, function (err) {
        console.log(err)
      })
    }

    $scope.isKeysSection = function (keyName) {
      if (keyName.toLowerCase().includes("keys")) {
        return true
      } else {
        return false
      }
    }

    $scope.isExpKeysSection = function (keyName) {
      if (keyName.toLowerCase().includes("exp")) {
        return true
      } else {
        return false
      }
    }

    $scope.openSection = function (sectionkey) {
      delete $scope.currentModel.ui[sectionkey].showingKeys
      $scope.currentModel.openedSection = sectionkey
    }

    $scope.openExpKeys = function (expkeyk, sectionkey) {
      delete $scope.currentModel.ui[sectionkey].showingExpKeys
      $scope.currentModel.openedExpKeys = expkeyk
    }

    $scope.setCurrentModel = function (name) {
      var nameSplit = name.split("-"),
          modelName = nameSplit[1],
          modelBrand = nameSplit[0],
          modelUI = getModelUI({
            name: modelName,
            brand: modelBrand
          })

      if ($scope.currentModel.name != name) {
        $scope.loadingModels[name] = true
      }
      ModelService.getModel(modelName).then(function (res) {
        $scope.currentModel.ui = modelUI
        $scope.currentModel.variables = res.data.variables
        $scope.currentModel.name = name
        $scope.currentModel.openedSection = ""
        $scope.currentModel.openedExpKeys = ""
        setTimeout(function () {
          $scope.loadingModels[name] = false
          $scope.$apply()
        }, 1000)
      }, function (err) {
        console.log(err)
      })
    }

    // initialisation
    getModels()

  })


