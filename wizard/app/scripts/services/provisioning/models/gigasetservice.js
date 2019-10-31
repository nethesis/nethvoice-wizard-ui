'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProvGigasetService
 * @description
 * # ProvGigasetService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ProvGigasetService', function ($q, RestService) {

    this.settingsUi = function () {
      return {}
    }

    this.preferenceUI = function () {
      return {}
    }

    this.networkUI = function () {
      return {}
    }

  })