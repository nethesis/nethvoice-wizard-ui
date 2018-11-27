'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:ReportmigrationCtrl
 * @description
 * # ReportmigrationCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('ReportmigrationCtrl', function ($scope, $location, $filter, $interval, ConfigService, UserService, UtilService, MigrationService) {

    $scope.migration = migrationConfig.LABEL_INFO;
    $scope.report = {};

    console.log($scope.migration);

    $scope.exitMigration = function () {
      MigrationService.endMigration().then(function (res) {
        $scope.wizard.isWizard = true;
        $scope.wizard.isMigrationView = false;
        $location.path('/users/extensions');
      }, function (err) {
        console.log(err);
      });
    }

    $scope.getReport = function () {
      MigrationService.getReport().then(function (res) {
        $scope.view.changeRoute = false;
        $scope.report = res.data;
        console.log(res.data);
      }, function (err) {
        console.log(err);
      });
    }

    $scope.generatePDF = function () {

      $scope.report.cloneOldCTIProfile["warnings"] = ["ciao ciao ciao", "ciao ciao ciao"];
      $scope.report.cloneOldCTIProfile["infos"] = ["ciao ciao ciao", "ciao ciao ciao"];

      var doc = new jsPDF('l', 'pt');

      for (var elem in $scope.migration) {

        $scope.migration[elem].rows = [];
        
        for (var func in $scope.migration[elem].functions) {

          for (var type in $scope.report[$scope.migration[elem].functions[func]]) {

            for (var msgKey in $scope.report[$scope.migration[elem].functions[func]][type]) {

              var row = {
               "msg": $scope.report[$scope.migration[elem].functions[func]][type][msgKey],
               "case": type === "errors" ? "error" : type === "warnings" ? "warning" : type === "infos" ? "info" : type
              };
              $scope.migration[elem].rows.push(row);

            }

          }

        }
        

        $scope.migration[elem].columns = [{
          title: $filter('translate')('Migration') + ": " + $filter('translate')(elem),
          dataKey: "msg"
        }, {
          title: $filter('translate')('Type'),
          dataKey: "case"
        }];


        if ($scope.migration[elem].rows[0]) {
          doc.autoTable($scope.migration[elem].columns, $scope.migration[elem].rows, {
            startY: doc.autoTableEndPosY() != 0 ? doc.autoTableEndPosY() + 50 : 80,
            theme: 'grid',
            margin: {
              top: 80
            },
            styles: {
              fontSize: 12,
              cellPadding: 15
            },
            headerStyles: {
              fillColor: [63, 156, 53]
            },
            addPageContent: function (data) {
              doc.text($filter('translate')('Migration report'), 40, 30);
              doc.setFontSize(11);
              doc.setTextColor(100);
              doc.text($filter('translate')('Header Migration Report 1'), 40, 60);
              doc.setFontSize(11);
              doc.text(customConfig.BRAND_NAME, data.settings.margin.left, doc.internal.pageSize.height - 20);
            }
          });
        }

      }


      doc.save('migration_report.pdf');

    };

    $scope.getReport();

  });
