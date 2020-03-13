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
    $scope.currentUser = {}
    $scope.loadingUser = {}
    $scope.loadingModel = {}
    $scope.hiddenUser = {}
    $scope.linkTo = ""
    $scope.newDevice = {}
    $scope.deviceToLink = {}
    $scope.deviceToLink.device = null

    $scope.USERS_PAGE = 15;
    $scope.usersLimit = $scope.USERS_PAGE;
    $scope.DEVICES_NOT_LINKED_PAGE = 15;
    $scope.devicesNotLinkedLimit = $scope.DEVICES_NOT_LINKED_PAGE;

    $scope.availableUserFilters = ['all', 'configured', 'unconfigured']
    $scope.availableUserFiltersNumbers = ['lname', 'default_extension']
    
    $scope.usersFilter = $scope.availableUserFilters[0]
    $scope.usersFilterNumbers = $scope.availableUserFiltersNumbers[0]

    $scope.setCurrentUser = function (user) {
      if (user.username == $scope.currentUser.username) {
        $scope.hiddenUser[user.username] = !$scope.hiddenUser[user.username]
      } else {
        $scope.currentUser = user
        $scope.currentExtension = $scope.currentUser.default_extension
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
        $scope.currentExtension = $scope.currentUser.default_extension
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
        getCuDevicesEncryption($scope.currentUser.devices)
        getAvailableModels($scope.currentUser.devices)
      }
      setTimeout(function () {
        $scope.loadingUser[user.username] = false
        $scope.$apply()
      }, 1500)
    }

    var filterModels = function (modelName, deviceMac) {
      return modelName.toLowerCase().startsWith(PhoneService.getVendor(deviceMac).toLowerCase())
    }

    var getAvailableModels = function (devices) {
      for (let device in devices) {
        if (devices[device].mac) {
          $scope.currentUser.devices[device].availableModels = []
          for (let model in $scope.allModels) {
            if (filterModels($scope.allModels[model].name, devices[device].mac)) {
              $scope.currentUser.devices[device].availableModels.push($scope.allModels[model])
            }
          }
        }
      }
    }

    var getEncryption = function (ext, index) {
      ConfigurationService.getEncryption(ext).then(function (res) {
        $scope.currentUser.devices[index].encryption = res.data
      }, function (err) {
        console.log(err)
      })
    }

    var getCuDevicesEncryption = function(devices) {
      if (devices) {
        $scope.currentUser.devices.forEach(function (el ,index) {
          getEncryption(el.extension, index)
        })
      }
    }

    // function for the currentModel creation
    $scope.setCurrentModelConfig = function (mac) {
      $scope.buildPhoneModel(mac, "configurations").then(function (cm) {
        $("#singleModelModal").modal("show")
        // if ($scope.currentModel.name != name) {
        //   $scope.loadingModel[name] = true
        // }
        // setTimeout(function () {
        //   $scope.loadingModel[name] = false
        //   $scope.$apply()
        // }, 1000)
      }, function (err) {
        console.log(err)
      })
    }

    $scope.setDeviceModel = function (device) {
      let mac = angular.copy(device.mac.replace(/:/g, "-"))
      // set phone model on Tancredi
      PhoneService.setPhoneModel(mac, device.model.name).then(function (res) {
        // set phone model on Corbera
        UserService.setPhoneModel(mac, device.model.name).then(function (res) {
        }, function (err) {
          console.log(err)
        })
      }, function (err) {
        console.log(err)
      })
    }

    $scope.openDevices = function (user) {
      $scope.linkTo = user.username
      $scope.currentExtension = user.default_extension
      $scope.deviceToLink.device = null
      $scope.showResultLinkToUser = false;
      $scope.linkToUserSuccess = false;
    }

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

    var prepareDevices = function (devices) {
      devices.forEach(function (device) {
        // mac format
        if (device.mac) {
          device.mac = PhoneService.formatMac(device.mac)
        }
        // set model object
        if (device.model) {
          var model = $scope.allModels.find(function (m) {
            return m.name === device.model
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
      })
    }

    var getAllModelsAndUsersAndDevices = function () {
      ModelService.getModels().then(function (res) {
        $scope.allModels = res.data
        getAllUsers()
        getAllDevices()
      }, function (err) {
        console.log(err)
      })
    }

    var getAllUsers = function () {
      ConfigurationService.list(false).then(function (res) {
        $scope.allUsers = res.data
        $scope.view.changeRoute = false
        $scope.allUsers.forEach(function (user){
          prepareDevices(user.devices)
          // update current user if exists
          if (user.username == $scope.currentUser.username) {
            $scope.currentUser.devices = user.devices
            getCuDevicesEncryption($scope.currentUser.devices)
            getAvailableModels($scope.currentUser.devices)
          }
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

    $scope.setPhysicalExtension = function (device, line) {
      device.setPhysicalInAction = true
      device.linkPhysicalInAction = true
      device.linkInAction = true
      $scope.linkToUserInProgress = true;
      // link device in wizard api
      UserService.createPhysicalExtension({
        mainextension: $scope.currentExtension,
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
        device.extension = res.data.extension
        $scope.linkToUserInProgress = false;
        $scope.showResultLinkToUser = true;
        $scope.linkToUserSuccess = true;
        // set encryption if cloud
        ModelService.getDefaults().then(function (res) {
          device.encryption = res.data.provisioning_url_scheme === "https" ? true : false
          $scope.switchEncryption(device)
        }, function (err) {
          console.log(err);
        })
        // async graphics
        $timeout(function () {
          $('#devicesAssociation').modal('hide');
        }, 2500);
        $timeout(function () {
          getAllUsers(false)
          getAllDevices()
        }, 1000);
      }, function (err) {
        console.log(err)
        device.setPhysicalInAction = "err"
        device.linkPhysicalInAction = "err"
        device.linkInAction = "err"
        $scope.linkToUserInProgress = false;
        $scope.showResultLinkToUser = true;
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
        // set profile
      }, function (err) {
        console.log(err)
      })
    }

    $scope.setGroup = function () {
      ProfileService.setUserGroup($scope.currentUser.id, {
        groups: $scope.currentUser.groups
      }).then(function (res) {
        // set group
      }, function (err) {
        console.log(err)
      })
    }

    $scope.switchEncryption = function (device) {
      ConfigurationService.setEncryption(device.extension, device.encryption).then(function (res) {
        // encryption set
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

    $('#singleModelModal').on('hidden.bs.modal', function () {
      $scope.destroyAllSelects("#modelsUIUrl")
    })

    var scrollInventory = function () {
      $scope.$apply(function () {
        $scope.usersLimit += $scope.USERS_PAGE
      })
    }

    var scrollInventoryDevices = function () {
      $scope.$apply(function () {
        $scope.devicesNotLinkedLimit += $scope.DEVICES_NOT_LINKED_PAGE
      })
    }

    document.addEventListener('configScroll', scrollInventory)
    document.addEventListener('configDevicesScroll', scrollInventoryDevices)

    $scope.$on('$routeChangeStart', function() {
      document.removeEventListener('configScroll', scrollInventory)
      document.removeEventListener('configDevicesScroll', scrollInventoryDevices)
      $scope.view.changeRoute = true
      $scope.usersLimit = $scope.USERS_PAGE
      $scope.devicesNotLinkedLimit = $scope.DEVICES_NOT_LINKED_PAGE
      // empty objs
      $scope.allUsers = null
      $scope.allProfiles = null
      $scope.allGroups = null
      $scope.allDevices = null
      $scope.devicesNotLinked = null
      $scope.allModels = null
      $scope.currentUser = null
      $scope.currentModel = {}
    })

    angular.element(document).ready(function () {
      getAllModelsAndUsersAndDevices()
      getAllProfiles()
      getAllGroups()
    })

  })
