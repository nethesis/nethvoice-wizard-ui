'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:BulkextensionsCtrl
 * @description
 * # BulkextensionsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('BulkextensionsCtrl', function ($scope, $filter, $location, $q, ConfigService, UserService, UtilService, ProfileService, BulkService) {

    $scope.users = {};
    $scope.interval = {};
    $scope.allGroups = {};
    $scope.contexts = {};
    $scope.exts = {};
    $scope.temp = {};
    $scope.dest = {};
    $scope.bulkEdit = {}

    $scope.view.changeRoute = true;

    $scope.selectDest = {
      noanswerdest: {
        label: 'No Answer dest'
      },
      busydest: {
        label: 'Busy dest'
      },
      notreachabledest: {
        label: 'Not Reachable dest'
      }
    };

    $scope.phoneTypes = {
      0: 'physical',
      1: 'webrtc'
    }
    $scope.search = {
      string: '',
      result: false
    }

    $scope.getUserList = function () {
      if (!$scope.lockOnList) {
        $scope.lockOnList = true;
        UserService.list(true).then(function (res) {
          $scope.users = res.data;
          $scope.view.changeRoute = false;
        }, function (err) {
          $scope.users = {}
          $scope.view.changeRoute = false;
          console.log(err);
        });
      }
    };

    $scope.selectUser = function (user) {
      if (user.selected != true) {
        user.selected = true;
      } else {
        user.selected = false;
        $scope.search.result = false;
      }
    }

    $scope.getAllGroups = function () {
      ProfileService.allGroups().then(function (res) {
        $scope.allGroups = res.data;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.selectGroup = function (id) {
      ProfileService.allUserGroups(id).then(function (res) {
        for (var g in res.data) {
          for (var u in $scope.users) {
            $scope.users[u].selected = false;
            if (res.data[g].user_id == $scope.users[u].id) {
              $scope.users[u].selected = true;
            }
          }
        }
      }, function (err) {
        console.log(err);
      });
    }

    $scope.selectAll = function (val) {
      for (var u in $scope.users) {
        if (val == true) {
          $scope.users[u].selected = true;
        } else {
          $scope.users[u].selected = false;
          $scope.search.result = false;
        }
      }
      $scope.search.string = '';
    }

    $scope.selectInterval = function () {
      for (var u in $scope.users) {
        $scope.users[u].selected = false;
        if ($scope.users[u].default_extension >= $scope.interval.from && $scope.users[u].default_extension <= $scope.interval.to) {
          $scope.users[u].selected = true;
        }
      }
      $('#setInterval').modal('hide');
    }

    $scope.bulkEditSave = function () {
      $scope.temp.context = $scope.bulkEdit.context;
      $scope.temp.onsave = true;
      $q(function (resolve) {
        for (var c in $scope.contexts) {
          if ($scope.contexts[c] == $scope.bulkEdit.context) {
            $scope.bulkEdit.context = c;
          }
        }
        resolve($scope.bulkEdit);
      }).then(function (res) {
        BulkService.setBulkInfo($scope.exts, $scope.bulkEdit).then(function (res) {
          $scope.temp.onsave = false;
          $('#bulkEdit').modal('hide');
        }, function (err) {
          $scope.temp.onsave = false;
          console.log(err);
        });
      });
    }

    $scope.initEditModal = function () {
      $scope.bulkEdit = {};
      $scope.selectedUsers = [];
      $scope.temp.context = "";
      $scope.bulkEdit.callwaiting = false;
      $scope.bulkEdit.directdidmodule = false;
      $('#bulkEdit').modal('show');

      $q(function (resolve) {
        for (var u in $scope.users) {
          if ($scope.users[u].default_extension != 'none' && $scope.users[u].selected == true && !$scope.selectedUsers.includes($scope.users[u].default_extension)) {
            $scope.selectedUsers.push($scope.users[u].default_extension);
          }
        }
        resolve($scope.users);
      }).then(function (res) {
        $scope.exts = $scope.selectedUsers.join(',');
        if ($scope.exts) {
          BulkService.getBulkInfo($scope.exts).then(function (res) {
            $scope.bulkEdit = res.data;
            $scope.bulkEdit.ringtime = parseInt($scope.bulkEdit.ringtime);
            $scope.bulkEdit.context = $scope.contexts[res.data.context];

            // $scope.selectDest.noanswerdest.original = $scope.bulkEdit.noanswerdest;
            // $scope.selectDest.busydest.original = $scope.bulkEdit.busydest;
            // $scope.selectDest.notreachabledest.original = $scope.bulkEdit.notreachabledest;

            console.log("BULK");
            console.log($scope.bulkEdit);

          }, function (err) {
            console.log(err);
          });
        }
      });
    }

    $scope.selectResults = function (res) {
      var users = $filter('filter')($scope.users, res);
      if ($scope.search.result == false) {
        $scope.search.result = true;
      } else {
        $scope.search.result = false;
      }
      for (var u in users) {
        if ($scope.search.result == false) {
          users[u].selected = false;
        } else {
          users[u].selected = true;
        }
      }
    }

    $scope.setDest = function (k, v, dk) {
      $scope.selectDest[dk].value = v;
      if (k != $scope.selectDest[dk].key) {
        $scope.selectDest[dk].selected = '';
        $scope.bulkEdit[dk] = '';
      }
      $scope.selectDest[dk].key = k;
      console.log("SET DEST");
      console.log($scope.bulkEdit);
    }

    $scope.setDestVal = function (k, dk) {
      $scope.bulkEdit[dk] = $scope.selectDest[dk].value[k].destination;
      $scope.selectDest[dk].selected = $scope.selectDest[dk].value[k].description;
      console.log("SET DEST VAL");
      console.log($scope.bulkEdit);
    }

    $scope.resetDest = function (dk) {
      $scope.bulkEdit[dk] = null;
      $scope.selectDest[dk].value = {};
      $scope.selectDest[dk].key = '';
      console.log("RESET DEST");
      console.log($scope.bulkEdit);
    }

    $scope.resetDestVal = function (dk) {
      $scope.bulkEdit[dk] = null;
      $scope.selectDest[dk].selected = '';
      console.log("SET DEST VAL");
      console.log($scope.bulkEdit);
    }

    BulkService.getDestinations().then(function (res) {
      $scope.dest = res.data;
    }, function (err) {
      console.log(err);
    });

    BulkService.allContexts().then(function (res) {
      $scope.contexts = res.data;
    }, function (err) {
      console.log(err);
    });

    $scope.getUserList();
    $scope.getAllGroups();

  });
