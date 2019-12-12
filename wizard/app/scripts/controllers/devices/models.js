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
    $scope.loadingAction = false

    $scope.modelsErrors = {
      newModelCustomNameEmpty: false,
      newModelSourceEmpty: false,
      apiError: false
    }

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

    $scope.checkCurrentModelChanged = function (name) {
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

    var resetModelsErrors = function () {
      for (var err in $scope.modelsErrors) {
        if ($scope.modelsErrors[err] == true) {
          $scope.modelsErrors[err] = false
        }
      }
    }

    var newModelValidErr = function () {
      var hasErrors = false
      if ($scope.newModelSourceName == "") {
        $scope.modelsErrors.newModelSourceEmpty = true
        hasErrors = true
      }
      if ($scope.newModelCustomName == "") {
        $scope.modelsErrors.newModelCustomNameEmpty = true
        hasErrors = true
      }
      if (hasErrors) {
        return true
      }
      return false
    }

    var resetLoadingAction = function (status) {
      $scope.loadingAction = status
      setTimeout(function () {
        $scope.loadingAction = false
      }, 1000)
    }

    $scope.createNewModel = function () {
      if (newModelValidErr()) {
        return
      }
      resetModelsErrors()
      var newModelName = $scope.newModelSourceName + "-" + $scope.newModelCustomName + '-' + Date.now()
      $scope.loadingAction = true
      ModelService.getModel($scope.newModelSourceName).then(function (res) {
        ModelService.createModel({
          "name": newModelName,
          "display_name":  res.data.display_name + "-" + $scope.newModelCustomName,
          "variables": res.data.variables
        }).then(function (res) {
          $("#newModelModal").modal("hide")
          $scope.newModelSourceName = ''
          $scope.newModelCustomName = ''
          getModels()
          resetLoadingAction("ok")
          setTimeout(function () {
            $scope.checkCurrentModelChanged(newModelName)
            $('#modelFromSelect').selectpicker('refresh');
          }, 1000)
        }, function (err) {
          console.log(err)
          $scope.modelsErrors.apiError = err.data.title
          resetLoadingAction("err")
        })
      }, function (err) {
        console.log(err)
        $scope.modelsErrors.apiError = err.data.title
        resetLoadingAction("err")
      })
    }

    // initialisation
    angular.element(document).ready(function () {
      getModels()
    })

    $('#newModelModal').on('hidden.bs.modal', function () {
      resetModelsErrors()
      $scope.newModelSourceName = ''
      $scope.newModelCustomName = ''
      $scope.$apply()
      setTimeout(function () {
        $('#modelFromSelect').selectpicker('refresh');
      }, 500)
    })

    $('#newModelModal').on('changed.bs.select', function () {
      resetModelsErrors()
      $scope.newModelCustomName = ''
      $scope.$apply()
    })

  })


