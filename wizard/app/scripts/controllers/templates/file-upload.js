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

    $scope.uploadingFiles = {}

    $scope.uploadingError = false
    $scope.uploadingSuccess = false
    $scope.uploadingErrorMsg = ""
    
    $scope.fileSelection = function () {
      document.querySelector("#dragArea input").click()
    }

    $scope.uploadProgress = function (progress) {
      console.log("UPLOAD PROGRESS: " + progress)
    }

    var uploadingFile = function (file) {
      let fileObj = {
        size: $scope.formatBytes(file.size),
        name: file.name
      }
      $scope.uploadingFiles[file.name] = fileObj
    }

    $scope.fileUpload = function (file, uploadProgress) {
      $scope.uploadingErrorMsg = ""
      $scope.uploadingError = false
      $scope.uploadingSuccess = false
      uploadingFile(file)
      ModelService.uploadFirmware(file, uploadProgress).then(function (res) {
        $scope.reloadFirmwaresList()
        $scope.uploadingFiles = {}
        $scope.uploadingSuccess = true
        setTimeout(function () {
          $scope.uploadingSuccess = false
          $scope.$apply()
        }, 2000)
      }, function (err) {
        $scope.uploadingErrorMsg = err.data.title
        $scope.uploadingFiles = {}
        $scope.uploadingError = true
        console.log(err)
      })
    }

    $scope.removeFirmware = function (name) {
      ModelService.deleteFirmware(name).then(function (res) {
        $scope.reloadFirmwaresList()
        $scope.uploadingFiles = {}
      }, function (err) {
        console.log(err);
      })
    }

  })