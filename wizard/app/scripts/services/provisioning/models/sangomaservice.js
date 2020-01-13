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

    this.map = function () {
      return {
        "S2xx": {
          "S205": {
            "model": "S205",
            "softKeys": true,
            "lineKeys": 2,
            "hidden_variables": [
              "wallpaper_image",
              "screensaver_image"
            ]
          },
          "S206": {
            "model": "S206",
            "softKeys": true,
            "lineKeys": 2,
            "hidden_variables": [
              "wallpaper_image",
              "screensaver_image"
            ]
          }
        },
        "S3xx": {
          "S300": {
            "model": "S300",
            "softKeys": true,
            "lineKeys": 2,
            "hidden_variables": [
              "wallpaper_image",
              "screensaver_image"
            ]
          },
          "S305": {
            "model": "S305",
            "softKeys": true,
            "lineKeys": 2,
            "hidden_variables": [
              "wallpaper_image",
              "screensaver_image"
            ]
          }
        },
        "S4xx": {
          "S400": {
            "model": "S400",
            "softKeys": true,
            "lineKeys": 25,
            "hidden_variables": [
              "wallpaper_image",
              "screensaver_image"
            ]
          },
          "S405": {
            "model": "S405",
            "softKeys": true,
            "lineKeys": 25,
            "hidden_variables": [
              "wallpaper_image",
              "screensaver_image"
            ]
          },
          "S406": {
            "model": "S406",
            "softKeys": true,
            "lineKeys": 25,
            "hidden_variables": [
              "wallpaper_image",
              "screensaver_image"
            ]
          }
        },
        "S5xx": {
          "S500": {
            "model": "S500",
            "softKeys": true,
            "lineKeys": 35,
            "expKeys": [
              {
                "start": 1,
                "end": 40
              },
              {
                "start": 1,
                "end": 40
              }
            ]
          },
          "S505": {
            "model": "S505",
            "softKeys": true,
            "lineKeys": 35,
            "expKeys": [
              {
                "start": 1,
                "end": 40
              },
              {
                "start": 1,
                "end": 40
              }
            ]
          }
        },
        "S7xx": {
          "S700": {
            "model": "S700",
            "softKeys": true,
            "lineKeys": 45,
            "expKeys": [
              {
                "start": 1,
                "end": 40
              },
              {
                "start": 1,
                "end": 40
              }
            ]
          },
          "S705": {
            "model": "S705",
            "softKeys": true,
            "lineKeys": 45,
            "expKeys": [
              {
                "start": 1,
                "end": 40
              },
              {
                "start": 1,
                "end": 40
              }
            ]
          }
        }
      }
    }

    this.modelGroups = {
      "S2xxS3xx": [
        "S205", "S206",
        "S300", "S305"
      ],
      "S4xx": [
        "S400", "S405", "S406"
      ],
      "S5xx": [
        "S500", "S505"
      ],
      "S7xx": [
        "S700", "S705"
      ]
    }

    this.generalUI = function () {
      return {
        "name": "General",
        "items": [
          {
            "variable": "language_sangoma",
            "description": "Web Language",
            "type": "list",
            "options": [
              {
                "text": "English",
                "value": "0"
              },
              {
                "text": "French",
                "value": "1"
              },
              {
                "text": "German",
                "value": "2"
              },
              {
                "text": "Spanish",
                "value": "3"
              },
              {
                "text": "Portuguese",
                "value": "4"
              },
              {
                "text": "Russian",
                "value": "5"
              },
              {
                "text": "Italian",
                "value": "6"
              },
              {
                "text": "Polish",
                "value": "7"
              },
              {
                "text": "Turkish",
                "value": "8"
              },
              {
                "text": "Chinese simpl.",
                "value": "9"
              },
              {
                "text": "Chinese trad.",
                "value": "10"
              },
              {
                "text": "Dutch",
                "value": "11"
              }
            ]
          },
          {
            "variable": "timezone_sangoma",
            "description": "Time Zone",
            "type": "list",
            "options": [
              {
                "text": "-11 Samoa",
                "value": "105"
              },
              {
                "text": "-10 United States-Hawaii",
                "value": "1"
              },
              {
                "text": "-10 United States-Alaska-Aleutian",
                "value": "2"
              },
              {
                "text": "-9 United States-Alaska-Time",
                "value": "3"
              },
              {
                "text": "-8 Canada(Vancouver)",
                "value": "4"
              },
              {
                "text": "-8 Mexico(Tijuana)",
                "value": "5"
              },
              {
                "text": "-8 United States Pacific Time",
                "value": "6"
              },
              {
                "text": "-7 Canada(Edmonton)",
                "value": "7"
              },
              {
                "text": "-7 Mexico(Mazatlan)",
                "value": "8"
              },
              {
                "text": "-7 United States Mountain Time",
                "value": "9"
              },
              {
                "text": "-7 United States-MST no DST",
                "value": "10"
              },
              {
                "text": "-6 Canada-Manitoba",
                "value": "11"
              },
              {
                "text": "-6 Chile(Easter Islands)",
                "value": "12"
              },
              {
                "text": "-6 Mexico(Mexico City)",
                "value": "13"
              },
              {
                "text": "-6 United States-Central Time",
                "value": "14"
              },
              {
                "text": "-5 Bahamas(Nassau)",
                "value": "15"
              },
              {
                "text": "-5 Canada(Montreal)",
                "value": "16"
              },
              {
                "text": "-5 Cuba(Havana)",
                "value": "17"
              },
              {
                "text": "-5 United States-Eastern Time",
                "value": "18"
              },
              {
                "text": "-4:30 Venezuela(Caracas)",
                "value": "19"
              },
              {
                "text": "-4 Canada(Halifax)",
                "value": "20"
              },
              {
                "text": "-4 Chile(Santiago)",
                "value": "21"
              },
              {
                "text": "-4 Paraguay(Asuncion)",
                "value": "22"
              },
              {
                "text": "-4 United Kingdom-Bermuda",
                "value": "23"
              },
              {
                "text": "-4 United Kingdom-(Falkland Islands)",
                "value": "24"
              },
              {
                "text": "-4 Trinitad Tobago",
                "value": "25"
              },
              {
                "text": "-3:30 Canada-New Foundland",
                "value": "26"
              },
              {
                "text": "-3 Denmark-Greenland",
                "value": "27"
              },
              {
                "text": "-3 Argentina(Buenos Aires)",
                "value": "28"
              },
              {
                "text": "-3 Brazil(no DST)",
                "value": "29"
              },
              {
                "text": "-3 Brazil(DST)",
                "value": "30"
              },
              {
                "text": "-3 Brazil(no DST)",
                "value": "31"
              },
              {
                "text": "-1 Portugal(Azores)",
                "value": "32"
              },
              {
                "text": "GMT",
                "value": "33"
              },
              {
                "text": "0 Greenland",
                "value": "34"
              },
              {
                "text": "0 Denmark-Faroe Islands",
                "value": "35"
              },
              {
                "text": "Ireland(Dublin)",
                "value": "36"
              },
              {
                "text": "0 Portugal(Lisboa)",
                "value": "37"
              },
              {
                "text": "0 Spain-Canary Island",
                "value": "38"
              },
              {
                "text": "0 United Kingdom(London)",
                "value": "39"
              },
              {
                "text": "0 Morocco",
                "value": "40"
              },
              {
                "text": "+1 Albania(Tirane)",
                "value": "41"
              },
              {
                "text": "+1 Austria(Vienna)",
                "value": "42"
              },
              {
                "text": "+1 Belgium(Brussels)",
                "value": "43"
              },
              {
                "text": "+1 Caicos",
                "value": "44"
              },
              {
                "text": "+1 Chatam",
                "value": "45"
              },
              {
                "text": "+1 Croatia(Zagreb)",
                "value": "46"
              },
              {
                "text": "+1 Czech Repubblic(Prague)",
                "value": "47"
              },
              {
                "text": "Denmark(Kopenhaven)",
                "value": "48"
              },
              {
                "text": "+1 France(Paris)",
                "value": "49"
              },
              {
                "text": "+1 Germany(Berlin)",
                "value": "50"
              },
              {
                "text": "+1 Hungary(Budapest)",
                "value": "51"
              },
              {
                "text": "+1 Italy(Rome)",
                "value": "52"
              },
              {
                "text": "+1 Luxembourg",
                "value": "53"
              },
              {
                "text": "+1 Netherlands(Amsterdam)",
                "value": "54"
              },
              {
                "text": "+1 Poland(Warsaw)",
                "value": "55"
              },
              {
                "text": "+1 Serbia(Belgrade)",
                "value": "56"
              },
              {
                "text": "+2 Estonia(Tallinn)",
                "value": "57"
              },
              {
                "text": "+2 Finland(Helsinki)",
                "value": "58"
              },
              {
                "text": "+2 Gaza",
                "value": "59"
              },
              {
                "text": "+2 Greece(Athens)",
                "value": "106"
              },
              {
                "text": "+2 Israel(Tel Aviv)",
                "value": "61"
              },
              {
                "text": "+2 Jordan(Amman)",
                "value": "62"
              },
              {
                "text": "+2 Latvia(Riga)",
                "value": "63"
              },
              {
                "text": "+2 Lebanon(Beirut)",
                "value": "64"
              },
              {
                "text": "+2 Moldova(Kishinev)",
                "value": "65"
              },
              {
                "text": "+2 Russia(Kalinigrad)",
                "value": "66"
              },
              {
                "text": "+2 Romania(Bucharest)",
                "value": "67"
              },
              {
                "text": "+2 Syria(Damascus)",
                "value": "68"
              },
              {
                "text": "+2 Turkey(Ankara)",
                "value": "69"
              },
              {
                "text": "+2 Ukraine(Kyiv)",
                "value": "70"
              },
              {
                "text": "+3 East Africa Time",
                "value": "71"
              },
              {
                "text": "+3 Bahrain,Kuwait,Iraq(Bagdad)",
                "value": "72"
              },
              {
                "text": "+3 Russia(Moscow)",
                "value": "73"
              },
              {
                "text": "+3:30 Iran(Teheran)",
                "value": "74"
              },
              {
                "text": "+4 Armenia(Yerevan)",
                "value": "75"
              },
              {
                "text": "+4 Arzebaijan(Baku)",
                "value": "76"
              },
              {
                "text": "+4 Georgia(Tiblisi)",
                "value": "77"
              },
              {
                "text": "+4 Kazakstan(Aqtau)",
                "value": "78"
              },
              {
                "text": "+4 Russia(Samara)",
                "value": "79"
              },
              {
                "text": "+5 Kazakstan(Aqtobe)",
                "value": "80"
              },
              {
                "text": "+5 Kyrgyzstan(Bishkek)",
                "value": "81"
              },
              {
                "text": "+5 Pakistan(Islamabad)",
                "value": "82"
              },
              {
                "text": "+5 Russia(Chelyabinsk)",
                "value": "83"
              },
              {
                "text": "+5:30 India(Calcutta)",
                "value": "84"
              },
              {
                "text": "+6 Kazakstan(Astana)",
                "value": "85"
              },
              {
                "text": "+6 Russia(Novosibirsk)",
                "value": "86"
              },
              {
                "text": "+7 Russia(Krasnoyarsk)",
                "value": "87"
              },
              {
                "text": "+7 Thailand(Bangkok)",
                "value": "88"
              },
              {
                "text": "+8 China(Beijing)",
                "value": "89"
              },
              {
                "text": "+8 Singapore",
                "value": "90"
              },
              {
                "text": "+8 Australia(Perth)",
                "value": "91"
              },
              {
                "text": "+9 Korea(Seoul)",
                "value": "92"
              },
              {
                "text": "+9 Japan(Tokyo)",
                "value": "93"
              },
              {
                "text": "+9:30 Australia(Adelaide)",
                "value": "94"
              },
              {
                "text": "+9:30 Australia(Darwin)",
                "value": "95"
              },
              {
                "text": "+10 Australia(Sidney)",
                "value": "96"
              },
              {
                "text": "+10 Australia(Brisbane)",
                "value": "97"
              },
              {
                "text": "+10 Australia(Hobart)",
                "value": "98"
              },
              {
                "text": "+10 Russia(Vladivostok)",
                "value": "99"
              },
              {
                "text": "+10:30 Australia(Lord Howe Islands)",
                "value": "100"
              },
              {
                "text": "+11 New Caledonia(Noumea)",
                "value": "101"
              },
              {
                "text": "+12 New Zeland(Wellington)",
                "value": "102"
              },
              {
                "text": "+12:45 New Zeland(Chatham Islands)",
                "value": "103"
              },
              {
                "text": "+13 Tonga(Nukualofa)",
                "value": "104"
              }
            ]
          },
          {
            "variable": "date_format",
            "description": "Date Display Format",
            "type": "list",
            "options": [
              {
                "text": "Year - Month - Day",
                "value": "0"
              },
              {
                "text": "Month - Day - Year",
                "value": "1"
              },
              {
                "text": "Day - Month - Year",
                "value": "2"
              }
            ]
          },
          {
            "variable": "tones_sangoma",
            "description": "Country Tones",
            "type": "list",
            "options": [
              {
                "text": "Australia",
                "value": "1"
              },
              {
                "text": "Austria",
                "value": "2"
              },
              {
                "text": "Brazil",
                "value": "3"
              },
              {
                "text": "Belgium",
                "value": "4"
              },
              {
                "text": "China",
                "value": "5"
              },
              {
                "text": "Chile",
                "value": "6"
              },
              {
                "text": "Czech",
                "value": "7"
              },
              {
                "text": "Denmark",
                "value": "8"
              },
              {
                "text": "Finland",
                "value": "9"
              },
              {
                "text": "France",
                "value": "10"
              },
              {
                "text": "Germany",
                "value": "11"
              },
              {
                "text": "Great Britain",
                "value": "12"
              },
              {
                "text": "Greece",
                "value": "13"
              },
              {
                "text": "Hungary",
                "value": "14"
              },
              {
                "text": "Lithuania",
                "value": "15"
              },
              {
                "text": "India",
                "value": "16"
              },
              {
                "text": "Italy",
                "value": "17"
              },
              {
                "text": "Japan",
                "value": "18"
              },
              {
                "text": "Mexico",
                "value": "19"
              },
              {
                "text": "New Zealand",
                "value": "20"
              },
              {
                "text": "Netherlands",
                "value": "21"
              },
              {
                "text": "Norway",
                "value": "22"
              },
              {
                "text": "Portugal",
                "value": "23"
              },
              {
                "text": "Spain",
                "value": "24"
              },
              {
                "text": "Switzerland",
                "value": "25"
              },
              {
                "text": "Sweden",
                "value": "26"
              },
              {
                "text": "Russia",
                "value": "27"
              },
              {
                "text": "United States",
                "value": "28"
              }
            ]
          },
          {
            "variable": "adminpw",
            "description": "Web administration password",
            "type": "input"
          },
          {
            "variable": "userpw",
            "description": "Web user password",
            "type": "input"
          }
        ]
      }
    }

    this.preferenceUI = function () {
      return {
        "name": "Preferences",
        "items": [
          {
            "variable": "call_waiting",
            "description": "Call Waiting",
            "type": "list",
            "options": [
              {
                "text": "Off",
                "value": "0"
              },
              {
                "text": "On",
                "value": "1"
              }
            ]
          },
          {
            "variable": "default_ringtone",
            "description": "Ring Tones",
            "type": "list",
            "options": [
              {
                "text": "Ring1",
                "value": "1"
              },
              {
                "text": "Ring2",
                "value": "2"
              },
              {
                "text": "Ring3",
                "value": "3"
              },
              {
                "text": "Ring4",
                "value": "4"
              },
              {
                "text": "Ring5",
                "value": "5"
              }
            ]
          },

          {
            "variable": "dss_transfer",
            "description": "Transfer Mode via DSSkey",
            "type": "list",
            "options": [
              {
                "text": "Attended Transfer",
                "value": "0"
              },
              {
                "text": "Blind Transfer",
                "value": "1"
              },
              {
                "text": "New Call",
                "value": "2"
              }
            ]
          },
          {
            "variable": "ldap_server",
            "description": "Server LDAP",
            "type": "input"
          },
          {
            "variable": "ldap_base",
            "description": "BaseDN LDAP",
            "type": "input"
          },
          {
            "variable": "ldap_port",
            "description": "LDAP Server Port",
            "type": "input"
          },
          {
            "variable": "ldap_name_filter",
            "description": "LDAP Name Filter",
            "type": "input"
          },
          {
            "variable": "ldap_name_attr",
            "description": "LDAP Name Attributes",
            "type": "input"
          },
          {
            "variable": "ldap_name_display",
            "description": "LDAP Display Name",
            "type": "input"
          },
          {
            "variable": "ldap_number_filter",
            "description": "LDAP Number Filter",
            "type": "input"
          },
          {
            "variable": "ldap_number_attr",
            "description": "LDAP Number Attributes",
            "type": "input"
          },
          {
            "variable": "wallpaper_image",
            "description": "Wallpaper Image",
            "type": "input"
          },
          {
            "variable": "screensaver_image",
            "description": "ScreenSaver Image",
            "type": "input"
          }
        ]
      }
    }

    this.networkUI = function () {
      return {
        "name": "Network",
        "items": [
          {
            "variable": "voice_vlan_id",
            "description": "Voice VLAN ID",
            "type": "input"
          },
          {
            "variable": "voice_vlan_qos",
            "description": "Voice VLAN QOS",
            "type": "input"
          },
          {
            "variable": "data_vlan_id",
            "description": "Data VLAN ID",
            "type": "input"
          },
          {
            "variable": "pc_port",
            "description": "Pc Port",
            "type": "list",
            "options": [
              {
                "text": "Router",
                "value": "0"
              },
              {
                "text": "Bridge",
                "value": "1"
              },
              {
                "text": "Expansion module",
                "value": "2"
              }
            ]
          }
        ]
      }
    }

    this.provisioningUI = function () {
      return {
        "name": "Provisioning",
        "items": [
          {
            "variable": "dhcp_enable",
            "description": "DHCP Active",
            "type": "list",
            "options": [
              {
                "text": "On",
                "value": "1"
              },
              {
                "text": "Off",
                "value": "0"
              }
            ]
          },
          {
            "variable": "pnp_enable",
            "description": "PNP Active",
            "type": "list",
            "options": [
              {
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

    this.softKeysUI = function () {
      return {
        "name": "SoftKeys",
        "items": [
          {
            "description": "SoftKeys",
            "type": "loop",
            "loop_start": 1,
            "loop_end": 4,
            "data": {
              "items": [
                {
                  "variable": "softkey_label",
                  "description": "Label",
                  "type": "input"
                },
                {
                  "variable": "softkey_type",
                  "description": "Type",
                  "type": "list",
                  "options": [
                    {
                      "text": "N\/A",
                      "value": "0"
                    },
                    {
                      "text": "Speed Dial",
                      "value": "2"
                    },
                    {
                      "text": "Direct Pickup",
                      "value": "6"
                    },
                    {
                      "text": "Group Pickup",
                      "value": "7"
                    },
                    {
                      "text": "Itercom",
                      "value": "9"
                    },
                    {
                      "text": "Prefix",
                      "value": "11"
                    },
                    {
                      "text": "Local Group",
                      "value": "12"
                    },
                    {
                      "text": "XML Group",
                      "value": "13"
                    },
                    {
                      "text": "XML Browser",
                      "value": "14"
                    },
                    {
                      "text": "LDAP",
                      "value": "15"
                    },
                    {
                      "text": "BroadSoft Group",
                      "value": "16"
                    },
                    {
                      "text": "Forward",
                      "value": "18"
                    },
                    {
                      "text": "DND",
                      "value": "21"
                    },
                    {
                      "text": "Redial",
                      "value": "22"
                    },
                    {
                      "text": "Call Return",
                      "value": "23"
                    },
                    {
                      "text": "SMS",
                      "value": "24"
                    },
                    {
                      "text": "History",
                      "value": "36"
                    },
                    {
                      "text": "Directory",
                      "value": "37"
                    },
                    {
                      "text": "Menu",
                      "value": "38"
                    },
                    {
                      "text": "NewSMS",
                      "value": "39"
                    },
                    {
                      "text": "Status",
                      "value": "40"
                    },
                    {
                      "text": "Switch Account Up",
                      "value": "41"
                    },
                    {
                      "text": "Switch Account Down",
                      "value": "42"
                    },
                    {
                      "text": "Local Phone Book",
                      "value": "43"
                    },
                    {
                      "text": "BroadSoft Phone Book",
                      "value": "44"
                    },
                    {
                      "text": "XML Phone Book",
                      "value": "45"
                    },
                    {
                      "text": "Previous Page",
                      "value": "49"
                    },
                    {
                      "text": "Next Page",
                      "value": "50"
                    }
                  ]
                },
                {
                  "variable": "softkey_value",
                  "description": "Value",
                  "type": "input"
                }
              ]
            }
          }
        ]
      }
    }

    this.lineKeysUI = function (modelMap) {
      var itemsLineKeysS2xxS3xx = [
        {
          "variable": "$linekey_type",
          "default_value": "0",
          "description": "Line Key {$count} Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "line",
            "value": "1"
          },
          {
            "text": "Speed Dial",
            "value": "2"
          },
          {
            "text": "BLF",
            "value": "3"
          },
          {
            "text": "BLF List",
            "value": "4"
          },
          {
            "text": "Voice mail",
            "value": "5"
          },
          {
            "text": "Direct Pickup",
            "value": "6"
          },
          {
            "text": "Group Pickup",
            "value": "7"
          },
          {
            "text": "Call Park",
            "value": "8"
          },
          {
            "text": "Intercom",
            "value": "9"
          },
          {
            "text": "DTMF",
            "value": "10"
          },
          {
            "text": "Prefix",
            "value": "11"
          },
          {
            "text": "Local Group",
            "value": "12"
          },
          {
            "text": "XML Group",
            "value": "13"
          },
          {
            "text": "XML Browser",
            "value": "14"
          },
          {
            "text": "LDAP",
            "value": "15"
          },
          {
            "text": "BroadSoft Group",
            "value": "16"
          },
          {
            "text": "Conference",
            "value": "17"
          },
          {
            "text": "Forward",
            "value": "18"
          },
          {
            "text": "Transfer",
            "value": "19"
          },
          {
            "text": "Hold",
            "value": "20"
          },
          {
            "text": "DND",
            "value": "21"
          },
          {
            "text": "Redial",
            "value": "22"
          },
          {
            "text": "Call Return",
            "value": "23"
          },
          {
            "text": "SMS",
            "value": "24"
          },
          {
            "text": "Record",
            "value": "25"
          },
          {
            "text": "URL Record",
            "value": "26"
          },
          {
            "text": "Paging",
            "value": "27"
          },
          {
            "text": "Group Listening",
            "value": "28"
          },
          {
            "text": "Pubblic Hold",
            "value": "29"
          },
          {
            "text": "Private Hold",
            "value": "30"
          },
          {
            "text": "Shared Line",
            "value": "31"
          },
          {
            "text": "Hot Desking",
            "value": "32"
          },
          {
            "text": "ACD",
            "value": "33"
          },
          {
            "text": "Zero Touch",
            "value": "34"
          },
          {
            "text": "URL",
            "value": "35"
          },
          {
            "text": "MultiCast Paging",
            "value": "47"
          },
          {
            "text": "XML BLF",
            "value": "48"
          }
          ]
        },
        {
          "variable": "$linekey_line",
          "default_value": "0",
          "description": "Line Key {$count} Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "255"
          },
          {
            "text": "Line 1",
            "value": "0"
          },
          {
            "text": "Line 2",
            "value": "1"
          }
          ]
        },
        {
          "variable": "$linekey_label",
          "default_value": "",
          "description": "Line Key {$count} Label",
          "type": "input"
        },
        {
          "variable": "$linekey_value",
          "default_value": "",
          "description": "Line Key {$count} Value",
          "type": "input"
        },
        {
          "variable": "$linekey_pickup",
          "default_value": "{$pickup_direct}",
          "description": "Line Key {$count} Pickup Number",
          "type": "input"
        }
      ];

      var itemsLineKeysS4xx = [
        {
          "variable": "$linekey_type",
          "default_value": "0",
          "description": "Line Key {$count} Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "line",
            "value": "1"
          },
          {
            "text": "Speed Dial",
            "value": "2"
          },
          {
            "text": "BLF",
            "value": "3"
          },
          {
            "text": "BLF List",
            "value": "4"
          },
          {
            "text": "Voice mail",
            "value": "5"
          },
          {
            "text": "Direct Pickup",
            "value": "6"
          },
          {
            "text": "Group Pickup",
            "value": "7"
          },
          {
            "text": "Call Park",
            "value": "8"
          },
          {
            "text": "Intercom",
            "value": "9"
          },
          {
            "text": "DTMF",
            "value": "10"
          },
          {
            "text": "Prefix",
            "value": "11"
          },
          {
            "text": "Local Group",
            "value": "12"
          },
          {
            "text": "XML Group",
            "value": "13"
          },
          {
            "text": "XML Browser",
            "value": "14"
          },
          {
            "text": "LDAP",
            "value": "15"
          },
          {
            "text": "BroadSoft Group",
            "value": "16"
          },
          {
            "text": "Conference",
            "value": "17"
          },
          {
            "text": "Forward",
            "value": "18"
          },
          {
            "text": "Transfer",
            "value": "19"
          },
          {
            "text": "Hold",
            "value": "20"
          },
          {
            "text": "DND",
            "value": "21"
          },
          {
            "text": "Redial",
            "value": "22"
          },
          {
            "text": "Call Return",
            "value": "23"
          },
          {
            "text": "SMS",
            "value": "24"
          },
          {
            "text": "Record",
            "value": "25"
          },
          {
            "text": "URL Record",
            "value": "26"
          },
          {
            "text": "Paging",
            "value": "27"
          },
          {
            "text": "Group Listening",
            "value": "28"
          },
          {
            "text": "Pubblic Hold",
            "value": "29"
          },
          {
            "text": "Private Hold",
            "value": "30"
          },
          {
            "text": "Shared Line",
            "value": "31"
          },
          {
            "text": "Hot Desking",
            "value": "32"
          },
          {
            "text": "ACD",
            "value": "33"
          },
          {
            "text": "Zero Touch",
            "value": "34"
          },
          {
            "text": "URL",
            "value": "35"
          },
          {
            "text": "MultiCast Paging",
            "value": "47"
          },
          {
            "text": "XML BLF",
            "value": "48"
          }
          ]
        },
        {
          "variable": "$linekey_line",
          "default_value": "0",
          "description": "Line Key {$count} Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "255"
          },
          {
            "text": "Line 1",
            "value": "0"
          },
          {
            "text": "Line 2",
            "value": "1"
          },
          {
            "text": "Line 3",
            "value": "2"
          }
          ]
        },
        {
          "variable": "$linekey_label",
          "default_value": "",
          "description": "Line Key {$count} Label",
          "type": "input"
        },
        {
          "variable": "$linekey_value",
          "default_value": "",
          "description": "Line Key {$count} Value",
          "type": "input"
        },
        {
          "variable": "$linekey_pickup",
          "default_value": "{$pickup_direct}",
          "description": "Line Key {$count} Pickup Number",
          "type": "input"
        }
      ];

      var itemsLineKeysS5xx = [
        {
          "variable": "$linekey_type",
          "default_value": "0",
          "description": "Line Key {$count} Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "line",
            "value": "1"
          },
          {
            "text": "Speed Dial",
            "value": "2"
          },
          {
            "text": "BLF",
            "value": "3"
          },
          {
            "text": "BLF List",
            "value": "4"
          },
          {
            "text": "Voice mail",
            "value": "5"
          },
          {
            "text": "Direct Pickup",
            "value": "6"
          },
          {
            "text": "Group Pickup",
            "value": "7"
          },
          {
            "text": "Call Park",
            "value": "8"
          },
          {
            "text": "Intercom",
            "value": "9"
          },
          {
            "text": "DTMF",
            "value": "10"
          },
          {
            "text": "Prefix",
            "value": "11"
          },
          {
            "text": "Local Group",
            "value": "12"
          },
          {
            "text": "XML Group",
            "value": "13"
          },
          {
            "text": "XML Browser",
            "value": "14"
          },
          {
            "text": "LDAP",
            "value": "15"
          },
          {
            "text": "BroadSoft Group",
            "value": "16"
          },
          {
            "text": "Conference",
            "value": "17"
          },
          {
            "text": "Forward",
            "value": "18"
          },
          {
            "text": "Transfer",
            "value": "19"
          },
          {
            "text": "Hold",
            "value": "20"
          },
          {
            "text": "DND",
            "value": "21"
          },
          {
            "text": "Redial",
            "value": "22"
          },
          {
            "text": "Call Return",
            "value": "23"
          },
          {
            "text": "SMS",
            "value": "24"
          },
          {
            "text": "Record",
            "value": "25"
          },
          {
            "text": "URL Record",
            "value": "26"
          },
          {
            "text": "Paging",
            "value": "27"
          },
          {
            "text": "Group Listening",
            "value": "28"
          },
          {
            "text": "Pubblic Hold",
            "value": "29"
          },
          {
            "text": "Private Hold",
            "value": "30"
          },
          {
            "text": "Shared Line",
            "value": "31"
          },
          {
            "text": "Hot Desking",
            "value": "32"
          },
          {
            "text": "ACD",
            "value": "33"
          },
          {
            "text": "Zero Touch",
            "value": "34"
          },
          {
            "text": "URL",
            "value": "35"
          },
          {
            "text": "MultiCast Paging",
            "value": "47"
          },
          {
            "text": "XML BLF",
            "value": "48"
          }
          ]
        },
        {
          "variable": "$linekey_line",
          "default_value": "0",
          "description": "Line Key {$count} Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "255"
          },
          {
            "text": "Line 1",
            "value": "0"
          },
          {
            "text": "Line 2",
            "value": "1"
          },
          {
            "text": "Line 3",
            "value": "2"
          },
          {
            "text": "Line 4",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$linekey_label",
          "default_value": "",
          "description": "Line Key {$count} Label",
          "type": "input"
        },
        {
          "variable": "$linekey_value",
          "default_value": "",
          "description": "Line Key {$count} Value",
          "type": "input"
        },
        {
          "variable": "$linekey_pickup",
          "default_value": "{$pickup_direct}",
          "description": "Line Key {$count} Pickup Number",
          "type": "input"
        }
      ];

      var itemsLineKeysS7xx = [
        {
          "variable": "$linekey_type",
          "default_value": "0",
          "description": "Line Key {$count} Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "line",
            "value": "1"
          },
          {
            "text": "Speed Dial",
            "value": "2"
          },
          {
            "text": "BLF",
            "value": "3"
          },
          {
            "text": "BLF List",
            "value": "4"
          },
          {
            "text": "Voice mail",
            "value": "5"
          },
          {
            "text": "Direct Pickup",
            "value": "6"
          },
          {
            "text": "Group Pickup",
            "value": "7"
          },
          {
            "text": "Call Park",
            "value": "8"
          },
          {
            "text": "Intercom",
            "value": "9"
          },
          {
            "text": "DTMF",
            "value": "10"
          },
          {
            "text": "Prefix",
            "value": "11"
          },
          {
            "text": "Local Group",
            "value": "12"
          },
          {
            "text": "XML Group",
            "value": "13"
          },
          {
            "text": "XML Browser",
            "value": "14"
          },
          {
            "text": "LDAP",
            "value": "15"
          },
          {
            "text": "BroadSoft Group",
            "value": "16"
          },
          {
            "text": "Conference",
            "value": "17"
          },
          {
            "text": "Forward",
            "value": "18"
          },
          {
            "text": "Transfer",
            "value": "19"
          },
          {
            "text": "Hold",
            "value": "20"
          },
          {
            "text": "DND",
            "value": "21"
          },
          {
            "text": "Redial",
            "value": "22"
          },
          {
            "text": "Call Return",
            "value": "23"
          },
          {
            "text": "SMS",
            "value": "24"
          },
          {
            "text": "Record",
            "value": "25"
          },
          {
            "text": "URL Record",
            "value": "26"
          },
          {
            "text": "Paging",
            "value": "27"
          },
          {
            "text": "Group Listening",
            "value": "28"
          },
          {
            "text": "Pubblic Hold",
            "value": "29"
          },
          {
            "text": "Private Hold",
            "value": "30"
          },
          {
            "text": "Shared Line",
            "value": "31"
          },
          {
            "text": "Hot Desking",
            "value": "32"
          },
          {
            "text": "ACD",
            "value": "33"
          },
          {
            "text": "Zero Touch",
            "value": "34"
          },
          {
            "text": "URL",
            "value": "35"
          },
          {
            "text": "MultiCast Paging",
            "value": "47"
          },
          {
            "text": "XML BLF",
            "value": "48"
          }
          ]
        },
        {
          "variable": "$linekey_line",
          "default_value": "0",
          "description": "Line Key {$count} Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "255"
          },
          {
            "text": "Line 1",
            "value": "0"
          },
          {
            "text": "Line 2",
            "value": "1"
          },
          {
            "text": "Line 3",
            "value": "2"
          },
          {
            "text": "Line 4",
            "value": "3"
          },
          {
            "text": "Line 5",
            "value": "4"
          },
          {
            "text": "Line 6",
            "value": "5"
          }
          ]
        },
        {
          "variable": "$linekey_label",
          "default_value": "",
          "description": "Line Key {$count} Label",
          "type": "input"
        },
        {
          "variable": "$linekey_value",
          "default_value": "",
          "description": "Line Key {$count} Value",
          "type": "input"
        },
        {
          "variable": "$linekey_pickup",
          "default_value": "{$pickup_direct}",
          "description": "Line Key {$count} Pickup Number",
          "type": "input"
        }
      ];

      var items;

      if (this.modelGroups.S2xxS3xx.includes(modelMap.model)) {
        items = itemsLineKeysS2xxS3xx;
      } else if (this.modelGroups.S4xx.includes(modelMap.model)) {
        items = itemsLineKeysS4xx;
      } else if (this.modelGroups.S5xx.includes(modelMap.model)) {
        items = itemsLineKeysS5xx;
      } else if (this.modelGroups.S7xx.includes(modelMap.model)) {
        items = itemsLineKeysS7xx;
      }

      return {
        "name": "LineKeys",
        "items": [
          {
            "description": "LineKeys",
            "type": "loop",
            "loop_start": 1,
            "loop_end": modelMap.lineKeys,
            "data": {
              "items": items
            }
          }
        ]
      }
    }

    this.expKeysUI = function (modelMap) {
      if (!modelMap.expKeys) {
        return null;
      }

      return {
        "name": "ExpKeys",
        "items": [
          {
            "description": "Exp Key",
            "type": "loop",
            "pages": modelMap.expKeys,
            "data": {
              "items": [
                {
                  "variable": "exp_key_type",
                  "description": "Type",
                  "type": "list",
                  "options": [
                    {
                      "text": "N\/A",
                      "value": "0"
                    },
                    {
                      "text": "line",
                      "value": "1"
                    },
                    {
                      "text": "Speed Dial",
                      "value": "2"
                    },
                    {
                      "text": "BLF",
                      "value": "3"
                    },
                    {
                      "text": "BLF List",
                      "value": "4"
                    },
                    {
                      "text": "Voice mail",
                      "value": "5"
                    },
                    {
                      "text": "Direct Pickup",
                      "value": "6"
                    },
                    {
                      "text": "Group Pickup",
                      "value": "7"
                    },
                    {
                      "text": "Call Park",
                      "value": "8"
                    },
                    {
                      "text": "Intercom",
                      "value": "9"
                    },
                    {
                      "text": "DTMF",
                      "value": "10"
                    },
                    {
                      "text": "Prefix",
                      "value": "11"
                    },
                    {
                      "text": "Local Group",
                      "value": "12"
                    },
                    {
                      "text": "XML Group",
                      "value": "13"
                    },
                    {
                      "text": "XML Browser",
                      "value": "14"
                    },
                    {
                      "text": "LDAP",
                      "value": "15"
                    },
                    {
                      "text": "BroadSoft Group",
                      "value": "16"
                    },
                    {
                      "text": "Conference",
                      "value": "17"
                    },
                    {
                      "text": "Forward",
                      "value": "18"
                    },
                    {
                      "text": "Transfer",
                      "value": "19"
                    },
                    {
                      "text": "Hold",
                      "value": "20"
                    },
                    {
                      "text": "DND",
                      "value": "21"
                    },
                    {
                      "text": "Redial",
                      "value": "22"
                    },
                    {
                      "text": "Call Return",
                      "value": "23"
                    },
                    {
                      "text": "SMS",
                      "value": "24"
                    },
                    {
                      "text": "Record",
                      "value": "25"
                    },
                    {
                      "text": "URL Record",
                      "value": "26"
                    },
                    {
                      "text": "Paging",
                      "value": "27"
                    },
                    {
                      "text": "Group Listening",
                      "value": "28"
                    },
                    {
                      "text": "Pubblic Hold",
                      "value": "29"
                    },
                    {
                      "text": "Private Hold",
                      "value": "30"
                    },
                    {
                      "text": "Shared Line",
                      "value": "31"
                    },
                    {
                      "text": "Hot Desking",
                      "value": "32"
                    },
                    {
                      "text": "ACD",
                      "value": "33"
                    },
                    {
                      "text": "Zero Touch",
                      "value": "34"
                    },
                    {
                      "text": "URL",
                      "value": "35"
                    },
                    {
                      "text": "MultiCast Paging",
                      "value": "47"
                    },
                    {
                      "text": "XML BLF",
                      "value": "48"
                    }
                  ]
                },
                {
                  "variable": "exp_key_line",
                  "description": "Line",
                  "type": "list",
                  "options": [
                    {
                      "text": "Auto",
                      "value": "255"
                    },
                    {
                      "text": "Line 1",
                      "value": "0"
                    },
                    {
                      "text": "Line 2",
                      "value": "1"
                    },
                    {
                      "text": "Line 3",
                      "value": "2"
                    },
                    {
                      "text": "Line 4",
                      "value": "3"
                    }
                  ]
                },
                {
                  "variable": "exp_key_label",
                  "description": "Label",
                  "type": "input"
                },
                {
                  "variable": "exp_key_value",
                  "description": "Value",
                  "type": "input"
                },
                {
                  "variable": "exp_key_pickup",
                  "description": "Pickup Number",
                  "type": "input"
                }
              ]
            }
          }
        ]
      }
    }
  })