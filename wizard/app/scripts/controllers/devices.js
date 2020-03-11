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
    $scope.defaultSettings = {}

    var currentStep = $route.current.controllerAs.split('/').length > 1 ? $route.current.controllerAs.split('/')[1] : $route.current.controllerAs.split('/')[0],
        stepCount = appConfig.STEP_MAP[currentStep],
        nextState = appConfig.STEP_WIZARD[currentStep].next

    var nextStep = function () {
      if (nextState && appConfig.STEP_WIZARD[currentStep].next) {
        $location.path(appConfig.STEP_WIZARD[currentStep].next)
        stepCount++
      }
      ConfigService.setWizard({
        status: 'true',
        step: stepCount
      }).then(function (res) {
      }, function (err) {
        console.log(err)
      });
      return appConfig.STEP_WIZARD[currentStep].next
    }

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
        $scope.defaultSettings = res.data
        $scope.$parent.wizard.isNextDisabled = $scope.defaultSettings.ui_first_config ? true : false
        $scope.view.changeRoute = false
      }, function (err) {
        console.log(err)
      })
    }

    $scope.$on('$routeChangeStart', function() {
      $scope.$parent.wizard.isNextDisabled = false
    })

    init()
    // redirect()

  });
