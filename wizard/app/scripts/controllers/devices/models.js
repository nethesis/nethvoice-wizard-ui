'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesModelsCtrl
 * @description
 * # DevicesTemplatesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesModelsCtrl', function ($scope, ModelService, ProvFanvilService, $translate) {

    $scope.inventoryModels = {}
    $scope.loadingModels = {}
    $scope.currentModel = {}

    var getModelUI = function (model) {
      switch (model.brand.toLowerCase()) {

        case "fanvil":
          var map = getModelMap(ProvFanvilService.map(), model.name)
          return {
            map: map,
            settings: ProvFanvilService.settingsUI(map),
            preference: ProvFanvilService.preferenceUI(map),
            network: ProvFanvilService.networkUI(map),
            provisioning: ProvFanvilService.provisioningUI(map),
            softKeys: ProvFanvilService.softKeysUI(map),
            lineKeys: ProvFanvilService.lineKeysUI(map),
            expKeys: ProvFanvilService.expKeysUI(map),
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
        $scope.currentModel = {
          ui: modelUI,
          variables: res.data.variables,
          name: name
        }

        console.log("CURRENT MODEL", $scope.currentModel);

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

    // dom events
    $scope.$on('comboboxRepeatEnd', function(event, elem) {
      elem.parent().combobox()
    })

    $scope.$on('selectpickerRepeatEnd', function(event, elem) {
      elem.parent().selectpicker()
    })

  })


