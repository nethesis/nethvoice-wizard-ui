'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProvSangomaService
 * @description
 * # ProvSangomaService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ProvSangomaService', function ($q, RestService) {

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