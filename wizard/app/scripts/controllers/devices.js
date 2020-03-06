'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesCtrl
 * @description
 * # DevicesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesCtrl', function ($scope, ModelService, ConfigService, $location, $route, ProvGlobalsService) {

    $scope.view.changeRoute = true
    $scope.globalsUi = $scope.buildDefaultSettingsUI()

    console.log(
      "GLOBALSUI",
      $scope.globalsUi
    );
    

    $scope.defaultSettings = {}
    $scope.$parent.wizard.isNextDisabled = true

    var redirect = function () {
      if ($scope.wizard.isWizard) {
        nextStep()
      } else {
        $location.path("/devices/inventory")
      }
    }

    $scope.openDefaultSettings = function () {
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
    }

    var init = function () {
      ModelService.getDefaults().then(function (res) {
        console.log("RES", res);
        if (!res.data.ui_first_config) {
          redirect()
        }
        $scope.$parent.wizard.isNextDisabled = $scope.defaultSettings.ui_first_config ? true : false
        $scope.defaultSettings = res.data
        $scope.view.changeRoute = false
      }, function (err) {
        console.log(err)
      })
    }

    init()

  });
