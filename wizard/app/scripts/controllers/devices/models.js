'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesModelsCtrl
 * @description
 * # DevicesTemplatesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesModelsCtrl', function ($scope, ModelService, ProvGlobalsService, $translate, $timeout) {

    // $scope.globalsUi = ProvGlobalsService.getGlobalsUI()
    $scope.view.changeRoute = true
    $scope.inventoryModels = []
    $scope.defaultSettings = {}
    $scope.loadingModels = {}
    $scope.loadingActions = false
    $scope.newModelSourceName = ""
    $scope.newModelCustomName = ""
    $scope.newModelShown = false
    $scope.newModelsErrors = {
      newModelCustomNameEmpty: false,
      newModelSourceEmpty: false,
      apiError: false
    }

    var modelNameChecking = ""

    // get the models of the phones in the inventory
    var getModels = function () {
      ModelService.getUsedModels().then(function (res) {
        $scope.inventoryModels = res.data
        $scope.view.changeRoute = false
        ModelService.getModels().then(function (res) {
          for (let model in res.data) {
            if (res.data[model].name.split("-").length > 2) {
              $scope.inventoryModels.push(res.data[model])
            }
          }
        }, function (err) {
          console.log(err)
        })
      }, function (err) {
        $scope.view.changeRoute = false
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

    $scope.checkCurrentModelChanged = function (name) {
      if (!$scope.currentModel) {
        $scope.setCurrentModel(name)
      } else if ($scope.currentModel.name != name) {
        if ($scope.currentModel.changed) {
          modelNameChecking = name
          $("#modelChangeConfirm").modal("show")
        } else {
          $scope.setCurrentModel(name)
        }
      } else {
        $scope.currentModel.hidden = !$scope.currentModel.hidden
      }
    }

    $scope.openDefaultSettings = function () {
      ModelService.getDefaults().then(function (res) {
        $scope.defaultSettings = res.data
        $scope.connectivityCheck({
          "host": res.data.hostname,
          "scheme": res.data.provisioning_url_scheme
        })
        $("#defaultSettingsModal").modal("show")
        setTimeout(function () {
          $('#defaultSettingsModal select').each(function(){
            if ($(this).hasClass("selectpicker")) {
              $(this).selectpicker('refresh')
            } else if ($(this).hasClass("combobox")) {
              $(this).combobox('refresh')
            }
          })
        }, 500)
      }, function (err) {
        console.log(err)
      })
    }

    $scope.onModelSetContinue = function () {
      $("#modelChangeConfirm").modal("hide")
      $scope.setCurrentModel(modelNameChecking)
    }

    $scope.createPhone = function () {
      ModelService.addPhone({
        "mac": "9C-75-14-14-23-34"
      }).then(function (res) {
        // add phones
      }, function (err) {
        console.log(err)
      })
    }

    $scope.listPhones = function () {
      ModelService.getPhones().then(function (res) {
        // get phones
      }, function (err) {
        console.log(err)
      })
    }

    $scope.listModels = function () {
      ModelService.getUsedModels().then(function (res) {
        // get models
      }, function (err) {
        console.log(err)
      })
    }

    $scope.showNewModelModal = function () {
      $("#newModelModal").modal("show")
      $scope.newModelShown = true
    }

    var resetModelsErrors = function () {
      for (var err in $scope.newModelsErrors) {
        if ($scope.newModelsErrors[err] == true) {
          $scope.newModelsErrors[err] = false
        }
      }
    }

    var newModelValidErr = function () {
      var hasErrors = false
      if ($scope.newModelSourceName == "") {
        $scope.newModelsErrors.newModelSourceEmpty = true
        hasErrors = true
      }
      if ($scope.newModelCustomName == "") {
        $scope.newModelsErrors.newModelCustomNameEmpty = true
        hasErrors = true
      }
      if (hasErrors) {
        return true
      }
      return false
    }

    var resetLoadingAction = function (status) {
      $scope.loadingActions = status
      setTimeout(function () {
        $scope.loadingActions = false
        $scope.$apply()
      }, 1000)
    }

    $scope.createNewModel = function () {
      if (newModelValidErr()) {
        return
      }
      resetModelsErrors()
      var newModelName = $scope.newModelSourceName + "-" + $scope.newModelCustomName + '-' + Date.now()
      $scope.loadingActions = true
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
          $scope.newModelsErrors.apiError = err.data.title
          resetLoadingAction("err")
        })
      }, function (err) {
        console.log(err)
        $scope.newModelsErrors.apiError = err.data.title
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

    $scope.$on('reloadModels', function() { 
      getModels()
    })

    $scope.$on('$routeChangeStart', function() {
      $scope.view.changeRoute = true
      $scope.globalsUi = null
      $scope.inventoryModels = null
      $scope.defaultSettings = null    
    })

  })
