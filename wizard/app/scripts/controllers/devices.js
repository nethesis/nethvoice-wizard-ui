'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesCtrl
 * @description
 * # DevicesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesCtrl', function ($scope, ModelService, ConfigService, $location) {

    $scope.view.changeRoute = true

    var nextStep = function () {
      if ($scope.wizard.nextState && appConfig.STEP_WIZARD[$scope.currentStep].next) {
        $location.path(appConfig.STEP_WIZARD[$scope.currentStep].next)
        $scope.wizard.stepCount++
      }
      ConfigService.setWizard({
        status: 'true',
        step: $scope.wizard.stepCount
      }).then(function (res) {
      }, function (err) {
        console.log(err)
      });
      return appConfig.STEP_WIZARD[$scope.currentStep].next
    }

    var redirect = function () {
      if ($scope.wizard.isWizard) {
        nextStep()
      } else {
        $location.path("/devices/inventory")
      }
    }

    var checkProvisioningCloudStatusDev = function () {
      ModelService.getCloudProvisioning().then(function (res) {
        $scope.view.changeRoute = false
        $scope.cloudProvisioning = res.data
        if ($scope.cloudProvisioning !== null) {
          redirect()
        }
      }, function (err) {
        console.log(err)
      })
    }

    $scope.setCloudProvisioning = function (val) {
      ModelService.setCloudProvisioning(val).then(function (res) {
        redirect()
      }, function (err) {
        console.log(err)
      })
    }

    angular.element(document).ready(function () {
      if ($scope.cloudProvisioning && $scope.cloudProvisioning !== null) {
        redirect()
      } else {
        checkProvisioningCloudStatusDev()
      }
    })

  });
