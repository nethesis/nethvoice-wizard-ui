'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:AdminLanguagesCtrl
 * @description
 * # AdminLanguagesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('AdminLanguagesCtrl', function ($scope, $interval, LanguageService, UtilService, ConfigService, LocalStorageService) {
    $scope.taskPromise = null;
    $scope.currentProgress = 0;
    $scope.errorCount = 0;
    $scope.startInstallation = false;
    $scope.language = LocalStorageService.get('preferredLanguage');
    $scope.availableLangs = ['it', 'en', 'fr', 'de', 'es'];

    $scope.$on('$destroy', function () {
      $interval.cancel($scope.taskPromise);
    });

    $scope.getLangName = function (key) {
      return LanguageService.getNativeName(key);
    }

    $scope.getLanguageList = function () {
      LanguageService.getInstalledLanguages().then(function (res) {
        for (var l in res.data) {
          if (res.data[l].default == true) {
            $scope.language = l;
          }
        }
      }, function (err) {
        console.log(err);
      });
    }

    $scope.setDefaultPBXLanguage = function (lang) {
      $scope.startInstallation = true;
      $scope.currentProgress = 0;
      $scope.onSaveSuccess = false;
      $scope.onSaveError = false;
      ConfigService.setPBXLang({
        lang: lang
      }).then(function (res) {
        $scope.taskPromise = $interval(function () {
          UtilService.taskStatus(res.data.result).then(function (res) {
            if (res.data.progress < 100) {
              $scope.errorCount = 0;
              $scope.currentProgress = res.data.progress;
            } else if (res.data.progress == 100) {
              $scope.errorCount = 0;
              $interval.cancel($scope.taskPromise);
              $scope.currentProgress = 100;
              // set default language
              ConfigService.setDefaultPBXLang({
                lang: lang
              }).then(function (res) {
                $scope.onSaveSuccess = true;
                $scope.onSaveError = false;
              }, function (err) {
                console.error(err);
                $scope.onSaveSuccess = false;
                $scope.onSaveError = true;
              });
            } else {
              console.log(res.error);
              if ($scope.errorCount < appConfig.MAX_TRIES) {
                $scope.errorCount++;
              } else {
                $interval.cancel($scope.taskPromise);
                $scope.currentProgress = -1;
                $scope.onSaveSuccess = false;
                $scope.onSaveError = true;
              }
            }
          }, function (err) {
            console.log(err);
            if ($scope.errorCount < appConfig.MAX_TRIES) {
              $scope.errorCount++;
            } else {
              $interval.cancel($scope.taskPromise);
              $scope.currentProgress = -1;
              $scope.onSaveSuccess = false;
              $scope.onSaveError = true;
            }
          });
        }, 5000);
      }, function (err) {
        console.error(err);
        $scope.onSaveSuccess = false;
        $scope.onSaveError = true;
        $scope.currentProgress = 100;
      });
    };

    $scope.getLanguageList();
  });
