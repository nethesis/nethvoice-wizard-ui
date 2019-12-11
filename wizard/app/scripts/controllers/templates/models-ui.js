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

    $scope.loadingActions = {
      cancelChanges: false,
      resetValues: false,
      deleteDevices: false
    }

    $scope.selectedAction = ""

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

    $scope.openExpKeys = function (expkeyk, sectionkey) {
      delete $scope.currentModel.ui[sectionkey].showingExpKeys
      if ($scope.currentModel.openedExpKeys != expkeyk) {
        $scope.currentModel.openedExpKeys = expkeyk
      } else {
        $scope.currentModel.openedExpKeys = ""
      }
    }

    $scope.cancelChanges = function () {
      $scope.currentModel.variables = $scope.currentModel.storedVariables
      $("#actionsModal").modal("hide")
      // $('select.tier').each(function(){ 
      //   $(this).data('combobox').refresh();
      // })
    }

    $scope.resetChanges = function () {

    }

    $scope.deleteModel = function () {

    }

    $scope.saveCurrentModel = function () {
      ModelService.patchModel($scope.currentModel.name, {
          "display_name": $scope.currentModel.name,
          "variables": $scope.currentModel.variables
        }).then(function (res) {
        $scope.hideModal("saveChangesConfirm")
      }, function (err) {
        console.log(err)
      })
    }

  })


