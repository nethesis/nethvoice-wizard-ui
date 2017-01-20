'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('LoginCtrl', function($rootScope, $scope, $location, ConfigService, LoginService) {
    $scope.doLogin = function(secret) {
      LoginService.login($scope.username, $scope.password, secret).then(function(res) {
        ConfigService.getWizard().then(function(res) {
          if(res.length == 0) {
            $scope.wizard.isWizard = true;
            $scope.wizard.stepCount = 1;
          } else {
            $scope.wizard.isWizard = res[0].status === 'true';
            $scope.wizard.stepCount = res[0].step;
          }
          if ($scope.wizard.isWizard) {
            var location = appConfig.STEP_MAP_REVERSE[$scope.wizard.stepCount];
            $location.path('/' + location);
          }
          $('body').show();
          $scope.login.isLogged = true;
          $rootScope.$broadcast('loginCompleted');
        }, function(err) {
          console.log(err);
        });
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