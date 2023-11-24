'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersExtensionsCtrl
 * @description
 * #UsersExtensionsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersExtensionsCtrl', function ($scope, $rootScope, $location, $interval, ConfigService, UserService, UtilService) {
    $scope.users = {};
    $scope.providerLocal = false;
    $scope.taskPromise = null;
    $scope.onSave = false;
    $scope.lockOnList = false;
    $scope.availableUsersFilters = ['all', 'configured', 'unconfigured'];
    $scope.availableUserFiltersNumbers = ['username', 'displayname', 'default_extension', 'lname'];
    $scope.selectedUsersFilter = $scope.availableUsersFilters[0];
    $scope.usersFilterNumbers = $scope.availableUserFiltersNumbers[0];
    $scope.usersFilterNumbersOrd = false;
    $scope.view.changeRoute = true;
    $scope.usersLimit = 20

    $scope.error = {
      file: {
        status: false,
        title: 'File format error',
        content: 'File must be a CSV'
      }
    };

    $scope.temp = {
      errorCount: 0,
      currentProgress: 0
    };

    $rootScope.$on('scrollingContainerView', function () {
      if($scope.users){
        if ($scope.users.length > $scope.usersLimit) {
          $scope.usersLimit += $scope.SCROLLPLUS
        }
      }
    });

    $scope.checkDefaultExtensions = function() {
      $scope.wizard.nextState = false;
      for (var u in $scope.users) {
        if ($scope.users[u].default_extension != "none") {
          $scope.wizard.nextState = true;
        }
      }
    }

    $scope.checkUserProviderStatus = function () {
      ConfigService.getConfig().then(function (res) {
        $scope.view.changeRoute = false;
        if (res.data.configured === 0) {
          $scope.showConfigSwitch = true;
          $location.path('/users');
        } else {
          if (res.data.local === 1) {
            $scope.providerLocal = true;
          } else {
            $scope.providerLocal = true;
          }
          if (res.data.type === 'ldap') {
            $scope.mode.isLdap = true;
          } else {
            $scope.mode.isLdap = false;
          }
        }
      }, function (err) {
        $scope.view.changeRoute = false;
        console.log(err);
      });
    }

    $scope.getUserList = function () {
      if (!$scope.lockOnList) {
        $scope.lockOnList = true;
        UserService.list(true).then(function (res) {
          $scope.users = res.data;
          // REMOVE
          $scope.users = [
            {
                "id": "2",
                "auth": "2",
                "authid": "652d335d-5d3d-48ea-8902-9bd0267ef7a0",
                "username": "andrea",
                "description": "",
                "password": null,
                "default_extension": "200",
                "primary_group": "1001",
                "permissions": null,
                "fname": "",
                "lname": " Marchionni\n",
                "displayname": "Andrea Marchionni",
                "title": "",
                "company": "",
                "department": "",
                "language": null,
                "timezone": null,
                "dateformat": null,
                "timeformat": null,
                "datetimeformat": null,
                "email": "",
                "cell": "",
                "work": "",
                "home": "",
                "fax": "",
                "dn": "Andrea Marchionni",
                "devices": [
                    {
                        "id": "11",
                        "user_id": "2",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": null,
                        "extension": "200",
                        "secret": "a93f9825f926b45ce3e36a4f0af5d90c",
                        "web_user": null,
                        "web_password": null,
                        "type": "webrtc",
                        "srtp": null,
                        "registered": false
                    },
                    {
                        "id": "12",
                        "user_id": "2",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": "1",
                        "extension": "91200",
                        "secret": "8cc621ab521fad4e7d09f793d942bc0b",
                        "web_user": null,
                        "web_password": null,
                        "type": "mobile",
                        "srtp": null,
                        "registered": true
                    },
                    {
                        "id": "23",
                        "user_id": "2",
                        "mac": "E0:E6:56:01:0B:D0",
                        "vendor": "Nethesis",
                        "model": "nethesis-NPX5",
                        "line": "1",
                        "extension": "92200",
                        "secret": "3adf532904f5e8c7194b0d9fa7ad4522",
                        "web_user": "admin",
                        "web_password": "NethVoice,1234",
                        "type": "physical",
                        "srtp": "0",
                        "registered": false
                    }
                ],
                "profile": "3"
            },
            {
                "id": "4",
                "auth": "2",
                "authid": "a3a17b37-2712-486a-a47e-9135a4979969",
                "username": "antonio",
                "description": "",
                "password": null,
                "default_extension": "201",
                "primary_group": "1001",
                "permissions": null,
                "fname": "",
                "lname": " Colapietro\n",
                "displayname": "Antonio Colapietro",
                "title": "",
                "company": "",
                "department": "",
                "language": null,
                "timezone": null,
                "dateformat": null,
                "timeformat": null,
                "datetimeformat": null,
                "email": "",
                "cell": "",
                "work": "",
                "home": "",
                "fax": "",
                "dn": "Antonio Colapietro",
                "devices": [
                    {
                        "id": "1",
                        "user_id": "4",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": null,
                        "extension": "201",
                        "secret": "46d897595f1005a8dd5d3b3bf56646cb",
                        "web_user": null,
                        "web_password": null,
                        "type": "webrtc",
                        "srtp": null,
                        "registered": false
                    },
                    {
                        "id": "2",
                        "user_id": "4",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": "1",
                        "extension": "91201",
                        "secret": "a912f99180c6b8d1f70b647a313d265e",
                        "web_user": null,
                        "web_password": null,
                        "type": "mobile",
                        "srtp": null,
                        "registered": false
                    }
                ],
                "profile": "3"
            },
            {
                "id": "10",
                "auth": "2",
                "authid": "2f98d1e3-eb66-4309-b2b4-c7e4b6225e72",
                "username": "cristian",
                "description": "",
                "password": null,
                "default_extension": "202",
                "primary_group": "1001",
                "permissions": null,
                "fname": "",
                "lname": " Manoni\n",
                "displayname": "Cristian Manoni",
                "title": "",
                "company": "",
                "department": "",
                "language": null,
                "timezone": null,
                "dateformat": null,
                "timeformat": null,
                "datetimeformat": null,
                "email": "",
                "cell": "",
                "work": "",
                "home": "",
                "fax": "",
                "dn": "Cristian Manoni",
                "devices": [
                    {
                        "id": "13",
                        "user_id": "10",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": null,
                        "extension": "202",
                        "secret": "724d92fe938233b00a0ce93f833335a0",
                        "web_user": null,
                        "web_password": null,
                        "type": "webrtc",
                        "srtp": null,
                        "registered": false
                    },
                    {
                        "id": "14",
                        "user_id": "10",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": "1",
                        "extension": "91202",
                        "secret": "223dac7aa6a7c36b0cf5e3f7f9f7c0ba",
                        "web_user": null,
                        "web_password": null,
                        "type": "mobile",
                        "srtp": null,
                        "registered": false
                    }
                ],
                "profile": "3"
            },
            {
                "id": "5",
                "auth": "2",
                "authid": "82cc31c9-fcc7-4743-8984-974f00eb8b3d",
                "username": "marco",
                "description": "",
                "password": null,
                "default_extension": "203",
                "primary_group": "1001",
                "permissions": null,
                "fname": "",
                "lname": " Mariorenzi\n",
                "displayname": "Marco Mariorenzi",
                "title": "",
                "company": "",
                "department": "",
                "language": null,
                "timezone": null,
                "dateformat": null,
                "timeformat": null,
                "datetimeformat": null,
                "email": "",
                "cell": "",
                "work": "",
                "home": "",
                "fax": "",
                "dn": "Marco Mariorenzi",
                "devices": [
                    {
                        "id": "9",
                        "user_id": "5",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": null,
                        "extension": "203",
                        "secret": "d5532dc90404d6204aac3b55397fa873",
                        "web_user": null,
                        "web_password": null,
                        "type": "webrtc",
                        "srtp": null,
                        "registered": false
                    },
                    {
                        "id": "10",
                        "user_id": "5",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": "1",
                        "extension": "91203",
                        "secret": "622e9105ee689b4c83343486686b67d1",
                        "web_user": null,
                        "web_password": null,
                        "type": "mobile",
                        "srtp": null,
                        "registered": false
                    }
                ],
                "profile": "3"
            },
            {
                "id": "6",
                "auth": "2",
                "authid": "68264b10-960e-4d39-bfc7-4ef3cf4e097b",
                "username": "marcof",
                "description": "",
                "password": null,
                "default_extension": "204",
                "primary_group": "1001",
                "permissions": null,
                "fname": "",
                "lname": " Fabbri\n",
                "displayname": "Marco Fabbri",
                "title": "",
                "company": "",
                "department": "",
                "language": null,
                "timezone": null,
                "dateformat": null,
                "timeformat": null,
                "datetimeformat": null,
                "email": "",
                "cell": "",
                "work": "",
                "home": "",
                "fax": "",
                "dn": "Marco Fabbri",
                "devices": [
                    {
                        "id": "3",
                        "user_id": "6",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": null,
                        "extension": "204",
                        "secret": "16d49999ac783aaeda6956083fff5db7",
                        "web_user": null,
                        "web_password": null,
                        "type": "webrtc",
                        "srtp": null,
                        "registered": false
                    },
                    {
                        "id": "4",
                        "user_id": "6",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": "1",
                        "extension": "91204",
                        "secret": "7d33d9ee6d7bb0edd8481ad31a7ce12d",
                        "web_user": null,
                        "web_password": null,
                        "type": "mobile",
                        "srtp": null,
                        "registered": false
                    }
                ],
                "profile": "3"
            },
            {
                "id": "8",
                "auth": "2",
                "authid": "dcd311cf-5083-41f6-b471-8af5c19d4332",
                "username": "mario",
                "description": "",
                "password": null,
                "default_extension": "205",
                "primary_group": "1001",
                "permissions": null,
                "fname": "",
                "lname": " Garramone\n",
                "displayname": "Mario Garramone",
                "title": "",
                "company": "",
                "department": "",
                "language": null,
                "timezone": null,
                "dateformat": null,
                "timeformat": null,
                "datetimeformat": null,
                "email": "",
                "cell": "",
                "work": "",
                "home": "",
                "fax": "",
                "dn": "Mario Garramone",
                "devices": [
                    {
                        "id": "15",
                        "user_id": "8",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": null,
                        "extension": "205",
                        "secret": "c04de3514403ff04767dba7faf18708e",
                        "web_user": null,
                        "web_password": null,
                        "type": "webrtc",
                        "srtp": null,
                        "registered": false
                    },
                    {
                        "id": "16",
                        "user_id": "8",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": "1",
                        "extension": "91205",
                        "secret": "147c636fd86edd92cae7f7da7af8826b",
                        "web_user": null,
                        "web_password": null,
                        "type": "mobile",
                        "srtp": null,
                        "registered": false
                    }
                ],
                "profile": "3"
            },
            {
                "id": "9",
                "auth": "2",
                "authid": "1bfff7c0-9437-4b3a-b462-773a6e5626b7",
                "username": "massimo",
                "description": "",
                "password": null,
                "default_extension": "206",
                "primary_group": "1001",
                "permissions": null,
                "fname": "",
                "lname": " Palazzetti\n",
                "displayname": "Massimo Palazzetti",
                "title": "",
                "company": "",
                "department": "",
                "language": null,
                "timezone": null,
                "dateformat": null,
                "timeformat": null,
                "datetimeformat": null,
                "email": "",
                "cell": "",
                "work": "",
                "home": "",
                "fax": "",
                "dn": "Massimo Palazzetti",
                "devices": [
                    {
                        "id": "7",
                        "user_id": "9",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": null,
                        "extension": "206",
                        "secret": "312379e778478325b40eb41a81e59b78",
                        "web_user": null,
                        "web_password": null,
                        "type": "webrtc",
                        "srtp": null,
                        "registered": false
                    },
                    {
                        "id": "8",
                        "user_id": "9",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": "1",
                        "extension": "91206",
                        "secret": "56bc0f05d24d7fc04da1a429523e428a",
                        "web_user": null,
                        "web_password": null,
                        "type": "mobile",
                        "srtp": null,
                        "registered": false
                    }
                ],
                "profile": "3"
            },
            {
                "id": "3",
                "auth": "2",
                "authid": "33fdcaa5-aeac-4aec-819f-f742ee199784",
                "username": "stefano",
                "description": "",
                "password": null,
                "default_extension": "207",
                "primary_group": "1001",
                "permissions": null,
                "fname": "",
                "lname": " Fancello\n",
                "displayname": "Stefano Fancello",
                "title": "",
                "company": "",
                "department": "",
                "language": null,
                "timezone": null,
                "dateformat": null,
                "timeformat": null,
                "datetimeformat": null,
                "email": "",
                "cell": "",
                "work": "",
                "home": "",
                "fax": "",
                "dn": "Stefano Fancello",
                "devices": [
                    {
                        "id": "17",
                        "user_id": "3",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": null,
                        "extension": "207",
                        "secret": "720215de03a405e14e4c02031e79d68e",
                        "web_user": null,
                        "web_password": null,
                        "type": "webrtc",
                        "srtp": null,
                        "registered": false
                    },
                    {
                        "id": "18",
                        "user_id": "3",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": "1",
                        "extension": "91207",
                        "secret": "78920cce57532bf57cef32c30cd5d70c",
                        "web_user": null,
                        "web_password": null,
                        "type": "mobile",
                        "srtp": null,
                        "registered": false
                    },
                    {
                        "id": "22",
                        "user_id": "3",
                        "mac": "E0:E6:56:00:0C:A4",
                        "vendor": "Nethesis",
                        "model": "nethesis-NPX3",
                        "line": "1",
                        "extension": "92207",
                        "secret": "f0bdf5fed877103abfd171a9802a59fe",
                        "web_user": "admin",
                        "web_password": "NethVoice,1234",
                        "type": "physical",
                        "srtp": "1",
                        "registered": true
                    }
                ],
                "profile": "3"
            },
            {
                "id": "7",
                "auth": "2",
                "authid": "6f83c439-5365-4353-b64a-93a9bec41c16",
                "username": "vittorio",
                "description": "",
                "password": null,
                "default_extension": "208",
                "primary_group": "1001",
                "permissions": null,
                "fname": "",
                "lname": " Russo\n",
                "displayname": "Vittorio Russo",
                "title": "",
                "company": "",
                "department": "",
                "language": null,
                "timezone": null,
                "dateformat": null,
                "timeformat": null,
                "datetimeformat": null,
                "email": "",
                "cell": "",
                "work": "",
                "home": "",
                "fax": "",
                "dn": "Vittorio Russo",
                "devices": [
                    {
                        "id": "5",
                        "user_id": "7",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": null,
                        "extension": "208",
                        "secret": "cacf28ac18bbc107d665fa2c16b3f238",
                        "web_user": null,
                        "web_password": null,
                        "type": "webrtc",
                        "srtp": null,
                        "registered": false
                    },
                    {
                        "id": "6",
                        "user_id": "7",
                        "mac": null,
                        "vendor": null,
                        "model": null,
                        "line": "1",
                        "extension": "91208",
                        "secret": "e4afb49f3e88291d2686d09a62df0d98",
                        "web_user": null,
                        "web_password": null,
                        "type": "mobile",
                        "srtp": null,
                        "registered": false
                    }
                ],
                "profile": "3"
            }
        ];
          $scope.checkUserProviderStatus();
          if (UtilService.isEmpty($scope.users)) {
            $scope.wizard.nextState = false;
          } else {
            $scope.checkDefaultExtensions();
          }
          $scope.lockOnList = false;
          // count users
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
          $scope.getUserList();
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

    $scope.csvExport = function () {
      UserService.getCsv().then(function (res) {
        var dlnk = document.getElementById('dlLink');
        dlnk.href = 'data:application/octet-stream;base64,' + res.data;
        dlnk.click();
      }, function (err) {
        console.log(err);
      });
    }

    $scope.fileSelectImport = function () {
      $('#importInput').click();
      $('#importInput').change(function(e) {
        if (e.target.files[0].name != undefined) {
          $scope.temp.csvFileName = e.target.files[0].name;
          var reader = new FileReader();
          reader.onload = function(ev) {
            $scope.$apply(function() {
              $scope.temp.file64 = ev.target.result;
              $scope.error.file.status = false;
              $('#importInput').val('');
              $('#importInput').unbind();
            });
          };
          reader.readAsDataURL(e.target.files[0]);
          $('#importModal').modal('show');
        } else {
          $scope.$apply(function() {
            $scope.error.file.status = true;
          });
        }
      });
    }

    $scope.importError = function () {
      $scope.temp.loadingCancel = false;
      $interval.cancel($scope.taskPromise);
      $scope.getUserList();
      $scope.temp.currentProgress = -1;
    }

    $scope.importConfirm = function (f) {
      $scope.temp.loading = true;
      $scope.temp.loadingCancel = true;
      UserService.setCsvImport({'file':f}).then(function (res) {
        $scope.taskPromise = $interval(function () {
          UserService.statusCsvImport(res.data.result).then(function (res) {
            if (res.data.result < 100 && res.data.result != null) {
              $scope.temp.errorCount = 0;
              $scope.temp.currentProgress = res.data.result;
            } else if (res.data.result == 100) {
              $interval.cancel($scope.taskPromise);
              $scope.temp.errorCount = 0;
              $scope.temp.currentProgress = 100;
              $scope.getUserList();
              setTimeout(function () {
                $('#importModal').modal('hide');
                $scope.temp.errorCount = 0;
                $scope.temp.currentProgress = 0;
                $scope.temp.loading = false;
                $scope.temp.loadingCancel = false;
              },1000);
            } else {
              console.log(res.error);
              $scope.importError();
            }
          }, function (err) {
            console.log(err);
            $scope.importError();
          });
        }, 5000);
      }, function (err) {
        console.log(err);
        $scope.importError();
      });
    }

    $scope.clearImport = function () {
      $scope.temp.errorCount = 0;
      $scope.temp.currentProgress = 0;
      $scope.temp.loading = false;
      $scope.temp.loadingCancel = false;
    }

    $scope.$on('$destroy', function () {
      $interval.cancel($scope.taskPromise);
    });

    $scope.getUserList();
  });
