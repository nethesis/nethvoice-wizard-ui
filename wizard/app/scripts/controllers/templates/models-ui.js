'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:ModelsUICtrl
 * @description
 * # ModelsUICtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('ModelsUICtrl', function ($scope, $interval, $location, ModelService) {

    $scope.loadingAction = false
    $scope.selectedAction = ""
    $scope.modelsInfoMsg = ""
    $scope.selectOptionsInterval = ""
    $scope.selectOptionsLimit = 11
    $scope.shownPasswords = false

    $scope.modelErrors = {
      updateReadOnlyAttribute: false,
      resetChangesNotFound: false,
      deleteChangesNotFound: false
    }

    angular.element("#modelsUIUrl").ready(function () {
      $scope.inModal = document.querySelector("#modelsUIUrl").parentNode.parentNode.parentNode.parentNode.parentNode.classList.value.includes("modal")
      $scope.isConfigurations = $location.path() == "/configurations" ? true : false
    })

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
      $scope.destroyAllSelects()
      delete $scope.currentModel.ui[sectionkey].showingKeys
      $scope.selectOptionsLimit = 11
      $interval.cancel($scope.selectOptionsInterval)
      $scope.selectOptionsInterval = $interval(function (index) {
        $scope.selectOptionsLimit += 10
        if (index == 5 || index == 10  || index == 15 || index == 20 || index == 25 || index == 30 || index == 35 || index == 42) {
          refreshSelects()
        }
      }, 1000, 43)
      if ($scope.currentModel.openedSection != sectionkey) {
        $scope.currentModel.openedSection = sectionkey
      } else {
        $scope.currentModel.openedSection = ""
        $interval.cancel($scope.selectOptionsInterval)
      }
    }

    $scope.onVariableChanged = function (varName, type) {
      if ($scope.currentModel.variables[varName] == "") {
        delete $scope.currentModel.variables[varName]
      }

      console.log("GLOBAL VARIABLES", $scope.currentModel.globals)
      console.log("STORED VARIABLES", $scope.currentModel.storedVariables)
      console.log("VARIABLES", $scope.currentModel.variables)

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
          $(this).combobox("refresh")
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
        }, 1500)
      }, 1500)
    }

    $scope.resetChanges = function () {
      $scope.loadingAction = true
      ModelService.getOriginal($scope.currentModel.name).then(function (res) {
        for (var storedVariable in $scope.currentModel.storedVariables) {
          if (!res.data.variables[storedVariable]) {
            res.data.variables[storedVariable] = null
          }
        }
        ModelService.patchModel($scope.currentModel.name, {
          "display_name": $scope.currentModel.name,
          "variables": res.data.variables
        }).then(function (res2) {
          $scope.currentModel.variables = angular.copy(res.data.variables)
          $scope.currentModel.storedVariables = angular.copy(res.data.variables)
          setTimeout(function () {
            refreshSelects()
            resetLoadingAction("ok")
            $scope.$apply()
            setTimeout(function () {
              $scope.hideModal("actionsModal")
            }, 1500)
          }, 1000)
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
        }, 1500)
      }, function (err) {
        console.log(err)
        restErrStatus("deleteChangesNotFound", err.data.title)
      })
    }

    $scope.hideModelsInfoMsg = function () {
      localStorage.setItem('modelsInfoMsgHide', true)
      $scope.modelsInfoMsg = true
    }

    var getModelsInfoMsg = function () {
      $scope.modelsInfoMsg = localStorage.getItem('modelsInfoMsgHide')
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

    var resetErrMessage = function () {
      $scope.modelErrors.updateReadOnlyAttribute = false
      $scope.modelErrors.resetChangesNotFound = false
      $scope.modelErrors.deleteChangesNotFound = false
    }

    $scope.saveCurrentModel = function () {
      resetErrMessage()
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
        if ($scope.isConfigurations) {
          $scope.hideModal("singleModelModal")
        }
      }, function (err) {
        console.log(err)
        restErrStatus("updateReadOnlyAttribute", err.data.title)
      })
    }

    $scope.toggleShowPassword = function (variable) {
      $scope.currentModel.shownPasswords[variable] ? delete $scope.currentModel.shownPasswords[variable] : $scope.currentModel.shownPasswords[variable] = true
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

    getModelsInfoMsg()

    $('#saveChangesConfirm').on('hidden.bs.modal', function () {
      $scope.modelErrors.updateReadOnlyAttribute = false
    })

    $('#actionsModal').on('hidden.bs.modal', function () {
      $scope.modelErrors.resetChangesNotFound = false
      $scope.modelErrors.deleteChangesNotFound = false
    })

  })


