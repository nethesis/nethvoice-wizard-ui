'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesModelsCtrl
 * @description
 * # DevicesTemplatesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesModelsCtrl', function ($scope, ProvUiService, ModelService, PhoneService, $translate) {

    $scope.allModels = {}
    $scope.uiUtils = {}
    $scope.loadingVars = {}
    var defaults

    var getUiUtils = function () {
      $scope.uiUtils = ProvUiService.uiUtils()
    }

    var initDefaults = function () {
      ModelService.getDefaults().then(function (res) {
        defaults = res.data
      }, function (err) {
        console.log(err)
      })
    }

    var getModels = function () {
      ModelService.getModels().then(function (res) {
        for (var m in res.data) {
          $scope.allModels[res.data[m].name] = res.data[m]
        }
      }, function (err) {
        console.log(err)
      })
    }

    var initModelVars = function (name) {
      if ($scope.selectedModel != name) {
        $scope.loadingVars[name] = true
      }
      ModelService.getModel(name).then(function (res) {
        if (res.data.variables && !$scope.isEmpty(res.data.variables)) {
          $scope.allModels[name].variables = res.data.variables
        } else {
          $scope.allModels[name].variables = angular.copy(defaults)
        }
        setTimeout(function () {
          $scope.loadingVars[name] = false
          $scope.$apply()
        }, 1000)

        console.log("ALL MODELS", $scope.allModels);

      }, function (err) {
        console.log(err)
      })
    }

    $scope.showModel = function (name) {
      initModelVars(name)
      $scope.selectedModel = name
    }

    // initialisation
    var init = function () {
      getUiUtils()
      initDefaults()
      getModels()
    }
    init()

    $scope.$on('comboboxRepeatEnd', function(event, elem) {
      elem.parent().combobox()
    })

    $scope.$on('selectpickerRepeatEnd', function(event, elem) {
      elem.parent().selectpicker()
    })

  })


