'use strict';

/**
 * @ngdoc filter
 * @name nethvoiceWizardUiApp.filter:isEmpty
 * @function
 * @description
 * # isEmpty
 * Filter in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .filter('isEmpty', function(UtilService) {
    return function(input) {
      return input ? UtilService.isEmpty(input) : true;
    };
  });