'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProvFanvilService
 * @description
 * # ProvFanvilService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ProvFanvilService', function ($q, RestService) {

    this.map = function () {
      return {
        "X3": {
          "model": "X3",
          "softKeys": true,
          "lineKeys": 2,
          "expKeys": false,
          "hiddenVariables": [
          ]
        },
        "X4": {
          "model": "X4",
          "softKeys": true,
          "lineKeys": 30,
          "expKeys": false,
          "hiddenVariables": [
          ]
        },
        "X5": {
          "model": "X5",
          "softKeys": true,
          "lineKeys": 40,
          "expKeys": {
            "total": 20,
            "loops": 5
          },
          "hiddenVariables": [
          ]
        },
        "X6": {
          "model": "X6",
          "softKeys": true,
          "lineKeys": 60,
          "expKeys": {
            "total": 20,
            "loops": 5
          },
          "hiddenVariables": [
          ]
        }
      }
    }

    this.softKeys = function (modelMap) {
      if (!modelMap.softKeys) {
        return;
      }

      //// todo

      var options = [{
          "text": "Dsskey1",
          "value": "dsskey1"
        },
        {
          "text": "Dsskey2",
          "value": "dsskey2"
        },
        {
          "text": "Dsskey3",
          "value": "dsskey3"
        },
        {
          "text": "Dsskey4",
          "value": "dsskey4"
        },
        {
          "text": "Dsskey5",
          "value": "dsskey5"
        },
        {
          "text": "Dsskey6",
          "value": "dsskey6"
        },
        {
          "text": "Dsskey7",
          "value": "dsskey7"
        },
        {
          "text": "Dsskey8",
          "value": "dsskey8"
        },
        {
          "text": "Dsskey9",
          "value": "dsskey9"
        },
        {
          "text": "Dsskey10",
          "value": "dsskey10"
        },
        {
          "text": "MWI",
          "value": "mwi"
        },
        {
          "text": "Redial",
          "value": "redial"
        },
        {
          "text": "Headset",
          "value": "headset"
        },
        {
          "text": "Call Forward",
          "value": "cfwd"
        },
        {
          "text": "Menu",
          "value": "menu"
        },
        {
          "text": "DND",
          "value": "dnd"
        }
      ]

      return {
        "name": "SoftKeys",
        "items": [{
            "description": "SoftKeys",
            "type": "static",
            "data": {
              "items": [{
                  "variable": "soft_key1",
                  "default_value": "dsskey2",
                  "description": "Soft Key 1",
                  "type": "list",
                  "options": options
                },
                {
                  "variable": "soft_key2",
                  "default_value": "dss2",
                  "description": "Soft Key 2",
                  "type": "list",
                  "options": options
                },
                {
                  "variable": "soft_key3",
                  "default_value": "dnd",
                  "description": "Soft Key 3",
                  "type": "list",
                  "options": options
                },
                {
                  "variable": "soft_key4",
                  "default_value": "menu",
                  "description": "Soft Key 4",
                  "type": "list",
                  "options": options
                }
              ]
            }
          },
          {
            "description": "DSS Key",
            "type": "loop",
            "loop_start": 3,
            "loop_end": 10,
            "data": {
              "items": [{
                  "variable": "softkey_type_",
                  "default_value": "0",
                  "description": "Type",
                  "type": "list",
                  "options": [{
                      "text": "None",
                      "value": "0"
                    },
                    {
                      "text": "Memory Key",
                      "value": "1"
                    },
                    {
                      "text": "Line",
                      "value": "2"
                    },
                    {
                      "text": "Key Event",
                      "value": "4"
                    },
                    {
                      "text": "DTMF",
                      "value": "4"
                    }
                  ]
                },
                {
                  "variable": "softkey_label_",
                  "default_value": "",
                  "description": "Name",
                  "type": "input"
                },
                {
                  "variable": "softkey_value_",
                  "default_value": "",
                  "description": "Value",
                  "type": "input"
                },
                {
                  "variable": "softkey_subtype_",
                  "default_value": "",
                  "description": "SubType",
                  "type": "list",
                  "options": [{
                      "text": "None",
                      "value": ""
                    },
                    {
                      "text": "BLF",
                      "value": "/bc**"
                    },
                    {
                      "text": "Speed Dial",
                      "value": "/f"
                    },
                    {
                      "text": "MWI",
                      "value": "F_MWI"
                    },
                    {
                      "text": "DND",
                      "value": "F_DND"
                    },
                    {
                      "text": "Redial",
                      "value": "F_REDIAL"
                    },
                    {
                      "text": "Prefix",
                      "value": "F_PREFIX:"
                    },
                    {
                      "text": "LDAP",
                      "value": "F_LDAPCONTACTS:0"
                    },
                    {
                      "text": "Headset",
                      "value": "F_HEADSET"
                    },
                    {
                      "text": "Call Forward",
                      "value": "F_CFWD"
                    }
                  ]
                },
                {
                  "variable": "softkey_line_",
                  "default_value": "",
                  "description": "Line",
                  "type": "list",
                  "options": [{
                      "text": "None",
                      "value": ""
                    },
                    {
                      "text": "Line 1",
                      "value": "@1"
                    },
                    {
                      "text": "Line 2",
                      "value": "@2"
                    },
                    {
                      "text": "Line 3",
                      "value": "@3"
                    },
                    {
                      "text": "Line 4",
                      "value": "@4"
                    },
                    {
                      "text": "Line 5",
                      "value": "@5"
                    },
                    {
                      "text": "Line 6",
                      "value": "@6"
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    }

    this.lineKeys = function (modelMap) {
      if (!modelMap.lineKeys) {
        return;
      }

      //// todo

      return {
        "name": "LineKey",
        "items": [{
          "description": "Line Key",
          "type": "loop",
          "loop_start": 1,
          "loop_end": modelMap.lineKeys,
          "data": {
            "items": [{
                "variable": "linekey_type_",
                "default_value": "0",
                "description": "Type",
                "type": "list",
                "options": [{
                    "text": "None",
                    "value": "0"
                  },
                  {
                    "text": "Memory Key",
                    "value": "1"
                  },
                  {
                    "text": "Line",
                    "value": "2"
                  },
                  {
                    "text": "Key Event",
                    "value": "4"
                  },
                  {
                    "text": "DTMF",
                    "value": "4"
                  }
                ]
              },
              {
                "variable": "linekey_label_",
                "default_value": "",
                "description": "Name",
                "type": "input"
              },
              {
                "variable": "linekey_value",
                "default_value": "",
                "description": "Value",
                "type": "input"
              },
              {
                "variable": "linekey_subtype",
                "default_value": "",
                "description": "SubType",
                "type": "list",
                "options": [{
                    "text": "None",
                    "value": ""
                  },
                  {
                    "text": "BLF-BXFER",
                    "value": "/bb**"
                  },
                  {
                    "text": "BLF-NEWCALL",
                    "value": "/bc**"
                  },
                  {
                    "text": "BLF-AXFER",
                    "value": "/ba**"
                  },
                  {
                    "text": "Speed Dial",
                    "value": "/f"
                  },
                  {
                    "text": "MWI",
                    "value": "F_MWI"
                  },
                  {
                    "text": "DND",
                    "value": "F_DND"
                  },
                  {
                    "text": "Redial",
                    "value": "F_REDIAL"
                  },
                  {
                    "text": "Prefix",
                    "value": "F_PREFIX:"
                  },
                  {
                    "text": "LDAP",
                    "value": "F_LDAPCONTACTS:0"
                  },
                  {
                    "text": "Headset",
                    "value": "F_HEADSET"
                  },
                  {
                    "text": "Call Forward",
                    "value": "F_CFWD"
                  }
                ]
              },
              {
                "variable": "linekey_line_",
                "default_value": "",
                "description": "Line",
                "type": "list",
                "options": [{
                    "text": "None",
                    "value": ""
                  },
                  {
                    "text": "Line 1",
                    "value": "@1"
                  },
                  {
                    "text": "Line 2",
                    "value": "@2"
                  },
                  {
                    "text": "Line 3",
                    "value": "@3"
                  },
                  {
                    "text": "Line 4",
                    "value": "@4"
                  },
                  {
                    "text": "Line 5",
                    "value": "@5"
                  },
                  {
                    "text": "Line 6",
                    "value": "@6"
                  }
                ]
              }
            ]
          }
        }]
      }
    }

    this.expansionKeys = function (modelMap) {
      if (!modelMap.expansionKeys) {
        return;
      }

      //// todo

      return {
        "name": "ExpKeys",
        "items": [{
          "description": "Exp Key",
          "type": "loop",
          "loop_start": 1,
          "loop_end": modelMap.expKeys.total,
          "loops": modelMap.expKeys.loops,
          "data": {
            "items": [{
                "variable": "key_type_",
                "default_value": "0",
                "description": "Type",
                "type": "list",
                "options": [{
                    "text": "None",
                    "value": "0"
                  },
                  {
                    "text": "Memory Key",
                    "value": "1"
                  },
                  {
                    "text": "Line",
                    "value": "2"
                  },
                  {
                    "text": "Key Event",
                    "value": "4"
                  },
                  {
                    "text": "DTMF",
                    "value": "4"
                  }
                ]
              },
              {
                "variable": "key_name_",
                "default_value": "",
                "description": "Name",
                "type": "input"
              },
              {
                "variable": "key_value_",
                "default_value": "",
                "description": "Value",
                "type": "input"
              },
              {
                "variable": "key_subtype_",
                "default_value": "",
                "description": "SubType",
                "type": "list",
                "options": [{
                    "text": "None",
                    "value": ""
                  },
                  {
                    "text": "BLF",
                    "value": "/bc**"
                  },
                  {
                    "text": "Speed Dial",
                    "value": "/f"
                  },
                  {
                    "text": "MWI",
                    "value": "F_MWI"
                  },
                  {
                    "text": "DND",
                    "value": "F_DND"
                  },
                  {
                    "text": "Redial",
                    "value": "F_REDIAL"
                  },
                  {
                    "text": "Prefix",
                    "value": "F_PREFIX:"
                  },
                  {
                    "text": "LDAP",
                    "value": "F_LDAPCONTACTS:0"
                  },
                  {
                    "text": "Headset",
                    "value": "F_HEADSET"
                  },
                  {
                    "text": "Call Forward",
                    "value": "F_CFWD"
                  }
                ]
              },
              {
                "variable": "key_line_",
                "default_value": "",
                "description": "Line",
                "type": "list",
                "options": [{
                    "text": "None",
                    "value": ""
                  },
                  {
                    "text": "Line 1",
                    "value": "@1"
                  },
                  {
                    "text": "Line 2",
                    "value": "@2"
                  },
                  {
                    "text": "Line 3",
                    "value": "@3"
                  }, {
                    "text": "Line 4",
                    "value": "@4"
                  }, {
                    "text": "Line 5",
                    "value": "@5"
                  }, {
                    "text": "Line 6",
                    "value": "@6"
                  }
                ]
              }
            ]
          }
        }]
      }
    }

    this.preferences = function (modelMap) {
      if (!(modelMap.ringtone || modelMap.display || modelMap.wallpaper || modelMap.screensaver)) {
        return;
      }

      var ringtoneItems = [];
      var displayItems = [];
      var wallpaperItems = [];
      var screensaverItems = [];

      //// todo

      return {
        "name": "Preference",
        "items": [{
            "variable": "call_waiting",
            "default_value": "0",
            "description": "Call Waiting",
            "type": "list",
            "options": [{
                "text": "Off",
                "value": 0
              },
              {
                "text": "On",
                "value": 1
              }
            ]
          },
          {
            "variable": "audio_fanvil",
            "default_value": "0",
            "description": "Ring in Headset",
            "type": "list",
            "options": [{
                "text": "Disable",
                "value": "0"
              },
              {
                "text": "Enable",
                "value": "1"
              },
              {
                "text": "Group Ring",
                "value": "2"
              }
            ]
          },
          {
            "variable": "default_ringtone",
            "default_value": "Type 1",
            "description": "Ring Tones",
            "type": "list",
            "options": [{
                "text": "Type 1",
                "value": "Type 1"
              },
              {
                "text": "Type 2",
                "value": "Type 2"
              },
              {
                "text": "Type 3",
                "value": "Type 3"
              },
              {
                "text": "Type 4",
                "value": "Type 4"
              },
              {
                "text": "Type 5",
                "value": "Type 5"
              },
              {
                "text": "Type 6",
                "value": "Type 6"
              },
              {
                "text": "Type 7",
                "value": "Type 7"
              },
              {
                "text": "Type 8",
                "value": "Type 8"
              },
              {
                "text": "Type 9",
                "value": "Type 9"
              }
            ]
          },
          {
            "variable": "dss_transfer",
            "default_value": "2",
            "description": "Transfer Mode via DSSkey",
            "type": "list",
            "options": [{
                "text": "Blind Transfer",
                "value": "1"
              },
              {
                "text": "Attended Transfer",
                "value": "2"
              },
              {
                "text": "Make a new Call",
                "value": "3"
              },
              {
                "text": "Conference Call",
                "value": "4"
              },
              {
                "text": "New Call",
                "value": "5"
              }
            ]
          },
          {
            "variable": "ldap_server",
            "default_value": "{$server.ip.1}",
            "description": "Server LDAP",
            "type": "input"
          },
          {
            "variable": "ldap_base",
            "default_value": "dc=phonebook,dc=nh",
            "description": "BaseDN LDAP",
            "type": "input"
          },
          {
            "variable": "ldap_port",
            "default_value": "10389",
            "description": "LDAP Server Port",
            "type": "input"
          },
          {
            "variable": "ldap_name_filter",
            "default_value": "(|(cn=%)(o=%))",
            "description": "LDAP Name Filter",
            "type": "input"
          },
          {
            "variable": "ldap_name_attr",
            "default_value": "cn o",
            "description": "LDAP Name Attributes",
            "type": "input"
          },
          {
            "variable": "ldap_name_display",
            "default_value": "cn",
            "description": "LDAP Display Name",
            "type": "input"
          },
          {
            "variable": "ldap_number_filter",
            "default_value": "(|(telephoneNumber=%)(mobile=%)(homePhone=%))",
            "description": "LDAP Number Filter",
            "type": "input"
          }
        ]
      }
    }

    this.general = function (modelMap) {
      if (!(modelMap.settings || modelMap.password)) {
        return;
      }

      var settingsItems = [];
      var passwordItems = [];

      //// todo

      return {
        "name": "General",
        "items": [{
            "variable": "language_fanvil",
            "default_value": "it",
            "description": "Language",
            "type": "list",
            "options": [{
                "text": "English",
                "value": "en"
              },
              {
                "text": "Chinese",
                "value": "cn"
              },
              {
                "text": "Chinese tra.",
                "value": "tc"
              },
              {
                "text": "Russian",
                "value": "ru"
              },
              {
                "text": "Italian",
                "value": "it"
              },
              {
                "text": "French",
                "value": "fr"
              },
              {
                "text": "German",
                "value": "de"
              },
              {
                "text": "Hebrew",
                "value": "he"
              },
              {
                "text": "Spanish",
                "value": "es"
              },
              {
                "text": "Catalan",
                "value": "cat"
              },
              {
                "text": "Basque",
                "value": "eus"
              },
              {
                "text": "Galician",
                "value": "gal"
              },
              {
                "text": "Turkish",
                "value": "tr"
              },
              {
                "text": "Hungarian",
                "value": "hr"
              },
              {
                "text": "Slovenian",
                "value": "slo"
              },
              {
                "text": "Czech",
                "value": "cz"
              },
              {
                "text": "Dutch",
                "value": "nl"
              },
              {
                "text": "Korean",
                "value": "ko"
              },
              {
                "text": "Ukrainian",
                "value": "ua"
              }
            ]
          },
          {
            "variable": "language_fanvil2",
            "default_value": "7",
            "description": "Language",
            "type": "list",
            "options": [{
                "text": "English",
                "value": "0"
              },
              {
                "text": "Chinese",
                "value": "1"
              },
              {
                "text": "Chinese tra.",
                "value": "2"
              },
              {
                "text": "Dutch",
                "value": "3"
              },
              {
                "text": "French",
                "value": "4"
              },
              {
                "text": "Polish",
                "value": "5"
              },
              {
                "text": "Russian",
                "value": "6"
              },
              {
                "text": "Italian",
                "value": "7"
              },
              {
                "text": "Hebrew",
                "value": "8"
              },
              {
                "text": "Turkish",
                "value": "9"
              },
              {
                "text": "Spanish",
                "value": "10"
              },
              {
                "text": "Japanese",
                "value": "11"
              },
              {
                "text": "Bulgarian",
                "value": "12"
              },
              {
                "text": "Slovensky",
                "value": "13"
              },
              {
                "text": "Catalan",
                "value": "14"
              },
              {
                "text": "Euskera",
                "value": "15"
              },
              {
                "text": "German",
                "value": "16"
              },
              {
                "text": "Portuguese",
                "value": "17"
              },
              {
                "text": "Czech",
                "value": "18"
              },
              {
                "text": "Galician",
                "value": "19"
              },
              {
                "text": "Indonesian",
                "value": "20"
              },
              {
                "text": "Malay",
                "value": "21"
              },
              {
                "text": "Hungarian",
                "value": "22"
              }
            ]
          },
          {
            "variable": "timezone_fanvil",
            "default_value": "4",
            "description": "Time Zone",
            "type": "list",
            "options": [{
                "text": "American Samoa",
                "value": "-44"
              },
              {
                "text": "Hawaii-Aleutian,Alask-Aleutian",
                "value": "-40"
              },
              {
                "text": "French Polynesia",
                "value": "-38"
              },
              {
                "text": "Alaska Time",
                "value": "-36"
              },
              {
                "text": "Vancouver,Whitehourse,Tijuana,Mexicali,Pacific Time",
                "value": "-32"
              },
              {
                "text": "Edmonton,Calgary,Mazatlan,Chihuahua,Mountuain Time,United States-MST",
                "value": "-28"
              },
              {
                "text": "Manitoba,Easter Islands,Mexico City,Acapulco,Central Time",
                "value": "-24"
              },
              {
                "text": "Nassau,Montreal,Ottawa,Quebec,Havana,Eastern Time",
                "value": "-20"
              },
              {
                "text": "Caracas",
                "value": "-18"
              },
              {
                "text": "Halifax,Saint John,Santiago,Asuncion,Bermuda,Falkland Islands,Trinidad Tobago",
                "value": "-16"
              },
              {
                "text": "New Foundland",
                "value": "-14"
              },
              {
                "text": "Nuuk,Buenos Aires,no DST,DST",
                "value": "-12"
              },
              {
                "text": "Newfoundland and Labrador",
                "value": "-10"
              },
              {
                "text": "no DST",
                "value": "-8"
              },
              {
                "text": "Azores",
                "value": "-4"
              },
              {
                "text": "GMT,Greenland,Torshavn,Dublin,Lisboa,Porto,Funchal,Las Palmas,London,Morocco",
                "value": "0"
              },
              {
                "text": "Tirane,Vienna,Brussels,Caicos,Chad,Madrid,Zagreb,Prague,Kopenhagen,Paris,Berlin,Budapest,Rome,Luxembourg,Skopje,Amsterdam,Windhoek",
                "value": "4"
              },
              {
                "text": "Tallin,Helsinki,Gaza,Athens,Tel Aviv,Amman,Riga,Beirut,Kishinev,Kaliningrad,Bucharest,Damascus,Kyiv,Odessa",
                "value": "8"
              },
              {
                "text": "East Africa,Baghdad,Moscow,Ankara",
                "value": "12"
              },
              {
                "text": "Teheran",
                "value": "14"
              },
              {
                "text": "Yerevan,Baku,Tiblisi,Aktau,Samara",
                "value": "16"
              },
              {
                "text": "Kabul",
                "value": "18"
              },
              {
                "text": "Aqtobe,Bishkek,Islamabad,Chelyabinsk",
                "value": "20"
              },
              {
                "text": "Calcutta",
                "value": "22"
              },
              {
                "text": "Katmandu",
                "value": "23"
              },
              {
                "text": "Astana,Almaty,Novosibirsk,Omsk",
                "value": "24"
              },
              {
                "text": "Naypyitaw",
                "value": "26"
              },
              {
                "text": "Krasnoyarsk,Bangkok",
                "value": "28"
              },
              {
                "text": "Beijing,Singapore,Perth,Irkuts,Ulan-Ude",
                "value": "32"
              },
              {
                "text": "Eucla",
                "value": "35"
              },
              {
                "text": "Seul,Tokyo,Yakutsk,Chita",
                "value": "36"
              },
              {
                "text": "Adelaide,Darwin",
                "value": "38"
              },
              {
                "text": "Sydney,Melbourne,Camberra,Brisbane,Hobart,Vladivostok",
                "value": "40"
              },
              {
                "text": "Lord Howe Islands",
                "value": "42"
              },
              {
                "text": "Nuomea,Srednekolymsk Time",
                "value": "44"
              },
              {
                "text": "Norfolk Island",
                "value": "46"
              },
              {
                "text": "Wellington,Auckland,Kamchatka Time",
                "value": "48"
              },
              {
                "text": "Chatham Islands",
                "value": "51"
              },
              {
                "text": "Nukualofa,Apia",
                "value": "52"
              },
              {
                "text": "Chatham Islands",
                "value": "54"
              },
              {
                "text": "Kiribati",
                "value": "56"
              }
            ]
          },
          {
            "variable": "timezone_name_fanvil",
            "default_value": "UTC+1",
            "description": "Time Zone Name",
            "type": "list",
            "options": [{
                "text": "UTC-11",
                "value": "UTC-11"
              },
              {
                "text": "UTC-10",
                "value": "UTC-10"
              },
              {
                "text": "UTC-9:30",
                "value": "UTC-9:30"
              },
              {
                "text": "UTC-9",
                "value": "UTC-9"
              },
              {
                "text": "UTC-8",
                "value": "UTC-8"
              },
              {
                "text": "UTC-7",
                "value": "UTC-7"
              },
              {
                "text": "UTC-6",
                "value": "UTC-6"
              },
              {
                "text": "UTC-5",
                "value": "UTC-5"
              },
              {
                "text": "UTC-4:30",
                "value": "UTC-4:30"
              },
              {
                "text": "UTC-4",
                "value": "UTC-4"
              },
              {
                "text": "UTC-3:30",
                "value": "UTC-3:30"
              },
              {
                "text": "UTC-3",
                "value": "UTC-3"
              },
              {
                "text": "UTC-2:30",
                "value": "UTC-2:30"
              },
              {
                "text": "UTC-2",
                "value": "UTC-2"
              },
              {
                "text": "UTC-1",
                "value": "UTC-1"
              },
              {
                "text": "UTC",
                "value": "UTC"
              },
              {
                "text": "UTC+1",
                "value": "UTC+1"
              },
              {
                "text": "UTC+2",
                "value": "UTC+2"
              },
              {
                "text": "UTC+3",
                "value": "UTC+3"
              },
              {
                "text": "UTC+3:30",
                "value": "UTC+3:30"
              },
              {
                "text": "UTC+4",
                "value": "UTC+4"
              },
              {
                "text": "UTC+4:30",
                "value": "UTC+4:30"
              },
              {
                "text": "UTC+5",
                "value": "UTC+5"
              },
              {
                "text": "UTC+5:30",
                "value": "UTC+5:30"
              },
              {
                "text": "UTC+5:45",
                "value": "UTC+5:45"
              },
              {
                "text": "UTC+6",
                "value": "UTC+6"
              },
              {
                "text": "UTC+6:30",
                "value": "UTC+6:30"
              },
              {
                "text": "UTC+7",
                "value": "UTC+7"
              },
              {
                "text": "UTC+8",
                "value": "UTC+8"
              },
              {
                "text": "UTC+9",
                "value": "UTC+9"
              },
              {
                "text": "UTC+9:30",
                "value": "UTC+9:30"
              },
              {
                "text": "UTC+10",
                "value": "UTC+10"
              },
              {
                "text": "UTC+10:30",
                "value": "UTC+10:30"
              },
              {
                "text": "UTC+11",
                "value": "UTC+11"
              },
              {
                "text": "UTC+11:30",
                "value": "UTC+11:30"
              },
              {
                "text": "UTC+12",
                "value": "UTC+12"
              },
              {
                "text": "UTC+12:45",
                "value": "UTC+12:45"
              },
              {
                "text": "UTC+13",
                "value": "UTC+13"
              },
              {
                "text": "UTC+13:30",
                "value": "UTC+13:30"
              }
            ]
          },
          {
            "variable": "date_format",
            "default_value": "2",
            "description": "Date Display Format",
            "type": "list",
            "options": [{
                "text": "DD MMM WW",
                "value": "0"
              },
              {
                "text": "MMM DD WW",
                "value": "1"
              },
              {
                "text": "WW DD MMM",
                "value": "2"
              },
              {
                "text": "WW MMM DD",
                "value": "3"
              },
              {
                "text": "DD MM YY",
                "value": "4"
              },
              {
                "text": "DD MM YYYY",
                "value": "5"
              },
              {
                "text": "MM DD YY",
                "value": "6"
              },
              {
                "text": "MM DD YYYY",
                "value": "7"
              },
              {
                "text": "YY MM DD",
                "value": "8"
              },
              {
                "text": "YYYY MM DD",
                "value": "9"
              }
            ]
          },
          {
            "variable": "time_format",
            "default_value": "0",
            "description": "Time Display Format",
            "type": "list",
            "options": [{
                "text": "24-hour clock",
                "value": "0"
              },
              {
                "text": "12-hour clock",
                "value": "1"
              }
            ]
          },
          {
            "variable": "tones_fanvil",
            "default_value": "21",
            "description": "Country Tones",
            "type": "list",
            "options": [{
                "text": "Australia",
                "value": "15"
              },
              {
                "text": "Austria",
                "value": "22"
              },
              {
                "text": "Brazil",
                "value": "16"
              },
              {
                "text": "Belgium",
                "value": "0"
              },
              {
                "text": "Canada",
                "value": "18"
              },
              {
                "text": "China",
                "value": "1"
              },
              {
                "text": "Chile",
                "value": "20"
              },
              {
                "text": "Taiwan",
                "value": "10"
              },
              {
                "text": "Croatia",
                "value": "17"
              },
              {
                "text": "Czech",
                "value": "17"
              },
              {
                "text": "Denmark",
                "value": "23"
              },
              {
                "text": "Finland",
                "value": "24"
              },
              {
                "text": "France",
                "value": "25"
              },
              {
                "text": "Germany",
                "value": "2"
              },
              {
                "text": "Great Britain",
                "value": "13"
              },
              {
                "text": "Greece",
                "value": "26"
              },
              {
                "text": "Hungary",
                "value": "27"
              },
              {
                "text": "Lithuania",
                "value": "28"
              },
              {
                "text": "India",
                "value": "29"
              },
              {
                "text": "Israel",
                "value": "3"
              },
              {
                "text": "Italy",
                "value": "21"
              },
              {
                "text": "Japan",
                "value": "4"
              },
              {
                "text": "Mexico",
                "value": "30"
              },
              {
                "text": "New Zealand",
                "value": "31"
              },
              {
                "text": "Netherlands",
                "value": "5"
              },
              {
                "text": "Norway",
                "value": "6"
              },
              {
                "text": "Portugal",
                "value": "32"
              },
              {
                "text": "Russia",
                "value": "19"
              },
              {
                "text": "South Africa",
                "value": "14"
              },
              {
                "text": "South Korea",
                "value": "7"
              },
              {
                "text": "Spain",
                "value": "33"
              },
              {
                "text": "Switzerland",
                "value": "9"
              },
              {
                "text": "Sweden",
                "value": "8"
              },
              {
                "text": "United States",
                "value": "11"
              }
            ]
          },
          {
            "variable": "adminpw",
            "default_value": "admin",
            "description": "Web administration password",
            "type": "input"
          },
          {
            "variable": "userpw",
            "default_value": "guest",
            "description": "Web user password",
            "type": "input"
          }
        ]
      }
    }

    this.network = function (modelMap) {
      if (!(modelMap.vlan || modelMap.ldap)) {
        return;
      }

      var ldapItems = [];
      var vlanItems = [];

      //// todo

      return {
        "name": "Network",
        "items": [{
            "variable": "voice_vlan_enable",
            "default_value": "0",
            "description": "Enable VLAN",
            "type": "list",
            "options": [{
                "text": "OFF",
                "value": "0"
              },
              {
                "text": "ON",
                "value": "1"
              }
            ]
          },
          {
            "variable": "voice_vlan_id",
            "default_value": "0",
            "description": "WAN VLAN ID",
            "type": "input"
          },
          {
            "variable": "data_vlan_enable",
            "default_value": "0",
            "description": "LAN VLAN Mode",
            "type": "list",
            "options": [{
                "text": "follow WAN",
                "value": "0"
              },
              {
                "text": "Disable",
                "value": "1"
              },
              {
                "text": "Enable",
                "value": "1"
              }
            ]
          },
          {
            "variable": "data_vlan_id",
            "default_value": "0",
            "description": "LAN VLAN ID",
            "type": "input"
          },
          {
            "variable": "voice_vlan_signalling",
            "default_value": "0",
            "description": "802.1p Signal Priority",
            "type": "input"
          },
          {
            "variable": "voice_vlan_voice_priority",
            "default_value": "0",
            "description": "802.1p Media Priority",
            "type": "input"
          },
          {
            "variable": "data_vlan_priority",
            "default_value": "0",
            "description": "LAN VLAN PRIORITY",
            "type": "input"
          }
        ]
      }
    }

    this.provisioning = function (modelMap) {
      if (!modelMap.provisioning) {
        return;
      }

      //// todo

      return {
        "name": "Provisioning",
        "items": [{
            "variable": "dhcp_enable",
            "default_value": "66",
            "description": "DHCP Active",
            "type": "list",
            "options": [{
                "text": "Option 66",
                "value": "66"
              },
              {
                "text": "Option 43",
                "value": "43"
              },
              {
                "text": "Off",
                "value": "0"
              }
            ]
          },
          {
            "variable": "pnp_enable",
            "default_value": "0",
            "description": "PNP Active",
            "type": "list",
            "options": [{
                "text": "On",
                "value": "1"
              },
              {
                "text": "Off",
                "value": "0"
              }
            ]
          }
        ]
      }
    }

  })