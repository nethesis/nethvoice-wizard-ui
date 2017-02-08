'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersProfilesCtrl
 * @description
 * # UsersProfilesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersProfilesCtrl', function ($scope, ProfileService) {
    $scope.allProfiles = [];
    $scope.allPermissions = [];

    $scope.initGraphics = function () {};

    $scope.getAllProfiles = function (reload) {
      $scope.view.changeRoute = reload;
      ProfileService.allProfiles().then(function (res) {
        $scope.allProfiles = res.data;
        $scope.view.changeRoute = false;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.createNewProfile = function (newProfile) {
      console.log(newProfile.duplicateProfile);
      ProfileService.allPermissions().then(function (res) {
        $scope.allPermissions = res.data;
        var emptyProfile = {
          name: newProfile.name,
          macro_permissions: $scope.allPermissions
        }
        if (newProfile.duplicateProfile !== undefined) {
          emptyProfile.macro_permissions = newProfile.duplicateProfile.macro_permissions;
        }
        $scope.allProfiles.push(emptyProfile);
        $scope.newProfile = {};
        $('#newProfileModal').modal('hide');
      }, function (err) {
        console.log(err);
      });
    };

    $scope.saveProfile = function (profile) {
      profile.onSave = true;
      console.log(profile);
    };

    $scope.getAllProfiles(true);
  });
