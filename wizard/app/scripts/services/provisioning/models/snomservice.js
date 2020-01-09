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

    var functionExpKeysItems = [
      {
        "variable": "key_label_",
        "description": "Label",
        "type": "input"
      },
      {
        "variable": "key_context_",
        "description": "Context",
        "type": "list",
        "options": [{
          "text": "Active",
          "value": "active"
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
          "value": "6"
        },
        {
          "text": "7",
          "value": "7"
        },
        {
          "text": "8",
          "value": "8"
        },
        {
          "text": "9",
          "value": "9"
        },
        {
          "text": "10",
          "value": "10"
        },
        {
          "text": "11",
          "value": "11"
        },
        {
          "text": "12",
          "value": "12"
        }]
      },
      {
        "variable": "key_type_",
        "description": "Type",
        "type": "list",
        "options": [
          {
            "text": "Line",
            "value": "line"
          },
          {
            "text": "Extension\/Destination",
            "value": "dest"
          },
          {
            "text": "Intercom",
            "value": "icom"
          },
          {
            "text": "Park Orbit",
            "value": "orbit"
          },
          {
            "text": "Voice Recorder",
            "value": "recorder"
          },
          {
            "text": "DTMF",
            "value": "dtmf"
          },
          {
            "text": "Shared Line",
            "value": "mult"
          },
          {
            "text": "Push2Talk",
            "value": "p2t"
          },
          {
            "text": "Action URL",
            "value": "URL"
          },
          {
            "text": "Key Event",
            "value": "keyevent"
          },
          {
            "text": "Speed Dial",
            "value": "speed"
          },
          {
            "text": "Button",
            "value": "button"
          },
          {
            "text": "BLF",
            "value": "blf"
          },
          {
            "text": "IVR",
            "value": "ivr"
          },
          {
            "text": "Presence",
            "value": "presence"
          },
          {
            "text": "Transfer To",
            "value": "transfer"
          },
          {
            "text": "Forward To",
            "value": "redirect"
          },
          {
            "text": "Auto Answer",
            "value": "autoanswer"
          },
          {
            "text": "XML Definition\/Customizable via XML",
            "value": "XML"
          },
          {
            "text": "None",
            "value": "none"
          }
        ]
      },
      {
        "variable": "key_value_",
        "description": "Value",
        "type": "input"
      }
    ];

    this.map = function () {
      return {
        "3xx820m3": {
          "300": {
            "model": "300",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 6
            }
          },
          "320": {
            "model": "320",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 6
            }
          },
          "360": {
            "model": "360",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 12
            }
          },
          "370": {
            "model": "370",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 12
            }
          },
          "D305": {
            "model": "D305",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 5
            }
          },
          "D315": {
            "model": "D315",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 4
            },
            "expKeys": [
              {
                "start": 131,
                "end": 148
              },
              {
                "start": 149,
                "end": 166
              },
              {
                "start": 167,
                "end": 184
              }
            ]
          },
          "D345": {
            "model": "D345",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 47
            },
            "expKeys": [
              {
                "start": 174,
                "end": 191
              },
              {
                "start": 192,
                "end": 209
              },
              {
                "start": 210,
                "end": 227
              }
            ]
          },
          "D375": {
            "model": "D375",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 11
            },
            "expKeys": [
              {
                "start": 138,
                "end": 155
              },
              {
                "start": 156,
                "end": 173
              },
              {
                "start": 174,
                "end": 191
              }
            ]
          },
          "D385": {
            "model": "D385",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 11
            },
            "expKeys": [
              {
                "start": 138,
                "end": 155
              },
              {
                "start": 156,
                "end": 173
              },
              {
                "start": 174,
                "end": 191
              }
            ]
          }
        },
        "7xx": {
          "710": {
            "model": "710",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 4
            }
          },
          "715": {
            "model": "715",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 4
            },
            "expKeys": [
              {
                "start": 5,
                "end": 22
              },
              {
                "start": 23,
                "end": 40
              },
              {
                "start": 41,
                "end": 58
              }
            ]
          },
          "720": {
            "model": "720",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 17
            }
          },
          "725": {
            "model": "725",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 17
            },
            "expKeys": [
              {
                "start": 18,
                "end": 35
              },
              {
                "start": 36,
                "end": 53
              },
              {
                "start": 54,
                "end": 71
              }
            ]
          },
          "760": {
            "model": "760",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 15
            }
          },
          "D712": {
            "model": "D712",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 4
            }
          },
          "D717": {
            "model": "D717",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 2
            },
            "expKeys": [
              {
                "start": 3,
                "end": 20
              },
              {
                "start": 21,
                "end": 38
              },
              {
                "start": 39,
                "end": 56
              }
            ]
          },
          "D735": {
            "model": "D735",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 31
            },
            "expKeys": [
              {
                "start": 32,
                "end": 49
              },
              {
                "start": 50,
                "end": 67
              },
              {
                "start": 68,
                "end": 85
              }
            ]
          },
          "D745": {
            "model": "D745",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 31
            },
            "expKeys": [
              {
                "start": 32,
                "end": 49
              },
              {
                "start": 50,
                "end": 67
              },
              {
                "start": 68,
                "end": 85
              }
            ]
          },
          "D765": {
            "model": "D765",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 15
            },
            "expKeys": [
              {
                "start": 16,
                "end": 33
              },
              {
                "start": 34,
                "end": 51
              },
              {
                "start": 52,
                "end": 69
              }
            ]
          },
          "D785": {
            "model": "D785",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 23
            },
            "expKeys": [
              {
                "start": 24,
                "end": 41
              },
              {
                "start": 42,
                "end": 59
              },
              {
                "start": 60,
                "end": 77
              }
            ]
          }
        },
        "8xx": {
          "870": {
            "model": "870",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 14
            }
          },
          "820": {
            "model": "820",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 11
            }
          },
          "821": {
            "model": "821",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 15
            }
          }
        },
        "Mxxx": {
          "M200": {
            "model": "M200",
          },
          "M300": {
            "model": "M300",
          },
          "M700": {
            "model": "M700",
          }
        },
        "1xx": {
          "D120": {
            "model": "D120",
            "keys": true,
            "functionKeys": {
              "start": 0,
              "end": 1
            }
          }
        }
      }
    }

    this.generalUI = function () {
      return {
        "name": "General",
        "items": [{
          "variable": "language_snom",
          "description": "Language",
          "type": "list",
          "options": [{
            "text": "Bosnian",
            "value": "Bosanski"
          },
          {
            "text": "Danish",
            "value": "Dansk"
          },
          {
            "text": "Dutch",
            "value": "Nederlands"
          },
          {
            "text": "English",
            "value": "English"
          },
          {
            "text": "Estonian",
            "value": "Eesti"
          },
          {
            "text": "Finnish",
            "value": "Suomi"
          },
          {
            "text": "French",
            "value": "Français"
          },
          {
            "text": "German",
            "value": "Deutsch"
          },
          {
            "text": "Hungarian",
            "value": "Magyar"
          },
          {
            "text": "Italian",
            "value": "Italiano"
          },
          {
            "text": "Japanese",
            "value": "Japanese"
          },
          {
            "text": "Norwegian",
            "value": "Norsk"
          },
          {
            "text": "Polish",
            "value": "Polski"
          },
          {
            "text": "Portuguese",
            "value": "Português"
          },
          {
            "text": "Spanish",
            "value": "Español"
          },
          {
            "text": "Swedish",
            "value": "Svenska"
          },
          {
            "text": "Turkish",
            "value": "Türkçe"
          }]
        },
        {
          "variable": "timezone_snom",
          "description": "Time Zone",
          "type": "list",
          "options": [{
            "text": "-10 United States - Hawaii-Aleutian",
            "value": "USA-10"
          },
          {
            "text": "-10 United States - Alaska-Aleutian",
            "value": "USA-10"
          },
          {
            "text": "-9 United States - Alaska",
            "value": "USA-9"
          },
          {
            "text": "-8 Canada (Vancouver, Whitehorse)",
            "value": "CAN-8"
          },
          {
            "text": "-8 Mexico (Tijuana, Mexicali)",
            "value": "MEX-8"
          },
          {
            "text": "-8 United States - Pacific time",
            "value": "USA-8"
          },
          {
            "text": "-7 Canada (Edmonton, Calgary)",
            "value": "CAN-7"
          },
          {
            "text": "-7 Mexico (Mazatlan, Chihuahua)",
            "value": "MEX-7"
          },
          {
            "text": "-7 United States - MST no DST",
            "value": "USA2-7"
          },
          {
            "text": "-7 United States Mountain Time",
            "value": "USA-7"
          },
          {
            "text": "-6 Canada - Manitoba (Winnipeg)",
            "value": "CAN-6"
          },
          {
            "text": "-6 Chile (Easter Islands)",
            "value": "CHL-6"
          },
          {
            "text": "-6 Mexico (Mexico City, Acapulco)",
            "value": "MEX-6"
          },
          {
            "text": "-6 United States - Central Time",
            "value": "USA-6"
          },
          {
            "text": "-5 Bahamas (Nassau)",
            "value": "BHS-5"
          },
          {
            "text": "-5 Canada (Montreal, Ottawa, Quebec)",
            "value": "CAN-5"
          },
          {
            "text": "-5 Colombia (Bogota)",
            "value": "COL-5"
          },
          {
            "text": "-5 Cuba (Havana)",
            "value": "CUB-5"
          },
          {
            "text": "-5 United States - Eastern Time",
            "value": "USA-5"
          },
          {
            "text": "-4.5 Venezuela (Caracas)",
            "value": "VEN-4.5"
          },
          {
            "text": "-4 Canada (Halifax, Saint John)",
            "value": "CAN-4"
          },
          {
            "text": "-4 Chile (Santiago)",
            "value": "CHL-4"
          },
          {
            "text": "-4 Paraguay (Asuncion)",
            "value": "PRY-4"
          },
          {
            "text": "-4 United Kingdom - Bermuda",
            "value": "BMU-4"
          },
          {
            "text": "-4 United Kingdom - Falkland Islands",
            "value": "FLK-4"
          },
          {
            "text": "-4 Trinidad Tobago",
            "value": "TTB-4"
          },
          {
            "text": "-3.5 Canada - New Foundland (St. Johns)",
            "value": "CAN-3.5"
          },
          {
            "text": "-3 Denmark - Greenland(Nuuk)",
            "value": "GRL-3"
          },
          {
            "text": "-3 Argentina (Buenos Aires)",
            "value": "ARG-3"
          },
          {
            "text": "-3 Brazil (no DST)",
            "value": "BRA2-3"
          },
          {
            "text": "-3 Brazil (DST)",
            "value": "BRA1-3"
          },
          {
            "text": "-2 Brazil (no DST)",
            "value": "BRA-2"
          },
          {
            "text": "-1 Portugal (Azores)",
            "value": "PRT-1"
          },
          {
            "text": "0 Denmark - Faroe Islands",
            "value": "FRO-0"
          },
          {
            "text": "0 Ireland (Dublin)",
            "value": "IRL-0"
          },
          {
            "text": "0 Portugal (Lisboa)",
            "value": "PRT-0"
          },
          {
            "text": "0 Spain - Canary Island",
            "value": "ESP-0"
          },
          {
            "text": "0 United Kingdom (London)",
            "value": "GBR-0"
          },
          {
            "text": " 1 Albania (Tirane)",
            "value": "ALB+1"
          },
          {
            "text": " 1 Austria (Vienna)",
            "value": "AUT+1"
          },
          {
            "text": " 1 Belgium (Brussels)",
            "value": "BEL+1"
          },
          {
            "text": " 1 Caicos",
            "value": "CAI+1"
          },
          {
            "text": " 1 Chatam",
            "value": "CHA+1"
          },
          {
            "text": " 1 Croatia (Zagreb)",
            "value": "HRV+1"
          },
          {
            "text": " 1 Czech Repubblic (Prague)",
            "value": "CZE+1"
          },
          {
            "text": " 1 Denmark (Kopenhaven)",
            "value": "DNK+1"
          },
          {
            "text": " 1 France (Paris)",
            "value": "FRA+1"
          },
          {
            "text": " 1 Germany (Berlin)",
            "value": "GER+1"
          },
          {
            "text": " 1 Hungary (Budapest)",
            "value": "HUN+1"
          },
          {
            "text": " 1 Italy (Rome)",
            "value": "ITA+1"
          },
          {
            "text": " 1 Luxembourg (Luxembourg)",
            "value": "LUX+1"
          },
          {
            "text": " 1 Makedonia (Skopje)",
            "value": "MAK+1"
          },
          {
            "text": " 1 Netherlands (Amsterdam)",
            "value": "NLD+1"
          },
          {
            "text": " 1 Namibia (Windhoek)",
            "value": "NAM+1"
          },
          {
            "text": " 1 Norway (Oslo)",
            "value": "NOR+1"
          },
          {
            "text": " 1 Poland (Warsaw)",
            "value": "POL+1"
          },
          {
            "text": " 1 Slovak Rep. (Bratislava)",
            "value": "SVK+1"
          },
          {
            "text": " 1 Spain (Madrid, Palma)",
            "value": "ESP+1"
          },
          {
            "text": " 1 Sweden (Stockholm)",
            "value": "SWE+1"
          },
          {
            "text": " 1 Switzerland (Bern)",
            "value": "CHE+1"
          },
          {
            "text": " 1 Great Britain (Gibraltar)",
            "value": "GIB+1"
          },
          {
            "text": " 1 Serbia (Beograd)",
            "value": "YUG+1"
          },
          {
            "text": " 1 West Africa Time",
            "value": "WAT+1"
          },
          {
            "text": " 2 Belarus (Minsk)",
            "value": "BLR+2"
          },
          {
            "text": " 2 Bulgaria (Sofia)",
            "value": "BGR+2"
          },
          {
            "text": " 2 Cyprus (Nicosia)",
            "value": "CYP+2"
          },
          {
            "text": " 2 Central Africa Time",
            "value": "CAT+2"
          },
          {
            "text": " 2 Egypt (Cairo)",
            "value": "EGY+2"
          },
          {
            "text": " 2 Estonia (Tallinn)",
            "value": "EST+2"
          },
          {
            "text": " 2 Finland (Helsinki)",
            "value": "FIN+2"
          },
          {
            "text": " 2 Gaza Strip (Gaza)",
            "value": "GAZ+2"
          },
          {
            "text": " 2 Greece (Athens)",
            "value": "GRC+2"
          },
          {
            "text": " 2 Israel (Tel Aviv)",
            "value": "ISR+2"
          },
          {
            "text": " 2 Jordan (Amman)",
            "value": "JOR+2"
          },
          {
            "text": " 2 Lithuania (Riga)",
            "value": "LVA+2"
          },
          {
            "text": " 2 Lithuania (Vilnius)",
            "value": "LTU+2"
          },
          {
            "text": " 2 Lebanon (Beirut)",
            "value": "LBN+2"
          },
          {
            "text": " 2 Moldova (Kishinev)",
            "value": "MDA+2"
          },
          {
            "text": " 2 Russia (Kaliningrad)",
            "value": "RUS+2"
          },
          {
            "text": " 2 Romania (Bucharest)",
            "value": "ROU+2"
          },
          {
            "text": " 2 Syria (Damascus)",
            "value": "SYR+2"
          },
          {
            "text": " 2 Turkey (Ankara)",
            "value": "TUR+2"
          },
          {
            "text": " 2 Ukraine (Kiev, Odessa)",
            "value": "UKR+2"
          },
          {
            "text": " 3 East Africa Time",
            "value": "EAT+3"
          },
          {
            "text": " 3 Iraq (Baghdad)",
            "value": "IRQ+3"
          },
          {
            "text": " 3 Russia (Moscow)",
            "value": "RUS+3"
          },
          {
            "text": " 3.5 Iran (Teheran)",
            "value": "IRN+3.5"
          },
          {
            "text": " 4 Armenia (Yerevan)",
            "value": "ARM+4"
          },
          {
            "text": " 4 Azerbaijan (Baku)",
            "value": "AZE+4"
          },
          {
            "text": " 4 Georgia (Tbilisi)",
            "value": "GEO+4"
          },
          {
            "text": " 4 Kazakistan (Aqtau)",
            "value": "KAZ+4"
          },
          {
            "text": " 4 Russia (Samara)",
            "value": "RUS+4"
          },
          {
            "text": " 4 United Arab Emirates (Dubai)",
            "value": "UAE+4"
          },
          {
            "text": " 5 Kazakistan (Aqtobe)",
            "value": "KAZ+5"
          },
          {
            "text": " 5 Kirgyzistan (Bishkek)",
            "value": "KGZ+5"
          },
          {
            "text": " 5 Pakistan (Islamabad)",
            "value": "PAK+5"
          },
          {
            "text": " 5 Russia (Chelyabinsk)",
            "value": "RUS+5"
          },
          {
            "text": " 5.5 India (Calcutta)",
            "value": "IND+5.5"
          },
          {
            "text": " 6 Kazakistan (Astana, Almaty)",
            "value": "KAZ+6"
          },
          {
            "text": " 6 Russia (Novosibirsk, Omsk)",
            "value": "RUS+6"
          },
          {
            "text": " 7 Russia (Krasnoyarsk)",
            "value": "RUS+7"
          },
          {
            "text": " 7 Thailand (Bangkok)",
            "value": "THA+7"
          },
          {
            "text": " 8 China (Beijing)",
            "value": "CHN+8"
          },
          {
            "text": " 8 Singapore (Singapore)",
            "value": "SGP+8"
          },
          {
            "text": " 8 Australia (Perth)",
            "value": "AUS+8"
          },
          {
            "text": " 9 Korea (Seoul)",
            "value": "KOR+9"
          },
          {
            "text": " 9 Japan (Tokyo)",
            "value": "JPN+9"
          },
          {
            "text": " 9.5 Australia (Adelaide)",
            "value": "AUS+9.5"
          },
          {
            "text": " 9.5 Australia (Darwin)",
            "value": "AUS2+9.5"
          },
          {
            "text": " 10 Australia (Sydney, Melbourne, Canberra)",
            "value": "AUS+10"
          },
          {
            "text": " 10 Australia (Brisbane)",
            "value": "AUS2+10"
          },
          {
            "text": " 10 Australia (Hobart)",
            "value": "AUS3+10"
          },
          {
            "text": " 10 Russia (Vladivostok)",
            "value": "RUS+10"
          },
          {
            "text": " 10.5 Australia (lord Howe Islands)",
            "value": "AUS+10.5"
          },
          {
            "text": " 11 New Caledonia (Noumea)",
            "value": "NCL+11"
          },
          {
            "text": " 12 New Zealand (Wellington, Auckland)",
            "value": "NZL+12"
          },
          {
            "text": " 12 Russia (Anadyr, Kamchatka)",
            "value": "RUS+12"
          },
          {
            "text": " 12.75 New Zeland (Chatham Islands)",
            "value": "NZL+12.75"
          },
          {
            "text": " 13 Tonga (Nukualofa)",
            "value": "TON+13"
          }]
        },
        {
          "variable": "time_24_format",
          "description": "Time Format",
          "type": "list",
          "options": [{
            "text": "AM\/PM",
            "value": "off"
          },
          {
            "text": "24 hour",
            "value": "on"
          }
          ]
        },
        {
          "variable": "date_format",
          "description": "Date Format",
          "type": "list",
          "options": [{
            "text": "month/day",
            "value": "on"
          },
          {
            "text": "day.month",
            "value": "off"
          }
          ]
        },
        {
          "variable": "tones_scheme",
          "description": "Tone Zone",
          "type": "list",
          "options": [{
            "text": "Australia",
            "value": "AUS"
          },
          {
            "text": "Austria",
            "value": "AUT"
          },
          {
            "text": "China",
            "value": "CHN"
          },
          {
            "text": "Denmark",
            "value": "DNK"
          },
          {
            "text": "France",
            "value": "FRA"
          },
          {
            "text": "Germany",
            "value": "GER"
          },
          {
            "text": "Great Britain",
            "value": "GBR"
          },
          {
            "text": "India",
            "value": "IND"
          },
          {
            "text": "Italy",
            "value": "ITA"
          },
          {
            "text": "Japan",
            "value": "JPN"
          },
          {
            "text": "Mexico",
            "value": "MEX"
          },
          {
            "text": "Netherlands",
            "value": "NLD"
          },
          {
            "text": "Norway",
            "value": "NOR"
          },
          {
            "text": "New Zealand",
            "value": "NZL"
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
            "text": "Switzerland",
            "value": "SWI"
          },
          {
            "text": "United States",
            "value": "USA"
          }
          ]
        },
        {
          "variable": "http_pass",
          "description": "Phone Web Interface Password",
          "type": "input"
        },
        {
          "variable": "admin_mode",
          "description": "Admin Mode Enable",
          "type": "list",
          "options": [{
            "text": "On",
            "value": "on"
          },
          {
            "text": "Off",
            "value": "off"
          }
          ]
        },
        {
          "variable": "admin_mode_password",
          "description": "Admin Mode Password",
          "type": "input"
        }]
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
            "options": [{
              "text": "On",
              "value": "on"
            },
            {
              "text": "Visual",
              "value": "visual"
            },
            {
              "text": "Ringer",
              "value": "ringer"
            },
            {
              "text": "Off",
              "value": "off"
            }
            ]
          },
          {
            "variable": "defaultringer",
            "description": "Default Ringer",
            "type": "list",
            "options": [{
              "text": "Ringer 1",
              "value": "Ringer1"
            },
            {
              "text": "Ringer 2",
              "value": "Ringer2"
            },
            {
              "text": "Ringer 3",
              "value": "Ringer3"
            },
            {
              "text": "Ringer 4",
              "value": "Ringer4"
            },
            {
              "text": "Ringer 5",
              "value": "Ringer5"
            },
            {
              "text": "Ringer 6",
              "value": "Ringer6"
            },
            {
              "text": "Ringer 7",
              "value": "Ringer7"
            },
            {
              "text": "Ringer 8",
              "value": "Ringer8"
            },
            {
              "text": "Ringer 9",
              "value": "Ringer9"
            },
            {
              "text": "Ringer 10",
              "value": "Ringer10"
            },
            {
              "text": "Silent",
              "value": "Silent"
            },
            {
              "text": "Custom",
              "value": "Custom"
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
          }
        ]
      }
    }

    this.networkUI = function () {
      return {
        "name": "Network",
        "items": [
          {
            "variable": "svlan_id",
            "description": "VLAN Id",
            "type": "input"
          },
          {
            "variable": "svlan_qos",
            "description": "VLAN Priority",
            "type": "list",
            "options": [{
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
            "variable": "vlan_port_tagging",
            "description": "Tag VLAN traffic to/from specific switch",
            "type": "list",
            "options": [{
              "text": "Off",
              "value": "off"
            },
            {
              "text": "On",
              "value": "on"
            }
            ]
          },
          {
            "variable": "vlan_pc_id",
            "description": "PC port VLAN Id",
            "type": "input"
          },
          {
            "variable": "vlan_pc_priority",
            "description": "PC vlan VLAN Priority",
            "type": "list",
            "options": [{
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
          }
        ]
      }
    }

    this.keysUI = function () {
      return {
        "name": "Keys",
        "items": [
          {
            "description": "Keys",
            "type": "static",
            "data": {
              "items": [
                {
                  "variable": "gui_fkey1",
                  "description": "Soft Key #1",
                  "type": "input"
                },
                {
                  "variable": "gui_fkey2",
                  "description": "Soft Key #2",
                  "type": "input"
                },
                {
                  "variable": "gui_fkey3",
                  "description": "Soft Key #3",
                  "type": "input"
                },
                {
                  "variable": "gui_fkey4",
                  "description": "Soft Key #4",
                  "type": "input"
                },
                {
                  "variable": "dkey_help",
                  "description": "Help Key",
                  "type": "input"
                },
                {
                  "variable": "dkey_snom",
                  "description": "Snom Key",
                  "type": "input"
                },
                {
                  "variable": "dkey_conf",
                  "description": "Conference Key",
                  "type": "input"
                },
                {
                  "variable": "dkey_transfer",
                  "description": "Transfer Key",
                  "type": "input"
                },
                {
                  "variable": "dkey_hold",
                  "description": "Hold Key",
                  "type": "input"
                },
                {
                  "variable": "dkey_dnd",
                  "description": "Do Not Disturb Key",
                  "type": "input"
                },
                {
                  "variable": "dkey_record",
                  "description": "Record Key",
                  "type": "input"
                },
                {
                  "variable": "dkey_retrieve",
                  "description": "Retrieve Key",
                  "type": "input"
                },
                {
                  "variable": "dkey_redial",
                  "description": "Redial Key",
                  "type": "input"
                },
                {
                  "variable": "dkey_directory",
                  "description": "Directory Key",
                  "type": "input"
                },
                {
                  "variable": "dkey_label_page_next",
                  "description": "Page Forward Key",
                  "type": "input"
                }
              ]
            }
          }
        ]
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
              "items": angular.copy(functionExpKeysItems)
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
              "items": angular.copy(functionExpKeysItems)
            }
          }
        ]
      }
    }
  })