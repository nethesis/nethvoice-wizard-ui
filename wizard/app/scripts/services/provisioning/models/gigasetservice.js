'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProvGigasetService
 * @description
 * # ProvGigasetService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ProvGigasetService', function ($q, RestService) {

    this.map = function () {
      return {
        "maxwell": {
          "maxwell_basic": {
            "model": "maxwell_basic",
            "softKeys": true,
            "expKeys": [
              {
                "start": 8,
                "end": 21
              },
              {
                "start": 23,
                "end": 51
              },
              {
                "start": 53,
                "end": 65
              }
            ]
          },
          "maxwell_2": {
            "model": "maxwell_2",
            "softKeys": true,
            "functionKeys": {
              "start": 0,
              "end": 7
            },
            "expKeys": [
              {
                "start": 8,
                "end": 21
              },
              {
                "start": 23,
                "end": 51
              },
              {
                "start": 53,
                "end": 65
              }
            ]
          },
          "maxwell_3": {
            "model": "maxwell_3",
            "softKeys": true,
            "functionKeys": {
              "start": 0,
              "end": 7
            },
            "expKeys": [
              {
                "start": 8,
                "end": 21
              },
              {
                "start": 23,
                "end": 51
              },
              {
                "start": 53,
                "end": 65
              }
            ]
          }
        }
      }
    }

    this.generalUI = function () {
      return {
        "name": "General",
        "items": [
          {
            "variable": "language_gigaset",
            "description": "Web Language",
            "type": "list",
            "options": [
              {
                "text": "English",
                "value": "en-us"
              },
              {
                "text": "French",
                "value": "fr-fr"
              },
              {
                "text": "German",
                "value": "de-de"
              },
              {
                "text": "Spanish",
                "value": "es-es"
              },
              {
                "text": "Portuguese",
                "value": "pt-pt"
              },
              {
                "text": "Russian",
                "value": "ru-ru"
              },
              {
                "text": "Italian",
                "value": "it-it"
              },
              {
                "text": "Polish",
                "value": "pl-pl"
              },
              {
                "text": "Greek",
                "value": "el-gr"
              },
              {
                "text": "Turkish",
                "value": "tr-tr"
              },
              {
                "text": "Danish",
                "value": "da-dk"
              },
              {
                "text": "Swedish",
                "value": "sv-se"
              },
              {
                "text": "Czech",
                "value": "cs-cz"
              },
              {
                "text": "Slovenian",
                "value": "sl-sl"
              },
              {
                "text": "Romanian",
                "value": "ro-ro"
              },
              {
                "text": "Dutch",
                "value": "nl-nl"
              }
            ]
          },
          {
            "variable": "timezone_gigaset",
            "description": "Time Zone",
            "type": "list",
            "options": [
              {
                "text": "-11 Samoa",
                "value": "GMT-11.Pacific/Midway"
              },
              {
                "text": "-10 United States-Hawaii",
                "value": "GMT-10.Pacific/Honolulu"
              },
              {
                "text": "-9 United States-Alaska-Time",
                "value": "GMT-9.America/Anchorage"
              },
              {
                "text": "-8 Mexico(Tijuana)",
                "value": "GMT-8.America/Tijuana"
              },
              {
                "text": "-8 United States Pacific Time",
                "value": "GMT-8.America/Los_Angeles"
              },
              {
                "text": "-7 Mexico(Mazatlan)",
                "value": "GMT-7.America/Chihuahua"
              },
              {
                "text": "-7 United States Mountain Time",
                "value": "GMT-7.America/Denver"
              },
              {
                "text": "-7 United States-MST no DST",
                "value": "GMT-7.America/Phoenix"
              },
              {
                "text": "-6 Canada-Manitoba",
                "value": "GMT-6.America/Regina"
              },
              {
                "text": "-6 Chile(Easter Islands)",
                "value": "GMT-6.America/Costa_Rica"
              },
              {
                "text": "-6 Mexico(Mexico City)",
                "value": "GMT-6.America/Mexico_City"
              },
              {
                "text": "-6 United States-Central Time",
                "value": "GMT-6.America/Chicago"
              },
              {
                "text": "-5 Colombia(Bogota)",
                "value": "GMT-5.America/Bogota"
              },
              {
                "text": "-5 United States-Eastern Time",
                "value": "GMT-5.America/New_York"
              },
              {
                "text": "-4 Canada(Halifax)",
                "value": "GMT-4.America/Halifax"
              },
              {
                "text": "-4 Brazil(Manaus)",
                "value": "GMT-4.America/Manaus"
              },
              {
                "text": "-4 United Kingdom-Bermuda",
                "value": "GMT-4.America/Barbados"
              },
              {
                "text": "-3 Denmark-Greenland",
                "value": "GMT-3.America/Godthab"
              },
              {
                "text": "-3 Argentina(Buenos Aires)",
                "value": "GMT-3.America/Argentina/Buenos_Aires"
              },
              {
                "text": "-3 Uruguay(Montevideo)",
                "value": "GMT-3.America/Montevideo"
              },
              {
                "text": "-3 Chile(Santiago)",
                "value": "GMT-3.America/Santiago"
              },
              {
                "text": "-3 Brazil(DST)",
                "value": "GMT-3.America/Sao_Paulo"
              },
              {
                "text": "-2 Mid-Atlantic",
                "value": "GMT-2.Atlantic/South_Georgia"
              },
              {
                "text": "-1 Portugal(Azores)",
                "value": "GMT-1.Atlantic/Azores"
              },
              {
                "text": "-1 Cape Verde Islands",
                "value": "GMT-1.Atlantic/Cape_Verde"
              },
              {
                "text": "GMT Morocco(Casablanca)",
                "value": "GMT.Africa/Casablanca"
              },
              {
                "text": "GMT United Kingdom(London)",
                "value": "GMT.Europe/London"
              },
              {
                "text": "+1 Belgium(Brussels)",
                "value": "GMT+1.Europe/Brussels"
              },
              {
                "text": "+1 Germany(Berlin)",
                "value": "GMT+1.Europe/Amsterdam"
              },
              {
                "text": "+1 Serbia(Belgrade)",
                "value": "GMT+1.Europe/Belgrade"
              },
              {
                "text": "+1 Bosnia(Sarajevo)",
                "value": "GMT+1.Europe/Sarajevo"
              },
              {
                "text": "+1 Namibia(Windhoek)",
                "value": "GMT+1.Africa/Windhoek"
              },
              {
                "text": "+1 Congo(Brazzaville)",
                "value": "GMT+1.Africa/Brazzaville"
              },
              {
                "text": "+2 Greece(Athens)",
                "value": "GMT+2.Europe/Athens"
              },
              {
                "text": "+2 Egypt(Cairo)",
                "value": "GMT+2.Africa/Cairo"
              },
              {
                "text": "+2 Jordan(Amman)",
                "value": "GMT+2.Asia/Amman"
              },
              {
                "text": "+2 Lebanon(Beirut)",
                "value": "GMT+2.Asia/Beirut"
              },
              {
                "text": "+2 Finland(Helsinki)",
                "value": "GMT+2.Europe/Helsinki"
              },
              {
                "text": "+2 Israel(Jerusalem)",
                "value": "GMT+2.Asia/Jerusalem"
              },
              {
                "text": "+2 Zimbabwe(Harare)",
                "value": "GMT+2.Africa/Harare"
              },
              {
                "text": "+3 Kuwait",
                "value": "GMT+3.Asia/Kuwait"
              },
              {
                "text": "+3 Iraq(Bagdad)",
                "value": "GMT+3.Asia/Baghdad"
              },
              {
                "text": "+3 Russia(Moscow)",
                "value": "GMT+3.Europe/Moscow"
              },
              {
                "text": "+3 Belarus(Mink)",
                "value": "GMT+3.Europe/Minsk"
              },
              {
                "text": "+3 Kenya(Nairobi)",
                "value": "GMT+3.Africa/Nairob"
              },
              {
                "text": "+4 Armenia(Yerevan)",
                "value": "GMT+4.Asia/Yerevan"
              },
              {
                "text": "+4 Arzebaijan(Baku)",
                "value": "GMT+4.Asia/Baku"
              },
              {
                "text": "+4 Georgia(Tiblisi)",
                "value": "GMT+4.Asia/Tbilisi"
              },
              {
                "text": "+4 Dubai",
                "value": "GMT+4.Asia/Dubai"
              },
              {
                "text": "+5 Pakistan(Karachi)",
                "value": "GMT+5.Asia/Karachi"
              },
              {
                "text": "+5 Kazakistan(Oral)",
                "value": "GMT+5.Asia/Oral"
              },
              {
                "text": "+5 Russia(Chelyabinsk)",
                "value": "GMT+5.Asia/Yekaterinburg"
              },
              {
                "text": "+6 Kazakstan(Astana)",
                "value": "GMT+6.Asia/Almaty"
              },
              {
                "text": "+7 Russia(Krasnoyarsk)",
                "value": "GMT+7.Asia/Krasnoyarsk"
              },
              {
                "text": "+7 Thailand(Bangkok)",
                "value": "GMT+7.Asia/Bangkok"
              },
              {
                "text": "+8 China(Beijing)",
                "value": "GMT+8.Asia/Shanghai"
              },
              {
                "text": "+8 Hong Kong",
                "value": "GMT+8.Asia/Hong_Kong"
              },
              {
                "text": "+8 Taipei",
                "value": "GMT+8.Asia/Taipei"
              },
              {
                "text": "+8 Malaysia(Kuala Lumpur)",
                "value": "GMT+8.Asia/Kuala_Lumpur"
              },
              {
                "text": "+8 Russia(Irkutsk)",
                "value": "GMT+8.Asia/Irkutsk"
              },
              {
                "text": "+8 Australia(Perth)",
                "value": "GMT+8.Australia/Perth"
              },
              {
                "text": "+9 Korea(Seoul)",
                "value": "GMT+9.Asia/Seoul"
              },
              {
                "text": "+9 Japan(Tokyo)",
                "value": "GMT+9.Asia/Tokyo"
              },
              {
                "text": "+9 Russia(Yakutsk)",
                "value": "GMT+9.Asia/Yakutsk"
              },
              {
                "text": "+10 Russia(Magadan)",
                "value": "GMT+10.Asia/Magadan"
              },
              {
                "text": "+10 Guam",
                "value": "GMT+10.Pacific/Guam"
              },
              {
                "text": "+10 Australia(Sidney)",
                "value": "GMT+10.Australia/Sydney"
              },
              {
                "text": "+10 Australia(Brisbane)",
                "value": "GMT+10.Australia/Brisbane"
              },
              {
                "text": "+10 Australia(Hobart)",
                "value": "GMT+10.Australia/Hobart"
              },
              {
                "text": "+10 Russia(Vladivostok)",
                "value": "GMT+10.Asia/Vladivostok"
              },
              {
                "text": "+10:30 Australia(Lord Howe Islands)",
                "value": "Australia/Lord_Howe"
              },
              {
                "text": "+12 Fiji",
                "value": "GMT+12.Pacific/Fiji"
              },
              {
                "text": "+12 New Zeland(Wellington)",
                "value": "GMT+12.Pacific/Auckland"
              },
              {
                "text": "+12 Marshall(Majuro)",
                "value": "GMT+12.Pacific/Majuro"
              },
              {
                "text": "+13 Tonga(Nukualofa)",
                "value": "GMT+13.Pacific/Tongatapu"
              }
            ]
          },
          {
            "category": "tones",
            "variable": "tones_gigaset",
            "description": "Country Tones",
            "type": "list",
            "options": [
              {
                "text": "International",
                "value": "INT"
              },
              {
                "text": "Austria",
                "value": "AUT"
              },
              {
                "text": "Canada",
                "value": "CAN"
              },
              {
                "text": "Czech Republic",
                "value": "CZE"
              },
              {
                "text": "Denmark",
                "value": "DNK"
              },
              {
                "text": "Egypt",
                "value": "EGY"
              },
              {
                "text": "Finland",
                "value": "FIN"
              },
              {
                "text": "France",
                "value": "FRA"
              },
              {
                "text": "Germany",
                "value": "DEU"
              },
              {
                "text": "Greece",
                "value": "GRC"
              },
              {
                "text": "Italy",
                "value": "ITA"
              },
              {
                "text": "Netherlands",
                "value": "NLD"
              },
              {
                "text": "Poland",
                "value": "POL"
              },
              {
                "text": "Portugal",
                "value": "PRT"
              },
              {
                "text": "Romania",
                "value": "ROU"
              },
              {
                "text": "South Africa",
                "value": "ZAF"
              },
              {
                "text": "Russia",
                "value": "RUS"
              },
              {
                "text": "Saudi Arabia",
                "value": "SAU"
              },
              {
                "text": "Slovakia",
                "value": "SVK"
              },
              {
                "text": "Spain",
                "value": "ESP"
              },
              {
                "text": "Sweden",
                "value": "SWE"
              },
              {
                "text": "Switzeland",
                "value": "CHE"
              },
              {
                "text": "United Arab Emirates",
                "value": "ARE"
              },
              {
                "text": "United Kingdom",
                "value": "GBR"
              },
              {
                "text": "United States of America",
                "value": "USA"
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
          },
          {
            "category": "preference",
            "variable": "default_ringtone",
            "description": "Ring Tones",
            "type": "list",
            "options": [
              {
                "text": "01",
                "value": "01.wav"
              },
              {
                "text": "02_Memo",
                "value": "02_Memo.wav"
              },
              {
                "text": "03_Vibe",
                "value": "03_Vibe.wav"
              },
              {
                "text": "04_Listen",
                "value": "04_Listen.wav"
              },
              {
                "text": "05_Down",
                "value": "05_Down.wav"
              },
              {
                "text": "06_Gigaset",
                "value": "06_Gigaset.wav"
              },
              {
                "text": "07_Egg",
                "value": "07_Egg.wav"
              },
              {
                "text": "08_Peak",
                "value": "08_Peak.wav"
              },
              {
                "text": "09_Step",
                "value": "09_Step.wav"
              },
              {
                "text": "10_P Cut",
                "value": "10_P Cut.wav"
              },
              {
                "text": "11_Set",
                "value": "11_Set.wav"
              },
              {
                "text": "12_Sim",
                "value": "12_Sim.wav"
              },
              {
                "text": "13_Tone one",
                "value": "13_Tone one.wav"
              },
              {
                "text": "14_Dunken",
                "value": "14_Dunken.wav"
              },
              {
                "text": "15_Piano",
                "value": "15_Piano.wav"
              },
              {
                "text": "16_Officebuffer",
                "value": "16_Officebuffer.wav"
              },
              {
                "text": "17_Twelve",
                "value": "17_Twelve.wav"
              },
              {
                "text": "18_Flightzone",
                "value": "18_Flightzone.wav"
              },
              {
                "text": "19_Waste",
                "value": "19_Waste.wav"
              },
              {
                "text": "20_Smototh G",
                "value": "20_Smototh_G.wav"
              },
              {
                "text": "21_Green Tea",
                "value": "21_Green Tea.wav"
              },
              {
                "text": "22_Evolve 1",
                "value": "22_Evolve 1.ogg"
              },
              {
                "text": "23_Evolve 2",
                "value": "23_Evolve 2.ogg"
              },
              {
                "text": "Bellcore 1",
                "value": "bellcore_dr1.ogg"
              },
              {
                "text": "Bellcore 2",
                "value": "bellcore_dr2.ogg"
              },
              {
                "text": "Bellcore 3",
                "value": "bellcore_dr3.ogg"
              },
              {
                "text": "Bellcore 4",
                "value": "bellcore_dr4.ogg"
              },
              {
                "text": "Bellcore 5",
                "value": "bellcore_dr5.ogg"
              }
            ]
          },
          {
            "category": "preference",
            "variable": "color",
            "description": "Color Scheme",
            "type": "list",
            "options": [
              {
                "text": "White on Black",
                "value": "0"
              },
              {
                "text": "White on Blue",
                "value": "1"
              },
              {
                "text": "White on Red",
                "value": "2"
              },
              {
                "text": "White on Green",
                "value": "3"
              }
            ]
          },
          {
            "category": "preference",
            "variable": "call_waiting",
            "description": "Call Waiting",
            "type": "list",
            "options": [
              {
                "text": "Disabled",
                "value": "0"
              },
              {
                "text": "Enabled",
                "value": "1"
              }
            ]
          },
          {
            "category": "preference",
            "variable": "call_waiting_sign",
            "description": "Call Waiting Tone",
            "type": "list",
            "options": [
              {
                "text": "Off",
                "value": "Off"
              },
              {
                "text": "Single Beep",
                "value": "SingleBeep"
              },
              {
                "text": "Beep Every 4s",
                "value": "BeepEvery4"
              },
              {
                "text": "Beep Every 10s",
                "value": "BeepEvery10"
              },
              {
                "text": "Beep Every 20s",
                "value": "BeepEvery20"
              }
            ]
          },

          {
            "category": "preference",
            "variable": "transfer_mode",
            "description": "Transfer Mode",
            "type": "list",
            "options": [
              {
                "text": "Early Attended",
                "value": "0"
              },
              {
                "text": "Semi-attended",
                "value": "1"
              }
            ]
          },
          {
            "category": "date&time",
            "variable": "date_format",
            "description": "Date Display Format",
            "type": "list",
            "options": [
              {
                "text": "Month - Day - Year",
                "value": "Mmm.dd.yyyy"
              },
              {
                "text": "Day - Month - Year",
                "value": "dd.mm.yyyy"
              }
            ]
          },
          {
            "category": "date&time",
            "variable": "time_format",
            "description": "Time Display Format",
            "type": "list",
            "options": [
              {
                "text": "24h",
                "value": "24h"
              },
              {
                "text": "12h",
                "value": "12h"
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
            "variable": "ldap_name_display",
            "description": "LDAP Display Name",
            "type": "input"
          },
          {
            "variable": "ldap_number_filter",
            "description": "LDAP Number Filter",
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
            "variable": "vlan_tagging",
            "description": "Enable vlan on LAN or PC port",
            "type": "list",
            "options": [
              {
                "text": "Disabled",
                "value": "0"
              },
              {
                "text": "LAN",
                "value": "1"
              },
              {
                "text": "LAN + PC",
                "value": "2"
              }
            ]
          },
          {
            "variable": "vlan_identifier",
            "description": "WAN port VID",
            "type": "input"
          },
          {
            "variable": "vlan_priority",
            "description": "WAN VLAN port priority",
            "type": "list",
            "options": [
              {
                "text": "0",
                "value": "0"
              },
              {
                "text": "1",
                "value": "1"
              },
              {
                "text": "2",
                "value": "2"
              },
              {
                "text": "3",
                "value": "3"
              },
              {
                "text": "4",
                "value": "4"
              },
              {
                "text": "5",
                "value": "5"
              },
              {
                "text": "6",
                "value": "7"
              },
              {
                "text": "7",
                "value": "7"
              }
            ]
          },
          {
            "variable": "vlan_pc_identifier",
            "description": "PC port VID",
            "type": "input"
          },
          {
            "variable": "vlan_pc_priority",
            "description": "PC vlan port priority",
            "type": "list",
            "options": [
              {
                "text": "0",
                "value": "0"
              },
              {
                "text": "1",
                "value": "1"
              },
              {
                "text": "2",
                "value": "2"
              },
              {
                "text": "3",
                "value": "3"
              },
              {
                "text": "4",
                "value": "4"
              },
              {
                "text": "5",
                "value": "5"
              },
              {
                "text": "6",
                "value": "7"
              },
              {
                "text": "7",
                "value": "7"
              }
            ]
          },
          {
            "variable": "qos_rtp",
            "description": "RTP ToS/DiffServ",
            "type": "input"
          },
          {
            "variable": "qos_sip",
            "description": "SIP ToS/DiffServ",
            "type": "input"
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
            "loop_start": 0,
            "loop_end": 1,
            "data": {
              "items": [
                {
                  "variable": "softkey_type",
                  "description": "Type",
                  "type": "list",
                  "options": [
                    {
                      "text": "No function",
                      "value": "-1"
                    },
                    {
                      "text": "Quick Dial",
                      "value": "3"
                    },
                    {
                      "text": "SIP URL",
                      "value": "5"
                    },
                    {
                      "text": "Action URL",
                      "value": "8"
                    },
                    {
                      "text": "SIP INFO",
                      "value": "9"
                    },
                    {
                      "text": "FAC",
                      "value": "10"
                    },
                    {
                      "text": "Call Waiting",
                      "value": "11"
                    },
                    {
                      "text": "Local Directory",
                      "value": "12"
                    },
                    {
                      "text": "Ldap Directory",
                      "value": "13"
                    },
                    {
                      "text": "Xml Public",
                      "value": "14"
                    },
                    {
                      "text": "Xml Yellow",
                      "value": "15"
                    },
                    {
                      "text": "Xml Private",
                      "value": "16"
                    },
                    {
                      "text": "Redial",
                      "value": "17"
                    },
                    {
                      "text": "Select Line",
                      "value": "18"
                    }

                  ]
                },
                {
                  "variable": "softkey_action",
                  "description": "Action",
                  "type": "input"
                },
                {
                  "variable": "softkey_connection",
                  "description": "Connection",
                  "type": "list",
                  "options": [
                    {
                      "text": "Account 1",
                      "value": "0"
                    },
                    {
                      "text": "Account 2",
                      "value": "1"
                    },
                    {
                      "text": "Account 3",
                      "value": "2"
                    },
                    {
                      "text": "Account 4",
                      "value": "3"
                    }
                  ]
                },
                {
                  "variable": "softkey_disablecode",
                  "description": "Disablecode",
                  "type": "input"
                },
                {
                  "variable": "softkey_disablename",
                  "description": "Disablename",
                  "type": "input"
                },
                {
                  "variable": "softkey_enablecode",
                  "description": "Enablecode",
                  "type": "input"
                },
                {
                  "variable": "softkey_enablename",
                  "description": "Enablename",
                  "type": "input"
                },
                {
                  "variable": "softkey_phonenumber",
                  "description": "Phonenumber",
                  "type": "input"
                },
                {
                  "variable": "softkey_url",
                  "description": "URL",
                  "type": "input"
                }
              ]
            }
          }]
      }
    }

    this.functionKeysUI = function (modelMap) {
      if (!modelMap.functionKeys) {
        return null;
      }

      return {
        "name": "FunctionKeys",
        "items": [
          {
            "description": "Function Key",
            "type": "loop",
            "loop_start": modelMap.functionKeys.start,
            "loop_end": modelMap.functionKeys.end,
            "data": {
              "items": [
                {
                  "variable": "functionkey_type",
                  "description": "Type",
                  "type": "list",
                  "options": [
                    {
                      "text": "No function",
                      "value": "-1"
                    },
                    {
                      "text": "Line",
                      "value": "0"
                    },
                    {
                      "text": "Shared Line",
                      "value": "1"
                    },
                    {
                      "text": "Park + Retrieve",
                      "value": "2"
                    },
                    {
                      "text": "Quick Dial",
                      "value": "3"
                    },
                    {
                      "text": "BLF",
                      "value": "4"
                    },
                    {
                      "text": "SIP URL",
                      "value": "5"
                    },
                    {
                      "text": "Call Divert",
                      "value": "6"
                    },
                    {
                      "text": "DTMF",
                      "value": "7"
                    },
                    {
                      "text": "Action URL",
                      "value": "8"
                    },
                    {
                      "text": "SIP INFO",
                      "value": "9"
                    },
                    {
                      "text": "FAC",
                      "value": "10"
                    }
                  ]
                },
                {
                  "variable": "functionkey_action",
                  "description": "Action",
                  "type": "input"
                },
                {
                  "variable": "functionkey_connection",
                  "description": "Connection",
                  "type": "list",
                  "options": [
                    {
                      "text": "Account 1",
                      "value": "0"
                    },
                    {
                      "text": "Account 2",
                      "value": "1"
                    },
                    {
                      "text": "Account 3",
                      "value": "2"
                    },
                    {
                      "text": "Account 4",
                      "value": "3"
                    }
                  ]
                },
                {
                  "variable": "functionkey_disablecode",
                  "description": "Disablecode",
                  "type": "input"
                },
                {
                  "variable": "functionkey_enablecode",
                  "description": "Enablecode",
                  "type": "input"
                },
                {
                  "variable": "functionkey_displayname",
                  "description": "Displayname",
                  "type": "input"
                },
                {
                  "variable": "functionkey_phonenumber",
                  "description": "Phonenumber",
                  "type": "input"
                },
                {
                  "variable": "functionkey_callpickupcode",
                  "description": "CallPickupCode",
                  "type": "input"
                },
                {
                  "variable": "functionkey_url",
                  "description": "URL",
                  "type": "input"
                },
                {
                  "variable": "functionkey_calldiverttype",
                  "description": "CallDivertType",
                  "type": "input"
                },
                {
                  "variable": "functionkey_dtmfcode",
                  "description": "DTMFCode",
                  "type": "input"
                },
                {
                  "variable": "functionkey_color",
                  "description": "Color",
                  "type": "list",
                  "options": [
                    {
                      "text": "Red",
                      "value": "0"
                    },
                    {
                      "text": "Yellow",
                      "value": "1"
                    },
                    {
                      "text": "Green",
                      "value": "2"
                    },
                    {
                      "text": "Standard",
                      "value": "3"
                    }
                  ]
                }
              ]
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
                      "text": "No function",
                      "value": "-1"
                    },
                    {
                      "text": "Quick Dial",
                      "value": "3"
                    },
                    {
                      "text": "BLF",
                      "value": "4"
                    },
                    {
                      "text": "SIP URL",
                      "value": "5"
                    },
                    {
                      "text": "DTMF",
                      "value": "7"
                    },
                    {
                      "text": "Action URL",
                      "value": "8"
                    },
                    {
                      "text": "FAC",
                      "value": "10"
                    }
                  ]
                },
                {
                  "variable": "exp_key_connection",
                  "description": "Connection",
                  "type": "list",
                  "options": [
                    {
                      "text": "Account 1",
                      "value": "0"
                    },
                    {
                      "text": "Account 2",
                      "value": "1"
                    },
                    {
                      "text": "Account 3",
                      "value": "2"
                    },
                    {
                      "text": "Account 4",
                      "value": "3"
                    }
                  ]
                },
                {
                  "variable": "exp_key_disablecode",
                  "description": "Disablecode",
                  "type": "input"
                },
                {
                  "variable": "exp_key_enablecode",
                  "description": "Enablecode",
                  "type": "input"
                },
                {
                  "variable": "exp_key_displayname",
                  "description": "Displayname",
                  "type": "input"
                },
                {
                  "variable": "exp_key_phonenumber",
                  "description": "Phonenumber",
                  "type": "input"
                },
                {
                  "variable": "exp_key_callpickupcode",
                  "description": "CallPickupCode",
                  "type": "input"
                },
                {
                  "variable": "exp_key_url",
                  "description": "URL",
                  "type": "input"
                },
                {
                  "variable": "exp_key_dtmfcode",
                  "description": "DTMFCode",
                  "type": "input"
                },
                {
                  "variable": "exp_key_color",
                  "description": "Color",
                  "type": "list",
                  "options": [
                    {
                      "text": "Red",
                      "value": "0"
                    },
                    {
                      "text": "Green",
                      "value": "1"
                    },
                    {
                      "text": "Yellow",
                      "value": "2"
                    },
                    {
                      "text": "Standard",
                      "value": "3"
                    }
                  ]
                }
              ]
            }
          }
        ]
      }
    }

  })
