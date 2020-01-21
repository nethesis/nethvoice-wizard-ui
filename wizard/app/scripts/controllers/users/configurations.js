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
    $scope.devices = [];
    $scope.allProfiles = [];
    $scope.allGroups = [];
    $scope.maxExtensionReached = false;
    $scope.view.changeRoute = true;
    $scope.newDevice = {};

    $scope.availableUserFilters = ['all', 'configured', 'unconfigured'];
    $scope.availableUserFiltersNumbers = ['lname', 'default_extension'];
    $scope.selectedUserFilter = $scope.availableUserFilters[0];
    $scope.selectedUserFilterNumbers = $scope.availableUserFiltersNumbers[0];

    $scope.availableDeviceFilters = ['all', 'linked', 'unlinked'];
    $scope.selectedDeviceFilter = $scope.availableDeviceFilters[0];

    $scope.cancelError = function () {
      $scope.maxExtensionReached = false;
    };

    $scope.getAllProfiles = function () {
      ProfileService.allProfiles().then(function (res) {
        $scope.allProfiles = res.data;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getAllGroups = function () {
      ProfileService.allGroups().then(function (res) {
        $scope.allGroups = res.data;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getUserList = function () {
      UserService.list(false).then(function (res) {
        $scope.users = res.data;
        $scope.getDeviceList();
        var index = 0;
        for (var u in $scope.users) {
          if ($scope.users[u].default_extension !== 'none') {
            index = u;
            break;
          } else {
            continue;
          }
        }
        $scope.selectUser($scope.currentUserIndex || $scope.users[index], true);
        if ($scope.mode.isLdap && UtilService.isEmpty($scope.users)) {
          $scope.wizard.nextState = false;
        }
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getDeviceList = function () {
      DeviceService.phoneList().then(function (res) {
        $scope.view.changeRoute = false;
        $scope.devices = res.data;
      }, function (err) {
        $scope.view.changeRoute = false;
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

    $scope.resetDeviceSearch = function () {
      $scope.searchDeviceUserString = '';
    }

    $scope.selectUser = function (user, first) {
      if (!first) {
        if (user.devices.length > 0) {
          for (var d in user.devices) {
            if (user.devices[d].type === 'physical'  || user.devices[d].type === 'temporaryphysical') {
              $scope.searchDeviceUserString = user.username;
              break;
            } else {
              $scope.searchDeviceUserString = '';
            }
          }
        } else {
          $scope.searchDeviceUserString = '';
        }
      }
      if (user.default_extension !== 'none') {
        $scope.currentUserIndex = user;
        $scope.selectedUser = $scope.users.filter(function (obj) {
          if (obj.id == user.id) {
            return obj;
          }
        })[0];
        ProfileService.getUserGroup($scope.selectedUser.id).then(function (res) {
          $scope.selectedUser.groups = res.data;
        }, function (err) {
          if (err.status != 404) {
            console.log(err);
          }
        });
        UserService.getMobileExtension($scope.selectedUser.username).then(function (res) {
          $scope.selectedUser.mobile = res.data;
        }, function (err) {
          if (err.status != 404) {
            console.log(err);
          }
        });
        UserService.getVoiceMail($scope.selectedUser.default_extension).then(function (res) {
          if (res.data && res.data.mailbox) {
            $scope.selectedUser.voiceMailState = true;
          } else {
            $scope.selectedUser.voiceMailState = false;
          }
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

    $scope.bulkPhonesConfiguration = function (str) {
      var devices = $filter('filter')($scope.devices, str);
      for (var d in devices) {
        if ($scope.isConfigured(devices[d])) {
          $scope.configureAndRebootPhone(devices[d]);
          $('#bulkModal').modal('hide');
        }
      }
    }

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
        mac: device.mac || null,
        model: device.model || null,
        line: line || null,
        web_user: device.web_user || 'admin',
        web_password: device.web_password || 'admin'
      }).then(function (res) {
        device.setPhysicalInAction = false;
        device.web_password = '';
        device.web_user = '';
        $scope.getUserList(false);
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
        console.log(res);
      }, function (err) {
        device.setPhysicalInAction = false;
        console.log(err);
      });
    };

    $scope.setMobileExtension = function (user) {
      $scope.selectedUser.setMobileInAction = true;
      UserService.createMobileExtension({
        username: user.username,
        mobile: user.mobile
      }).then(function (res) {
        $scope.selectedUser.setMobileInAction = false;
      }, function (err) {
        console.log(err);
        $scope.selectedUser.setMobileInAction = false;
      });
    };

    $scope.setVoiceMail = function () {
      $scope.selectedUser.setVoiceMailInAction = true;
      UserService.createVoiceMail({
        extension: $scope.selectedUser.default_extension,
        state: $scope.selectedUser.voiceMailState ? 'yes' : 'no'
      }).then(function (res) {
        $scope.selectedUser.setVoiceMailInAction = false;
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
          $scope.getUserList(false);
        }, function (err) {
          console.log(err);
          $scope.selectedUser.setWebRTCInAction = false;
        });
      } else {
        UserService.deleteWebRTCExtension($scope.selectedUser.default_extension).then(function (res) {
          $scope.selectedUser.setWebRTCInAction = false;
          $scope.getUserList(false);
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
        console.log(res);
      }, function (err) {
        console.log(err);
      });
    };

    $scope.setGroup = function () {
      ProfileService.setUserGroup($scope.selectedUser.id, {
        groups: $scope.selectedUser.groups
      }).then(function (res) {
        console.log(res);
      }, function (err) {
        console.log(err);
      });
    };

    $scope.checkConfiguredExtensions = function (device, filter) {
      if (filter == 'all') {
        return true;
      }
      var count = device.lines.length;
      for (var l in device.lines) {
        var line = device.lines[l];
        if (line.extension) {
          count--;
        }
      }
      return filter == 'unlinked' ? count == device.lines.length : count != device.lines.length;
    };

    $scope.validateLocation()
    $scope.getUserList();
    $scope.getAllProfiles();
    $scope.getAllGroups();
  });
