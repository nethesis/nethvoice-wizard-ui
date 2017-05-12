'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:AppsCardsCtrl
 * @description
 * # AppsCardsCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('AppsCardsCtrl', function ($scope, ProfileService, ApplicationService) {
    $scope.allProfiles = [];
    $scope.allSources = [];
    $scope.allTemplates = [];
    $scope.allCards = [];
    $scope.allDBTypes = [];
    $scope.supportedColors = {
      'red': 'cc0000',
      'blue': '0088ce',
      'orange': 'ec7a08',
      'gold': 'f0ab00',
      'light-green': '92d400',
      'green': '3f9c35',
      'cyan': '007a87',
      'light-blue': '00b9e4',
      'purple': '703fec'
    };

    $scope.newSource = {
      verified: false,
      isChecking: false,
      checked: false,
      showPass: false
    };

    $scope.newTemplate = {
      html: '',
      custom: true
    };

    $scope.newCard = {
      query: ''
    };

    $scope.isCustomerCardsWizard = function (step) {
      var status = true;
      if (step == 1) {
        status = $scope.allSources.length == 0 && $scope.allTemplates.length == 0 && $scope.allCards.length == 0;
      }
      if (step == 2) {
        status = $scope.allTemplates.length == 0 && $scope.allCards.length == 0;
      }
      if (step == 3) {
        status = $scope.allCards.length == 0;
      }
      return status;
    };

    $scope.togglePass = function (g) {
      g.showPass = !g.showPass;
    };

    $scope.setColor = function (g, color) {
      g.onSaveColor = true;
      var oldColor = g.color;
      g.color = color;
      var hashOld = $scope.supportedColors[oldColor];
      var hash = $scope.supportedColors[color];
      g.html = g.html.replace(hashOld, hash);
    };

    $scope.editorOnChange = function (e) {
      setTimeout(function () {
        var _editor = e[1];
        _editor.resize();
      }, 200);
    };

    $scope.getDBName = function (type) {
      return $scope.allDBTypes[type];
    };

    $scope.getSourceName = function (id) {
      var obj = $scope.allSources.filter(function (val) {
        return val.id == id;
      })[0];
      return obj && obj.name;
    };

    $scope.getAllDBTypes = function () {
      ApplicationService.allDBTypes().then(function (res) {
        $scope.allDBTypes = res.data;
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getAllSources = function (reload) {
      $scope.view.changeRoute = reload;
      ApplicationService.allSources().then(function (res) {
        $scope.allSources = res.data;
        $scope.view.changeRoute = false;
        for (var s in $scope.allSources) {
          $scope.checkConnection($scope.allSources[s]);
        }
      }, function (err) {
        console.log(err);
        $scope.view.changeRoute = false;
      });
    };

    $scope.getAllTemplates = function (reload) {
      $scope.view.changeRoute = reload;
      ApplicationService.allTemplates().then(function (res) {
        $scope.allTemplates = res.data;
        for (var t in $scope.allTemplates) {
          $scope.allTemplates[t].html = atob($scope.allTemplates[t].html);
        }
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
        for (var t in $scope.allCards) {
          $scope.allCards[t].query = atob($scope.allCards[t].query);
        }
        $scope.view.changeRoute = false;
      }, function (err) {
        console.log(err);
        $scope.view.changeRoute = false;
      });
    };

    $scope.getAllProfiles = function () {
      ProfileService.allProfiles().then(function (res) {
        $scope.allProfiles = res.data;
      }, function (err) {
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

    $scope.saveSource = function (s) {
      s.onSave = true;
      if (s.id) {
        ApplicationService.updateSource(s.id, s).then(function (res) {
          s.onSave = false;
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
          if ($scope.isCustomerCardsWizard(2)) {
            setTimeout(function () {
              $('#newTemplateModal').modal('show');
            }, 500);
          }
        }, function (err) {
          s.onSave = false;
          $scope.onSaveSuccessSource = false;
          $scope.onSaveErrorSource = true;
          $('#newSourceModal').modal('hide');
          console.log(err);
        });
      } else {
        ApplicationService.createSource(s).then(function (res) {
          s.onSave = false;
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
          if ($scope.isCustomerCardsWizard(2)) {
            setTimeout(function () {
              $('#newTemplateModal').modal('show');
            }, 500);
          }
        }, function (err) {
          s.onSave = false;
          $scope.onSaveSuccessSource = false;
          $scope.onSaveErrorSource = true;
          $('#newSourceModal').modal('hide');
          console.log(err);
        });
      }
    };
    $scope.modifySource = function (s) {
      s.onMod = true;
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
    $scope.cancelSource = function (s) {
      $scope.newSource = {
        verified: false,
        isChecking: false,
        checked: false
      };
      s = $scope.newSource;
      s.onMod = false;
    };

    $scope.saveTemplate = function (s) {
      s.onSave = true;
      s.html = btoa(s.html);
      if (s.id) {
        ApplicationService.updateTemplate(s.id, s).then(function (res) {
          s.onSave = false;
          $scope.getAllTemplates(false);
          $scope.onSaveSuccessTemplate = true;
          $scope.onSaveErrorTemplate = false;
          $scope.allTemplates.push(s);
          $scope.newTemplate = {
            html: '',
            custom: true
          };
          $('#newTemplateModal').modal('hide');
          if ($scope.isCustomerCardsWizard(3)) {
            setTimeout(function () {
              $('#newCardModal').modal('show');
            }, 500);
          }
        }, function (err) {
          s.onSave = false;
          $scope.onSaveSuccessTemplate = false;
          $scope.onSaveErrorTemplate = true;
          $('#newTemplateModal').modal('hide');
          console.log(err);
        });
      } else {
        ApplicationService.createTemplate(s).then(function (res) {
          s.onSave = false;
          $scope.getAllTemplates(false);
          $scope.onSaveSuccessTemplate = true;
          $scope.onSaveErrorTemplate = false;
          $scope.allTemplates.push(s);
          $scope.newTemplate = {
            html: '',
            custom: true
          };
          $('#newTemplateModal').modal('hide');
          if ($scope.isCustomerCardsWizard(3)) {
            setTimeout(function () {
              $('#newCardModal').modal('show');
            }, 500);
          }
        }, function (err) {
          s.onSave = false;
          $scope.onSaveSuccessTemplate = false;
          $scope.onSaveErrorTemplate = true;
          $('#newTemplateModal').modal('hide');
          console.log(err);
        });
      }

    };
    $scope.modifyTemplate = function (s) {
      s.onMod = true;
      $scope.newTemplate = s;
    };
    $scope.deleteTemplate = function (s) {
      s.onSave = true;
      ApplicationService.deleteTemplate(s.name).then(function (res) {
        s.onSave = false;
        $scope.getAllTemplates(false);
      }, function (err) {
        s.onSave = false;
        console.log(err);
      });
    };
    $scope.cancelTemplate = function (s) {
      $scope.newTemplate = {
        html: '',
        custom: true
      };
      s = $scope.newSource;
      s.onMod = false;
    };

    $scope.saveCard = function (s) {
      s.onSave = true;
      s.query = btoa(s.query);
      if (s.id) {
        ApplicationService.updateCard(s.id, s).then(function (res) {
          s.onSave = false;
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
      } else {
        ApplicationService.createCard(s).then(function (res) {
          s.onSave = false;
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
      }

    };
    $scope.modifyCard = function (s) {
      s.onMod = true;
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
      s.onMod = false;
    };

    $scope.getAllDBTypes();
    $scope.getAllProfiles();
    $scope.getAllSources(true);
    $scope.getAllTemplates(true);
    $scope.getAllCards(true);
  });
