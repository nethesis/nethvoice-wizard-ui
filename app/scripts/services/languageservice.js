'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.LanguageService
 * @description
 * # LanguageService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('LanguageService', function() {
    this.getAllLanguages = function() {
      var langArr = [];
      for (var k in window.getAllSupportedLanguagesKey()) {
        var key = window.getAllSupportedLanguagesKey()[k];
        var tmp = {
          nativeName: window.getAllLanguagesKey()[key].nativeName,
          key: key,
          check: false
        };
        langArr.push(tmp);
      }
      return langArr;
    };

    this.getNativeName = function(key) {
      return window.getLanguageNativeName(key);
    };
  });