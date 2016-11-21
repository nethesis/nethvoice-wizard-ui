'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersCtrl
 * @description
 * # UsersCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersCtrl', function($scope, $location, $interval, ConfigService, UtilService) {
    $scope.showConfigSwitch = false;
    $scope.startInstall = false;
    $scope.currentProgress = 0;
    $scope.selectedMode = '';
    $scope.taskPromise = null;
    $scope.view.changeRoute = true;

    ConfigService.getConfig().then(function(res) {
      $scope.view.changeRoute = false;
      switch (res.data.result) {
        case 'unknown':
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

    $scope.$on('$destroy', function() {
      $interval.cancel($scope.taskPromise);
    });

    $scope.nextStep = function() {
      $location.path('/users/extensions');
    }

    $scope.makeChoice = function(mode) {
      if (!$scope.startInstall) {
        $scope.selectedMode = mode;
        $scope.startInstall = true;

        ConfigService.setConfig(mode).then(function(res) {
          if (mode === 'legacy') {
            $('#uc-button').addClass('disabled');
            $scope.taskPromise = $interval(function() {
              UtilService.taskStatus(res.data.result).then(function(res) {
                if (res.data.progress < 100) {
                  $scope.currentProgress = res.data.progress;
                } else {
                  $interval.cancel($scope.taskPromise);
                  $scope.currentProgress = 100;
                  $scope.mode.isLegacy = true;
                }
              }, function(err) {
                $interval.cancel($scope.taskPromise);
                $scope.currentProgress = -1;
                console.log(err);
              });
            }, 8000);
          } else {
            $('#legacy-button').addClass('disabled');
            $scope.currentProgress = 100;
          }
        }, function(err) {
          console.log(err);
        });
      }
    };
  });