'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProvSnomService
 * @description
 * # ProvSnomService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ProvSnomService', function ($q, RestService) {

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