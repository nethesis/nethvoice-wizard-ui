'use strict'

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:ConfigurationsCtrl
 * @description
 * # ConfigurationsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('ConfigurationsCtrl', function ($scope, ConfigurationService, ProfileService, ModelService, DeviceService, UserService, PhoneService, $timeout) {

    $scope.view.changeRoute = true

    $scope.allUsers = []
    $scope.allProfiles = []
    $scope.allGroups = []
    $scope.allDevices = []
    $scope.devicesNotLinked = []
    $scope.allModels = []

    $scope.loadingUser = {}
    $scope.loadingModel = {}
    $scope.hiddenUser = {}
    $scope.currentUser = {}
    $scope.linkTo = ""
    $scope.newDevice = {}

    $scope.availableUserFilters = ['all', 'configured', 'unconfigured']
    $scope.availableUserFiltersNumbers = ['lname', 'default_extension']
    $scope.usersFilter = $scope.availableUserFilters[0]
    $scope.usersFilterNumbers = $scope.availableUserFiltersNumbers[0]

    $scope.setCurrentUser = function (user) {
      if (user.username == $scope.currentUser.username) {
        $scope.hiddenUser[user.username] = !$scope.hiddenUser[user.username]
      } else {
        $scope.currentUser = user
        $scope.loadingUser[user.username] = true
        $scope.hiddenUser = {}
      }
      if (user.default_extension !== 'none') {
        $scope.currentUserIndex = user
        $scope.currentUser = $scope.allUsers.filter(function (obj) {
          if (obj.id == user.id) {
            return obj
          }
        })[0]
        ProfileService.getUserGroup($scope.currentUser.id).then(function (res) {
          $scope.currentUser.groups = res.data
        }, function (err) {
          if (err.status != 404) {
            console.log(err)
          }
        })
        UserService.getMobileExtension($scope.currentUser.username).then(function (res) {
          $scope.currentUser.mobile = res.data
        }, function (err) {
          if (err.status != 404) {
            console.log(err)
          }
        })
        UserService.getVoiceMail($scope.currentUser.default_extension).then(function (res) {
          if (res.data && res.data.mailbox) {
            $scope.currentUser.voiceMailState = true
          } else {
            $scope.currentUser.voiceMailState = false
          }
        }, function (err) {
          if (err.status != 404) {
            console.log(err)
          }
          $scope.currentUser.voiceMailState = false
        })
        UserService.getWebRTCExtension($scope.currentUser.default_extension).then(function (res) {
          $scope.currentUser.webRtcState = true
        }, function (err) {
          console.log(err)
          $scope.currentUser.webRtcState = false
        })
      }
      setTimeout(function () {
        $scope.loadingUser[user.username] = false
        $scope.$apply()
      }, 1000)
      console.log("CURRENT USER", $scope.currentUser)
    }

    // function for the currentModel creation
    $scope.setCurrentModelConf = function (name) {
      $scope.buildModel(name).then(function (cm) {
        if ($scope.currentModel.name != name) {
          $scope.loadingModel[name] = true
        }
        setTimeout(function () {
          $scope.loadingModel[name] = false
          $scope.$apply()
        }, 1000)
        console.log($scope.currentModel)
      }, function (err) {
        console.log(err)
      })
    }

    $scope.setDeviceModel = function (device) {
      var mac = angular.copy(device.mac.replace(/:/g, "-"))
      PhoneService.patchPhoneModel({
        mac: mac,
        model: device.model.name
      }).then(function (res) {

        console.log("MODEL CHANGES", res.data);

      }, function (err) {
        console.log(err)
      })
    }

    $scope.openDevices = function (user) {
      $scope.linkTo = user.username
      $scope.setCurrentUser(user)
    }

    var getAllProfiles = function () {
      ProfileService.allProfiles().then(function (res) {
        $scope.allProfiles = res.data

        console.log("ALL PROFILES", $scope.allProfiles);

      }, function (err) {
        console.log(err)
      })
    }

    var getAllGroups = function () {
      ProfileService.allGroups().then(function (res) {
        $scope.allGroups = res.data
      }, function (err) {
        console.log(err)
      })
    }

    var prepareDevices = function (devices) {
      devices.forEach(function (device) {
        // mac format
        if (device.mac) {
          device.mac = PhoneService.formatMac(device.mac)
        }
        // set model object
        if (device.model) {
          var model = $scope.allModels.find(function (m) {
            return m.name === device.model;
          })
          if (model) {
            device.model = model
          }
        }
        // convert "vendor" property to "manufacturer"
        if (device.hasOwnProperty("vendor")) {
          device.manufacturer = device.vendor
          delete device.vendor
        }
        // set filtered models
        if (device.manufacturer) {
          device.filteredModels = $scope.allModels.filter(function (model) {
            return model.name.toLowerCase().startsWith(device.manufacturer.toLowerCase());
          });
        } else {
          device.filteredModels = angular.copy($scope.allModels);
        }
      })
    }

    var getAllModelsAndUsersAndDevices = function () {
      ModelService.getModels().then(function (res) {
        $scope.allModels = res.data

        console.log("ALL MODELS", $scope.allModels);

        getAllUsers()
        getAllDevices()
      }, function (err) {
        console.log(err)
      })
    }

    var getAllUsers = function () {
      ConfigurationService.list(false).then(function (res) {
        $scope.allUsers = res.data
        console.log("ALL USERS", $scope.allUsers)
        $scope.view.changeRoute = false

        $scope.allUsers.forEach(function (user){
          prepareDevices(user.devices)
        })
      }, function (err) {
        console.log(err)
      })
    }

    var getDevicesNotLinked = function () {
      $scope.devicesNotLinked = []

      $scope.allDevices.forEach(function (device) {
        if (!device.lines || device.lines.length == 0 || !device.lines[0].extension) {
          $scope.devicesNotLinked.push(device)
        }
      })
    }

    var getAllDevices = function () {
      DeviceService.phoneList().then(function (res) {
        $scope.allDevices = res.data

        console.log("ALL DEVICES", $scope.allDevices);

        prepareDevices($scope.allDevices)

        getDevicesNotLinked()
      }, function (err) {
        console.log(err)
      })
    }

    $scope.getNameFromExtension = function (main) {
      if ($scope.allUsers.filter) {
        var returned = $scope.allUsers.filter(function (obj) {
          if (obj.default_extension == main) {
            return obj
          }
        })[0]
        return returned && returned.displayname ? returned.displayname : ''
      }
    }

    $scope.rebootDevice = function (device) {
      var rebootData = {};
      rebootData[device.mac] = {} // hours and minutes omitted -> reboot immediately
      device.rebootInAction = true;

      PhoneService.setPhoneReboot(rebootData).then(function (success) {
        // check failure
        var error = false;

        Object.keys(success.data).forEach(function (mac) {
          var rebootResult = success.data[mac];

          if (rebootResult.code !== 204) {
            // failure
            error = true;
          }
        });

        if (error) {
          console.log("Error rebooting device");
          device.rebootInAction = 'err';
        } else {
          // success
          device.rebootInAction = 'ok';
        }

        $timeout(function () {
          device.rebootInAction = false;
        }, 4000);
      }, function (err) {
        console.log(err);
      });
    }

    $scope.configureAndRebootPhone = function (device) {
      device.setPhysicalInAction = true
      DeviceService.generateDeviceConfig({
        mac: device.mac,
      }).then(function (res) {
        DeviceService.rebootPhone({
          mac: device.mac,
          ip: device.ipv4
        }).then(function (res1) {
          console.log(res1)
          device.setPhysicalInAction = false
          device.inError = false
        }, function (err1) {
          console.log(err1)
          device.setPhysicalInAction = false
          device.inError = true
        })
      }, function (err) {
        console.log(err)
        device.setPhysicalInAction = false
        device.inError = true
      })
    }

    $scope.bulkPhonesConfiguration = function (str) {
      var devices = $filter('filter')($scope.allDevices, str)
      for (var d in devices) {
        if ($scope.isConfigured(devices[d])) {
          $scope.configureAndRebootPhone(devices[d])
          $('#bulkModal').modal('hide')
        }
      }
    }

    $scope.isConfigured = function (device) {
      for (var l in device.lines) {
        var line = device.lines[l]
        if (line.extension) {
          return true
        }
      }
    }

    $scope.setPhysicalExtension = function (user, device, line) {
      device.setPhysicalInAction = true
      device.linkPhysicalInAction = true
      device.linkInAction = true
      UserService.createPhysicalExtension({
        mainextension: user.default_extension,
        mac: device.mac || null,
        model: device.model || null,
        line: line || null,
        web_user: device.web_user || 'admin',
        web_password: device.web_password || 'admin'
      }).then(function (res) {
        device.setPhysicalInAction = "ok"
        device.linkPhysicalInAction = "ok"
        device.linkInAction = "ok"
        device.web_password = ''
        device.web_user = ''
        $("#devicesAssociation").modal("hide")
        getAllUsers(false)
        getAllDevices()
      }, function (err) {
        device.setPhysicalInAction = "err"
        device.linkPhysicalInAction = "err"
        device.linkInAction = "err"
        console.log(err)
        if (err.data.status == "There aren't available extension numbers") {
          $scope.maxExtensionReached = true
        }
      })
    }

    $scope.deletePhysicalExtension = function (device, extension) {
      device.setPhysicalInAction = true
      UserService.deletePhysicalExtension(extension).then(function (res) {
        device.setPhysicalInAction = "ok"
        getAllUsers(false)
        getAllDevices()
        console.log(res)
      }, function (err) {
        device.setPhysicalInAction = "err"
        console.log(err)
      })
    }

    var resetMobileInAction = function () {
      setTimeout(function () {
        $scope.currentUser.setMobileInAction = false
        $scope.$apply()
      }, 1500)
    }

    $scope.setMobileExtension = function (user) {
      $scope.currentUser.setMobileInAction = true
      UserService.createMobileExtension({
        username: user.username,
        mobile: user.mobile
      }).then(function (res) {
        $scope.currentUser.setMobileInAction = 'ok'
        resetMobileInAction()
      }, function (err) {
        console.log(err)
        $scope.currentUser.setMobileInAction = 'err'
        resetMobileInAction()
      })
    }

    $scope.setVoiceMail = function () {
      $scope.currentUser.setVoiceMailInAction = true
      UserService.createVoiceMail({
        extension: $scope.currentUser.default_extension,
        state: $scope.currentUser.voiceMailState ? 'yes' : 'no'
      }).then(function (res) {
        $scope.currentUser.setVoiceMailInAction = false
      }, function (err) {
        console.log(err)
        $scope.currentUser.setVoiceMailInAction = false
      })
    }

    $scope.setWebRTC = function (event, state) {
      $scope.currentUser.setWebRTCInAction = true
      if ($scope.currentUser.webRtcState) {
        UserService.createWebRTCExtension({
          extension: $scope.currentUser.default_extension
        }).then(function (res) {
          $scope.currentUser.setWebRTCInAction = false
          getAllUsers(false)
        }, function (err) {
          console.log(err)
          $scope.currentUser.setWebRTCInAction = false
        })
      } else {
        UserService.deleteWebRTCExtension($scope.currentUser.default_extension).then(function (res) {
          $scope.currentUser.setWebRTCInAction = false
          getAllUsers(false)
        }, function (err) {
          console.log(err)
          $scope.currentUser.setWebRTCInAction = false
        })
      }
    }

    $scope.setProfile = function () {
      ProfileService.setUserProfile($scope.currentUser.id, {
        profile_id: $scope.currentUser.profile
      }).then(function (res) {
        console.log(res)
      }, function (err) {
        console.log(err)
      })
    }

    $scope.setGroup = function () {
      ProfileService.setUserGroup($scope.currentUser.id, {
        groups: $scope.currentUser.groups
      }).then(function (res) {
        console.log(res)
      }, function (err) {
        console.log(err)
      })
    }

    $scope.checkConfiguredExtensions = function (device, filter) {
      if (filter == 'all') {
        return true
      }
      var count = device.lines.length
      for (var l in device.lines) {
        var line = device.lines[l]
        if (line.extension) {
          count--
        }
      }
      return filter == 'unlinked' ? count == device.lines.length : count != device.lines.length
    }

    $('#devicesAssociation').on('hidden.bs.modal', function () {
      $scope.newDevice.linkInAction = false

      for (var device in $scope.allDevices) {
        $scope.allDevices[device].linkPhysicalInAction = false
        $scope.allDevices[device].setPhysicalInAction = false
        $scope.allDevices[device].linkInAction = false
      }
      getAllDevices()
    })

    angular.element(document).ready(function () {
      getAllModelsAndUsersAndDevices()
      getAllProfiles()
      getAllGroups()
    })

  })
