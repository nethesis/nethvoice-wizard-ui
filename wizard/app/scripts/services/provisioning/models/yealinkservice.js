'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProvYealinkService
 * @description
 * # ProvYealinkService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ProvYealinkService', function ($q, RestService) {

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