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

    $scope.inventoryModels = {}
    $scope.loadingModels = {}

    // get all models
    var getModels = function () {
      ModelService.getModels().then(function (res) {
        $scope.inventoryModels = res.data
      }, function (err) {
        console.log(err)
      })
    }

    // function for the currentModel creation
    $scope.setCurrentModel = function (name) {
      $scope.buildModel(name).then(function (res) {
        if ($scope.currentModel.name != name) {
          $scope.loadingModels[name] = true
        }
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


