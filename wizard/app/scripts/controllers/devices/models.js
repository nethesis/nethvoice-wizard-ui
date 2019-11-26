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
      if ($scope.currentModel.name != name) {
        $scope.loadingModels[name] = true
        $scope.buildModel(name).then(function (res) {
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
        console.log("RES GET", res);
      }, function (err) {
        console.log(err)
      })
    }

    $scope.createModel = function () {
      ModelService.addModel({
        "name": "X6",
        "display_name": "Fanvil-X6",
        "variables": {
            "call_waiting": "0",
            "audio_fanvil": "1",
            "default_ringtone": "Type 1",
            "dss_transfer": "2",
            "ldap_server": "192.168.5.89"
        }
      }).then(function (res) {
        console.log("RES GET", res);
      }, function (err) {
        console.log(err)
      })
    }

    $scope.listModels = function () {
      ModelService.getModels().then(function (res) {
        console.log("RES GET", res);
      }, function (err) {
        console.log(err)
      })
    }

    // initialisation
    getModels()

  })


