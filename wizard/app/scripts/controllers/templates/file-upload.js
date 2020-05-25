'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:FileUploadCtrl
 * @description
 * # FileUploadCtrl
 * Controller of the nethvoiceWizardUiApp
 */

angular.module('nethvoiceWizardUiApp')
  .controller('FileUploadCtrl', function ($scope, ModelService) {

    $scope.evt = {
      "draghover": false
    }

    $scope.loadingFiles = {}

    $scope.fileSelection = function () {
      document.querySelector("#dragArea input").click()
    }

    $scope.uploadProgress = function (progress) {
      console.log("UPLOAD PROGRESS: " + progress)
    }

    $scope.fileUpload = function (file, uploadProgress) {
      ModelService.uploadFirmware(file, uploadProgress).then(function (res) {
        console.log(res);
        reloadFirmwaresList()
      }, function (err) {
        console.log(err);
      })
    }

    var reloadFirmwaresList = function (file) {
      ModelService.getFirmwares().then(function (res) {
        $scope.firmwares = res.data
        for (let firm in $scope.firmwares) {
          $scope.firmwares[firm].size = $scope.formatBytes($scope.firmwares[firm].size)
        }
      }, function (err) {
        console.log(err)
      })
    }

    $scope.removeFirmware = function (name) {
      ModelService.deleteFirmware(name).then(function (res) {
        console.log(res);
        reloadFirmwaresList()
      }, function (err) {
        console.log(err);
      })
    }

  })