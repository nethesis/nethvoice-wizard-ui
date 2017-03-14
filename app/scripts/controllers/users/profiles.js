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

    $scope.onSaveSuccess = false;
    $scope.onSaveError = false;

    $scope.initGraphics = function () {};

    $scope.getAllProfiles = function (reload) {
      $scope.view.changeRoute = reload;
      ProfileService.allProfiles().then(function (res) {
        $scope.allProfiles = res.data;
        $scope.view.changeRoute = false;
        $scope.generateProfile();
      }, function (err) {
        console.log(err);
      });
    };

    $scope.createNewProfile = function (newProfile, macros) {
      newProfile.onSave = true;
      if (newProfile.duplicateProfile) {
        ProfileService.getProfile(newProfile.duplicateProfile.id).then(function (res) {
          var emptyProfile = {
            name: newProfile.name,
            macro_permissions: res.data.macro_permissions
          }
          ProfileService.create(emptyProfile).then(function (res) {
            newProfile.onSave = false;
            emptyProfile.id = res.id;
            $scope.generateProfile();
            $scope.getAllProfiles(false);
            $scope.onSaveSuccess = true;
            $scope.onSaveError = false;
            $scope.allProfiles.push(emptyProfile);
            $scope.newProfile = {};
            $('#newProfileModal').modal('hide');
          }, function (err) {
            newProfile.onSave = false;
            $scope.onSaveSuccess = false;
            $scope.onSaveError = true;
            console.log(err);
          });
        }, function (err) {
          console.log(err);
        });
      } else {
        ProfileService.allPermissions().then(function (res) {
          var emptyProfile = {
            name: newProfile.name,
            macro_permissions: res.data
          }
          ProfileService.create(emptyProfile).then(function (res) {
            newProfile.onSave = false;
            emptyProfile.id = res.id;
            $scope.generateProfile();
            $scope.getAllProfiles(false);
            $scope.onSaveSuccess = true;
            $scope.onSaveError = false;
            $scope.allProfiles.push(emptyProfile);
            $scope.newProfile = {};
            $('#newProfileModal').modal('hide');
          }, function (err) {
            newProfile.onSave = false;
            $scope.onSaveSuccess = false;
            $scope.onSaveError = true;
            console.log(err);
          });
        }, function (err) {
          console.log(err);
        });
      }
    };

    $scope.saveProfile = function (profile) {
      profile.onSave = true;
      if (profile.id) {
        ProfileService.update(profile.id, profile).then(function (res) {
          profile.onSave = false;
          $scope.generateProfile();
          $scope.getAllProfiles(false);
          $scope.onSaveSuccess = true;
          $scope.onSaveError = false;
        }, function (err) {
          profile.onSave = false;
          $scope.onSaveSuccess = false;
          $scope.onSaveError = true;
          console.log(err);
        });
      } else {
        ProfileService.create(profile).then(function (res) {
          profile.onSave = false;
          profile.id = res.id;
          $scope.generateProfile();
          $scope.getAllProfiles(false);
          $scope.onSaveSuccess = true;
          $scope.onSaveError = false;
        }, function (err) {
          profile.onSave = false;
          $scope.onSaveSuccess = false;
          $scope.onSaveError = true;
          console.log(err);
        });
      }
    };

    $scope.generateProfile = function () {
      ProfileService.generate().then(function (res) {
        console.log(res);
      }, function (err) {
        console.log(err);
      });
    };

    $scope.deleteProfile = function (profile) {
      profile.onSave = true;
      ProfileService.delete(profile.id).then(function (res) {
        profile.onSave = false;
        $scope.getAllProfiles(false);
      }, function (err) {
        profile.onSave = false;
        console.log(err);
      });
    };

    $scope.getAllProfiles(true);
  });
