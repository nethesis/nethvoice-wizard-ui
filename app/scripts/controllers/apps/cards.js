'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:AppsCardsCtrl
 * @description
 * # AppsCardsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('AppsCardsCtrl', function ($scope, ApplicationService) {
    $scope.allSources = [{
      id: 1,
      type: 'postgres',
      name: 'Reseller',
      host: '192.168.5.78',
      port: '5432',
      user: 'postgres',
      pass: 'eccola'
    }, {
      id: 2,
      type: 'mysql',
      name: 'Saluti',
      host: '192.168.5.78',
      port: '5432',
      user: 'postgres',
      pass: 'eccola'
    }];
    $scope.allCards = [{
      id: 1,
      name: 'Vendite',
      source: 1,
      query: 'SELECT * FROM Users u JOIN a ON a.id=u.idWHERE a = 1;'
    }, {
      id: 2,
      name: 'Canoni',
      source: 1,
      query: 'SELECT * FROM Canoni;'
    }];
    $scope.allDBTypes = [{
      type: 'mysql',
      name: 'MySQL'
    }, {
      type: 'postgres',
      name: 'PostgreSQL'
    }, {
      type: 'sqlserver:7',
      name: 'SQL Server 2012/2014'
    }, {
      type: 'sqlserver:8',
      name: 'SQL Server 2008 R2'
    }, {
      type: 'sqlserver:9',
      name: 'SQL Server 2008'
    }, {
      type: 'sqlserver:10',
      name: 'SQL Server 2005'
    }, {
      type: 'sqlserver:11',
      name: 'SQL Server 2000'
    }];

    $scope.newSource = {
      verified: false,
      isChecking: false,
      checked: false
    };

    $scope.newCard = {
      query: ''
    };

    $scope.editorOnChange = function (e) {
      setTimeout(function () {
        var _editor = e[1];
        _editor.resize();
      }, 200);
    };

    $scope.getDBName = function (type) {
      return $scope.allDBTypes.filter(function (val) {
        return val.type == type;
      })[0].name;
    };

    $scope.getSourceName = function (id) {
      return $scope.allSources.filter(function (val) {
        return val.id == id;
      })[0].name;
    };

    $scope.getAllDBTypes = function (reload) {
      $scope.view.changeRoute = reload;
      ApplicationService.allDBTypes().then(function (res) {
        $scope.allDBTypes = res.data;
        $scope.view.changeRoute = false;
      }, function (err) {
        console.log(err);
        $scope.view.changeRoute = false;
      });
    };

    $scope.getAllSources = function (reload) {
      $scope.view.changeRoute = reload;
      ApplicationService.allSources().then(function (res) {
        $scope.allSources = res.data;
        $scope.view.changeRoute = false;
      }, function (err) {
        console.log(err);
        $scope.view.changeRoute = false;
      });
    };

    $scope.getAllCards = function (reload) {
      $scope.view.changeRoute = reload;
      ApplicationService.allCards().then(function (res) {
        $scope.allCards = res.data;
        $scope.view.changeRoute = false;
      }, function (err) {
        console.log(err);
        $scope.view.changeRoute = false;
      });
    };

    $scope.saveSource = function (s) {
      s.onSave = true;
      ApplicationService.createSource(s).then(function (res) {
        s.onSave = false;
        s.id = res.data.id;
        $scope.getAllSources(false);
        $scope.onSaveSuccessSource = true;
        $scope.onSaveErrorSource = false;
        $scope.allSources.push(s);
        $scope.newSource = {
          verified: false,
          isChecking: false,
          checked: false
        };
        $('#newSourceModal').modal('hide');
      }, function (err) {
        s.onSave = false;
        $scope.onSaveSuccessSource = false;
        $scope.onSaveErrorSource = true;
        $('#newSourceModal').modal('hide');
        console.log(err);
      });
    };
    $scope.modifySource = function (s) {
      $scope.newSource = s;
    };
    $scope.deleteSource = function (s) {
      s.onSave = true;
      ApplicationService.deleteSource(s.id).then(function (res) {
        s.onSave = false;
        $scope.getAllSources(false);
      }, function (err) {
        s.onSave = false;
        console.log(err);
      });
    };

    $scope.checkConnection = function (s) {
      s.isChecking = true;
      ApplicationService.checkConnectionSource(s).then(function (res) {
        s.checked = true;
        s.isChecking = false;
        s.verified = true;
      }, function (err) {
        s.checked = true;
        s.isChecking = false;
        s.verified = false;
        console.log(err);
      });
    };

    $scope.cancelSource = function (s) {
      $scope.newSource = {
        verified: false,
        isChecking: false,
        checked: false
      };
      s = $scope.newSource;
    };

    $scope.saveCard = function (s) {
      s.onSave = true;
      ApplicationService.createCard(s).then(function (res) {
        s.onSave = false;
        s.id = res.data.id;
        $scope.getAllCards(false);
        $scope.onSaveSuccessCard = true;
        $scope.onSaveErrorCard = false;
        $scope.allCards.push(s);
        $scope.newCard = {
          query: ''
        };
        $('#newCardModal').modal('hide');
      }, function (err) {
        s.onSave = false;
        $scope.onSaveSuccessCard = false;
        $scope.onSaveErrorCard = true;
        $('#newCardModal').modal('hide');
        console.log(err);
      });
    };
    $scope.modifyCard = function (s) {
      $scope.newCard = s;
    };
    $scope.deleteCard = function (s) {
      s.onSave = true;
      ApplicationService.deleteCard(s.id).then(function (res) {
        s.onSave = false;
        $scope.getAllCards(false);
      }, function (err) {
        s.onSave = false;
        console.log(err);
      });
    };
    $scope.cancelCard = function (s) {
      $scope.newCard = {
        query: ''
      };
      s = $scope.newSource;
    };

    /*$scope.getAllDBTypes();
    $scope.getAllSources();
    $scope.getAllCards();*/
  });
