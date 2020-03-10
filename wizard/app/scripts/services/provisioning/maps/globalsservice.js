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
            "type": "switch"
          },
          {
            "variable": "hostname",
            "default_value": "",
            "description": "PBX address",
            "type": "input"
          },
          {
            "variable": "userpwd",
            "default_value": "",
            "description": "Admin user",
            "type": "input"
          },
          {
            "variable": "adminpwd",
            "default_value": "",
            "description": "Admin Passowrd",
            "type": "input"
          }
        ]
      }
    }

    this.general = function () {
      return {
        "name": "General",
        "data": [{
            "variable": "language",
            "description": "Language display (phone UI)",
            "type": "list",
            "options": GenericPhoneUtilsService.getLanguages()
          },{
            "variable": "timezone",
            "description": "Time zone",
            "type": "list",
            "options": GenericPhoneUtilsService.getTimeZones()
          },
          {
            "variable": "tonezone",
            "description": "Tone zone",
            "type": "list",
            "options": GenericPhoneUtilsService.getToneZones()
          }
        ]
      }
    }

    this.preferences = function () {
      return {
        "name": "Preferences",
        "data": [
          {
            "variable": "provisioning_freq",
            "description": "Provisioning scheduling",
            "type": "list",
            "options": [
              {
                "text": "Sunday",
                "value": "sunday"
              },
              {
                "text": "Monday",
                "value": "monday"
              },
              {
                "text": "Tuesday",
                "value": "tuesday"
              },
              {
                "text": "Wednesday",
                "value": "wednesday"
              },
              {
                "text": "Thursday",
                "value": "thursday"
              },
              {
                "text": "Friday",
                "value": "friday"
              },
              {
                "text": "Saturday",
                "value": "saturday"
              },
              {
                "text": "everyday",
                "value": "everyday"
              },
              {
                "text": "never",
                "value": "never"
              }
            ]
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
            "type": "password"
          },
          {
            "variable": "ldap_tls",
            "description": "LDAP TLS",
            "type": "list",
            "options": [
              {
                "text": "LDAP (unencrypted, port 389 by default)",
                "value": "0"
              },
              {
                "text": "LDAP TLS Start (port 389 by default)",
                "value": "1"
              },
              {
                "text": "LDAPs (port 636 by default)",
                "value": "2"
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