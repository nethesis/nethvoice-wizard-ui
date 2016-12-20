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
    $scope.doLogin = function(username, password) {
      LoginService.login(username, password).then(function(res) {
        LoginService.setCredentials(username, password);
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
      $scope.doLogin(obj.username, obj.password);
    } else {
      $location.path('/login');
      $('body').show();
    }
  });