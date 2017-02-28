'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:UsersConfigurationsCtrl
 * @description
 * # UsersConfigurationsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('UsersConfigurationsCtrl', function ($scope, $filter, UserService, DeviceService, ProfileService, UtilService) {
    $scope.users = {};
    $scope.selectedUser = null;
    $scope.devices = {};
    $scope.allProfiles = {};
    $scope.maxExtensionReached = false;

    $scope.availableUserFilters = ['all', 'configured', 'unconfigured'];
    $scope.selectedUserFilter = $scope.availableUserFilters[0];

    $scope.availableDeviceFilters = ['all', 'linked', 'unlinked'];
    $scope.selectedDeviceFilter = $scope.availableDeviceFilters[0];

    $scope.cancelError = function () {
      $scope.maxExtensionReached = false;
    };

    $scope.getAllProfiles = function (reload) {
      ProfileService.allProfiles().then(function (res) {
        $scope.allProfiles = res.data;
        $scope.view.changeRoute = false;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getUserList = function (reload) {
      $scope.view.changeRoute = reload;
      UserService.list(false).then(function (res) {
        $scope.users = res.data;
        $scope.view.changeRoute = false;
        var index = 0;
        for (var u in $scope.users) {
          if ($scope.users[u].default_extension !== 'none') {
            index = u;
            break;
          } else {
            continue;
          }
        }
        $scope.selectUser($scope.currentUserIndex || $scope.users[index]);
        if ($scope.mode.isLegacy && UtilService.isEmpty($scope.users)) {
          $scope.wizard.nextState = false;
        }
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getDeviceList = function (key) {
      DeviceService.phoneList().then(function (res) {
        $scope.devices = res.data;
        if (UtilService.isEmpty($scope.devices)) {
          $scope.wizard.nextState = false;
        }
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getNameFromExtension = function (main) {
      if ($scope.users.filter) {
        var returned = $scope.users.filter(function (obj) {
          if (obj.default_extension == main) {
            return obj;
          }
        })[0];
        return returned && returned.displayname ? returned.displayname : '';
      }
    };

    $scope.selectUser = function (user) {
      if (user.default_extension !== 'none') {
        $scope.currentUserIndex = user;
        $scope.selectedUser = $scope.users.filter(function (obj) {
          if (obj.id == user.id) {
            return obj;
          }
        })[0];
        UserService.getMobileExtension($scope.selectedUser.username).then(function (res) {
          $scope.selectedUser.mobile = res.data;
        }, function (err) {
          if (err.status != 404) {
            console.log(err);
          }
        });
        UserService.getVoiceMail($scope.selectedUser.default_extension).then(function (res) {
          $scope.selectedUser.voiceMailState = true;
        }, function (err) {
          if (err.status != 404) {
            console.log(err);
          }
          $scope.selectedUser.voiceMailState = false;
        });
        UserService.getWebRTCExtension($scope.selectedUser.default_extension).then(function (res) {
          $scope.selectedUser.webRtcState = true;
        }, function (err) {
          console.log(err);
          $scope.selectedUser.webRtcState = false;
        });
      }
    };

    $scope.configureAndRebootPhone = function (device) {
      device.setPhysicalInAction = true;
      DeviceService.generateDeviceConfig({
        mac: device.mac,
      }).then(function (res) {
        DeviceService.rebootPhone({
          mac: device.mac,
          ip: device.ipv4
        }).then(function (res1) {
          console.log(res1);
          device.setPhysicalInAction = false;
          device.inError = false;
        }, function (err1) {
          console.log(err1);
          device.setPhysicalInAction = false;
          device.inError = true;
        });
      }, function (err) {
        console.log(err);
        device.setPhysicalInAction = false;
        device.inError = true;
      });
    };

    $scope.isConfigured = function (device) {
      for (var l in device.lines) {
        var line = device.lines[l];
        if (line.extension) {
          return true;
        }
      }
    };

    $scope.setPhysicalExtension = function (user, device, line) {
      device.setPhysicalInAction = true;
      UserService.createPhysicalExtension({
        mainextension: user.default_extension,
        mac: device.mac,
        model: device.model,
        line: line || null
      }).then(function (res) {
        device.setPhysicalInAction = false;
        $scope.getUserList(false);
        $scope.getDeviceList(false);
      }, function (err) {
        device.setPhysicalInAction = false;
        console.log(err);
        if (err.data.status == "There aren't available extension numbers") {
          $scope.maxExtensionReached = true;
        }
      });
    };

    $scope.deletePhysicalExtension = function (device, extension) {
      device.setPhysicalInAction = true;
      UserService.deletePhysicalExtension(extension).then(function (res) {
        device.setPhysicalInAction = false;
        $scope.getUserList(false);
        $scope.getDeviceList(false);
        console.log(res);
      }, function (err) {
        device.setPhysicalInAction = false;
        console.log(err);
      });
    };

    $scope.setMobileExtension = function (user) {
      $scope.selectedUser.setMobileInAction = true;
      if (user.mobile && user.mobile.length > 0) {
        UserService.createMobileExtension({
          username: user.username,
          mobile: user.mobile
        }).then(function (res) {
          $scope.selectedUser.setMobileInAction = false;
          $scope.generateUsers();
        }, function (err) {
          console.log(err);
          $scope.selectedUser.setMobileInAction = false;
        });
      } else {
        $scope.selectedUser.setMobileInAction = false;
      }
    };

    $scope.setVoiceMail = function () {
      $scope.selectedUser.setVoiceMailInAction = true;
      UserService.createVoiceMail({
        extension: $scope.selectedUser.default_extension,
        state: $scope.selectedUser.voiceMailState ? 'yes' : 'no'
      }).then(function (res) {
        $scope.selectedUser.setVoiceMailInAction = false;
        $scope.generateUsers();
      }, function (err) {
        console.log(err);
        $scope.selectedUser.setVoiceMailInAction = false;
      });
    };

    $scope.setWebRTC = function (event, state) {
      $scope.selectedUser.setWebRTCInAction = true;
      if ($scope.selectedUser.webRtcState) {
        UserService.createWebRTCExtension({
          extension: $scope.selectedUser.default_extension
        }).then(function (res) {
          $scope.selectedUser.setWebRTCInAction = false;
          $scope.generateUsers();
        }, function (err) {
          console.log(err);
          $scope.selectedUser.setWebRTCInAction = false;
        });
      } else {
        UserService.deleteWebRTCExtension($scope.selectedUser.default_extension).then(function (res) {
          $scope.selectedUser.setWebRTCInAction = false;
          $scope.generateUsers();
        }, function (err) {
          console.log(err);
          $scope.selectedUser.setWebRTCInAction = false;
        });
      }
    };

    $scope.setAppMobile = function (event, state) {
      $scope.selectedUser.setAppMobileInAction = true;
      /*UserService.createVoiceMail({
        extension: $scope.selectedUser.default_extension,
        state: state ? 'yes' : 'no'
      }).then(function (res) {
        $scope.selectedUser.setVoiceMailInAction = false;
      }, function (err) {
        console.log(err);
        $scope.selectedUser.setVoiceMailInAction = false;
      });*/
    };

    $scope.setProfile = function () {
      ProfileService.setUserProfile($scope.selectedUser.id, {
        profile_id: $scope.selectedUser.profile
      }).then(function (res) {
        $scope.generateUsers();
      }, function (err) {
        console.log(err);
      });
    };

    $scope.generateUsers = function () {
      UserService.generate().then(function (res) {
        console.log(res);
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getUserList(true);
    $scope.getDeviceList();
    $scope.getAllProfiles();
  });
