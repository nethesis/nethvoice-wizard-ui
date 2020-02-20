'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProvGigasetService
 * @description
 * # ProvGigasetService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ProvGigasetService', function (GeneralPhoneService) {

    this.general = function (modelMap) {
      return GeneralPhoneService.general(modelMap)
    }

    this.preferences = function (modelMap) {
      return GeneralPhoneService.preferences(modelMap)
    }

    this.network = function (modelMap) {
      return GeneralPhoneService.network(modelMap)
    }

    this.provisioning = function (modelMap) {
      return GeneralPhoneService.provisioning(modelMap)
    }

    this.softKeys = function (modelMap) {
      return GeneralPhoneService.softKeys(modelMap)
    }

    this.lineKeys = function (modelMap) {
      return GeneralPhoneService.lineKeys(modelMap)
    }

    this.expansionKeys = function (modelMap) {
      return GeneralPhoneService.expansionKeys(modelMap)
    }

  })
