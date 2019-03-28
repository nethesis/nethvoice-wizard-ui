'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:InitCtrl
 * @description
 * # InitCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('InitCtrl', function ($scope, $translate, $route, $location, ConfigService, LanguageService, LocalStorageService, LoginService, UserService, MigrationService, TrunkService, RouteService) {
    $scope.customConfig = customConfig;
    $scope.appConfig = appConfig;

    $scope.view = {
      changeRoute: true,
      navbarLeftReady: false
    };

    $scope.mode = {
      isLdap: false
    };

    $scope.login = {
      isLogged: false
    };
    $scope.loginUrl = 'views/login.html';

    $scope.wizard = {
      isWizard: true,
      isMigration: false,
      isMigrationView: false,
      usersMigrationDone: false,
      confMigrationDone: false,
      fromMigrationStart: false,
      isMigrationSkip: false,
      config: {},
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
        $scope.wizard.config = res.data;
        if (res.data.type === 'ldap') {
          $scope.mode.isLdap = true;
        } else {
          $scope.mode.isLdap = false;
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

    $scope.pauseWizard = function () {
      $scope.wizard.isMigrationView = true;
      $scope.wizard.isWizard = false;
    }

    $scope.redirectMigrationAction = function (migrationStatus, isProviderConfigured) {
      // isMigration
      if (isProviderConfigured == 1) {
        if (migrationStatus == "ready") {
          // migration_status isEmpty in db
          $location.path('/migration');
        } else {
          // migration_status !isEmpty in db
          if (migrationStatus == "users") {
            $location.path("/migration/users");
          } else if (migrationStatus == "cdr") {
            $location.path("/migration/report");
          } else {
            var nextMigRoute = migrationConfig.LABEL_INFO[migrationConfig.LABEL_INFO[migrationStatus].next].route;
            $location.path(nextMigRoute);
          }
        }
      } else {
        ConfigService.getWizard().then(function (res) {
          if (res.length == 0) {
            var isWizard = true;
          } else {
            var isWizard = res[0].status === 'true';
          }
          if (isWizard) {
            // isWizard
            var location = appConfig.STEP_MAP_REVERSE[$scope.wizard.stepCount];
            $location.path('/' + location);
          } else {
            // !isWizard
            $location.path('/');
          }
        }, function (err) {
          console.log(err);
        });
      }
    }

    $scope.redirectOnMigrationStatus = function (migrationStatus) {
      MigrationService.isMigration().then(function (resIsMigration) {
        var isMigration = resIsMigration.data;
        if (isMigration) {
          // isMigration
          ConfigService.getConfig().then(function (resProviderConfig) {
            var isProviderConfigured = resProviderConfig.data.configured;
            if (migrationStatus) {
              // migrationStatus
              $scope.redirectMigrationAction(migrationStatus, isProviderConfigured);
            } else {
              // !migrationStatus
              MigrationService.getMigrationStatus().then(function (migStatus) {
                $scope.redirectMigrationAction(migStatus.data, isProviderConfigured);
              }, function (err) {
                console.log(err);
              });
            }
          }, function (err) {
            console.log(err);
          });
        } else {
          // !isMigration
          $location.path('/');
        }
      }, function (err) {
        console.log(err);
      });
    }

    $scope.exitMigration = function () {
      MigrationService.endMigration().then(function (res) {
        $scope.wizard.isWizard = true;
        $scope.wizard.isMigrationView = false;
        $location.path('/users/extensions');
      }, function (err) {
        console.log(err);
      });
    }

    $scope.currentYear = function () {
      return new Date().getFullYear();
    }

    $scope.toggleMig = function (id) {
      $("#" + id).slideToggle("fast");
    }

    $scope.slideDown = function (id) {
      $("#" + id).slideDown("fast");
    }

    $scope.slideUp = function (id) {
      $("#" + id).slideDown("fast");
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
