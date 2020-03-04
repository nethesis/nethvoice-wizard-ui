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
    $scope.globalsUi = ProvGlobalsService.getGlobalsUI()
    var currentStep = $route.current.controllerAs.split('/').length > 1 ? $route.current.controllerAs.split('/')[1] : $route.current.controllerAs.split('/')[0],
        stepCount = appConfig.STEP_MAP[currentStep],
        prevState = appConfig.STEP_WIZARD[currentStep].prev,
        nextState = appConfig.STEP_WIZARD[currentStep].next

    $scope.defaults = {}
    $scope.$parent.wizard.isNextDisabled = true

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

    var init = function () {
      ModelService.getDefaults().then(function (res) {
        console.log("RES", res);
        if (!res.data.ui_first_config) {
          redirect()
        }
        $scope.$parent.wizard.isNextDisabled = $scope.defaults.ui_first_config ? true : false
        $scope.defaults = res.data
        $scope.view.changeRoute = false
      }, function (err) {
        console.log(err)
      })
    }
    init()

  });
