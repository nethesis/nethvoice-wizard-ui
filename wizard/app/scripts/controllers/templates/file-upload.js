'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:FileUploadCtrl
 * @description
 * # FileUploadCtrl
 * Controller of the nethvoiceWizardUiApp
 */

angular.module('nethvoiceWizardUiApp')
  .controller('FileUploadCtrl', function ($scope, ModelService, $filter) {

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
        return false
      }
      return true
    }

    var resetUploadErrors = function () {
      $scope.uploadingErrorMsg = ""
      $scope.uploadingError = false
      $scope.uploadingSuccess = false
    }

    $scope.fileUpload = function (file, uploadProgress) {
      resetUploadErrors()
      if (!validFile(file)) {
        $scope.uploadingError = true
        $scope.showAlertDanger()
        $scope.uploadingErrorMsg = $filter('translate')('upload_invalid_filename')
        document.querySelector("#dragArea input").value = ""
        $scope.$apply()
        return
      }
      uploadingFile(file)
      ModelService.uploadFirmware(file, uploadProgress).then(function (res) {
        $scope.reloadFirmwaresList()
        $scope.uploadingFiles = {}
        $scope.uploadingSuccess = true
        document.querySelector("#dragArea input").value = ""
      }, function (err) {
        $scope.uploadingErrorMsg = err.data.title
        $scope.uploadingFiles = {}
        $scope.uploadingError = true
        $scope.showAlertDanger()
        document.querySelector("#dragArea input").value = ""
        console.log(err)
      })
    }

    $scope.hideAlertDanger = function () {
      $("#uploadErrorAlert").hide()
    }

    $scope.showAlertDanger = function () {
      $("#uploadErrorAlert").show()
    }

    $scope.removeFirmware = function (name) {
      ModelService.deleteFirmware(name).then(function (res) {
        $scope.reloadFirmwaresList()
        $scope.uploadingFiles = {}
      }, function (err) {
        console.log(err);
      })
    }

    $scope.$on('uploadModalHidden', function () {
      resetUploadErrors()
    });

  })