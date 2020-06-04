'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:AdminSettingsCtrl
 * @description
 * # AdminSettingsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('AdminSettingsCtrl', function ($scope, UserService, RestService, RestServiceCTI, ConfigService, ModelService) {
    $scope.wizard.isEnd = false
    $scope.view.changeRoute = true
    $scope.externalIp = ""
    $scope.localNetworks = []
    $scope.localNrFields = 1

    $scope.create = function () {
      if ($scope.admin.password === $scope.admin.confirmPassword) {
        UserService.setPassword('admin', {
          password: $scope.admin.password
        }).then(function (res) {
          var hash = RestService.getHash('admin', $scope.admin.password);
          RestService.setAuthHeader('admin', hash);
          RestServiceCTI.setAuthHeader('admin', hash);
          $scope.onSaveSuccess = true;
          $scope.onSaveError = false;
          if ($scope.wizard.isWizard && $scope.natSaved) {
            $scope.wizard.isEnd = true
            $scope.passwordSaved = true
          } else if ($scope.wizard.isWizard) {
            $scope.passwordSaved = true
          }
        }, function (err) {
          $scope.onSaveSuccess = false;
          $scope.onSaveError = true;
        });
      } else {
        $scope.onSaveSuccess = false;
        $scope.onSaveError = true;
      }
    };

    var getSuggestedIp = function () {
      ConfigService.getSuggestedIp().then(function (res) {
        $scope.externalIp = res.data
        $scope.view.changeRoute = false
        $scope.$apply()
      }, function (err) {
        console.log(err);
        $scope.view.changeRoute = false
        $scope.$apply()
      })
    }

    var initNat = function () {
      ConfigService.getExternalIp().then(function (res) {
        if (!res.data) {
          if ($scope.wizard.provisioning != "tancredi") {
            getSuggestedIp()
          } else {
            ModelService.getDefaults().then(function (defaultsRes) {
              ModelService.checkConnectivity({
                "host": defaultsRes.data.hostname,
                "scheme": defaultsRes.data.provisioning_url_scheme
              }).then(function (res) {
                if (res.data.valid_certificate) {
                  $scope.externalIp = defaultsRes.data.hostname
                  $scope.view.changeRoute = false
                  $scope.$apply()
                } else {
                  getSuggestedIp()
                }
                setTimeout(function () {
                  $scope.$apply()
                }, 100)
              }, function (err) {
                console.log(err);
              })
            }, function (err) {
              console.log(err)
            })
          }
        } else {
          $scope.externalIp = res.data
          setTimeout(function () {
            $scope.view.changeRoute = false
            $scope.$apply()
          }, 1000)
        }
      }, function (err) {
        console.log(err)
      })
      ConfigService.getLocalNetworks().then(function (res) {
        if (res.data) {
          $scope.localNetworks = res.data
        }
        if (res.data && parseInt(res.data.length) > 1) {
          $scope.localNrFields = res.data.length
        }
      }, function (err) {
        console.log(err)
      })
    }

    $scope.openSaveNat = function () {
      $("#saveNat").modal("show")
    }

    $scope.saveNat = function () {
      for (let index in $scope.localNetworks) {
        if ($scope.localNetworks[index] == {} || !$scope.localNetworks[index].net) {
          $scope.localNrFields = $scope.localNrFields - 1
          $scope.localNetworks.splice( index, 1 );
        }
      }
      $scope.loadingNatAction = true
      let p1 = ConfigService.setExternalIp($scope.externalIp)
      let p2 = ConfigService.setLocalNetworks($scope.localNetworks)
      Promise.all([p1, p2]).then(function (res) {
        $scope.loadingNatAction = "ok"
        $scope.onSettingsSaveSuccess = true
        if ($scope.wizard.isWizard && $scope.passwordSaved) {
          $scope.wizard.isEnd = true
          $scope.natSaved = true
        } else if ($scope.wizard.isWizard) {
          $scope.natSaved = true
        }
        setTimeout(function () {
          $("#saveNat").modal("hide")
        }, 700)
        $scope.$apply()
      }, function (err) {
        console.log(err)
        $scope.loadingNatAction = "err"
        setTimeout(function () {
          $("#saveNat").modal("hide")
        }, 700)
        $scope.onSettingsSaveError = true
      })
    }

    var ldapPhoneebookCheck = function () {
      ModelService.ldapCheck().then(function (res) {
        $scope.phonebookjsStatus = res.data.ldap.enabled
        $scope.phonebookjssStatus = res.data.ldaps.enabled
      }, function (err) {
        console.log(err);
      })
    }

    $scope.togglePhonebookjs = function () {
      let status = $scope.phonebookjsStatus ? "enabled" : "disabled"
      ConfigService.switchPhonebookJs(status).then(function (res) {
        // phonebook js enabled
      }, function (err) {
        console.log(err)
      })
    }

    $scope.togglePhonebookjss = function () {
      let status = $scope.phonebookjssStatus ? "enabled" : "disabled"
      ConfigService.switchPhonebookJss(status).then(function (res) {
        // phonebook jss enabled
      }, function (err) {
        console.log(err)
      })
    }

    var initFirewall = function () {
      ConfigService.getExternalSip().then(function (res) {
        $scope.sipTlsStatus = res.data == "disabled" ? false : true
      }, function (err) {
        console.log(err)
      })
    }

    $scope.deleteField = function () {
      $scope.localNrFields = $scope.localNrFields - 1
      $scope.localNetworks.pop()
    }

    $scope.addField = function () {
      $scope.localNrFields = $scope.localNrFields + 1
      $scope.localNetworks.push({})
    }

    $scope.toggleSipTls = function () {
      let status = $scope.sipTlsStatus === false ? "disabled" : "enabled"
      ConfigService.setExternalSip(status).then(function (res) {
        // success
      }, function (err) {
        console.log(err)
      })
    }

    var init = function () {
      initNat()
      initFirewall()
      ldapPhoneebookCheck()
      $("#saveNat").on("hidden.bs.modal", function () {
        $scope.loadingNatAction = ""
      })
    }

    angular.element(document).ready(function () {
      init()
    })

  });
