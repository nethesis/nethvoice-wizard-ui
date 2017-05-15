'use strict';

/**
 * @ngdoc filter
 * @name nethvoiceWizardUiApp.filter:ejsRender
 * @function
 * @description
 * # ejsRender
 * Filter in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .filter('ejsRender', function () {
    return function (input, data, name) {
      function isJson(str) {
        try {
          JSON.parse(str);
        } catch (e) {
          return false;
        }
        return true;
      }
      return ejs.render(input, {
        results: isJson(data) ? JSON.parse(data) : [{}],
        name: name
      });
    };
  });
