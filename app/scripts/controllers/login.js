'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('LoginCtrl', function ($scope, $location, LoginService, RestService) {
    $scope.doLogin = function(username, password) {
      LoginService.login(username, password).then(function(res) {
        LoginService.setCredentials(username, password);

        $location.path('/users/extensions');
        $('body').show();
        $scope.login.isLogged = true;
      }, function (err) {
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
      $('body').show();
    }
  });
