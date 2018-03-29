'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersExtensionsCtrl
 * @description
 * # UsersExtensionsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersExtensionsCtrl', function ($scope, $location, ConfigService, UserService, UtilService) {
    $scope.users = {};
    $scope.temp = {};
    $scope.onSave = false;
    $scope.lockOnList = false;
    $scope.view.changeRoute = true;
    $scope.availableUsersFilters = ['all', 'configured', 'unconfigured'];
    $scope.selectedUsersFilter = $scope.availableUsersFilters[0];

    ConfigService.getConfig().then(function (res) {
      switch (res.data.result) {
        case 'unknown':
          $scope.view.changeRoute = false;
          $scope.showConfigSwitch = true;
          $location.path('/users');
          break;
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

    $scope.checkDefaultExtensions = function() {
      $scope.wizard.nextState = false;
      for (var u in $scope.users) {
        if ($scope.users[u].default_extension != "none") {
          $scope.wizard.nextState = true;
        }
      }
    }

    $scope.getUserList = function (reload) {
      $scope.view.changeRoute = reload;
      if (!$scope.lockOnList) {
        $scope.lockOnList = true;
        UserService.list(true).then(function (res) {
          $scope.users = res.data;
          $scope.view.changeRoute = false;
          if (UtilService.isEmpty($scope.users)) {
            $scope.wizard.nextState = false;
          } else {
            $scope.checkDefaultExtensions();
          }
          $scope.lockOnList = false;
          // users
          UserService.count().then(function (res) {
            $scope.menuCount.users = res.data;
          }, function (err) {
            console.log(err);
          });
        }, function (err) {
          $scope.users = {}
          $scope.view.changeRoute = false;
          $scope.lockOnList = false;
          console.log(err);
        });
      }
    };

    $scope.createUser = function (user) {
      $scope.onSave = true;
      UserService.create(user).then(function (res) {
        UserService.setPassword(user.username, {
          password: UtilService.randomPassword(8)
        }).then(function (res) {
          $scope.onSave = false;
          $('#createUser').modal('hide');
          $scope.newUser = {};
          $scope.getUserList(false);
        }, function (err) {
          $scope.onSave = false;
          console.log(err);
        });
      }, function (err) {
        $scope.onSave = false;
        console.log(err);
      });
    };

    $scope.setMainExtension = function (user) {
      user.isInAction = true;
      user.alreadyExists = false;
      UserService.createMainExtension({
        username: user.username,
        extension: user.default_extension !== 'none' ? user.default_extension : user.temp_ext
      }).then(function (res) {
        user.isInAction = false;
        if (user.temp_ext && user.temp_ext.length == 0 && user.default_extension == 'none' || user.default_extension.length == 0) {
          user.default_extension = 'none';
          $scope.checkDefaultExtensions();
        } else {
          user.default_extension = user.default_extension !== 'none' ? user.default_extension : user.temp_ext;
          $scope.wizard.nextState = true;
        }
      }, function (err) {
        user.isInAction = false;
        if (err.status == 422) {
          user.alreadyExists = true;
        }
        console.log(err);
      });
    }

    $scope.fileSelectImport = function () {
      $('#importInput').click();
      $('#importInput').change(function(e) {
        if (e.target.files[0].name != undefined && e.target.files[0].type == 'text/csv') {
          $scope.temp.csvFileName = e.target.files[0].name;
          var reader = new FileReader();
          reader.onload = function(ev) {
            $scope.$apply(function() {
              $scope.temp.file64 = ev.target.result;
              $('#importInput').val('');
              $('#importInput').unbind();
            });
          };
          reader.readAsDataURL(e.target.files[0]);
          $('#importModal').modal('show');
        }
      });
    }

    $scope.importConfirm = function (f) {
      $scope.temp.loading = true;
      UserService.setCsvImport({'file':f}).then(function (res) {
        $scope.temp.loading = false;
        $('#importModal').modal('hide');
        $scope.getUserList(false);
      }, function (err) {
        $scope.temp.loading = false;
        console.log(err);
      });
    }

    $scope.getUserList(true);
  });
