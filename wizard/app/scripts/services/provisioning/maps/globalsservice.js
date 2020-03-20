'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProvGlobalsService
 * @description
 * # ProvGlobalsService
 * Service in the nethvoiceWizardUiApp.
 * Globals in UI and Backend are Defaults
 */

angular.module('nethvoiceWizardUiApp')
  .service('ProvGlobalsService', function ($q, RestService, GenericPhoneUtilsService) {

    this.pinned = function () {
      return {
        "name": "Pinned",
        "data": [{
            "variable": "provisioning_url_scheme",
            "default_value": "",
            "description": "Encryption",
            "type": "list",
            "options":  [
              {
                "text": "Enabled",
                "value": "https"
              },
              {
                "text": "Disabled",
                "value": "http"
              }
            ]
          },
          {
            "variable": "hostname",
            "default_value": "",
            "description": "PBX address",
            "type": "input"
          },
          {
            "variable": "userpw",
            "default_value": "",
            "description": "User password",
            "type": "input"
          },
          {
            "variable": "adminpw",
            "default_value": "",
            "description": "Admin password",
            "type": "input"
          }
        ]
      }
    }

    this.preferences = function () {
      return {
        "name": "Preferences",
        "data": [{
            "variable": "language",
            "description": "Language display (phone UI)",
            "type": "list",
            "options": GenericPhoneUtilsService.getLanguages()
          },
          {
            "variable": "provisioning_freq",
            "description": "Provisioning scheduling",
            "type": "list",
            "options": [
              {
                "text": "everyday",
                "value": "everyday"
              },
              {
                "text": "never_prov_freq",
                "value": "never"
              }
            ]
          },
          {
            "variable": "tonezone",
            "description": "Tone zone",
            "type": "list",
            "options": GenericPhoneUtilsService.getToneZones()
          },
          {
            "variable": "timezone",
            "description": "Time zone",
            "type": "list",
            "options": GenericPhoneUtilsService.getTimeZones()
          }
        ]
      }
    }

    this.network = function () {
      return {
        "name": "Phonebook",
        "data": [
          {
            "variable": "ldap_base",
            "description": "LDAP Base",
            "type": "input"
          },
          {
            "variable": "ldap_port",
            "description": "LDAP Port",
            "type": "input"
          },
          {
            "variable": "ldap_server",
            "description": "LDAP Server",
            "type": "input"
          },
          {
            "variable": "ldap_name",
            "description": "LDAP Name",
            "type": "input"
          },
          {
            "variable": "ldap_user",
            "description": "LDAP User",
            "type": "input"
          },
          {
            "variable": "ldap_password",
            "description": "LDAP Password",
            "type": "input"
          },
          {
            "variable": "ldap_tls",
            "description": "LDAP TLS",
            "type": "list",
            "options": [
              {
                "text": "LDAP (unencrypted)",
                "value": "none"
              },
              {
                "text": "LDAP TLS Start",
                "value": "starttls"
              },
              {
                "text": "LDAPs",
                "value": "ldaps"
              }
            ]
          },
          {
            "variable": "ldap_name_display",
            "description": "LDAP Display Name",
            "type": "input"
          },
          {
            "variable": "ldap_number_attr",
            "description": "LDAP Number Attributes",
            "type": "input"
          },
          {
            "variable": "ldap_name_attr",
            "description": "LDAP Name Attributes",
            "type": "input"
          },
          {
            "variable": "ldap_number_filter",
            "description": "LDAP Number Filter",
            "type": "input"
          },
          {
            "variable": "ldap_name_filter",
            "description": "LDAP Name Filter",
            "type": "input"
          },
          {
            "variable": "ldap_mainphone_number_attr",
            "description": "LDAP Main Phone Name",
            "type": "input"
          },
          {
            "variable": "ldap_mobilephone_number_attr",
            "description": "LDAP Mobile Phone Number",
            "type": "input"
          },
          {
            "variable": "ldap_otherphone_number_attr",
            "description": "LDAP Other Phone Number",
            "type": "input"
          }
        ]
      }
    }

  })