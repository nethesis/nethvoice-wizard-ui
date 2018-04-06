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
    $scope.num = {
      tot: 0,
      selected: 0
    };
    $scope.bulkEdit = {}

    $scope.view.changeRoute = true;

    $scope.selectDest = {
      busydest: {
        label: 'Busy'
      },
      noanswerdest: {
        label: 'No answer'
      },
      notreachabledest: {
        label: 'Not reachable'
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
          $scope.num.tot = Object.keys($scope.users).length;
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
        $scope.num.selected++;
      } else {
        user.selected = false;
        $scope.search.result = false;
        $scope.num.selected--;
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
        $scope.num.selected = 0;
        for (var g in res.data) {
          for (var u in $scope.users) {
            $scope.users[u].selected = false;
            if (res.data[g].user_id == $scope.users[u].id) {
              $scope.users[u].selected = true;
              $scope.num.selected++;
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
          $scope.num.selected = Object.keys($scope.users).length;
          $scope.users[u].selected = true;
        } else {
          $scope.num.selected = 0;
          $scope.users[u].selected = false;
          $scope.search.result = false;
        }
      }
      $scope.search.string = '';
    }

    $scope.selectInterval = function () {
      $scope.num.selected = 0;
      for (var u in $scope.users) {
        $scope.users[u].selected = false;
        if ($scope.users[u].default_extension >= $scope.interval.from && $scope.users[u].default_extension <= $scope.interval.to) {
          $scope.users[u].selected = true;
          $scope.num.selected++;
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
          for (var d in $scope.selectDest) {
            $scope.selectDest[d].key = '';
            $scope.selectDest[d].selected = '';
            $scope.selectDest[d].value = {};
          }
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
            for (var d in $scope.dest) {
              for (var i in $scope.dest[d]) {
                if ($scope.dest[d][i].destination == $scope.bulkEdit.noanswerdest) {
                  $scope.selectDest.noanswerdest.selected = $scope.dest[d][i].description;
                  $scope.selectDest.noanswerdest.key = d;
                  $scope.selectDest.noanswerdest.value = $scope.dest[d];
                } else if ($scope.dest[d][i].destination == $scope.bulkEdit.busydest) {
                  $scope.selectDest.busydest.selected = $scope.dest[d][i].description;
                  $scope.selectDest.busydest.key = d;
                  $scope.selectDest.busydest.value = $scope.dest[d];
                } else if ($scope.dest[d][i].destination == $scope.bulkEdit.notreachabledest) {
                  $scope.selectDest.notreachabledest.selected = $scope.dest[d][i].description;
                  $scope.selectDest.notreachabledest.key = d;
                  $scope.selectDest.notreachabledest.value = $scope.dest[d];
                }
              }
            }
          }, function (err) {
            console.log(err);
          });
        }
      });
    }

    $scope.selectResults = function (res) {
      $q(function (resolve) {
        for (var u in $scope.users) {
            $scope.users[u].selected = false;
        }
        resolve($scope.users);
      }).then(function () {
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
      });
    }

    $scope.setDest = function (k, v, dk) {
      $scope.selectDest[dk].value = v;
      if (k != $scope.selectDest[dk].key) {
        $scope.selectDest[dk].selected = '';
        $scope.bulkEdit[dk] = null;
      }
      $scope.selectDest[dk].key = k;
    }

    $scope.setDestVal = function (k, dk) {
      $scope.bulkEdit[dk] = $scope.selectDest[dk].value[k].destination;
      $scope.selectDest[dk].selected = $scope.selectDest[dk].value[k].description;
    }

    $scope.resetDest = function (dk) {
      $scope.bulkEdit[dk] = null;
      $scope.selectDest[dk].value = {};
      $scope.selectDest[dk].key = '';
    }

    $scope.resetDestVal = function (dk) {
      $scope.bulkEdit[dk] = null;
      $scope.selectDest[dk].selected = '';
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
