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
      var cssLibrary = '<style>body{overflow-x: auto !important; padding: 5px !important;}</style><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.10/semantic.min.css"/>';
      
      if(name && name.endsWith('_new')) {
        cssLibrary = '<style>body{overflow-x: auto !important; padding: 5px !important;}</style><link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.19/tailwind.min.css"/>';
      }
      
      return cssLibrary+ejs.render(input, {
        results: isJson(data) ? JSON.parse(data) : [{}],
        name: name
      });
    };
  });
