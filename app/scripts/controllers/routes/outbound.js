'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:RoutesOutboundCtrl
 * @description
 * # RoutesOutboundCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('RoutesOutboundCtrl', function ($scope, LocalStorageService, TrunkService, RouteService, UtilService) {

    $scope.routes = [];
    $scope.allTrunks = [];
    $scope.filteredTrunks = [];
    $scope.selectedRouteLang = LocalStorageService.get('preferredLanguage') || 'en';
    $scope.onSaveSuccess = false;
    $scope.onSaveError = false;
    $scope.onSave = false;

    $scope.toggleDetails = function (event) {
      var $this = $(event.target);
      var $heading = $(event.target).parents(".list-group-item");
      var $subPanels = $heading.find(".list-group-item-container");
      var index = $heading.find(".list-view-pf-expand").index(event.target);

      $heading.find(".list-view-pf-expand.active").find(".fa-angle-right").removeClass("fa-angle-down")
        .end().removeClass("active")
        .end();
      // Add active to the clicked item
      $(event.target).addClass("active")
        .parents(".list-group-item")
        .end().find(".fa-angle-right").addClass("fa-angle-down");
      // check if it needs to hide
      if ($subPanels.eq(index).hasClass("hidden")) {
        $heading.find(".list-group-item-container:visible").addClass("hidden");
        $subPanels.eq(index).removeClass("hidden");
      } else {
        $subPanels.eq(index).addClass("hidden");
        $heading.find(".list-view-pf-expand.active").find(".fa-angle-right").removeClass("fa-angle-down")
          .end().removeClass("active")
          .end();
      }
    };

    $scope.extractTrunkInfo = function (trunkName) {
      return UtilService.extractTrunkInfo(trunkName);
    };

    $scope.removeTrunk = function (indexRoute, indexTrunk) {
      $scope.routes[$scope.selectedRouteLang][indexRoute].trunks.splice(indexTrunk, 1);
      RouteService.deleteOutboundTrunk(indexRoute, indexTrunk).then(function (res) {
        console.log(res);
      }, function (err) {
        console.log(err);
      });
    };

    $scope.addTrunkToRoute = function (indexRoute, trunk) {
      $scope.routes[$scope.selectedRouteLang][indexRoute].trunks.push(trunk);
    };

    $scope.filterAllTrunks = function (routeTrunks) {
      function operation(list1, list2, isUnion) {
        return list1.filter(function (a) {
          return isUnion === this.has(a.trunkid);
        }, list2.reduce((hash, b) => hash.add(b.trunkid), new Set()));
      }

      function inFirstOnly(list1, list2) {
        return operation(list1, list2, false);
      }
      return inFirstOnly($scope.allTrunks, routeTrunks);
    };

    $scope.saveRoutes = function () {
      $scope.onSave = false;
      var postObj = {};
      postObj[$scope.selectedRouteLang] = $scope.routes[$scope.selectedRouteLang];
      RouteService.createDefaultsOutbounds(postObj).then(function (res) {
        console.log(res);
        $scope.onSaveSuccess = true;
        $scope.onSaveError = false;
        $scope.onSave = false;
        $scope.getOutbounds(false);
      }, function (err) {
        console.log(err);
        $scope.onSaveSuccess = false;
        $scope.onSaveError = true;
        $scope.onSave = false;
      });
    };

    $scope.getOutbounds = function (reload) {
      $scope.view.changeRoute = reload;
      RouteService.getOutbounds().then(function (resOutbounds) {
        // outbounds empty? get defaults
        if (resOutbounds.data.length == 0) {
          RouteService.getDefaultOutbounds().then(function (resDefaultOutbounds) {
            $scope.routes = resDefaultOutbounds.data;
            $scope.routes.length = Object.keys(resDefaultOutbounds.data).length;
            $scope.view.changeRoute = false;
          }, function (err) {
            console.log(err);
          });
        } else {
          $scope.routes[$scope.selectedRouteLang] = resOutbounds.data;
          $scope.routes.length = resOutbounds.data.length;
          $scope.view.changeRoute = false;
        }
        $scope.menuCount.routesOut = $scope.routes.length;
      }, function (err) {
        console.log(err);
      });
    };

    TrunkService.getAllTrunks().then(function (res) {
      $scope.allTrunks = res.data;
      $scope.getOutbounds(true);
    }, function (err) {
      console.log(err);
    });


  });
