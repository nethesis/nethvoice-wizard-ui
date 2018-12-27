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
      extensions: {}
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
    $scope.update();
    $interval(function () {
      $scope.update();
    }, 15000);
  });
