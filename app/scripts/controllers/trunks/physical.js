'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:TrunksPhysicalCtrl
 * @description
 * # TrunksPhysicalCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('TrunksPhysicalCtrl', function($scope, TrunkService) {

    $scope.props = {
      configured: false,
      searched: false,
      gwSearching: false
    };
    // example data taken from rest api calls
    $scope.trunks = [2000,2001,2002,2003,2004,2005];
    $scope.extensions = ['200','201','202','203','204','205'];
    $scope.models = {
      'MEDIATRIX': {
        'list': [
          { model: 'M4401', descr: '4401 ISDN 1 Porta', code: '4401' },
          { model: 'M4402', descr: '4402 ISDN 2 Porte', code: '4402', n_pri_trunks: 0, n_isdn_trunks: 2, n_fxo_trunks: 0, n_fxs_ext: 0 },
          { model: 'M4404', descr: '4404 ISDN 4 Porte', code: '4404' }
        ]
      },
      'PATTON': {
        'list': [
          { model: 'M54321', descr: 'Analogico 2 Porte FXO', code: 'JO' },
          { model: '1111', descr: 'Analogico 2 Porte FXS', code: 'JS' },
          { model: '1111', descr: 'Analogico 2 Porte FXS + 2 Porte FXO', code: '2JS2JO' },
          { model: '1111', descr: 'Analogico 2 Porte FXS + 2 Porte FXO + 2 Por', code: '2BIS2JS2JO8V' },
          { model: '1111', descr: 'Analogico 4 Porte FXO', code: 'JO' },
          { model: '1111', descr: 'Analogico 4 Porte FXS', code: 'JS' },
          { model: '1111', descr: 'Analogico 4 Porte FXS + 2 Porte FXO', code: '4JS2JO' },
          { model: '1111', descr: 'Analogico 4 Porte FXS + 2 Porte ISDN', code: '2BIS4JS8V2GS' },
          { model: '1111', descr: 'Analogico 4 Porte FXS + 4 Porte FXO', code: '4JS4JO' },
          { model: '1111', descr: 'Analogico 4 Porte FXS + 4 Porte FXO + 4 Por', code: '4BIS4JS4JO12V2GS' },
          { model: '1111', descr: 'Analogico 4 Porte FXS + 4 Porte ISDN', code: '4BIS4JS12V' },
          { model: '1111', descr: 'Analogico 4 Porte FXS + 8 Porte ISDN', code: '8BIS4JS24V' },
          { model: '1111', descr: 'Analogico 6 Porte FXS', code: 'JS' },
          { model: '1111', descr: 'Analogico 8 Porte FXS', code: 'JS' },
          { model: '1111', descr: 'Analogico 8 Porte FXS + 4 Porte ISDN', code: '4BIS8JS16V2GS' },
          { model: '4552', descr: 'ISDN 1 Porta', code: '1BIS2' },
          { model: '4554', descr: 'ISDN 2 Porte', code: '2BIS4' },
          { model: '4638', descr: 'ISDN 4 Porte (4 chiamate voip)', code: '4BIS4V' },
          { model: '4661', descr: 'ISDN 8 Porte (8 chiamate voip)', code: '8BIS8V' },
          { model: '1111', descr: 'PRI 1 Porta', code: '1E15V' },
          { model: '1111', descr: 'PRI 4 Porte', code: '4E15VR' },
          { model: '1111', descr: 'TRINITY ISDN 1 Porta', code: 'TRI1BRI' },
          { model: '1111', descr: 'TRINITY ISDN 2 Porte', code: 'TRI2BRI' },
          { model: '1111', descr: 'TRINITY ISDN 4 Porte', code: 'TRI4BRI' },
          { model: '1111', descr: 'TRINITY PRI 1 Porta', code: 'TRI1PRI' },
          { model: '1111', descr: 'TRINITY PRI 2 Porte', code: 'TRI2PRI' },
          { model: '1111', descr: 'TRINITY PRI 4 Porte', code: 'TRI4PRI' }
        ]
      },
      'SANGOMA': {
        'list': [
          { model: '1111', descr: 'Vega 100 1 Porta PRI E1', code: '' },
          { model: '1111', descr: 'Vega 200 2 Porte PRI E1', code: '' },
          { model: '1111', descr: 'Vega 3000 24 Porte FXS', code: '' },
          { model: '5342677', descr: 'Vega 400 4 Porte PRI E1', code: '', n_pri_trunks: 4, n_isdn_trunks: 0, n_fxo_trunks: 0, n_fxs_ext: 0 },
          { model: '34512', descr: 'Vega 50 2 Porte ISDN', code: '', n_pri_trunks: 0, n_isdn_trunks: 2, n_fxo_trunks: 0, n_fxs_ext: 0 },
          { model: '778899', descr: 'Vega 50 4 Porte FXO', code: '', n_pri_trunks: 0, n_isdn_trunks: 0, n_fxo_trunks: 4, n_fxs_ext: 0 },
          { model: '1111', descr: 'Vega_Vega 50 4 Porte FXS 2 Porte FXO', code: '' },
          { model: '1111', descr: 'Vega 50 4 Porte ISDN', code: '' },
          { model: 'Vega_50_50fxs', descr: 'Vega 5000 50 Porte FXS', code: '', n_pri_trunks: 0, n_isdn_trunks: 0, n_fxo_trunks: 0, n_fxs_ext: 50 }
        ]
      }
    };
    $scope.vendors = Object.keys($scope.models);
    $scope.gateways = [
      {
        id: 2,
        ip: '192.168.5.1',
        mac: '00:11:22:33:44:55',
        vendor: 'MEDIATRIX',
        model: 'M4402',
        gateway: '192.168.5.253',
        name: 'test',
        configured: true,
        trunks_isdn: [
          { name: '2003', type: 'pmp' },
          { name: '2004', type: 'pmp' }
        ],
        trunks_fxo: [
          { number: '1111111', linked_trunk: '2005' },
          { number: '2222222', linked_trunk: '2006' },
          { number: '3333333', linked_trunk: '2007' },
          { number: '4444444', linked_trunk: '2008' }
        ],
        trunks_pri: [
          { linked_trunk: '2009' },
          { linked_trunk: '2010' },
          { linked_trunk: '2011' },
          { linked_trunk: '2012' }
        ],
        extens_fxs: [
          { linked_ext: '200' },
          { linked_ext: '201' },
          { linked_ext: '202' },
          { linked_ext: '203' }
        ],
      },
      {
        ip: '192.168.5.222',
        mac: '11:11:11:11:11:11',
        vendor: 'SANGOMA'
      },
      {
        ip: '192.168.5.111',
        mac: '22:22:22:22:22:22',
        vendor: 'PATTON'
      }
    ];
    //
    $scope.currentGw = $scope.gateways[0];
    $scope.newGw = {};

    $scope.getRange = function(n) {
      return new Array(n);
    };

    $scope.deleteGw = function() {
      for (var i=0; i<$scope.gateways.length; i++) {
        if ($scope.gateways[i].mac === $scope.currentGw.mac) {
          $scope.gateways.splice(i, 1);
        }
      }
      $scope.updateGwList();
      // TrunkService.deleteGw().then(function(res) {
      // }, function(err) {
      //   if (err.status !== 200) {
      //     $scope.login.showError = true;
      //     $scope.login.isLogged = false;
      //     $('#loginTpl').show();
      //     $location.path('/login');
      //   }
      //   console.log(err);
      // });
    };

    $scope.updateExtraFields = function() {
      var tempArr = $scope.models[$scope.currentGw.vendor].list;
      for (var i=0; i<tempArr.length; i++) {
        if (tempArr[i].model === $scope.currentGw.model.model) {
          // add isdn trunk fields
          $scope.currentGw.trunks_isdn = [];
          for (var k=0; k<tempArr[i].n_isdn_trunks; k++) {
            $scope.currentGw.trunks_isdn.push({ name: parseInt($scope.trunks[$scope.trunks.length - 1]) + k + 1, type: 'pp' });
          }
          // add pri trunk fields
          $scope.currentGw.trunks_pri = [];
          for (var k=0; k<tempArr[i].n_pri_trunks; k++) {
            $scope.currentGw.trunks_pri.push({ linked_trunk: parseInt($scope.trunks[$scope.trunks.length - 1]) + k + 1 });
          }
          // add fxo trunk fields
          $scope.currentGw.trunks_fxo = [];
          for (var k=0; k<tempArr[i].n_fxo_trunks; k++) {
            $scope.currentGw.trunks_fxo.push({ number: '', linked_trunk: parseInt($scope.trunks[$scope.trunks.length - 1]) + k + 1 });
          }
          // add fxs ext fields
          $scope.currentGw.extens_fxs = [];
          for (var k=0; k<tempArr[i].n_fxs_ext; k++) {
            $scope.currentGw.extens_fxs.push({ linked_ext: '' });
          }
        }
      }
    };

    $scope.updateGwList = function() {
      $scope.props.gwSearching = true;
      setTimeout(function () {
        
        $scope.gateways = $scope.gateways;
        $scope.currentGw = $scope.gateways[0];

        $scope.props.gwSearching = false;
        $scope.props.searched = true;
        $scope.$apply();
      }, 500);
    };

    $scope.setCurrentGw = function(index) {
      $scope.currentGw = $scope.gateways[index];
      $('.list-item-gw').removeClass('active');
      $('.list-item-gw-' + index).toggleClass('active');
    };

    $scope.showNewGwDialog = function() {
      $('#newGwDialog').modal('show');
    };

    $scope.hideNewGwDialog = function() {
      $('#newGwDialog').modal('hide');
    };

    $scope.addNewGw = function() {
      var newGw = {
        ip: $scope.newGw.ip,
        mac: $scope.newGw.mac,
        model: $scope.newGw.model,
        vendor: $scope.newGw.vendor
      };
      newGw.trunks_fxo = [];
      for (var i=0; i<$scope.newGw.model.n_fxo_trunks; i++) {
        newGw.trunks_fxo.push({ number: '', linked_trunk: parseInt($scope.trunks[$scope.trunks.length - 1]) + i });
      }
      newGw.trunks_pri = [];
      for (var i=0; i<$scope.newGw.model.n_pri_trunks; i++) {
        newGw.trunks_pri.push({ linked_trunk: parseInt($scope.trunks[$scope.trunks.length - 1]) + i });
      }
      newGw.trunks_isdn = [];
      for (var i=0; i<$scope.newGw.model.n_isdn_trunks; i++) {
        newGw.trunks_isdn.push({ name: parseInt($scope.trunks[$scope.trunks.length - 1]) + i, type: 'pmp' });
      }
      newGw.extens_fxs = [];
      for (var i=0; i<$scope.newGw.model.n_fxs_ext; i++) {
        newGw.extens_fxs.push({ linked_ext: '' });
      }
      $scope.gateways.push(newGw);
      $scope.newGw = undefined;
      this.hideNewGwDialog();
    };

    $scope.saveConfig = function() {
      // todo....
    };

  });
