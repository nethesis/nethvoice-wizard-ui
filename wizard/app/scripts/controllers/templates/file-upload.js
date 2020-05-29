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

    var validFile = function (file) {
      if (!file.name.match(/^[a-zA-Z0-9\-_\.()]+$/g)) {
        $scope.uploadingErrorMsg = "The file name is not valid. It can only contain letters, numbers and symbols `_`` -`` .`` (``) `"
        return false
      }
      return true
    }

    $scope.fileUpload = function (file, uploadProgress) {
      $scope.uploadingErrorMsg = ""
      $scope.uploadingError = false
      $scope.uploadingSuccess = false
      if (!validFile(file)) {
        $scope.uploadingError = true
        return
      }
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