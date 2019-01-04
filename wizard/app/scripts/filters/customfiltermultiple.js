'use strict';

/**
 * @ngdoc filter
 * @name nethvoiceWizardUiApp.filter:customFilterMultiple
 * @function
 * @description
 * # customFilterMultiple
 * Filter in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .filter('customFilterMultiple', function () {
    return function (input, prop, search) {
      if (!input) return input;
      if (!search) return input;
      var expected = ('' + search).toLowerCase();
      var result = {};
      var propArr = prop.split(",");
      for (var p in propArr) {
        angular.forEach(input, function (value, key) {
          var actual = ('' + value[propArr[p]]).toLowerCase();
          if (actual.indexOf(expected) !== -1) {
            result[key] = value;
          }
          if (propArr[p] === 'dashboardUsersSearch') {
            angular.forEach(value['endpoints']['extension'], function (valueExt, keyExt) {
              if (valueExt['id'].indexOf(expected) !== -1) {
                result[key] = value;
              }
            });
          }
        });
      }
      return result;
    }
  });
