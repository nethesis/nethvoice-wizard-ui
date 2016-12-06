'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:RoutesInboundCtrl
 * @description
 * # RoutesInboundCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('RoutesInboundCtrl', function($scope, RouteService) {

    $scope.getRouteList = function() {
      $scope.view.changeRoute = true;
      RouteService.inbounds().then(function(res) {
        $scope.routes = res.data;
        $scope.view.changeRoute = false;
      });
    };

    // Remove a route
    $scope.deleteRoute = function(did, cid) {
      RouteService.deleteInboundRoute(did, cid).then(function(res) {
        RouteService.inbounds().then(function(res) {
          $scope.routes = res.data;
        });
      });
    };

    // Modify a route with Visual Plan
    $scope.modifyRoute = function(did, cid) {
      window.open(customConfig.VPLAN_URL + '?id=' + encodeURI(did + ' / ' + cid), '_blank');
    };

    // Create a new route with Visual Plan
    $scope.newRoute = function() {
      window.open(customConfig.VPLAN_URL + '?did=new_route');
    };

    $scope.getRouteList();

  });