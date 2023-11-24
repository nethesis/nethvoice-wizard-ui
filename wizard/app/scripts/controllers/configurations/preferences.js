'use strict'

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:ConfigurationsCtrl
 * @description
 * # ConfigurationsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('ConfigurationsCtrl', function ($scope, $rootScope, $q, ConfigurationService, ProfileService, ModelService, DeviceService, UserService, PhoneService, DashboardService, $timeout) {

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

    $scope.deviceExtension = "";
    $scope.passwordExtension = "";
    $scope.USERS_PAGE = 15;
    $scope.usersLimit = $scope.USERS_PAGE;
    $scope.DEVICES_NOT_LINKED_PAGE = 15;
    $scope.usersLimit = 20;

    $scope.devicesNotLinkedLimit = $scope.DEVICES_NOT_LINKED_PAGE;

    $scope.availableUserFilters = ['all', 'configured', 'unconfigured']
    $scope.availableUserFiltersNumbers = ['username', 'displayname', 'default_extension', 'lname'];
    $scope.usersFilterNumbersOrd = false;
    
    $scope.usersFilter = $scope.availableUserFilters[0]
    $scope.usersFilterNumbers = $scope.availableUserFiltersNumbers[0]
    
    $rootScope.$on('scrollingContainerView', function () {
      if($scope.allUsers){
        if ($scope.allUsers.length > $scope.usersLimit) {
          $scope.usersLimit += $scope.SCROLLPLUS
        }
      }
    });

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
        UserService.getMobileNumber($scope.currentUser.username).then(function (res) {
          $scope.currentUser.mobile = res.data;
        }, function (err) {
          if (err.status != 404) {
            console.log(err);
          }
        });
        UserService.getWebRTCExtension($scope.currentUser.default_extension).then(function (res) {
          $scope.currentUser.webRtcState = true
        }, function (err) {
          if (err.status != 404) {
            console.log(err)
          }
          $scope.currentUser.webRtcState = false
        })
        UserService.getMobileExtension($scope.currentUser.default_extension).then(function (res) {
          $scope.currentUser.mobileAppState = true
        }, function (err) {
          if (err.status != 404) {
            console.log(err)
          }
          $scope.currentUser.mobileAppState = false
        })
        getCuDevicesEncryption($scope.currentUser.devices)
        getAvailableModels($scope.currentUser.devices)
      }
    }

    var filterModels = function (modelName, deviceMac) {
      return modelName.toLowerCase().startsWith(PhoneService.getVendor(deviceMac, $scope.macVendors).toLowerCase())
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

    var resetLoadingUser = function () {
      $scope.loadingUser[$scope.currentUser.username] = false
    }

    var getEncryption = function (ext, index) {
      ConfigurationService.getEncryption(ext).then(function (res) {
        resetLoadingUser()
        $scope.currentUser.devices[index].encryption = res.data
      }, function (err) {
        resetLoadingUser()
        console.log(err)
      })
    }

    var getCuDevicesEncryption = function(devices) {
      if (devices) {
        let isPhysical
        for (let device in devices) {
          if (devices[device].type == "physical") {
            isPhysical = true
          }
        }
        if (isPhysical) {
          $scope.currentUser.devices.forEach(function (el ,index) {
            if (el.type == "physical") {
              getEncryption(el.extension, index)
            }
          })
        } else {
          setTimeout(function () {
            $scope.$apply(function () {
              resetLoadingUser()
            })
          }, 2000)
        }
      } else {
        setTimeout(function () {
          $scope.$apply(function () {
            resetLoadingUser()
          })
        }, 2000)
      }
    }

    $scope.setMobileApp = function (mainextension) {
      UserService.createMobileExtension({
        "mainextension": mainextension
      }).then(function (res){
        $scope.currentUser.mobileAppState = true
        $scope.currentUser.devices[Object.keys($scope.currentUser.devices).length] = {
          "type": "mobile",
          "extension": res.data.extension
        }
      }, function (err) {
        console.log("err", err)
      })
    }

    $scope.deleteMobileApp = function (extension) {
      UserService.deleteMobileExtension(extension).then(function (){
        $scope.currentUser.mobileAppState = false
        for (let device in $scope.currentUser.devices) {
          if ($scope.currentUser.devices[device].type == "mobile") {
            delete $scope.currentUser.devices[device]
          }
        }
      }, function (err) {
        console.log("err", err)
      })
    }

    $scope.toggleMobileApp = function () {
      if ($scope.currentUser.mobileAppState) {
        $scope.setMobileApp($scope.currentUser.default_extension)
      } else {
        let mobileExt
        for (let device in $scope.currentUser.devices) {
          if ($scope.currentUser.devices[device].type == "mobile") {
            mobileExt = $scope.currentUser.devices[device].extension
          }
        }
        $scope.deleteMobileApp(mobileExt)
      }
    }

    // function for the currentModel creation
    $scope.setCurrentModelConfig = function (model, mac) {
      $scope.destroyAllSelects("#singleModelModal")
      $scope.buildModel(model, "configurations").then(function (res) {
        $scope.currentModel.mac = mac
        $scope.modelLdapTypeCheck()
        PhoneService.getPhone(mac).then(function (res) {
          $scope.currentModel.inputs = angular.copy(res.data.variables)
          $scope.currentModel.singleVariables = angular.copy(res.data.variables)
          // set single values to variables
          for (let variable in res.data.variables) {
            $scope.currentModel.storedVariables[variable] = res.data.variables[variable]
            $scope.currentModel.variables[variable] = res.data.variables[variable]
          }
          $("#singleModelModal").modal("show")
        }, function () {
          console.log(err)
        })

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
        $scope.allUsers = res.data;
        $scope.allUsers = [
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

    var completePhysicalExtension = function (device, line) {
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
        web_user: 'admin',
        web_password: $scope.defaults.adminpw || 'admin',
        clear_temporary: true
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
        device.encryption = $scope.defaults.provisioning_url_scheme === "https" ? true : false
        $scope.switchEncryption(device)
        // async graphics
        $timeout(function () {
          $scope.modelLdapTypeCheck()
        }, 1000);
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

    $scope.setPhysicalExtension = function (device, line) {
      if (!$scope.defaults) {
        ModelService.getDefaults().then(function (res) {
          $scope.defaults = res.data
          completePhysicalExtension(device, line)
        }, function (err) {
          console.log(err);
        })
      } else {
        completePhysicalExtension(device, line)
      }
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

    $scope.setMobileNumber = function (user) {
      $scope.currentUser.setMobileInAction = true
      UserService.createMobileNumber({
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

    $scope.openProvisioningInfo = function (mac, extension) {
      $q.all([
        PhoneService.getPhone(mac),
        DashboardService.getExtension(extension)
      ]).then(function (res) {
        $scope.currentPhoneInfo = res[0].data
        $scope.urlToCopy = res[0].data.provisioning_url1 ? res[0].data.provisioning_url1 : res[0].data.provisioning_url2
        $scope.currentPhoneInfo.model = res[1].data.sipuseragent
        $scope.currentPhoneInfo.codecs = res[1].data.codecs.join()
        $scope.currentPhoneInfo.ip = res[1].data.ip
        $scope.emptyDeviceInfo = false
        $("#provisioningInfoModal").modal("show")
      }, function (err) {
        $scope.emptyDeviceInfo = true
        $("#provisioningInfoModal").modal("show")
        console.log(err);
      });
    }

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

    function initPopovers() {
      $('[data-toggle=popover]').popovers()
        .on('hidden.bs.popover', function (e) {
          $(e.target).data('bs.popover').inState.click = false;
        });
    }

    $('#provisioningInfoModal').on('hide.bs.modal', function () {
      $("#provisioningInfoModal #showurlbtn").popover("hide")
      $scope.currentPhoneInfo = {}
    })

    var init = function () {
      getAllModelsAndUsersAndDevices()
      getAllProfiles()
      getAllGroups()
      initPopovers()
    }

    $scope.setModalPhysical = function (device){
      $scope.hostname = window.location.hostname;
      $scope.deviceExtension = device.extension;
      $scope.passwordExtension = device.secret;
    }

    angular.element(document).ready(function () {
      if (!$scope.macVendors) {
        PhoneService.getMacVendors().then(function (res) {
          $scope.$parent.macVendors = res.data
          init()
        }, function (err) {
          console.log(err)
        })
      } else {
        init()
      }
    })

  })
