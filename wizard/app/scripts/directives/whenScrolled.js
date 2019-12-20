'use strict';

/**
 * @ngdoc directive
 * @name nethvoiceWizardUiApp.directive:genericError
 * @description
 * # genericError
 */
angular.module('nethvoiceWizardUiApp')
  .directive('whenScrolled', function () {
    return function (scope, elem, attr) {
      var raw = elem[0];

      elem.bind('scroll', function () {
        if (raw.scrollTop + raw.offsetHeight >= raw.scrollHeight) {
          scope.$apply(attr.whenScrolled);
        }
      });
    };
  });
