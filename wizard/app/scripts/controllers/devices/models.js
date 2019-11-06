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

    $scope.inventoryModels = {}
    $scope.loadingModels = {}
    $scope.currentModel = {
      ui: {},
      variables: {},
      name: {},
      loadingSections: {},
      openedSection: ""
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
      if ($scope.currentModel.openedSection != sectionkey) {
        $scope.currentModel.loadingSections[sectionkey] = true
      }
      $scope.currentModel.openedSection = sectionkey
      $timeout(function () {
        $scope.currentModel.loadingSections[sectionkey] = false
        $scope.$apply()
      }, 1000)
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
        $scope.currentModel.loadingSections = {}
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


