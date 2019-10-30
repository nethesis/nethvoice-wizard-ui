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
    // $scope.phones = []; //// uncomment
    $scope.phones = [ //// delete
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
    $scope.macVendorMap = UtilService.macVendorMap();

    $scope.getPhones = function () {
      // PhoneService.getPhones().then(function(res) {

      ////
      // var res = JSON.parse(' \
      //   [{ \
      //     "mac": "01-23-45-67-89-AB", \
      //     "model": "acme19.2", \
      //     "display_name": "Acme", \
      //     "model_url": "/tancredi/api/v1/models/acme19.2", \
      //     "phone_url": "/tancredi/api/v1/phones/01-23-45-67-89-AB" \
      //   },{ \
      //     "mac": "01-23-45-76-98-DE", \
      //     "model": "acme15.0", \
      //     "display_name": "Acme", \
      //     "model_url": "/tancredi/api/v1/models/acme15.0", \
      //     "phone_url": "/tancredi/api/v1/phones/01-23-45-76-98-DE" \
      //   }]'
      // );
      // var res = []; ////

      // $scope.phones = res;
      // console.log("$scope.phones", $scope.phones); ////

      // }, function(err) {
      //   console.log(err);
      // });

      //// getModels() must be invoked AFTER a successful call to GET /phones
      $scope.getModels();

      linkModelsToPhones();

      console.log('getPhones():'); ////
      console.log($scope.phones); ////
    };

    $scope.getModels = function () {
      // ModelService.getModels().then(function(res) {

      ////
      // var res = JSON.parse(' \
      //   [{ \
      //     "name": "snom100", \
      //     "display_name": "Snom IP phone v100", \
      //     "model_url": "/tancredi/api/v1/models/snom100" \
      //   },{ \
      //     "name": "snom200", \
      //     "display_name": "Snom IP phone v200", \
      //     "model_url": "/tancredi/api/v1/models/snom200" \
      //   },{ \
      //     "name": "fanvil-600", \
      //     "display_name": "Fanvil IP phone v600", \
      //     "model_url": "/tancredi/api/v1/models/fanvil600" \
      //   },{ \
      //     "name": "fanvil-700", \
      //     "display_name": "Fanvil IP phone v700", \
      //     "model_url": "/tancredi/api/v1/models/fanvil700" \
      //   }]'
      // );

      var res = [ ////
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

      // var res = []; ////

      $scope.models = res;

      console.log("$scope.models", $scope.models); ////

      // }, function(err) {
      //   console.log(err);
      // });
    }

    function linkModelsToPhones() {
      for (var phone of $scope.phones) {
        var modelObj = $scope.models.find(function (modelObj) {
          return modelObj.name === phone.model;
        });
        phone.modelObj = modelObj;
      }
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

    $scope.filteredModels = function (mac) { //// move inside UtilService?
      var vendor = $scope.macVendorMap[mac.substring(0, 8)];

      if (vendor) {
        var filteredModels = $scope.models.filter(function (model) {
          return model.name.toLowerCase().startsWith(vendor.toLowerCase());
        });
        return filteredModels;

        // var filteredModelNames = []; ////
        // for (var model of filteredModels) {
        //   filteredModelNames.push(model.name);
        // }
        // return filteredModelNames;
      } else {
        return [];
      }
    }

    $scope.getPhones();
  });
