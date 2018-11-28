'use strict';

/**
 * @ngdoc function
 * @name nethvoiceWizardUiApp.controller:ReportmigrationCtrl
 * @description
 * # ReportmigrationCtrl
 * Controller of the nethvoiceWizardUiApp
 */
angular.module('nethvoiceWizardUiApp')
  .controller('ReportmigrationCtrl', function ($scope, $location, $filter, MigrationService) {

    $scope.migration = migrationConfig.LABEL_INFO;
    $scope.report = {};

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
      }, function (err) {
        console.log(err);
      });
    }

    $scope.generatePDF = function () {
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
              fontSize: 11,
              cellPadding: 10,
              overflow: 'linebreak'
            },
            columnStyles: {
              msg: {
                columnWidth: "auto"
              },
              case: {
                columnWidth: 65
              }
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
            }
          });
        }

      }
      doc.save('migration_report.pdf');
    };

    $scope.getReport();

  });
