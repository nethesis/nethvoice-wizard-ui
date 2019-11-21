'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:BulkdevicesCtrl
 * @description
 * # BulkdevicesCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('BulkdevicesCtrl', function ($scope, UtilService) {
    $scope.phones = [];

    $scope.phonesTancredi = [ //// mockup
      { mac: "00:04:13:11:22:31", model: "snom100", display_name: "Snom" },
      { mac: "0C:38:3E:99:88:72", model: "fanvil-600", display_name: "Fanvil" },
      { mac: "00:15:65:55:55:53", model: null, display_name: "Yealink" },
      { mac: "00:04:13:11:22:34", model: "snom200", display_name: "Snom" },
      { mac: "00:04:13:11:22:35", model: "snom100", display_name: "Snom" },
      { mac: "00:04:13:11:22:36", model: null, display_name: "Snom" },
      { mac: "0C:38:3E:99:88:77", model: null, display_name: "Fanvil" },
      { mac: "00:15:65:55:55:58", model: null, display_name: "Yealink" }
    ];
    $scope.models = [];

    $scope.getPhones = function () {
      console.log("getPhones(), phonesTancredi", $scope.phonesTancredi); ////

      PhoneService.getPhonesMock($scope.phonesTancredi).then(function (phonesTancredi) { ////
        $scope.getModels();
        $scope.phones = [];

        for (var phoneTancredi of phonesTancredi) {
          var phone = PhoneService.buildPhone(phoneTancredi, $scope.models);
          $scope.phones.push(phone);
        }

        console.log("getPhones()", $scope.phones); ////
      }, function (err) {
        console.log(err);
      });
    };

    $scope.getModels = function () {
      // ModelService.getModels().then(function(res) { ////

      var res = [ //// mockup
        {
          "name": "snom100",
          "display_name": "Snom IP phone v100",
          "model_url": "/tancredi/api/v1/models/snom100"
        }, {
          "name": "snom200",
          "display_name": "Snom IP phone v200",
          "model_url": "/tancredi/api/v1/models/snom200"
        }, {
          "name": "fanvil-600",
          "display_name": "Fanvil IP phone v600",
          "model_url": "/tancredi/api/v1/models/fanvil600"
        }, {
          "name": "fanvil-700",
          "display_name": "Fanvil IP phone v700",
          "model_url": "/tancredi/api/v1/models/fanvil700"
        }, {
          "name": "yealink-1000",
          "display_name": "Yealink IP phone v1000",
          "model_url": "/tancredi/api/v1/models/yealink1000"
        }
      ];

      $scope.models = res;

      console.log("$scope.models", $scope.models); ////

      // }, function(err) { ////
      //   console.log(err);
      // });
    }

    $scope.bulkEditSave = function () {
      console.log("bulkEditSave"); ////
    }

    $scope.closeEditModal = function () {
      $('#bulkEdit').modal('hide');
    }

    $scope.showEditModal = function () {
      $('#bulkEdit').modal('show');
    }

    $scope.getPhones();
  });
