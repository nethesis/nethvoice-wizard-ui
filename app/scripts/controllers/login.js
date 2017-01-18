'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('LoginCtrl', function($rootScope, $scope, $location, LoginService) {
    $scope.doLogin = function(secret) {
      LoginService.login($scope.username, $scope.password, secret).then(function(res) {
        if ($scope.wizard.isWizard) {
          $location.path('/users');
        }
        $('body').show();
        $scope.login.isLogged = true;
        $rootScope.$broadcast('loginCompleted');
      }, function(err) {
        if (err.status !== 200) {
          $scope.login.showError = true;
          $scope.login.isLogged = false;
          $('#loginTpl').show();
          $location.path('/login');
        }
        console.log(err);
      });
    };

    var obj = LoginService.getCredentials();
    if (obj) {
      $('#loginTpl').hide();
      $scope.doLogin(obj);
    } else {
      $location.path('/login');
      $('body').show();
    }
  });