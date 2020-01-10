'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:ModelsUICtrl
 * @description
 * # ModelsUICtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('ModelsUICtrl', function ($scope, ModelService) {

    $scope.loadingAction = false
    $scope.selectedAction = ""

    $scope.modelErrors = {
      updateReadOnlyAttribute: false,
      resetChangesNotFound: false,
      deleteChangesNotFound: false
    }

    var resetLoadingAction = function (status) {
      $scope.loadingAction = status
      setTimeout(function () {
        $scope.loadingAction = false
        $scope.$apply()
      }, 2500)
    }

    $scope.openActionModal = function (action) {
      $scope.selectedAction = action
      $("#actionsModal").modal("show")
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
        $scope.currentModel.openedSection = sectionkey
      } else {
        $scope.currentModel.openedSection = ""
      }
    }

    $scope.onVariableChanged = function (varName, type) {
      if (type == "list" && $scope.currentModel.variables[varName] == "") {
        delete $scope.currentModel.variables[varName]
      }
      $scope.$emit('variableChanged')
    }

    $scope.getOptionText = function (options, value) {
      for (var option in options) {
        if (options[option].value == value) {
          return options[option].text 
        }
      }
    }

    $scope.openExpKeys = function (expkeyk, sectionkey) {
      delete $scope.currentModel.ui[sectionkey].showingExpKeys
      if ($scope.currentModel.openedExpKeys != expkeyk) {
        $scope.currentModel.openedExpKeys = expkeyk
      } else {
        $scope.currentModel.openedExpKeys = ""
      }
    }

    var restErrStatus = function (key, title) {
      setTimeout(function () {
        $scope.modelErrors[key] = title
        resetLoadingAction("err")
        $scope.$apply()
      }, 1000)
    }

    var refreshSelects = function () {
      $('.model-container select').each(function(){
        if ($(this).hasClass("selectpicker")) {
          $(this).selectpicker('refresh')
        } else if ($(this).hasClass("combobox")) {
          $(this).combobox('refresh')
        }
      })
    }

    $scope.cancelChanges = function () {
      $scope.loadingAction = true
      $scope.currentModel.variables = angular.copy($scope.currentModel.storedVariables)
      setTimeout(function () {
        refreshSelects()
        resetLoadingAction("ok")
        $scope.$apply()
        setTimeout(function () {
          $("#actionsModal").modal("hide")
          setTimeout(function () {
            $scope.$emit('curentModelSaved')
          }, 500)
        }, 2000)
      }, 1000)
    }

    $scope.resetChanges = function () {
      $scope.loadingAction = true
      ModelService.getOriginal($scope.currentModel.name).then(function (res) {
        ModelService.patchModel($scope.currentModel.name, {
          "display_name": $scope.currentModel.name,
          "variables": res.data.variables
        }).then(function (res) {
          resetLoadingAction("ok")
          $scope.currentModel.variables = res.data.variables
          setTimeout(function () {
            $scope.hideModal("actionsModal")
          }, 2000)
        }, function (err) {
          console.log(err)
          restErrStatus("resetChangesNotFound", err.data.title)
        })
      }, function (err) {
        console.log(err)
        restErrStatus("resetChangesNotFound", err.data.title)
      })
    }

    $scope.deleteModel = function () {
      $scope.loadingAction = true
      ModelService.deleteModel($scope.currentModel.name).then(function (res) {
        resetLoadingAction("ok")
        setTimeout(function () {
          $scope.hideModal("actionsModal")
          setTimeout(function () {
            $scope.$emit('reloadModels')
          }, 500)
        }, 2000)
      }, function (err) {
        console.log(err)
        restErrStatus("deleteChangesNotFound", err.data.title)
      })
    }

    var getGlobals = function () {
      ModelService.getDefaults().then(function (res) {
        $scope.currentModel.globals = angular.copy(res.data)
        // add globals to variables
        for (var globalVariables in res.data) {
          if (!$scope.currentModel.variables[globalVariables]) {
            $scope.currentModel.variables[globalVariables] = angular.copy(res.data[globalVariables])
          }
        }
        refreshSelects()
      }, function (err) {
        console.log(err)
      })
    }

    var getVariables = function () {
      ModelService.getModel($scope.currentModel.name).then(function (res) {
        $scope.currentModel.storedVariables = angular.copy(res.data.variables)
        $scope.currentModel.variables = res.data.variables
        getGlobals()
      }, function (err) {
        console.log(err)
        restErrStatus("updateReadOnlyAttribute", err.data.title)
      })
    }

    $scope.saveCurrentModel = function () {
      $scope.loadingAction = true
      // remove globals from variables
      for (var variable in $scope.currentModel.variables) {
        if (!$scope.currentModel.storedVariables[variable] && $scope.currentModel.variables[variable] == $scope.currentModel.globals[variable]) {
          delete $scope.currentModel.variables[variable]
        }
      }
      ModelService.patchModel($scope.currentModel.name, {
        "display_name": $scope.currentModel.display_name,
        "variables": $scope.currentModel.variables
      }).then(function (res) {
        resetLoadingAction("ok")
        setTimeout(function () {
          $scope.hideModal("saveChangesConfirm")
          setTimeout(function () {
            $scope.$emit('curentModelSaved')
          }, 500)
        },2000)
        getVariables()
      }, function (err) {
        console.log(err)
        restErrStatus("updateReadOnlyAttribute", err.data.title)
      })
    }

    $('#saveChangesConfirm').on('hidden.bs.modal', function () {
      $scope.modelErrors.updateReadOnlyAttribute = false
    })

    $('#actionsModal').on('hidden.bs.modal', function () {
      $scope.modelErrors.resetChangesNotFound = false
      $scope.modelErrors.deleteChangesNotFound = false
    })

  })


