'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProvSnomService
 * @description
 * # ProvSnomService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ProvSnomService', function (GenericPhoneService) {

    // this.general = function (modelMap) {
    //   return GenericPhoneService.general(modelMap)
    // }

    this.preferences = function (modelMap) {
      return GenericPhoneService.preferences(modelMap)
    }

    this.phonebook = function (modelMap) {
      return GenericPhoneService.phonebook(modelMap)
    }

    // this.provisioning = function (modelMap) {
    //   return GenericPhoneService.provisioning(modelMap)
    // }

    this.softKeys = function (modelMap) {
      return GenericPhoneService.softKeys(modelMap)
    }

    this.lineKeys = function (modelMap) {
      return GenericPhoneService.lineKeys(modelMap)
    }

    this.expansionKeys = function (modelMap) {
      return GenericPhoneService.expansionKeys(modelMap)
    }

  })