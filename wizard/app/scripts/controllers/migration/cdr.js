'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:CdrmigrationCtrl
 * @description
 * # CdrmigrationCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('CdrmigrationCtrl', function ($scope, $location, $interval, MigrationService) {

    $scope.migration = {
      cdr : {
        id : 0,
        count: 0,
        started: false,
        loading: false,
        completed: false,
        isReport: false,
        status: 'todo',
        report: {},
        data: {}
      }
    }

    $scope.temp = {
      errorCount: 0,
      currentProgress: 0
    };

    $scope.taskPromise = null;
    $scope.onSave = false;
    $scope.lockOnList = false;

    $scope.failCdrMig = function (err) {
      $scope.migration.cdr.data = err.data;
      $scope.slideDown("collapse-cdr");
      $scope.migration.cdr.loading = false;
      $scope.migration.cdr.status = "fail";
      $scope.importError();
    }

    $scope.importError = function () {
      $scope.temp.loadingCancel = false;
      $interval.cancel($scope.taskPromise);
      $scope.temp.currentProgress = -1;
    }

    $scope.clearImport = function () {
      $scope.temp.errorCount = 0;
      $scope.temp.currentProgress = 0;
      $scope.temp.loading = false;
      $scope.temp.loadingCancel = false;
    }

    $scope.hideCdrModal = function () {
      setTimeout(function () {
        $('#importModalMig').modal('hide');
        $scope.temp.errorCount = 0;
        $scope.temp.currentProgress = 0;
        $scope.temp.loading = false;
        $scope.temp.loadingCancel = false;
        $scope.getReport();
      }, 1000);
    }

    $scope.importConfirm = function () {
      $scope.temp.loading = true;
      $scope.temp.loadingCancel = true;
      $scope.taskPromise = $interval(function () {
        MigrationService.getCdrStatus().then(function (res) {
          if (res.data.progress < 100 && res.data.progress != null) {
            $scope.temp.errorCount = 0;
            $scope.temp.currentProgress = res.data.progress;
          } else if (res.data.progress == 100) {
            $interval.cancel($scope.taskPromise);
            $scope.temp.errorCount = 0;
            $scope.temp.currentProgress = 100;
            $scope.migration.cdr.data = res.data;
            $scope.migration.cdr.loading = false;
            $scope.migration.cdr.status = "success";
            $scope.toggleMig("collapse-cdr");
            $scope.hideCdrModal();
          } else {
            $scope.failCdrMig(res);
            $scope.hideCdrModal();
            console.log(res.error);
          }
        }, function (err) {
          $scope.failCdrMig(err);
          $scope.hideCdrModal();
          console.log(err);
        });
      }, 5000);
    }

    $scope.startCdrMig = function () {
      $scope.migration.cdr.loading = true;
      $scope.migration.cdr.started = true;
      $scope.toggleMig("collapse-cdr");
      MigrationService.importCdr().then(function (res) {
        $scope.importConfirm();
      }, function (err) {
        console.log(err);
        $scope.slideDown("collapse-cdr");
        $scope.migration.cdr.loading = false;
        $scope.migration.cdr.status = "fail";
      });
    }

    $scope.goToReport = function () {
      $location.path("/migration/report");
    }

    MigrationService.getCdrLength().then(function (res) {
      $scope.migration.cdr.count = res.data.count;
    }, function (err) {
      console.log(err);
    });

  });
