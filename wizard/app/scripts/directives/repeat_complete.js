'use strict';

/**
 * @ngdoc directive
 * @name nethvoiceWizardUiApp.directive:onFinishRender
 * @description
 * # resizer
 */
angular.module('nethvoiceWizardUiApp')
  .directive('onFinishRender', function ($timeout) {
    return {
      restrict: 'A',
      link: function (scope, element, attr) {
        if (scope.$last === true && !attr.renderIndex && !attr.renderStart) {
          $timeout(function () {
            scope.$emit(attr.onFinishRender, element)
          })
        } else if ((attr.renderIndex && attr.renderStart) && (attr.renderIndex == attr.renderStart)) {
          $timeout(function () {
            scope.$emit(attr.onFinishRender, element)
          })
        }
      }
    }
  })