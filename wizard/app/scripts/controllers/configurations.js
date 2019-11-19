'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:ConfigurationsCtrl
 * @description
 * # ConfigurationsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('ConfigurationsCtrl', function ($scope) {


    $scope.allUsers = [{
      "id": "15",
      "auth": "2",
      "authid": "b61769be-0521-1039-8778-99488d099b84",
      "username": "testuser1",
      "description": "",
      "password": false,
      "default_extension": "201",
      "primary_group": "1000",
      "permissions": null,
      "fname": "",
      "lname": "testuser1",
      "displayname": "Test User 1",
      "title": "",
      "company": null,
      "department": "",
      "language": null,
      "timezone": null,
      "dateformat": null,
      "timeformat": null,
      "datetimeformat": null,
      "email": "testuser1@vm3.local",
      "cell": "",
      "work": "",
      "home": "",
      "fax": "",
      "dn": "Test User 1",
      "devices": [{
        "id": "187",
        "user_id": "15",
        "mac": "00:15:65:11:5B:B5",
        "vendor": "Yealink\/Dreamwave",
        "model": "T26P",
        "line": "1",
        "extension": "91201",
        "secret": "c4a9a9c0f939eb17f29a6d511f9da042",
        "web_user": null,
        "web_password": null,
        "type": "physical"
      }, {
        "id": "198",
        "user_id": "15",
        "mac": null,
        "vendor": null,
        "model": null,
        "line": null,
        "extension": "201",
        "secret": "7c0c1e11776b11c3ec57e8c35b305915",
        "web_user": null,
        "web_password": null,
        "type": "webrtc"
      }],
      "profile": "3"
    }, {
      "id": "11",
      "auth": "2",
      "authid": "ba67e868-0521-1039-8781-99488d099b84",
      "username": "testuser10",
      "description": "",
      "password": false,
      "default_extension": "210",
      "primary_group": "1000",
      "permissions": null,
      "fname": "",
      "lname": "testuser10",
      "displayname": "Test User 10",
      "title": "",
      "company": null,
      "department": "",
      "language": null,
      "timezone": null,
      "dateformat": null,
      "timeformat": null,
      "datetimeformat": null,
      "email": "testuser10@vm3.local",
      "cell": "",
      "work": "",
      "home": "",
      "fax": "",
      "dn": "Test User 10",
      "devices": [{
        "id": "19",
        "user_id": "11",
        "mac": null,
        "vendor": null,
        "model": null,
        "line": null,
        "extension": "210",
        "secret": "5cabc2887653a3a28900e5287f43581f",
        "web_user": null,
        "web_password": null,
        "type": "webrtc"
      }, {
        "id": "20",
        "user_id": "11",
        "mac": null,
        "vendor": null,
        "model": null,
        "line": null,
        "extension": "91210",
        "secret": "c7c7ee1d76d0f98bce664c0b0b256bbb",
        "web_user": null,
        "web_password": null,
        "type": "webrtc_mobile"
      }],
      "profile": "3"
    }, {
      "id": "50",
      "auth": "2",
      "authid": "5f143394-0522-1039-87d1-99488d099b84",
      "username": "testuser100",
      "description": "",
      "password": false,
      "default_extension": "300",
      "primary_group": "1000",
      "permissions": null,
      "fname": "",
      "lname": "testuser100",
      "displayname": "Test User 100",
      "title": "",
      "company": null,
      "department": "",
      "language": null,
      "timezone": null,
      "dateformat": null,
      "timeformat": null,
      "datetimeformat": null,
      "email": "testuser100@vm3.local",
      "cell": "",
      "work": "",
      "home": "",
      "fax": "",
      "dn": "Test User 100",
      "devices": [{
        "id": "179",
        "user_id": "50",
        "mac": null,
        "vendor": null,
        "model": null,
        "line": null,
        "extension": "300",
        "secret": "d658d75c759ebb4c0ceb179fdddacde9",
        "web_user": null,
        "web_password": null,
        "type": "webrtc"
      }, {
        "id": "180",
        "user_id": "50",
        "mac": null,
        "vendor": null,
        "model": null,
        "line": null,
        "extension": "91300",
        "secret": "206af30b19adf6070ee0b023d630f677",
        "web_user": null,
        "web_password": null,
        "type": "webrtc_mobile"
      }],
      "profile": "3"
    }]

    $scope.loadingUser = {}
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

    $scope.openDevices = function () {
      console.log("Open association modal");
    }

  });
