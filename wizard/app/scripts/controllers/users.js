'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersCtrl', function ($scope, $location, $interval, ConfigService, UtilService, LocalStorageService, MigrationService) {
    $scope.showConfigSwitch = false;
    $scope.startInstall = false;
    $scope.currentProgress = 0;
    $scope.selectedMode = '';
    $scope.taskPromise = null;
    $scope.view.changeRoute = true;
    $scope.errorCount = 0;

    ConfigService.getConfig().then(function(res) {
      switch (res.data.result) {
        case 'unknown':
          $scope.view.changeRoute = false;
          $scope.showConfigSwitch = true;
          break;
        case 'legacy':
          $scope.mode.isLegacy = true;
          $location.path('/users/extensions');
          break;
        case 'uc':
          $scope.mode.isLegacy = false;
          $location.path('/users/extensions');
          break;
      }
    }, function(err) {
      console.log(err);
    });

    $scope.$on('$destroy', function () {
      $interval.cancel($scope.taskPromise);
    });

    $scope.nextStep = function () {
      $location.path('/users/extensions');
    }

    $scope.goNethserverSssdConfig = function () {
      var language = LocalStorageService.get('preferredLanguage');
      language = language + "-" + language.toUpperCase();
      window.location.href = window.location.origin + ":980/" + language + "/SssdConfig";
    };

    $scope.makeChoice = function (mode) {
      if (!$scope.startInstall) {
        $scope.selectedMode = mode;
        $scope.startInstall = true;

        ConfigService.setConfig(mode).then(function (res) {
          if (mode === 'legacy') {
            $('#uc-button').addClass('disabled');
            $scope.taskPromise = $interval(function () {
              UtilService.taskStatus(res.data.result).then(function (res) {
                if (res.data.progress < 100) {
                  $scope.errorCount = 0;
                  $scope.currentProgress = res.data.progress;
                } else if (res.data.progress == 100) {
                  $scope.errorCount = 0;
                  $interval.cancel($scope.taskPromise);
                  $scope.currentProgress = 100;
                  $scope.mode.isLegacy = true;

                  if ($scope.wizard.isMigration) {
                    $scope.wizard.isMigrationView = true;
                    $scope.wizard.isWizard = false;
                    $location.path('/migration');
                  }
                } else {
                  console.log(res.error);
                  if ($scope.errorCount < appConfig.MAX_TRIES) {
                    $scope.errorCount++;
                  } else {
                    $interval.cancel($scope.taskPromise);
                    $scope.currentProgress = -1;
                  }
                }
              }, function (err) {
                console.log(err);
                if ($scope.errorCount < appConfig.MAX_TRIES) {
                  $scope.errorCount++;
                } else {
                  $interval.cancel($scope.taskPromise);
                  $scope.currentProgress = -1;
                }
              });
            }, 5000);
          } else {
            $('#legacy-button').addClass('disabled');
            $scope.currentProgress = 100;
          }
        }, function (err) {
          console.log(err);
        });
      }
    };

  });
