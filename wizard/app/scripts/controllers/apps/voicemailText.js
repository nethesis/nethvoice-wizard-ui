"use strict";

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:AppsVoicemailTextCtrl
 * @description
 * # AppsVoicemailTextCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular
  .module("nethvoiceWizardUiApp")
  .controller(
    "AppsVoicemailTextCtrl",
    function ($rootScope, $scope, VoicemailTextService) {
      $scope.voicemailTextEnabled = false;
      $scope.tempVoicemail = {};

      $scope.errorVoicemailUpload = {
        file: {
          status: false,
          title: "File format error",
          content: "File must be a JSON",
        },
      };

      $scope.toggleVoicemailText = function () {
        $scope.voicemailTextEnabled == !$scope.voicemailTextEnabled;
      };

      $scope.googleAuthorizationUpload = function () {
        $("#uploadInput").click();
        $("#uploadInput").change(function (e) {
          if (e.target.files[0].name != undefined) {
            $scope.tempVoicemail.jsonFileName = e.target.files[0].name;
            var reader = new FileReader();
            reader.onload = function (ev) {
              $scope.$apply(function () {
                $scope.tempVoicemail.file64 = ev.target.result;
                $scope.errorVoicemailUpload.file.status = false;
                $("#uploadInput").val("");
                $("#uploadInput").unbind();
              });
            };
            reader.readAsDataURL(e.target.files[0]);
            console.log("this",$scope.tempVoicemail.jsonFileName)
          } else {
            $scope.$apply(function () {
              $scope.error.fileJson.status = true;
            });
          }
        });
      };
    }
  );
