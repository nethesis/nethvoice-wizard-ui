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
    $scope.selectedRouteLang = LocalStorageService.get('preferredLanguage') || 'en';

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
    };

    $scope.saveRoutes = function () {
      console.log($scope.routes[$scope.selectedRouteLang]);
    };

    $scope.getOutbounds = function () {
      $scope.view.changeRoute = true;
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
          console.log(resOutbounds);
          $scope.view.changeRoute = false;
        }
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getOutbounds();
  });
