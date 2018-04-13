'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:InitCtrl
 * @description
 * # InitCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('InitCtrl', function ($scope, $translate, $route, $location, ConfigService, LanguageService, LocalStorageService, LoginService, UserService, TrunkService, RouteService) {
    $scope.customConfig = customConfig;
    $scope.appConfig = appConfig;

    $scope.view = {
      changeRoute: false
    };

    $scope.mode = {
      isLegacy: false
    };

    $scope.login = {
      isLogged: false
    };
    $scope.loginUrl = 'views/login.html';

    $scope.wizard = {
      isWizard: true,
      stepCount: 1
    };

    $scope.menuCount = {
      users: 0,
      trunks: 0,
      routesIn: 0,
      routesOut: 0
    };

    $scope.doLogout = function () {
      LoginService.removeCredentials();
      $location.path('/');
      $('#loginTpl').show();
      $scope.login.isLogged = false;
      $scope.setRandomBackground();
    };

    $scope.goTo = function (route, exception, external) {
      if (external) {
        window.open(route, '_blank');
      } else if (!$scope.wizard.isWizard || exception) {
        $location.path(route);
      }
    };

    $scope.setRandomBackground = function () {
      $('body').css('background', 'linear-gradient( rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.95) ), url(images/' + Math.floor(Math.random() * (6 - 1) + 1) + '.jpg)');
    };

    $scope.toggleNavBar = function () {
      if (window.screen.width < 768) {
        if ($('#navbar-left').hasClass('show-mobile-nav')) {
          $('#wizard-step-footer').css('margin-left', '0px');
        } else {
          $('#wizard-step-footer').css('margin-left', '200px');
        }
      } else {
        if (!$('#navbar-left').hasClass('collapsed')) {
          $('#wizard-step-footer').css('margin-left', '76px');
        } else {
          $('#wizard-step-footer').css('margin-left', '200px');
        }
      }
    };

    $scope.getConfig = function () {
      ConfigService.getConfig().then(function (res) {
        switch (res.data.result) {
          case 'legacy':
            $scope.mode.isLegacy = true;
            break;
          case 'uc':
            $scope.mode.isLegacy = false;
            break;
        }
      }, function (err) {
        console.log(err);
      });
    };

    $scope.resolveActiveTab = function (type, index) {
      return window.location.hash.split('/')[index] === type;
    };

    $scope.currentStepCount = function () {
      return $scope.wizard.stepCount;
    }

    $scope.languagesArr = LanguageService.getAllLanguages();
    $scope.changeLanguage = function (l) {
      var userLang = '';
      if (l.key == 'default') {
        userLang = navigator.language || navigator.userLanguage;
        userLang = userLang.replace('-', '_').split('_')[0];
        $translate.use(userLang);
      } else {
        userLang = l.key;
        LocalStorageService.set('preferredLanguage', l.key);
        $translate.use(l.key);
      }
      for (var la in $scope.languagesArr) {
        if ($scope.languagesArr[la].key == userLang) {
          $scope.languagesArr[la].check = true;
        } else {
          $scope.languagesArr[la].check = false;
        }
      }
    };

    $scope.goToFullScreen = function () {
      if ($scope.inFullScreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
          $scope.inFullScreen = false;
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
          $scope.inFullScreen = false;
        } else if (document.webkitExitFullscreen) {
          document.webkitExitFullscreen();
          $scope.inFullScreen = false;
        }
      } else {
        if (document.documentElement.requestFullscreen) {
          document.documentElement.requestFullscreen();
          $scope.inFullScreen = true;
        } else if (document.documentElement.mozRequestFullScreen) {
          document.documentElement.mozRequestFullScreen();
          $scope.inFullScreen = true;
        } else if (document.documentElement.webkitRequestFullscreen) {
          document.documentElement.webkitRequestFullscreen();
          $scope.inFullScreen = true;
        } else if (document.documentElement.msRequestFullscreen) {
          document.documentElement.msRequestFullscreen();
          $scope.inFullScreen = true;
        }
      }
    };

    $scope.currentYear = function () {
      return new Date().getFullYear();
    }

    // set language
    $scope.changeLanguage({
      key: LocalStorageService.get('preferredLanguage') || 'default'
    });

    // get count data
    $scope.$on('loginCompleted', function (event, args) {
      // users
      UserService.count().then(function (res) {
        $scope.menuCount.users = res.data;
      }, function (err) {
        console.log(err);
      });

      //trunks
      TrunkService.count().then(function (res) {
        $scope.menuCount.trunks = res.data;
      }, function (err) {
        console.log(err);
      });

      //routes
      RouteService.countIn().then(function (res) {
        $scope.menuCount.routesIn = res.data;
      }, function (err) {
        console.log(err);
      });
      RouteService.countOut().then(function (res) {
        $scope.menuCount.routesOut = res.data;
      }, function (err) {
        console.log(err);
      });

      //config
      $scope.getConfig();

      $('body').css('background', '');
    });

    $scope.setRandomBackground();

  });
