'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:DashboardCtrl
 * @description
 * # DashboardCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('DashboardCtrl', function ($scope, $interval, DashboardService) {
    $scope.view = {
      users: {},
      extensions: {},
      selExten: {},
      updateInterval: undefined
    };
    $scope.update = function () {
      $scope.getUsers();
      $scope.getExtensions();
    };
    $scope.getUsers = function (s) {
      DashboardService.getUsers().then(function (res) {
        $scope.view.users = res.data;
      }, function (err) {
        console.log(err);
      });
    };
    $scope.getExtensions = function (s) {
      DashboardService.getExtensions().then(function (res) {
        $scope.view.extensions = res.data;
      }, function (err) {
        console.log(err);
      });
    };
    $scope.showExtenDetails = function (e) {
      DashboardService.getExtension(e).then(function (res) {
        $scope.view.selExten = res.data;
        $('#extenDetailsModal').modal('show');
      }, function (err) {
        console.log(err);
      });
    };
    $scope.$on('$routeChangeStart', function() {
      $interval.cancel($scope.view.updateInterval);
    });
    $scope.update();
    $scope.view.updateInterval = $interval(function () {
      $scope.update();
    }, 15000);
  });
