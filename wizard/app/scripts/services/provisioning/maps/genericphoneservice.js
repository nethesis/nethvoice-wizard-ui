'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.GenericPhoneService
 * @description
 * # GenericPhoneService
 * Service in the nethvoiceWizardUiApp.
 */

angular.module('nethvoiceWizardUiApp')
  .service('GenericPhoneService', function (GenericPhoneUtilsService) {

    this.map = function (variables) {

      let softkey_count = parseInt(variables.cap_softkey_count),
          softkey_type_blacklist = variables.cap_softkey_type_blacklist,
          linekey_count = parseInt(variables.cap_linekey_count),
          linekey_type_blacklist = variables.linekey_type_blacklist,
          expmodule_count = parseInt(variables.cap_expmodule_count),
          expkey_count = parseInt(variables.cap_expkey_count),
          expkey_type_blacklist = variables.cap_expkey_type_blacklist,
          hidden_date_formats = variables.cap_date_format_blacklist,
          hidden_dss_transfer = variables.cap_dss_transfer_blacklist,
          hidden_ldap_tls = variables.cap_ldap_tls_blacklist,
          ringtone_blacklist = variables.cap_ringtone_blacklist,
          ringtone_count = variables.cap_ringtone_count,
          background_cap = variables.cap_background_file

      return {
        "general": {
          "settings": true,
          "password": true,
          "hidden_dateformat": hidden_date_formats
        },
        "network": {},
        "preferences": {
          "ringtone": true,
          "display": true,
          "wallpaper": true,
          "screensaver": true,
          "hidden_dsstransfer": hidden_dss_transfer
        },
        "displayAndRingtones": {
          "ringtone": {
            "blacklist": ringtone_blacklist,
            "count": ringtone_count
          },
          "background_cap": background_cap
        },
        "phonebook": {
          "ldap": true,
          "hidden_ldap_tls": hidden_ldap_tls
        },
        "provisioning": {
          "provisioning": true
        },
        "softKeys":  {
          "intervals": [
            {
              "start": 1,
              "end": softkey_count
            }
          ],
          "hidden_types": softkey_type_blacklist,
          "hidden_variables": ""
        },
        "lineKeys": {
          "intervals": [
            {
              "start": 1,
              "end": linekey_count
            }
          ],
          "hidden_types": linekey_type_blacklist,
          "hidden_variables": ""
        },
        "expansionKeys":  {
          "modules": expmodule_count,
          "module_keys_count": expkey_count,
          "intervals": [
            {
              "start": 1,
              "end": expkey_count,
            }
          ],
          "hidden_types": expkey_type_blacklist,
          "hidden_variables": ""
        }
      }
    }

    this.displayAndRingtones = function () {
      return {
        "name":"Display & Ringtones",
        "items": [
          {
            "variable": "ringtone",
            "description": "Builtin ringtone",
            "type": "dinamycselectpicker"
          },
          {
            "variable": "ringtone_file",
            "description": "Custom ringtone",
            "type": "upload"
          },
          {
            "variable": "background_file",
            "description": "Display background",
            "type": "upload"
          }
          
        ]
      }
    }

    this.preferences = function (modelMap) {
      if (!(modelMap.general.settings || modelMap.general.password)) {
        return;
      }
      var settingsItems = []
      var passwordItems = []
      if (modelMap.general.settings) {
        settingsItems = [
          {
            "variable": "ntp_server",
            "description": "NTP server address",
            "type": "input"
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
            "variable": "dss_transfer",
            "description": "Line keys transfer mode",
            "type": "list",
            "options": [
              {
                "text": "New Call",
                "value": "verify"
              },
              {
                "text": "Attended Transfer",
                "value": "attended"
              },
              {
                "text": "Blind Transfer",
                "value": "blind"
              }
            ]
          },
          {
            "variable": "language",
            "description": "Phone language",
            "type": "list",
            "options": GenericPhoneUtilsService.getLanguages()
          },
          {
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
          },
          {
            "variable": "time_format",
            "description": "Time format",
            "type": "list",
            "options": [
              {
                "text": "12-hour",
                "value": "12"
              },
              {
                "text": "24-hour",
                "value": "24"
              }
            ]
          },
          {
            "variable": "date_format",
            "description": "Date format",
            "type": "list",
            "options": GenericPhoneUtilsService.getDateFormat()
          },
          {
            "variable": "firmware_file",
            "description": "Firmware",
            "type": "upload"
          }
        ]
      }
      return {
        "name": "Preferences",
        "items": settingsItems.concat(passwordItems)
      }
    }
    
    this.network = function (modelMap) {
      return {
        "name":"network_settings_label",
        "items": [
          {
            "variable": "vlan_id_phone",
            "description": "vlan_id_phone_label",
            "type": "input"
          },
          {
            "variable": "vlan_id_pcport",
            "description": "vlan_id_pcport_label",
            "type": "input"
          }
        ]
      }
    }

    this.phonebook = function (modelMap) {

      var ldapItems = [];

      if (modelMap.phonebook.ldap) {
        ldapItems = [
          {
            "variable": "ldap_server",
            "description": "ldap_server",
            "type": "input"
          },
          {
            "variable": "ldap_port",
            "description": "ldap_port",
            "type": "input"
          },
          {
            "variable": "ldap_user",
            "description": "ldap_user",
            "type": "input"
          },
          {
            "variable": "ldap_password",
            "description": "ldap_password",
            "type": "password"
          },
          {
            "variable": "ldap_tls",
            "description": "ldap_tls",
            "type": "list",
            "options": [
              {
                "text": "ldap_tls_none",
                "value": "none"
              },
              {
                "text": "ldap_tls_starttls",
                "value": "starttls"
              },
              {
                "text": "ldap_tls_tls",
                "value": "ldaps"
              }
            ]
          },
          {
            "variable": "ldap_base",
            "description": "ldap_base",
            "type": "input"
          },
          {
            "variable": "ldap_name_filter",
            "description": "ldap_name_filter",
            "type": "input"
          },
          {
            "variable": "ldap_number_filter",
            "description": "ldap_number_filter",
            "type": "input"
          },
          {
            "variable": "ldap_name_attr",
            "description": "ldap_name_attr",
            "type": "input"
          },
          {
            "variable": "ldap_name_display",
            "description": "ldap_name_display",
            "type": "input"
          },
          {
            "variable": "ldap_mainphone_number_attr",
            "description": "ldap_mainphone_number_attr",
            "type": "input"
          },
          {
            "variable": "ldap_mobilephone_number_attr",
            "description": "ldap_mobilephone_number_attr",
            "type": "input"
          },
          {
            "variable": "ldap_otherphone_number_attr",
            "description": "ldap_otherphone_number_attr",
            "type": "input"
          }
        ];
      }

      return {
        "name": "ldap_phonebook_title",
        "items": ldapItems
      }
    }


    this.softKeys = function (modelMap) {

      // validate
      if (!modelMap.softKeys.intervals[0].end) {
        return;
      }

      return {
        "name": "Soft keys",
        "items": [
          {
            "description": "Soft key",
            "type": "loop",
            "keys": modelMap.softKeys,
            "data": {
              "items": [
                {
                  "variable": "softkey_type",
                  "description": "Type",
                  "type": "list",
                  "options": [
                    {
                      "text": "N/A",
                      "value": ""
                    },
                    {
                      "text": "Forward",
                      "value": "forward"
                    },
                    {
                      "text": "DND",
                      "value": "dnd"
                    },
                    {
                      "text": "Recall",
                      "value": "recall"
                    },
                    {
                      "text": "Pick up",
                      "value": "pick_up"
                    },
                    {
                      "text": "Speed Dial",
                      "value": "speed_dial"
                    },
                    {
                      "text": "Group Pickup",
                      "value": "group_pickup"
                    },
                    {
                      "text": "History",
                      "value": "history"
                    },
                    {
                      "text": "Menu",
                      "value": "menu"
                    },
                    {
                      "text": "Status",
                      "value": "status"
                    },
                    {
                      "text": "Prefix",
                      "value": "prefix"
                    },
                    {
                      "text": "LDAP",
                      "value": "ldap"
                    }
                  ]
                },
                {
                  "variable": "softkey_value",
                  "description": "Value",
                  "type": "input"
                },
                {
                  "variable": "softkey_label",
                  "description": "Label",
                  "type": "input"
                }
              ]
            }
          }
        ]
      }
    }

    this.lineKeys = function (modelMap) {

      // validate
      if (!modelMap.lineKeys.intervals[0].end) {
        return;
      }

      return {
        "name": "Line keys",
        "items": [
          {
            "description": "Line key",
            "type": "loop",
            "keys": modelMap.lineKeys,
            "data": {
              "items": [
                {
                  "variable": "linekey_type",
                  "description": "Type",
                  "type": "list",
                  "options": [
                    {
                      "text": "N/A",
                      "value": ""
                    },
                    {
                      "text": "Conference",
                      "value": "conference"
                    },
                    {
                      "text": "Forward",
                      "value": "forward"
                    },
                    {
                      "text": "Transfer",
                      "value": "transfer"
                    },
                    {
                      "text": "Hold",
                      "value": "hold"
                    },
                    {
                      "text": "DND",
                      "value": "dnd"
                    },
                    {
                      "text": "Recall",
                      "value": "recall"
                    },
                    {
                      "text": "Direct Pickup",
                      "value": "direct_pickup"
                    },
                    {
                      "text": "DTMF",
                      "value": "dtmf"
                    },
                    {
                      "text": "Dynamic Agent Login/Logout",
                      "value": "queuetoggle"
                    },
                    {
                      "text": "Voice Mail",
                      "value": "voice_mail"
                    },
                    {
                      "text": "Speed Dial",
                      "value": "speed_dial"
                    },
                    {
                      "text": "Line",
                      "value": "line"
                    },
                    {
                      "text": "BLF",
                      "value": "blf"
                    },
                    {
                      "text": "URL",
                      "value": "url"
                    },
                    {
                      "text": "Group Pickup",
                      "value": "group_pickup"
                    },
                    {
                      "text": "Multicast Paging",
                      "value": "multicast_paging"
                    },
                    {
                      "text": "Record",
                      "value": "record"
                    },
                    {
                      "text": "Prefix",
                      "value": "prefix"
                    },
                    {
                      "text": "Phone Lock",
                      "value": "phone_lock"
                    },
                    {
                      "text": "LDAP",
                      "value": "ldap"
                    }
                  ]
                },
                {
                  "variable": "linekey_value",
                  "description": "Value",
                  "type": "input"
                },
                {
                  "variable": "linekey_label",
                  "description": "Label",
                  "type": "input"
                }
              ]
            }
          }
        ]
      }
    }

    this.expansionKeys = function (modelMap) {

      // validate
      if (!modelMap.expansionKeys.modules || !modelMap.expansionKeys.intervals[0].end) {
        return;
      }

      return {
        "name": "Expansion Keys",
        "items": [
          {
            "description": "Expansion Key",
            "type": "loop",
            "keys": modelMap.expansionKeys,
            "data": {
              "items": [
                {
                  "variable": "expkey_type",
                  "description": "Type",
                  "type": "list",
                  "options": [
                    {
                      "text": "N/A",
                      "value": ""
                    },
                    {
                      "text": "Conference",
                      "value": "conference"
                    },
                    {
                      "text": "Forward",
                      "value": "forward"
                    },
                    {
                      "text": "Transfer",
                      "value": "transfer"
                    },
                    {
                      "text": "Hold",
                      "value": "hold"
                    },
                    {
                      "text": "DND",
                      "value": "dnd"
                    },
                    {
                      "text": "Recall",
                      "value": "recall"
                    },
                    {
                      "text": "Direct Pickup",
                      "value": "direct_pickup"
                    },
                    {
                      "text": "DTMF",
                      "value": "dtmf"
                    },
                    {
                      "text": "Voice Mail",
                      "value": "voice_mail"
                    },
                    {
                      "text": "Speed Dial",
                      "value": "speed_dial"
                    },
                    {
                      "text": "Line",
                      "value": "line"
                    },
                    {
                      "text": "BLF",
                      "value": "blf"
                    },
                    {
                      "text": "URL",
                      "value": "url"
                    },
                    {
                      "text": "Group Pickup",
                      "value": "group_pickup"
                    },
                    {
                      "text": "Multicast Paging",
                      "value": "multicast_paging"
                    },
                    {
                      "text": "Record",
                      "value": "record"
                    },
                    {
                      "text": "Prefix",
                      "value": "prefix"
                    },
                    {
                      "text": "Phone Lock",
                      "value": "phone_lock"
                    },
                    {
                      "text": "LDAP",
                      "value": "ldap"
                    }
                  ]
                },
                {
                  "variable": "expkey_value",
                  "description": "Value",
                  "type": "input"
                },
                {
                  "variable": "expkey_label",
                  "description": "Label",
                  "type": "input"
                }
              ]
            }
          }
        ]
      }
    }
    
  })
