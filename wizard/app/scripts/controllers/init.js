'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:InitCtrl
 * @description
 * # InitCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('InitCtrl', function ($scope, $translate, $location, ConfigService, LanguageService, LocalStorageService, LoginService, UserService,
    MigrationService, TrunkService, RouteService, ProvFanvilService, ProvSnomService, ProvGigasetService, ProvSangomaService, ProvYealinkService, ModelService, $q) {
    $scope.customConfig = customConfig;
    $scope.appConfig = appConfig;

    $scope.view = {
      changeRoute: true,
      navbarReadyFirst: false,
      navbarReadySecond: false
    };

    $scope.mode = {
      isLdap: false
    };

    $scope.login = {
      isLogged: false
    };
    $scope.loginUrl = 'views/login.html';
    $scope.modelsUIUrl = 'views/templates/models-ui.html';

    $scope.wizard = {
      isWizard: true,
      isMigration: false,
      isMigrationView: false,
      usersMigrationDone: false,
      confMigrationDone: false,
      fromMigrationStart: false,
      isMigrationSkip: false,
      config: {},
      stepCount: 1,
      provisioning: ""
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

    $scope.isEmpty = function (obj) {
      for (var prop in obj) {
        return false;
      }
      return true;
    }

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

    $scope.showModal = function (id) {
      $("#" + id).modal("show")
    }
    
    $scope.hideModal = function (id) {
      $("#" + id).modal("hide")
    }

    $scope.validateLocation = function () {
      if ($scope.wizard.provisioning != "tancredi") {
        switch ($location.path()) {
          case "/devices/inventory":
            $location.path('/')
            break
          case "/devices/models":
            $location.path('/')
            break
          case "/configurations":
            $location.path('/')
            break
          case "/apps/bulkdevices":
            $location.path('/')
            break
          default:
            break
        }
      } else {
        switch ($location.path()) {
          case "/users/devices":
            $location.path('/')
            break
          case "/users/configurations":
            $location.path('/')
            break
          default:
            break
        }
      }
    }

    var getProvisioningInfo = function () {
      ConfigService.getProvisioningInfo().then(function (res) {
        $scope.wizard.provisioning = res.data
        $scope.validateLocation()
        $scope.view.navbarReadySecond = true
      }, function (err) {
        console.log(err)
      })
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
      //provisioning
      getProvisioningInfo()

      $('body').css('background', '');
    });

    $scope.$on('comboboxRepeatEnd', function(event, elem) {
      elem.parent().combobox().parent().removeClass("hidden")
    })

    $scope.$on('selectpickerRepeatEnd', function(event, elem) {
      elem.parent().selectpicker().parent().parent().removeClass("hidden")
    })
    
    $scope.setRandomBackground();

    // provisining build models start

    $scope.currentModel = {}

    var getModelMap = function (map, name) {
      for (var modelk in map) {
        if (map[modelk].model.toLowerCase() == name) {
          return map[name]
        }
      }
    }

    var hasOriginalsFromName = function (name) {
      return (name.split("-").length)-1 == 1 ? true : false
    }

    var getGlobals = function () {
      ModelService.getDefaults().then(function (res) {
        $scope.currentModel.globals = angular.copy(res.data)
        for (var globalVariables in res.data) {
          if (!$scope.currentModel.variables[globalVariables]) {
            $scope.currentModel.variables[globalVariables] = angular.copy(res.data[globalVariables])
          }
        }
      }, function (err) {
        console.log(err)
      })
    }

    var getModelUI = function (name, brand) {
      var map = getModelMap(ProvFanvilService.map(), name)
      switch (brand.toLowerCase()) {
        case "fanvil":
          return {
            map: map,
            softKeys: ProvFanvilService.softKeysUI(map),
            lineKeys: ProvFanvilService.lineKeysUI(map),
            expKeys: ProvFanvilService.expKeysUI(map),
            preference: ProvFanvilService.preferenceUI(map),
            general: ProvFanvilService.generalUI(map),
            network: ProvFanvilService.networkUI(map),
            provisioning: ProvFanvilService.provisioningUI(map),
          }
          break;
      
        case "gigaset":
          return {
            map: map,
            general: ProvGigasetService.generalUI(),
            network: ProvGigasetService.networkUI(),
            softKeys: ProvGigasetService.softKeysUI(),
            functionKeys: ProvGigasetService.functionKeysUI(map),
            expKeys: ProvGigasetService.expKeysUI(map)
          }
          break;
      
        case "sangoma":
          return {
            map: map,
            general: ProvSangomaService.generalUI(),
            preference: ProvSangomaService.preferenceUI(),
            network: ProvSangomaService.networkUI(),
            provisioning: ProvSangomaService.provisioningUI(),
            softKeys: ProvSangomaService.softKeysUI(),
            lineKeys: ProvSangomaService.lineKeysUI(),
            expKeys: ProvSangomaService.expKeysUI(map)
          }
          break;
          
        case "snom":
          return {
            map: map,
            general: ProvSnomService.generalUI(),
            preference: ProvSnomService.preferenceUI(),
            network: ProvSnomService.networkUI(),
            keys: ProvSnomService.keysUI(),
            functionKeys: ProvSnomService.functionKeysUI(map),
            expKeys: ProvSnomService.expKeysUI(map)
          }
          break;

        case "yealink":
          return {
            map: map,
            general: ProvYealinkService.generalUI(map),
            preference: ProvYealinkService.preferenceUI(map),
            network: ProvYealinkService.networkUI(map),
            provisioning: ProvYealinkService.provisioningUI(),
            softKeys: ProvYealinkService.softKeysUI(map),
            lineKeys: ProvYealinkService.lineKeysUI(map),
            lineOptions: ProvYealinkService.lineOptionsUI(),
            programmableKeys: ProvYealinkService.programmableKeysUI(map),
            expKeys: ProvYealinkService.expKeysUI(map)
          }
          break;

        default:
          return null
          break;
      }
    }

    $scope.buildModel = function (name) {
      return $q(function (resolve, reject) {
        var nameSplit = name.split("-"),
            modelName = nameSplit[1].toLowerCase(),
            modelBrand = nameSplit[0].toLowerCase()
        ModelService.getModel(name).then(function (res) {
          $scope.currentModel = {
            "ui" : getModelUI(modelName, modelBrand),
            "variables" : angular.copy(res.data.variables),
            "globals": {},
            "storedVariables": angular.copy(res.data.variables),
            "name" : name,
            "display_name" : res.data.display_name,
            "openedSection" : "",
            "openedExpKeys": "",
            "showingKeys": "",
            "showingExpKeys": "",
            "hasOriginals": hasOriginalsFromName(name),
            "hidden": false
          }
          getGlobals()
          resolve(true)
        }, function () {
          reject(err)
        })
      })
    }

    $scope.$on('$routeChangeStart', function() {
      if ($location.path() == '/devices/models' || $location.path() == '/configurations'){
        $scope.currentModel = {}
      }
    })
    
  });
