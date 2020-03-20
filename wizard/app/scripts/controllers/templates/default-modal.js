'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DefaultModalUICtrl
 * @description
 * # DefaultModalUICtrl
 * Controller of the nethvoiceWizardUiApp
 */

angular.module('nethvoiceWizardUiApp')
  .controller('DefaultModalUICtrl', function ($scope, $interval, $location, ModelService, PhoneService) {

    $scope.openedSection = ""
    $scope.globalsUi = $scope.buildDefaultSettingsUI()
    $scope.selectOptionsLimit = 12
    $scope.loadingSections = []

    var resetloadingActions = function (status) {
      $scope.loadingActions = status
      setTimeout(function () {
        $scope.loadingActions = false
        $scope.$apply()
      }, 2500)
    }

    $scope.setDefaultSettings = function () {
      $scope.loadingActionss = true
      $scope.defaultSettings.ui_first_config = ""
      ModelService.setDefaults($scope.defaultSettings).then(function (res) {
        resetloadingActions("ok")
        $scope.enableNextDisabled()
        $("#defaultSettingsModal").modal("hide")
      }, function (err) {
        resetloadingActions("err")
        console.log(err)
      })
    }

    $scope.isModelsPage = function () {
      if ($location.path() == "/devices/models") {
        return true
      } else {
        return false
      }
    }

    $scope.pinnedChange = function (variable) {
      if (variable == "hostname") {
        $scope.connectivityCheck({
          "host": $scope.defaultSettings.hostname,
          "scheme": $scope.defaultSettings.provisioning_url_scheme
        })
      }
      if (variable == "provisioning_url_scheme") {
        $scope.ldapCheck()
      }
    }

    $scope.openSection = function (sectionkey) {
      $scope.destroyAllSelects(".globalsSectionContainer")
      $scope.selectOptionsLimit = 12
      $interval.cancel($scope.selectOptionsInterval)
      $scope.selectOptionsInterval = $interval(function (index) {
        $scope.selectOptionsLimit += 10
        if (index == 5 || index == 10  || index == 15 || index == 20 || index == 25 || index == 30 || index == 35 || index == 42) {
          $scope.refreshGlobalsSelects()
        }
      }, 1000, 43)
      if ($scope.openedSection != sectionkey) {
        $scope.openedSection = sectionkey
      } else {
        $scope.openedSection = ""
        $interval.cancel($scope.selectOptionsInterval)
      }
    }

  })
