'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DevicesCtrl
 * @description
 * # DevicesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DevicesCtrl', function ($scope, ModelService, $location) {

    $scope.view.changeRoute = false
    $scope.cloudProvisioning = undefined

    $scope.nextStep = function () {
      $location.path("/devices/inventory")  
    }

    $scope.prevStep = function () {
      $location.path("/users/profiles")
    }

    var checkProvisioningCloudStatus = function () {
      ModelService.getCloudProvisioning().then(function (res) {
        $scope.cloudProvisioning = res.data
        localStorage.set("cloudProvisioningSet", true)

        console.log("GET CLOUD PROVISIONING", res) //DO CHANGE SERVERSIDE RETURN UNDEFINED IF VARIABLE IS UNDEFINED

        $scope.nextStep()
      }, function (err) {
        console.log(err)
      })
    }

    $scope.setCloudProvisioning = function (val) {
      ModelService.setCloudProvisioning(val).then(function (res) {

        console.log("SET CLOUD PROVISIONING", res)
      
      }, function (err) {
        console.log(err)
      })
    }

    angular.element(document).ready(function () {
      checkProvisioningCloudStatus()
    })

  });
