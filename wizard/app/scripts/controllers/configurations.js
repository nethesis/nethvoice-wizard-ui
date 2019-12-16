'use strict'

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:ConfigurationsCtrl
 * @description
 * # ConfigurationsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('ConfigurationsCtrl', function ($scope, ConfigurationService, ProfileService, DeviceService) {

    $scope.view.changeRoute = true
    
    $scope.allUsers = {}
    $scope.allProfiles = []
    $scope.allGroups = []
    $scope.allDevices = []


    $scope.loadingUser = {}
    $scope.loadingModel = {}
    $scope.hiddenUser = {}
    $scope.currentUser = {}

    $scope.setCurrentUser = function (user) {
      if (user.username == $scope.currentUser.username) {
        $scope.hiddenUser[user.username] = !$scope.hiddenUser[user.username]
      } else {
        $scope.currentUser = user
        $scope.loadingUser[user.username] = true
        $scope.hiddenUser = {}
      }
      setTimeout(function () {
        $scope.loadingUser[user.username] = false
        $scope.$apply()
      }, 1000)
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

    $scope.openDevices = function () {
      console.log("Open association modal")
    }

    $scope.availableUserFilters = ['all', 'configured', 'unconfigured']
    $scope.availableUserFiltersNumbers = ['lname', 'default_extension']
    $scope.currentUserFilter = $scope.availableUserFilters[0]
    $scope.currentUserFilterNumbers = $scope.availableUserFiltersNumbers[0]


    // $scope.maxExtensionReached = false
    // $scope.newDevice = {}

    // $scope.cancelError = function () {
    //   $scope.maxExtensionReached = false
    // }

    var getAllProfiles = function () {
      ProfileService.allProfiles().then(function (res) {
        $scope.allProfiles = res.data
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

    var getAllUser = function () {
      ConfigurationService.list(false).then(function (res) {
        $scope.allUsers = res.data
        $scope.view.changeRoute = false
        getDeviceList()
        // var index = 0
        // for (var u in $scope.allUsers) {
        //   if ($scope.allUsers[u].default_extension !== 'none') {
        //     index = u
        //     break
        //   } else {
        //     continue
        //   }
        // }
        // $scope.selectUser($scope.currentUserIndex || $scope.allUsers[index], true) 
        // if ($scope.mode.isLdap && UtilService.isEmpty($scope.allUsers)) {
        //   $scope.wizard.nextState = false 
        // }
      }, function (err) {
        console.log(err)
      })
    }

    var getDeviceList = function () {
      DeviceService.phoneList().then(function (res) {
        $scope.allDevices = res.data
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

    $scope.resetDeviceSearch = function () {
      $scope.searchDeviceUserString = ''
    }

    $scope.selectUser = function (user, first) {
      if (!first) {
        if (user.devices.length > 0) {
          for (var d in user.devices) {
            if (user.devices[d].type === 'physical' || user.devices[d].type === 'temporaryphysical') {
              $scope.searchDeviceUserString = user.username
              break
            } else {
              $scope.searchDeviceUserString = ''
            }
          }
        } else {
          $scope.searchDeviceUserString = ''
        }
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
      UserService.createPhysicalExtension({
        mainextension: user.default_extension,
        mac: device.mac || null,
        model: device.model || null,
        line: line || null,
        web_user: device.web_user || 'admin',
        web_password: device.web_password || 'admin'
      }).then(function (res) {
        device.setPhysicalInAction = false
        device.web_password = ''
        device.web_user = ''
        getAllUser(false)
      }, function (err) {
        device.setPhysicalInAction = false
        console.log(err)
        if (err.data.status == "There aren't available extension numbers") {
          $scope.maxExtensionReached = true
        }
      })
    }

    $scope.deletePhysicalExtension = function (device, extension) {
      device.setPhysicalInAction = true
      UserService.deletePhysicalExtension(extension).then(function (res) {
        device.setPhysicalInAction = false
        getAllUser(false)
        console.log(res)
      }, function (err) {
        device.setPhysicalInAction = false
        console.log(err)
      })
    }

    $scope.setMobileExtension = function (user) {
      $scope.currentUser.setMobileInAction = true
      UserService.createMobileExtension({
        username: user.username,
        mobile: user.mobile
      }).then(function (res) {
        $scope.currentUser.setMobileInAction = false
      }, function (err) {
        console.log(err)
        $scope.currentUser.setMobileInAction = false
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
          getAllUser(false)
        }, function (err) {
          console.log(err)
          $scope.currentUser.setWebRTCInAction = false
        })
      } else {
        UserService.deleteWebRTCExtension($scope.currentUser.default_extension).then(function (res) {
          $scope.currentUser.setWebRTCInAction = false
          getAllUser(false)
        }, function (err) {
          console.log(err)
          $scope.currentUser.setWebRTCInAction = false
        })
      }
    }

    $scope.setAppMobile = function (event, state) {
      $scope.currentUser.setAppMobileInAction = true
      /*UserService.createVoiceMail({
        extension: $scope.currentUser.default_extension,
        state: state ? 'yes' : 'no'
      }).then(function (res) {
        $scope.currentUser.setVoiceMailInAction = false 
      }, function (err) {
        console.log(err) 
        $scope.currentUser.setVoiceMailInAction = false 
      }) */
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

    getAllUser()
    getAllProfiles()
    getAllGroups()

  })
