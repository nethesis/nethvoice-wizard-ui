'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ProvYealinkService
 * @description
 * # ProvYealinkService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ProvYealinkService', function ($q, RestService) {

    this.map = function () {
      return {
        "t11x": {
          "T19P_E2": {
            "model": "T19P_E2",
            "provisioning": true,
            "softKeys": true,
            "programmableKeys": true
          }
        },
        "t1x": {
          "T19": {
            "model": "T19",
            "lineOptions": true
          }
        },
        "t22x": {
          "T21P_E2": {
            "model": "T21P_E2",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 2,
            "programmableKeys": true
          },
          "T23P_G": {
            "model": "T23P_G",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 3,
            "programmableKeys": true
          },
          "T27P": {
            "model": "T27P",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 21,
            "programmableKeys": true,
            "expKeys1": [
              {
                "start": 1,
                "end": 20
              },
              {
                "start": 22,
                "end": 40
              }
            ],
            "expKeys2": [
              {
                "start": 1,
                "end": 20
              },
              {
                "start": 22,
                "end": 40
              }
            ]
          },
          "T27G": {
            "model": "T27G",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 21,
            "programmableKeys": true,
            "expKeys1": [
              {
                "start": 1,
                "end": 20
              },
              {
                "start": 22,
                "end": 40
              }
            ],
            "expKeys2": [
              {
                "start": 1,
                "end": 20
              },
              {
                "start": 22,
                "end": 40
              }
            ]
          },
          "T29G": {
            "model": "T29G",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true,
            "expKeys1": [
              {
                "start": 1,
                "end": 20
              },
              {
                "start": 22,
                "end": 40
              }
            ],
            "expKeys2": [
              {
                "start": 1,
                "end": 20
              },
              {
                "start": 22,
                "end": 40
              }
            ]
          }
        },
        "t2x": {
          "T20P": {
            "model": "T20P",
            "softKeys": true,
            "lineKeys": 2
          },
          "T21P": {
            "model": "T21P",
            "softKeys": true,
            "lineKeys": 2,
            "programmableKeys": true,
            "expKeys1": [
              {
                "start": 1,
                "end": 40
              }
            ]
          },
          "T22P": {
            "model": "T22P",
            "softKeys": true,
            "lineKeys": 3,
            "programmableKeys": true,
            "expKeys1": [
              {
                "start": 1,
                "end": 40
              }
            ]
          },
          "T26P": {
            "model": "T26P",
            "softKeys": true,
            "lineKeys": 3,
            "sideKeys": true,
            "programmableKeys": true,
            "expKeys1": [
              {
                "start": 1,
                "end": 40
              }
            ]
          },
          "T28P": {
            "model": "T28P",
            "softKeys": true,
            "lineKeys": 6,
            "sideKeys": true,
            "programmableKeys": true,
            "expKeys1": [
              {
                "start": 1,
                "end": 40
              }
            ]
          }
        },
        "t3x": {
          "T32G": {
            "model": "T32G",
            "softKeys": true,
            "lineKeys": 3,
            "programmableKeys": true,
            "expKeys1": [
              {
                "start": 1,
                "end": 40
              }
            ]
          },
          "T38G": {
            "model": "T38G",
            "softKeys": true,
            "lineKeys": 6,
            "sideKeys": true,
            "programmableKeys": true,
            "expKeys1": [
              {
                "start": 1,
                "end": 40
              }
            ]
          }
        },
        "t4x": {
          "T40P": {
            "model": "T40P",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 3,
            "programmableKeys": true
          },
          "T40G": {
            "model": "T40G",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 3,
            "programmableKeys": true
          },
          "T41P": {
            "model": "T41P",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 15,
            "programmableKeys": true
          },
          "T41S": {
            "model": "T41S",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 15,
            "programmableKeys": true
          },
          "T42S": {
            "model": "T42S",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 15,
            "programmableKeys": true
          },
          "T42G": {
            "model": "T42G",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 15,
            "programmableKeys": true
          },
          "T46G": {
            "model": "T46G",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true,
            "expKeys1": [
              {
                "start": 1,
                "end": 40
              },
            ],
            "expKeys2": [
              {
                "start": 1,
                "end": 40
              }
            ]
          },
          "T46S": {
            "model": "T46S",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true
          },
          "T48G": {
            "model": "T48G",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 29,
            "programmableKeys": true
          },
          "T48S__": {
            "model": "T48S",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 29,
            "programmableKeys": true
          }
        },
        "t44x": {
          "T49G": {
            "model": "T49G",
            "softKeys": true,
            "lineKeys": 29,
            "programmableKeys": true
          }
        },
        "vPhone": {
          "VP530": {
            "model": "VP530",
            "provisioning": false,
            "hidden_variables": [
              "call_waiting"
            ],
            "lineKeys": 4,
            "sideKeys": true
          }
        },
        "t5x": {
          "T52S": {
            "model": "T52S",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 8,
            "programmableKeys": true
          },
          "T53": {
            "model": "T53",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 21,
            "programmableKeys": true
          },
          "T53W": {
            "model": "T53W",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 21,
            "programmableKeys": true
          },
          "T54S": {
            "model": "T54S",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 10,
            "programmableKeys": true
          },
          "T54W": {
            "model": "T54W",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true
          },
          "T57W": {
            "model": "T57W",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true
          }
        },
        "t55x": {
          "T56A": {
            "model": "T56A",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true
          },
          "T57": {
            "model": "T57",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 29,
            "programmableKeys": true
          },
          "T57W": {
            "model": "T57W",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 29,
            "programmableKeys": true
          },
          "T58A": {
            "model": "T58A",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true
          },
          "T58V": {
            "model": "T58V",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true
          },
          "VP59": {
            "model": "VP59",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true
          }
        }
      }
    }

    this.modelGroups = {
      "T1xT2xT3xVPhone": [
        "T19",
        "T20P", "T21P", "T22P", "T26P", "T28P",
        "T32G", "T38G",
        "VP530"
      ],
      "T4xT5xT11xT22xT44xT55x": [
        "T40P", "T40G", "T41P", "T41S", "T42S", "T42G", "T46G", "T46S", "T48G", "T48S",
        "T52S", "T53", "T53W", "T54S", "T54W", "T57W",
        "T19P_E2",
        "T21P_E2", "T23P_G", "T27P", "T27G", "T29G",
        "T49G",
        "T56A", "T57", "T57W", "T58A", "T58V", "VP59"
      ],
      "T2xT3x": [
        "T20P", "T21P", "T22P", "T26P", "T28P",
        "T32G", "T38G"
      ],
      "T21pT22pT26p": [
        "T21P", "T22P", "T26P"
      ],
      "T3x": [
        "T32G", "T38G"
      ],
      "T4xT5xT22xT44xT55x": [
        "T40P", "T40G", "T41P", "T41S", "T42S", "T42G", "T46G", "T46S", "T48G", "T48S",
        "T52S", "T53", "T53W", "T54S", "T54W", "T57W",
        "T21P_E2", "T23P_G", "T27P", "T27G", "T29G",
        "T49G",
        "T56A", "T57", "T57W", "T58A", "T58V", "VP59"
      ],
      "T26pT28pT38gVP530": [
        "T26P", "T28P", "T38G"
      ],
      "T21pT22pT26pT28p": [
        "T21P", "T22P", "T26P", "T28P"
      ],
      "T4x": [
        "T40P", "T40G", "T41P", "T41S", "T42S", "T42G", "T46G", "T46S", "T48G", "T48S"
      ],
      "T5xT55x": [
        "T40P", "T40G", "T41P", "T41S", "T42S", "T42G", "T46G", "T46S", "T48G", "T48S",
        "T56A", "T57", "T57W", "T58A", "T58V", "VP59"
      ],
      "T11x": [
        "T19P_E2"
      ],
      "T22x": [
        "T21P_E2", "T23P_G", "T27P", "T27G", "T29G"
      ],
      "T44x": [
        "T49G"
      ]
    }

    this.generalUI = function (modelMap) {
      var itemsGeneralT1xT2xT3xVPhone = [
        {
          "variable": "timezone_yealink",
          "description": "Timezone Name",
          "type": "list",
          "options": [
            {
              "text": "-11 Samoa",
              "value": "Samoa"
            },
            {
              "text": "-10 United States-Hawaii-Aleutian",
              "value": "United States-Hawaii-Aleutian"
            },
            {
              "text": "-10 United States-Alaska-Aleutian",
              "value": "United States-Alaska-Aleutian"
            },
            {
              "text": "-9:30 French Polynesia",
              "value": "French Polynesia"
            },
            {
              "text": "-9 United States-Alaska Time",
              "value": "United States-Alaska Time"
            },
            {
              "text": "-8 Canada(Vancouver,Whitehorse)",
              "value": "Canada(Vancouver,Whitehorse)"
            },
            {
              "text": "-8 Mexico(Tijuana,Mexicali)",
              "value": "Mexico(Tijuana,Mexicali)"
            },
            {
              "text": "-8 United States-Pacific Time",
              "value": "United States-Pacific Time"
            },
            {
              "text": "-7 Canada(Edmonton,Calgary)",
              "value": "Canada(Edmonton,Calgary)"
            },
            {
              "text": "-7 Mexico(Mazatlan,Chihuahua)",
              "value": "Mexico(Mazatlan,Chihuahua)"
            },
            {
              "text": "-7 United States-MST no DST",
              "value": "United States-MST no DST"
            },
            {
              "text": "-7 United States-Mountain Time",
              "value": "United States-Mountain Time"
            },
            {
              "text": "-6 Canada-Manitoba(Winnipeg)",
              "value": "Canada-Manitoba(Winnipeg)"
            },
            {
              "text": "-6 Chile(Easter Islands)",
              "value": "Chile(Easter Islands)"
            },
            {
              "text": "-6 Mexico(Mexico City,Acapulco)",
              "value": "Mexico(Mexico City,Acapulco)"
            },
            {
              "text": "-6 United States-Central Time",
              "value": "United States-Central Time"
            },
            {
              "text": "-5 Bahamas(Nassau)",
              "value": "Bahamas(Nassau)"
            },
            {
              "text": "-5 Canada(Montreal,Ottawa,Quebec)",
              "value": "Canada(Montreal,Ottawa,Quebec)"
            },
            {
              "text": "-5 Cuba(Havana)",
              "value": "Cuba(Havana)"
            },
            {
              "text": "-5 United States-Eastern Time",
              "value": "United States-Eastern Time"
            },
            {
              "text": "-4:30 Venezuela(Caracas)",
              "value": "Venezuela(Caracas)"
            },
            {
              "text": "-4 Canada(Halifax,Saint John)",
              "value": "Canada(Halifax,Saint John)"
            },
            {
              "text": "-4 Chile(Santiago)",
              "value": "Chile(Santiago)"
            },
            {
              "text": "-4 Paraguay(Asuncion)",
              "value": "Paraguay(Asuncion)"
            },
            {
              "text": "-4 United Kingdom(Falkland Islands)",
              "value": "United Kingdom(Falkland Islands)"
            },
            {
              "text": "-4 United Kingdom(Bernuda)",
              "value": "United Kingdom(Bernuda)"
            },
            {
              "text": "-4 Trinidad&Tobago",
              "value": "Trinidad&Tobago"
            },
            {
              "text": "-3:30 Canada-New Foundland(St.Johns)",
              "value": "Canada-New Foundland(St.Johns)"
            },
            {
              "text": "-3 Argentina(Buenos Aires)",
              "value": "Argentina(Buenos Aires)"
            },
            {
              "text": "-3 Brazil(DST)",
              "value": "Brazil(DST)"
            },
            {
              "text": "-3 Brazil(no DST)",
              "value": "Brazil(no DST)"
            },
            {
              "text": "-3 Denmark-Greenland(Nuuk)",
              "value": "Denmark-Greenland(Nuuk)"
            },
            {
              "text": "-2:30 Newfoundland and Labrador",
              "value": "Newfoundland and Labrador"
            },
            {
              "text": "-2 Brazil(no DST)",
              "value": "Brazil(no DST)"
            },
            {
              "text": "-1 Portugal(Azores)",
              "value": "Portugal(Azores)"
            },
            {
              "text": "0 Denmark-Faroe Islands(Torshavn)",
              "value": "Denmark-Faroe Islands(Torshavn)"
            },
            {
              "text": "0 GMT",
              "value": "GMT"
            },
            {
              "text": "0 Greenland",
              "value": "Greenland"
            },
            {
              "text": "0 Ireland(Dublin)",
              "value": "Ireland(Dublin)"
            },
            {
              "text": "0 Morocco",
              "value": "Morocco"
            },
            {
              "text": "0 Portugal(Lisboa,Porto,Funchal)",
              "value": "Portugal(Lisboa,Porto,Funchal)"
            },
            {
              "text": "0 Spain-Canary Islands(Las Palmas)",
              "value": "Spain-Canary Islands(Las Palmas)"
            },
            {
              "text": "0 United Kingdom(London)",
              "value": "United Kingdom(London)"
            },
            {
              "text": "+1 Albania(Tirane)",
              "value": "Albania(Tirane)"
            },
            {
              "text": "+1 Austria(Vienna)",
              "value": "Austria(Vienna)"
            },
            {
              "text": "+1 Belgium(Brussels)",
              "value": "Belgium(Brussels)"
            },
            {
              "text": "+1 Caicos",
              "value": "Caicos"
            },
            {
              "text": "+1 Chad",
              "value": "Chad"
            },
            {
              "text": "+1 Croatia(Zagreb)",
              "value": "Croatia(Zagreb)"
            },
            {
              "text": "+1 Czech Republic(Prague)",
              "value": "Czech Republic(Prague)"
            },
            {
              "text": "+1 Denmark(Kopenhagen)",
              "value": "Denmark(Kopenhagen)"
            },
            {
              "text": "+1 France(Paris)",
              "value": "France(Paris)"
            },
            {
              "text": "+1 Germany(Berlin)",
              "value": "Germany(Berlin)"
            },
            {
              "text": "+1 Hungary(Budapest)",
              "value": "Hungary(Budapest)"
            },
            {
              "text": "+1 Italy(Rome)",
              "value": "Italy(Rome)"
            },
            {
              "text": "+1 Luxembourg(Luxembourg)",
              "value": "Luxembourg(Luxembourg)"
            },
            {
              "text": "+1 Macedonia(Skopje)",
              "value": "Macedonia(Skopje)"
            },
            {
              "text": "+1 Namibia(Windhoek)",
              "value": "Namibia(Windhoek)"
            },
            {
              "text": "+1 Netherlands(Amsterdam)",
              "value": "Netherlands(Amsterdam)"
            },
            {
              "text": "+1 Spain(Madrid)",
              "value": "Spain(Madrid)"
            },
            {
              "text": "+2 Estonia(Tallinn)",
              "value": "Estonia(Tallinn)"
            },
            {
              "text": "+2 Finland(Helsinki)",
              "value": "Finland(Helsinki)"
            },
            {
              "text": "+2 Gaza Strip(Gaza)",
              "value": "Gaza Strip(Gaza)"
            },
            {
              "text": "+2 Greece(Athens)",
              "value": "Greece(Athens)"
            },
            {
              "text": "+2 Israel(Tel Aviv)",
              "value": "Israel(Tel Aviv)"
            },
            {
              "text": "+2 Jordan(Amman)",
              "value": "Jordan(Amman)"
            },
            {
              "text": "+2 Latvia(Riga)",
              "value": "Latvia(Riga)"
            },
            {
              "text": "+2 Lebanon(Beirut)",
              "value": "Lebanon(Beirut)"
            },
            {
              "text": "+2 Moldova(Kishinev)",
              "value": "Moldova(Kishinev)"
            },
            {
              "text": "+2 Romania(Bucharest)",
              "value": "Romania(Bucharest)"
            },
            {
              "text": "+2 Russia(Kaliningrad)",
              "value": "Russia(Kaliningrad)"
            },
            {
              "text": "+2 Syria(Damascus)",
              "value": "Syria(Damascus)"
            },
            {
              "text": "+2 Turkey(Ankara)",
              "value": "Turkey(Ankara)"
            },
            {
              "text": "+2 Ukraine(Kyiv, Odessa)",
              "value": "Ukraine(Kyiv, Odessa)"
            },
            {
              "text": "+3 East Africa Time",
              "value": "East Africa Time"
            },
            {
              "text": "+3 Iraq(Baghdad)",
              "value": "Iraq(Baghdad)"
            },
            {
              "text": "+3 Russia(Moscow)",
              "value": "Russia(Moscow)"
            },
            {
              "text": "+3:30 Iran(Teheran)",
              "value": "Iran(Teheran)"
            },
            {
              "text": "+4 Armenia(Yerevan)",
              "value": "Armenia(Yerevan)"
            },
            {
              "text": "+4 Azerbaijan(Baku)",
              "value": "Azerbaijan(Baku)"
            },
            {
              "text": "+4 Georgia(Tbilisi)",
              "value": "Georgia(Tbilisi)"
            },
            {
              "text": "+4 Kazakhstan(Aktau)",
              "value": "Kazakhstan(Aktau)"
            },
            {
              "text": "+4 Russia(Samara)",
              "value": "Russia(Samara)"
            },
            {
              "text": "+4:30 Afghanistan(Kabul)",
              "value": "Afghanistan(Kabul)"
            },
            {
              "text": "+5 Kazakhstan(Aqtobe)",
              "value": "Kazakhstan(Aqtobe)"
            },
            {
              "text": "+5 Kyrgyzstan(Bishkek)",
              "value": "Kyrgyzstan(Bishkek)"
            },
            {
              "text": "+5 Pakistan(Islamabad)",
              "value": "Pakistan(Islamabad)"
            },
            {
              "text": "+5 Russia(Chelyabinsk)",
              "value": "Russia(Chelyabinsk)"
            },
            {
              "text": "+5:30 India(Calcutta)",
              "value": "India(Calcutta)"
            },
            {
              "text": "+5:45 Nepal(Katmandu)",
              "value": "Nepal(Katmandu)"
            },
            {
              "text": "+6 Kazakhstan(Astana, Almaty)",
              "value": "Kazakhstan(Astana, Almaty)"
            },
            {
              "text": "+6 Russia(Novosibirsk,Omsk)",
              "value": "Russia(Novosibirsk,Omsk)"
            },
            {
              "text": "+6:30 Myanmar(Naypyitaw)",
              "value": "Myanmar(Naypyitaw)"
            },
            {
              "text": "+7 Russia(Krasnoyarsk)",
              "value": "Russia(Krasnoyarsk)"
            },
            {
              "text": "+7 Thailand(Bangkok)",
              "value": "Thailand(Bangkok)"
            },
            {
              "text": "+8 Australia(Perth)",
              "value": "Australia(Perth)"
            },
            {
              "text": "+8 China(Beijing)",
              "value": "China(Beijing)"
            },
            {
              "text": "+8 Russia(Irkutsk, Ulan-Ude)",
              "value": "Russia(Irkutsk, Ulan-Ude)"
            },
            {
              "text": "+8 Singapore(Singapore)",
              "value": "Singapore(Singapore)"
            },
            {
              "text": "+8:45 Eucla",
              "value": "Eucla"
            },
            {
              "text": "+9 Japan(Tokyo)",
              "value": "Japan(Tokyo)"
            },
            {
              "text": "+9 Korea(Seoul)",
              "value": "Korea(Seoul)"
            },
            {
              "text": "+9 Russia(Yakutsk,Chita)",
              "value": "Russia(Yakutsk,Chita)"
            },
            {
              "text": "+9:30 Australia(Adelaide)",
              "value": "Australia(Adelaide)"
            },
            {
              "text": "+9:30 Australia(Darwin)",
              "value": "Australia(Darwin)"
            },
            {
              "text": "+10 Australia(Brisbane)",
              "value": "Australia(Brisbane)"
            },
            {
              "text": "+10 Australia(Hobart)",
              "value": "Australia(Hobart)"
            },
            {
              "text": "+10 Australia(Sydney,Melboume,Canberra)",
              "value": "Australia(Sydney,Melboume,Canberra)"
            },
            {
              "text": "+10 Russia(Vladivostok)",
              "value": "Russia(Vladivostok)"
            },
            {
              "text": "+10:30 Australia(Lord Howe Islands)",
              "value": "Australia(Lord Howe Islands)"
            },
            {
              "text": "+11 New Caledonia(Noumea)",
              "value": "New Caledonia(Noumea)"
            },
            {
              "text": "+11 Russia(Srednekolymsk Time)",
              "value": "Russia(Srednekolymsk Time)"
            },
            {
              "text": "+11:30 Norfolk Island",
              "value": "Norfolk Island"
            },
            {
              "text": "+12 New Zealand(Wellington,Auckland)",
              "value": "New Zealand(Wellington,Auckland)"
            },
            {
              "text": "+12 Russia(Kamchatka Time)",
              "value": "Russia(Kamchatka Time)"
            },
            {
              "text": "+12:45 New Zealand(Chatham Islands)",
              "value": "New Zealand(Chatham Islands)"
            },
            {
              "text": "+13 Tonga(Nukualofa)",
              "value": "Tonga(Nukualofa)"
            },
            {
              "text": "+13:30 Chatham Islands",
              "value": "Chatham Islands"
            },
            {
              "text": "+14 Kiribati",
              "value": "Kiribati"
            }
          ]
        },
        {
          "variable": "timezone",
          "description": "Timezone GMT Offset",
          "type": "list",
          "options": [
            {
              "text": "-12",
              "value": "-12"
            },
            {
              "text": "-11",
              "value": "-11"
            },
            {
              "text": "-10",
              "value": "-10"
            },
            {
              "text": "-9:30",
              "value": "-9:30"
            },
            {
              "text": "-9",
              "value": "-9"
            },
            {
              "text": "-8",
              "value": "-8"
            },
            {
              "text": "-7",
              "value": "-7"
            },
            {
              "text": "-6",
              "value": "-6"
            },
            {
              "text": "-5",
              "value": "-5"
            },
            {
              "text": "-4:30",
              "value": "-4:30"
            },
            {
              "text": "-4",
              "value": "-4"
            },
            {
              "text": "-3:30",
              "value": "-3:30"
            },
            {
              "text": "-3",
              "value": "-3"
            },
            {
              "text": "-2:30",
              "value": "-2:30"
            },
            {
              "text": "-2",
              "value": "-2"
            },
            {
              "text": "-1",
              "value": "-1"
            },
            {
              "text": "0",
              "value": "0"
            },
            {
              "text": "+1",
              "value": "+1"
            },
            {
              "text": "+2",
              "value": "+2"
            },
            {
              "text": "+3",
              "value": "+3"
            },
            {
              "text": "+3:30",
              "value": "+3:30"
            },
            {
              "text": "+4",
              "value": "+4"
            },
            {
              "text": "+4:30",
              "value": "+4:30"
            },
            {
              "text": "+5",
              "value": "+5"
            },
            {
              "text": "+5:30",
              "value": "+5:30"
            },
            {
              "text": "+6",
              "value": "+6"
            },
            {
              "text": "+6:30",
              "value": "+6:30"
            },
            {
              "text": "+7",
              "value": "+7"
            },
            {
              "text": "+8",
              "value": "+8"
            },
            {
              "text": "+8:45",
              "value": "+8:45"
            },
            {
              "text": "+9",
              "value": "+9"
            },
            {
              "text": "+9:30",
              "value": "+9:30"
            },
            {
              "text": "+10",
              "value": "+10"
            },
            {
              "text": "+10:30",
              "value": "+10:30"
            },
            {
              "text": "+11",
              "value": "+11"
            },
            {
              "text": "+11:30",
              "value": "+11:30"
            },
            {
              "text": "+12",
              "value": "+12"
            },
            {
              "text": "+12:45",
              "value": "+12:45"
            },
            {
              "text": "+13",
              "value": "+13"
            },
            {
              "text": "+13:30",
              "value": "+13:30"
            },
            {
              "text": "+14",
              "value": "+14"
            }
          ]
        },
        {
          "variable": "ldap_server",
          "description": "Server per rubrica ldap",
          "type": "input"
        },
        {
          "variable": "ldap_base",
          "description": "BaseDN ldap",
          "type": "input"
        },
        {
          "variable": "ringtone_url",
          "description": "Ringtone URL",
          "type": "input"
        },
        {
          "variable": "logo_url",
          "description": "Url Logo Uploaded",
          "type": "input"
        },
        {
          "variable": "uselogo",
          "description": "Custom Name of Logo to Use (Config:custom.jpg)",
          "type": "input"
        },
        {
          "variable": "lcdlogo",
          "description": "Logo to Display",
          "type": "list",
          "options": [
            {
              "text": "None",
              "value": "0"
            },
            {
              "text": "Default Logo",
              "value": "1"
            },
            {
              "text": "Custom Logo",
              "value": "2"
            }
          ]
        },
        {
          "variable": "rfc2543_hold",
          "description": "Enable RFC2543 Hold",
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
          "variable": "ring_alert_info_text_1",
          "description": "Internal Ringer Text 1",
          "type": "input"
        },
        {
          "variable": "ring_alert_info_ringer_1",
          "description": "Internal Ringer File 1",
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
            },
            {
              "text": "Ring6",
              "value": "6"
            },
            {
              "text": "Ring7",
              "value": "7"
            },
            {
              "text": "Ring8",
              "value": "8"
            },
            {
              "text": "Silent",
              "value": "9"
            },
            {
              "text": "Splash",
              "value": "10"
            }
          ]
        },
        {
          "variable": "ring_alert_info_text_2",
          "description": "Internal Ringer Text 2",
          "type": "input"
        },
        {
          "variable": "ring_alert_info_ringer_2",
          "description": "Internal Ringer File 2",
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
            },
            {
              "text": "Ring6",
              "value": "6"
            },
            {
              "text": "Ring7",
              "value": "7"
            },
            {
              "text": "Ring8",
              "value": "8"
            },
            {
              "text": "Silent",
              "value": "9"
            },
            {
              "text": "Splash",
              "value": "10"
            }
          ]
        },
        {
          "variable": "ring_alert_info_text_3",
          "description": "Internal Ringer Text 3",
          "type": "input"
        },
        {
          "variable": "ring_alert_info_ringer_3",
          "description": "Internal Ringer File 3",
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
            },
            {
              "text": "Ring6",
              "value": "6"
            },
            {
              "text": "Ring7",
              "value": "7"
            },
            {
              "text": "Ring8",
              "value": "8"
            },
            {
              "text": "Silent",
              "value": "9"
            },
            {
              "text": "Splash",
              "value": "10"
            }
          ]
        },
        {
          "variable": "ring_alert_info_text_4",
          "description": "Internal Ringer Text 4",
          "type": "input"
        },
        {
          "variable": "ring_alert_info_ringer_4",
          "description": "Internal Ringer File 4",
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
            },
            {
              "text": "Ring6",
              "value": "6"
            },
            {
              "text": "Ring7",
              "value": "7"
            },
            {
              "text": "Ring8",
              "value": "8"
            },
            {
              "text": "Silent",
              "value": "9"
            },
            {
              "text": "Splash",
              "value": "10"
            }
          ]
        },
        {
          "variable": "ring_alert_info_text_5",
          "description": "Internal Ringer Text 5",
          "type": "input"
        },
        {
          "variable": "ring_alert_info_ringer_5",
          "description": "Internal Ringer File 5",
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
            },
            {
              "text": "Ring6",
              "value": "6"
            },
            {
              "text": "Ring7",
              "value": "7"
            },
            {
              "text": "Ring8",
              "value": "8"
            },
            {
              "text": "Silent",
              "value": "9"
            },
            {
              "text": "Splash",
              "value": "10"
            }
          ]
        },
        {
          "variable": "ring_alert_info_text_6",
          "description": "Internal Ringer Text 6",
          "type": "input"
        },
        {
          "variable": "ring_alert_info_ringer_6",
          "description": "Internal Ringer File 6",
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
            },
            {
              "text": "Ring6",
              "value": "6"
            },
            {
              "text": "Ring7",
              "value": "7"
            },
            {
              "text": "Ring8",
              "value": "8"
            },
            {
              "text": "Silent",
              "value": "9"
            },
            {
              "text": "Splash",
              "value": "10"
            }
          ]
        },
        {
          "variable": "ring_alert_info_text_7",
          "description": "Internal Ringer Text 7",
          "type": "input"
        },
        {
          "variable": "ring_alert_info_ringer_7",
          "description": "Internal Ringer File 7",
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
            },
            {
              "text": "Ring6",
              "value": "6"
            },
            {
              "text": "Ring7",
              "value": "7"
            },
            {
              "text": "Ring8",
              "value": "8"
            },
            {
              "text": "Silent",
              "value": "9"
            },
            {
              "text": "Splash",
              "value": "10"
            }
          ]
        },
        {
          "variable": "ring_alert_info_text_8",
          "description": "Internal Ringer Text 8",
          "type": "input"
        },
        {
          "variable": "ring_alert_info_ringer_8",
          "description": "Internal Ringer File 8",
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
            },
            {
              "text": "Ring6",
              "value": "6"
            },
            {
              "text": "Ring7",
              "value": "7"
            },
            {
              "text": "Ring8",
              "value": "8"
            },
            {
              "text": "Silent",
              "value": "9"
            },
            {
              "text": "Splash",
              "value": "10"
            }
          ]
        },
        {
          "variable": "ring_alert_info_text_9",
          "description": "Internal Ringer Text 9",
          "type": "input"
        },
        {
          "variable": "ring_alert_info_ringer_9",
          "description": "Internal Ringer File 9",
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
            },
            {
              "text": "Ring6",
              "value": "6"
            },
            {
              "text": "Ring7",
              "value": "7"
            },
            {
              "text": "Ring8",
              "value": "8"
            },
            {
              "text": "Silent",
              "value": "9"
            },
            {
              "text": "Splash",
              "value": "10"
            }
          ]
        },
        {
          "variable": "ring_alert_info_text_10",
          "description": "Internal Ringer Text 10",
          "type": "input"
        },
        {
          "variable": "ring_alert_info_ringer_10",
          "description": "Internal Ringer File 10",
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
            },
            {
              "text": "Ring6",
              "value": "6"
            },
            {
              "text": "Ring7",
              "value": "7"
            },
            {
              "text": "Ring8",
              "value": "8"
            },
            {
              "text": "Silent",
              "value": "9"
            },
            {
              "text": "Splash",
              "value": "10"
            }
          ]
        },
        {
          "variable": "firmware_server",
          "description": "Firmware Server IP",
          "type": "input"
        },
        {
          "variable": "firmware_name",
          "description": "Firmware File Name",
          "type": "input"
        },
        {
          "variable": "update_mode",
          "description": "Config Update Mode",
          "type": "list",
          "options": [
            {
              "text": "Disabled",
              "value": "0",
              "disable": "update_frequency"
            },
            {
              "text": "Power on",
              "value": "1",
              "disable": "update_frequency"
            },
            {
              "text": "Repeatedly",
              "value": "4",
              "enable": "update_frequency"
            },
            {
              "text": "Weekly",
              "value": "5",
              "disable": "update_frequency"
            },
            {
              "text": "Power on + Repeatedly",
              "value": "6",
              "enable": "update_frequency"
            },
            {
              "text": "Power on + Weekly",
              "value": "7",
              "disable": "update_frequency"
            }
          ]
        },
        {
          "variable": "update_frequency",
          "description": "Update Frequency (mins)",
          "type": "input",
          "max_len": "5"
        },
        {
          "variable": "adminpw",
          "description": "Web administration password",
          "type": "input"
        },
        {
          "variable": "tones_country",
          "description": "Tones Country",
          "type": "input"
        }
      ];

      var itemsGeneralT4xT5xT11xT22xT44xT55x = [
        {
          "variable": "language",
          "description": "Language",
          "type": "list",
          "options": [
            {
              "text": "English",
              "value": "English"
            },
            {
              "text": "Chinese Simplified",
              "value": "Chinese_S"
            },
            {
              "text": "Chinese Traditional",
              "value": "Chinese_T"
            },
            {
              "text": "French",
              "value": "French"
            },
            {
              "text": "German",
              "value": "German"
            },
            {
              "text": "Italian",
              "value": "Italian"
            },
            {
              "text": "Polish",
              "value": "Polish"
            },
            {
              "text": "Portuguese",
              "value": "Portuguese"
            },
            {
              "text": "Spanish",
              "value": "Spanish"
            },
            {
              "text": "Turkish",
              "value": "Turkish"
            },
            {
              "text": "Russian",
              "value": "Russian"
            }
          ]
        },
        {
          "variable": "timezone_yealink",
          "description": "Timezone Name",
          "type": "list",
          "options": [
            {
              "text": "-11 Samoa",
              "value": "Samoa"
            },
            {
              "text": "-10 United States-Hawaii-Aleutian",
              "value": "United States-Hawaii-Aleutian"
            },
            {
              "text": "-10 United States-Alaska-Aleutian",
              "value": "United States-Alaska-Aleutian"
            },
            {
              "text": "-9:30 French Polynesia",
              "value": "French Polynesia"
            },
            {
              "text": "-9 United States-Alaska Time",
              "value": "United States-Alaska Time"
            },
            {
              "text": "-8 Canada(Vancouver,Whitehorse)",
              "value": "Canada(Vancouver,Whitehorse)"
            },
            {
              "text": "-8 Mexico(Tijuana,Mexicali)",
              "value": "Mexico(Tijuana,Mexicali)"
            },
            {
              "text": "-8 United States-Pacific Time",
              "value": "United States-Pacific Time"
            },
            {
              "text": "-7 Canada(Edmonton,Calgary)",
              "value": "Canada(Edmonton,Calgary)"
            },
            {
              "text": "-7 Mexico(Mazatlan,Chihuahua)",
              "value": "Mexico(Mazatlan,Chihuahua)"
            },
            {
              "text": "-7 United States-MST no DST",
              "value": "United States-MST no DST"
            },
            {
              "text": "-7 United States-Mountain Time",
              "value": "United States-Mountain Time"
            },
            {
              "text": "-6 Canada-Manitoba(Winnipeg)",
              "value": "Canada-Manitoba(Winnipeg)"
            },
            {
              "text": "-6 Chile(Easter Islands)",
              "value": "Chile(Easter Islands)"
            },
            {
              "text": "-6 Mexico(Mexico City,Acapulco)",
              "value": "Mexico(Mexico City,Acapulco)"
            },
            {
              "text": "-6 United States-Central Time",
              "value": "United States-Central Time"
            },
            {
              "text": "-5 Bahamas(Nassau)",
              "value": "Bahamas(Nassau)"
            },
            {
              "text": "-5 Canada(Montreal,Ottawa,Quebec)",
              "value": "Canada(Montreal,Ottawa,Quebec)"
            },
            {
              "text": "-5 Cuba(Havana)",
              "value": "Cuba(Havana)"
            },
            {
              "text": "-5 United States-Eastern Time",
              "value": "United States-Eastern Time"
            },
            {
              "text": "-4:30 Venezuela(Caracas)",
              "value": "Venezuela(Caracas)"
            },
            {
              "text": "-4 Canada(Halifax,Saint John)",
              "value": "Canada(Halifax,Saint John)"
            },
            {
              "text": "-4 Chile(Santiago)",
              "value": "Chile(Santiago)"
            },
            {
              "text": "-4 Paraguay(Asuncion)",
              "value": "Paraguay(Asuncion)"
            },
            {
              "text": "-4 United Kingdom(Falkland Islands)",
              "value": "United Kingdom(Falkland Islands)"
            },
            {
              "text": "-4 United Kingdom(Bernuda)",
              "value": "United Kingdom(Bernuda)"
            },
            {
              "text": "-4 Trinidad&Tobago",
              "value": "Trinidad&Tobago"
            },
            {
              "text": "-3:30 Canada-New Foundland(St.Johns)",
              "value": "Canada-New Foundland(St.Johns)"
            },
            {
              "text": "-3 Argentina(Buenos Aires)",
              "value": "Argentina(Buenos Aires)"
            },
            {
              "text": "-3 Brazil(DST)",
              "value": "Brazil(DST)"
            },
            {
              "text": "-3 Brazil(no DST)",
              "value": "Brazil(no DST)"
            },
            {
              "text": "-3 Denmark-Greenland(Nuuk)",
              "value": "Denmark-Greenland(Nuuk)"
            },
            {
              "text": "-2:30 Newfoundland and Labrador",
              "value": "Newfoundland and Labrador"
            },
            {
              "text": "-2 Brazil(no DST)",
              "value": "Brazil(no DST)"
            },
            {
              "text": "-1 Portugal(Azores)",
              "value": "Portugal(Azores)"
            },
            {
              "text": "0 Denmark-Faroe Islands(Torshavn)",
              "value": "Denmark-Faroe Islands(Torshavn)"
            },
            {
              "text": "0 GMT",
              "value": "GMT"
            },
            {
              "text": "0 Greenland",
              "value": "Greenland"
            },
            {
              "text": "0 Ireland(Dublin)",
              "value": "Ireland(Dublin)"
            },
            {
              "text": "0 Morocco",
              "value": "Morocco"
            },
            {
              "text": "0 Portugal(Lisboa,Porto,Funchal)",
              "value": "Portugal(Lisboa,Porto,Funchal)"
            },
            {
              "text": "0 Spain-Canary Islands(Las Palmas)",
              "value": "Spain-Canary Islands(Las Palmas)"
            },
            {
              "text": "0 United Kingdom(London)",
              "value": "United Kingdom(London)"
            },
            {
              "text": "+1 Albania(Tirane)",
              "value": "Albania(Tirane)"
            },
            {
              "text": "+1 Austria(Vienna)",
              "value": "Austria(Vienna)"
            },
            {
              "text": "+1 Belgium(Brussels)",
              "value": "Belgium(Brussels)"
            },
            {
              "text": "+1 Caicos",
              "value": "Caicos"
            },
            {
              "text": "+1 Chad",
              "value": "Chad"
            },
            {
              "text": "+1 Croatia(Zagreb)",
              "value": "Croatia(Zagreb)"
            },
            {
              "text": "+1 Czech Republic(Prague)",
              "value": "Czech Republic(Prague)"
            },
            {
              "text": "+1 Denmark(Kopenhagen)",
              "value": "Denmark(Kopenhagen)"
            },
            {
              "text": "+1 France(Paris)",
              "value": "France(Paris)"
            },
            {
              "text": "+1 Germany(Berlin)",
              "value": "Germany(Berlin)"
            },
            {
              "text": "+1 Hungary(Budapest)",
              "value": "Hungary(Budapest)"
            },
            {
              "text": "+1 Italy(Rome)",
              "value": "Italy(Rome)"
            },
            {
              "text": "+1 Luxembourg(Luxembourg)",
              "value": "Luxembourg(Luxembourg)"
            },
            {
              "text": "+1 Macedonia(Skopje)",
              "value": "Macedonia(Skopje)"
            },
            {
              "text": "+1 Namibia(Windhoek)",
              "value": "Namibia(Windhoek)"
            },
            {
              "text": "+1 Netherlands(Amsterdam)",
              "value": "Netherlands(Amsterdam)"
            },
            {
              "text": "+1 Spain(Madrid)",
              "value": "Spain(Madrid)"
            },
            {
              "text": "+2 Estonia(Tallinn)",
              "value": "Estonia(Tallinn)"
            },
            {
              "text": "+2 Finland(Helsinki)",
              "value": "Finland(Helsinki)"
            },
            {
              "text": "+2 Gaza Strip(Gaza)",
              "value": "Gaza Strip(Gaza)"
            },
            {
              "text": "+2 Greece(Athens)",
              "value": "Greece(Athens)"
            },
            {
              "text": "+2 Israel(Tel Aviv)",
              "value": "Israel(Tel Aviv)"
            },
            {
              "text": "+2 Jordan(Amman)",
              "value": "Jordan(Amman)"
            },
            {
              "text": "+2 Latvia(Riga)",
              "value": "Latvia(Riga)"
            },
            {
              "text": "+2 Lebanon(Beirut)",
              "value": "Lebanon(Beirut)"
            },
            {
              "text": "+2 Moldova(Kishinev)",
              "value": "Moldova(Kishinev)"
            },
            {
              "text": "+2 Romania(Bucharest)",
              "value": "Romania(Bucharest)"
            },
            {
              "text": "+2 Russia(Kaliningrad)",
              "value": "Russia(Kaliningrad)"
            },
            {
              "text": "+2 Syria(Damascus)",
              "value": "Syria(Damascus)"
            },
            {
              "text": "+2 Turkey(Ankara)",
              "value": "Turkey(Ankara)"
            },
            {
              "text": "+2 Ukraine(Kyiv, Odessa)",
              "value": "Ukraine(Kyiv, Odessa)"
            },
            {
              "text": "+3 East Africa Time",
              "value": "East Africa Time"
            },
            {
              "text": "+3 Iraq(Baghdad)",
              "value": "Iraq(Baghdad)"
            },
            {
              "text": "+3 Russia(Moscow)",
              "value": "Russia(Moscow)"
            },
            {
              "text": "+3:30 Iran(Teheran)",
              "value": "Iran(Teheran)"
            },
            {
              "text": "+4 Armenia(Yerevan)",
              "value": "Armenia(Yerevan)"
            },
            {
              "text": "+4 Azerbaijan(Baku)",
              "value": "Azerbaijan(Baku)"
            },
            {
              "text": "+4 Georgia(Tbilisi)",
              "value": "Georgia(Tbilisi)"
            },
            {
              "text": "+4 Kazakhstan(Aktau)",
              "value": "Kazakhstan(Aktau)"
            },
            {
              "text": "+4 Russia(Samara)",
              "value": "Russia(Samara)"
            },
            {
              "text": "+4:30 Afghanistan(Kabul)",
              "value": "Afghanistan(Kabul)"
            },
            {
              "text": "+5 Kazakhstan(Aqtobe)",
              "value": "Kazakhstan(Aqtobe)"
            },
            {
              "text": "+5 Kyrgyzstan(Bishkek)",
              "value": "Kyrgyzstan(Bishkek)"
            },
            {
              "text": "+5 Pakistan(Islamabad)",
              "value": "Pakistan(Islamabad)"
            },
            {
              "text": "+5 Russia(Chelyabinsk)",
              "value": "Russia(Chelyabinsk)"
            },
            {
              "text": "+5:30 India(Calcutta)",
              "value": "India(Calcutta)"
            },
            {
              "text": "+5:45 Nepal(Katmandu)",
              "value": "Nepal(Katmandu)"
            },
            {
              "text": "+6 Kazakhstan(Astana, Almaty)",
              "value": "Kazakhstan(Astana, Almaty)"
            },
            {
              "text": "+6 Russia(Novosibirsk,Omsk)",
              "value": "Russia(Novosibirsk,Omsk)"
            },
            {
              "text": "+6:30 Myanmar(Naypyitaw)",
              "value": "Myanmar(Naypyitaw)"
            },
            {
              "text": "+7 Russia(Krasnoyarsk)",
              "value": "Russia(Krasnoyarsk)"
            },
            {
              "text": "+7 Thailand(Bangkok)",
              "value": "Thailand(Bangkok)"
            },
            {
              "text": "+8 Australia(Perth)",
              "value": "Australia(Perth)"
            },
            {
              "text": "+8 China(Beijing)",
              "value": "China(Beijing)"
            },
            {
              "text": "+8 Russia(Irkutsk, Ulan-Ude)",
              "value": "Russia(Irkutsk, Ulan-Ude)"
            },
            {
              "text": "+8 Singapore(Singapore)",
              "value": "Singapore(Singapore)"
            },
            {
              "text": "+8:45 Eucla",
              "value": "Eucla"
            },
            {
              "text": "+9 Japan(Tokyo)",
              "value": "Japan(Tokyo)"
            },
            {
              "text": "+9 Korea(Seoul)",
              "value": "Korea(Seoul)"
            },
            {
              "text": "+9 Russia(Yakutsk,Chita)",
              "value": "Russia(Yakutsk,Chita)"
            },
            {
              "text": "+9:30 Australia(Adelaide)",
              "value": "Australia(Adelaide)"
            },
            {
              "text": "+9:30 Australia(Darwin)",
              "value": "Australia(Darwin)"
            },
            {
              "text": "+10 Australia(Brisbane)",
              "value": "Australia(Brisbane)"
            },
            {
              "text": "+10 Australia(Hobart)",
              "value": "Australia(Hobart)"
            },
            {
              "text": "+10 Australia(Sydney,Melboume,Canberra)",
              "value": "Australia(Sydney,Melboume,Canberra)"
            },
            {
              "text": "+10 Russia(Vladivostok)",
              "value": "Russia(Vladivostok)"
            },
            {
              "text": "+10:30 Australia(Lord Howe Islands)",
              "value": "Australia(Lord Howe Islands)"
            },
            {
              "text": "+11 New Caledonia(Noumea)",
              "value": "New Caledonia(Noumea)"
            },
            {
              "text": "+11 Russia(Srednekolymsk Time)",
              "value": "Russia(Srednekolymsk Time)"
            },
            {
              "text": "+11:30 Norfolk Island",
              "value": "Norfolk Island"
            },
            {
              "text": "+12 New Zealand(Wellington,Auckland)",
              "value": "New Zealand(Wellington,Auckland)"
            },
            {
              "text": "+12 Russia(Kamchatka Time)",
              "value": "Russia(Kamchatka Time)"
            },
            {
              "text": "+12:45 New Zealand(Chatham Islands)",
              "value": "New Zealand(Chatham Islands)"
            },
            {
              "text": "+13 Tonga(Nukualofa)",
              "value": "Tonga(Nukualofa)"
            },
            {
              "text": "+13:30 Chatham Islands",
              "value": "Chatham Islands"
            },
            {
              "text": "+14 Kiribati",
              "value": "Kiribati"
            }
          ]
        },
        {
          "variable": "timezone",
          "description": "Timezone GMT Offset",
          "type": "list",
          "options": [
            {
              "text": "-12",
              "value": "-12"
            },
            {
              "text": "-11",
              "value": "-11"
            },
            {
              "text": "-10",
              "value": "-10"
            },
            {
              "text": "-9:30",
              "value": "-9:30"
            },
            {
              "text": "-9",
              "value": "-9"
            },
            {
              "text": "-8",
              "value": "-8"
            },
            {
              "text": "-7",
              "value": "-7"
            },
            {
              "text": "-6",
              "value": "-6"
            },
            {
              "text": "-5",
              "value": "-5"
            },
            {
              "text": "-4:30",
              "value": "-4:30"
            },
            {
              "text": "-4",
              "value": "-4"
            },
            {
              "text": "-3:30",
              "value": "-3:30"
            },
            {
              "text": "-3",
              "value": "-3"
            },
            {
              "text": "-2:30",
              "value": "-2:30"
            },
            {
              "text": "-2",
              "value": "-2"
            },
            {
              "text": "-1",
              "value": "-1"
            },
            {
              "text": "0",
              "value": "0"
            },
            {
              "text": "+1",
              "value": "+1"
            },
            {
              "text": "+2",
              "value": "+2"
            },
            {
              "text": "+3",
              "value": "+3"
            },
            {
              "text": "+3:30",
              "value": "+3:30"
            },
            {
              "text": "+4",
              "value": "+4"
            },
            {
              "text": "+4:30",
              "value": "+4:30"
            },
            {
              "text": "+5",
              "value": "+5"
            },
            {
              "text": "+5:30",
              "value": "+5:30"
            },
            {
              "text": "+6",
              "value": "+6"
            },
            {
              "text": "+6:30",
              "value": "+6:30"
            },
            {
              "text": "+7",
              "value": "+7"
            },
            {
              "text": "+8",
              "value": "+8"
            },
            {
              "text": "+8:45",
              "value": "+8:45"
            },
            {
              "text": "+9",
              "value": "+9"
            },
            {
              "text": "+9:30",
              "value": "+9:30"
            },
            {
              "text": "+10",
              "value": "+10"
            },
            {
              "text": "+10:30",
              "value": "+10:30"
            },
            {
              "text": "+11",
              "value": "+11"
            },
            {
              "text": "+11:30",
              "value": "+11:30"
            },
            {
              "text": "+12",
              "value": "+12"
            },
            {
              "text": "+12:45",
              "value": "+12:45"
            },
            {
              "text": "+13",
              "value": "+13"
            },
            {
              "text": "+13:30",
              "value": "+13:30"
            },
            {
              "text": "+14",
              "value": "+14"
            }
          ]
        },
        {
          "variable": "date_format",
          "description": "Date Display Format",
          "type": "list",
          "options": [
            {
              "text": "WWW MMM DD",
              "value": "0"
            },
            {
              "text": "DD-MMM-YY",
              "value": "1"
            },
            {
              "text": "YYYY-MM-DD",
              "value": "2"
            },
            {
              "text": "DD/MM/YYYY",
              "value": "3"
            },
            {
              "text": "MM/DD/YY",
              "value": "4"
            },
            {
              "text": "DD MMM YYYY",
              "value": "5"
            },
            {
              "text": "WWW DD MMM",
              "value": "6"
            }
          ]
        },
        {
          "variable": "time_format",
          "description": "Time Display Format",
          "type": "list",
          "options": [
            {
              "text": "Hour 12",
              "value": "0"
            },
            {
              "text": "Hour 24",
              "value": "1"
            }
          ]
        },
        {
          "variable": "tones_country",
          "description": "Tones Country",
          "type": "list",
          "options": [
            {
              "text": "Custom",
              "value": "Custom"
            },
            {
              "text": "Australia",
              "value": "Australia"
            },
            {
              "text": "Austria",
              "value": "Austria"
            },
            {
              "text": "Brazil",
              "value": "Brazil"
            },
            {
              "text": "Belgium",
              "value": "Belgium"
            },
            {
              "text": "Chile",
              "value": "Chile"
            },
            {
              "text": "China",
              "value": "China"
            },
            {
              "text": "Czech",
              "value": "Czech"
            },
            {
              "text": "Czech ETSI",
              "value": "Czech ETSI"
            },
            {
              "text": "Denmark",
              "value": "Denmark"
            },
            {
              "text": "Finland",
              "value": "Finland"
            },
            {
              "text": "France",
              "value": "France"
            },
            {
              "text": "Germany",
              "value": "Germany"
            },
            {
              "text": "Great Britain",
              "value": "Great Britain"
            },
            {
              "text": "Greece",
              "value": "Greece"
            },
            {
              "text": "Hungary",
              "value": "Hungary"
            },
            {
              "text": "Lithuania",
              "value": "Lithuania"
            },
            {
              "text": "India",
              "value": "India"
            },
            {
              "text": "Italy",
              "value": "Italy"
            },
            {
              "text": "Japan",
              "value": "Japan"
            },
            {
              "text": "Mexico",
              "value": "Mexico"
            },
            {
              "text": "New Zealand",
              "value": "New Zealand"
            },
            {
              "text": "Netherlands",
              "value": "Netherlands"
            },
            {
              "text": "Norway",
              "value": "Norway"
            },
            {
              "text": "Portugal",
              "value": "Portugal"
            },
            {
              "text": "Spain",
              "value": "Spain"
            },
            {
              "text": "Switzerland",
              "value": "Switzerland"
            },
            {
              "text": "Sweden",
              "value": "Sweden"
            },
            {
              "text": "Russia",
              "value": "Russia"
            },
            {
              "text": "United States",
              "value": "United States"
            }
          ]
        },
        {
          "variable": "adminpw",
          "description": "Web administration password",
          "type": "input"
        }
      ];

      if (this.modelGroups.T1xT2xT3xVPhone.includes(modelMap.model)) {
        return {
          "name": "General",
          "items": itemsGeneralT1xT2xT3xVPhone
        }
      } else if (this.modelGroups.T4xT5xT11xT22xT44xT55x.includes(modelMap.model)) {
        return {
          "name": "General",
          "items": itemsGeneralT4xT5xT11xT22xT44xT55x
        }
      }
    }

    this.preferenceUI = function (modelMap) {
      var itemsPreferencesT1xT2xT3xVPhone = [
        {
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
          "variable": "contact_list_address",
          "description": "Contact List URL",
          "type": "input"
        },
        {
          "variable": "ringtone_url",
          "description": "Ringtone URL",
          "type": "input"
        },
        {
          "variable": "default_ringtone",
          "description": "Default Ringtone (prim for internal calls)",
          "type": "list",
          "options": [
            {
              "text": "Ring1",
              "value": "Ring1.wav"
            },
            {
              "text": "Ring2",
              "value": "Ring2.wav"
            },
            {
              "text": "Ring3",
              "value": "Ring3.wav"
            },
            {
              "text": "Ring4",
              "value": "Ring4.wav"
            },
            {
              "text": "Ring5",
              "value": "Ring5.wav"
            },
            {
              "text": "Ring6",
              "value": "Ring6.wav"
            },
            {
              "text": "Ring7",
              "value": "Ring7.wav"
            },
            {
              "text": "Ring8",
              "value": "Ring8.wav"
            },
            {
              "text": "Silent",
              "value": "Silent.wav"
            },
            {
              "text": "Splash",
              "value": "Splash.wav"
            }

          ]
        },
        {
          "variable": "dss_transfer",
          "description": "DSS Transfer Type",
          "type": "list",
          "options": [
            {
              "text": "New Call",
              "value": "0"
            },
            {
              "text": "Attended Transfer",
              "value": "1"
            },
            {
              "text": "Blind Transfer",
              "value": "2"
            }
          ]
        },
        {
          "variable": "missed_call_log",
          "description": "Missed Call Log",
          "type": "list",
          "options": [
            {
              "text": "Disable",
              "value": "0"
            },
            {
              "text": "Enable",
              "value": "1"
            }
          ]
        }
      ];

      var itemsPreferencesT4xT5xT11xT22xT44xT55x = [
        {
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
          "variable": "call_waiting_tone",
          "description": "Call Waiting Tone",
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
          "variable": "pound",
          "description": "Pound as send key",
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
          "variable": "auto_redial",
          "description": "AUto Redial",
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
          "variable": "default_ringtone",
          "description": "Default Ringtone",
          "type": "list",
          "options": [
            {
              "text": "Ring1",
              "value": "Ring1.wav"
            },
            {
              "text": "Ring2",
              "value": "Ring2.wav"
            },
            {
              "text": "Ring3",
              "value": "Ring3.wav"
            },
            {
              "text": "Ring4",
              "value": "Ring4.wav"
            },
            {
              "text": "Ring5",
              "value": "Ring5.wav"
            },
            {
              "text": "Ring6",
              "value": "Ring6.wav"
            },
            {
              "text": "Ring7",
              "value": "Ring7.wav"
            },
            {
              "text": "Ring8",
              "value": "Ring8.wav"
            },
            {
              "text": "Silent",
              "value": "Silent.wav"
            },
            {
              "text": "Splash",
              "value": "Splash.wav"
            }
          ]
        },
        {
          "variable": "dss_transfer",
          "description": "DSS Transfer Type",
          "type": "list",
          "options": [
            {
              "text": "New Call",
              "value": "0"
            },
            {
              "text": "Attended Transfer",
              "value": "1"
            },
            {
              "text": "Blind Transfer",
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
          "variable": "lcd_logo_mode",
          "description": "LCD Logo Mode",
          "type": "list",
          "options": [
            {
              "text": "Off",
              "value": "0"
            },
            {
              "text": "System Logo",
              "value": "1"
            },
            {
              "text": "Custom Logo",
              "value": "2"
            }
          ]
        },
        {
          "variable": "screensaver_mode",
          "description": "Screesaver Mode",
          "type": "list",
          "options": [
            {
              "text": "Off",
              "value": "0"
            },
            {
              "text": "System Screensaver",
              "value": "1"
            },
            {
              "text": "Custom Screesaver",
              "value": "2"
            }
          ]
        },
        {
          "variable": "screesaver",
          "description": "Screensever Upload URL",
          "type": "input"
        },
        {
          "variable": "screesaverxml",
          "description": "Screensever XML URL",
          "type": "input"
        },
        {
          "variable": "wallpaper",
          "description": "Wallpaper Image",
          "type": "input"
        },
        {
          "variable": "wallpaperurl",
          "description": "Wallpaper URL",
          "type": "input"
        }
      ];

      if (this.modelGroups.T1xT2xT3xVPhone.includes(modelMap.model)) {
        return {
          "name": "Preferences",
          "items": angular.copy(itemsPreferencesT1xT2xT3xVPhone)
        }
      } else if (this.modelGroups.T4xT5xT11xT22xT44xT55x.includes(modelMap.model)) {
        return {
          "name": "Preferences",
          "items": angular.copy(itemsPreferencesT4xT5xT11xT22xT44xT55x)
        }
      }
    }

    this.networkUI = function (modelMap) {
      var itemsNetworkT1xT2xT3xVPhone = [
        {
          "variable": "voice_vlan_enable",
          "description": "Voice VLAN Enable",
          "type": "list",
          "options": [
            {
              "text": "True",
              "value": "1"
            },
            {
              "text": "False",
              "value": "0"
            }
          ]
        },
        {
          "variable": "voice_vlan_id",
          "description": "Voice VLAN ID",
          "type": "input"
        },
        {
          "variable": "voice_vlan_qos",
          "description": "VLAN QOS",
          "type": "input"
        },
        {
          "variable": "data_vlan_enable",
          "description": "Data VLAN Enable",
          "type": "list",
          "options": [
            {
              "text": "True",
              "value": "1"
            },
            {
              "text": "False",
              "value": "0"
            }
          ]
        },
        {
          "variable": "data_vlan_id",
          "description": "Data VLAN ID",
          "type": "input"
        },
        {
          "variable": "data_vlan_qos",
          "description": "Data VLAN QOS",
          "type": "input"
        }
      ];

      var itemsNetworkT4xT5xT11xT22xT44xT55x = [
        {
          "variable": "voice_vlan_enable",
          "description": "Voice VLAN Enable",
          "type": "list",
          "options": [
            {
              "text": "True",
              "value": "1"
            },
            {
              "text": "False",
              "value": "0"
            }
          ]
        },
        {
          "variable": "voice_vlan_id",
          "description": "Voice VLAN ID",
          "type": "input"
        },
        {
          "variable": "voice_vlan_qos",
          "description": "Voice VLAN Priority",
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
          "variable": "data_vlan_enable",
          "description": "Data VLAN Enable",
          "type": "list",
          "options": [
            {
              "text": "True",
              "value": "1"
            },
            {
              "text": "False",
              "value": "0"
            }
          ]
        },
        {
          "variable": "data_vlan_id",
          "description": "Data VLAN ID",
          "type": "input"
        },
        {
          "variable": "data_vlan_qos",
          "description": "Data VLAN Priority",
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
          "variable": "dhcp_enable",
          "description": "VLAN DHCP",
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
          "variable": "dhcp_option",
          "description": "VLAN DHCP Option",
          "type": "input"
        },
        {
          "variable": "vlan_change",
          "description": "VLAN Change method",
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
        }
      ];

      if (this.modelGroups.T1xT2xT3xVPhone.includes(modelMap.model)) {
        return {
          "name": "Network",
          "items": angular.copy(itemsNetworkT1xT2xT3xVPhone)
        }
      } else if (this.modelGroups.T4xT5xT11xT22xT44xT55x.includes(modelMap.model)) {
        return {
          "name": "Network",
          "items": angular.copy(itemsNetworkT4xT5xT11xT22xT44xT55x)
        }
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
          },
          {
            "variable": "power_on",
            "description": "Power On",
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
            "variable": "repeat_enable",
            "description": "Repeatedly",
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
            "variable": "repeat_minutes",
            "description": "Repeatedly Interval (Minutes)",
            "type": "input"
          },
          {
            "variable": "weekly_enable",
            "description": "Weekly",
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
            "variable": "weekly_upgrade_interval",
            "description": "Weekly Upgrade Interval (0~12week)",
            "type": "input"
          },
          {
            "variable": "begin_time_hour",
            "description": "Time Hour Begin",
            "type": "input"
          },
          {
            "variable": "begin_time_minutes",
            "description": "Time Minutes Begin",
            "type": "input"
          },
          {
            "variable": "end_time_hour",
            "description": "Time Hour End",
            "type": "input"
          },
          {
            "variable": "end_time_minutes",
            "description": "Time Minutes End",
            "type": "input"
          },
          {
            "variable": "weekly_dayofweek",
            "description": "Day of Week",
            "type": "list",
            "options": [
              {
                "text": "Sunday",
                "value": "0"
              },
              {
                "text": "Monday",
                "value": "1"
              },
              {
                "text": "Tuesday",
                "value": "2"
              },
              {
                "text": "Wednesday",
                "value": "3"
              },
              {
                "text": "Thursday",
                "value": "4"
              },
              {
                "text": "Friday",
                "value": "5"
              },
              {
                "text": "Saturday",
                "value": "7"
              }
            ]
          }
        ]
      }
    }

    this.softKeysUI = function (modelMap) {
      var itemsSoftKeysT2xT3x = [
        {
          "variable": "softkey_label",
          "description": "Soft Key {count} Label",
          "type": "input"
        },
        {
          "variable": "softkey_type",
          "description": "Soft Key {count} Type",
          "type": "list",
          "options": [
            {
              "text": "N\/A",
              "value": "0"
            },
            {
              "text": "Conference",
              "value": "1"
            },
            {
              "text": "Forward",
              "value": "2"
            },
            {
              "text": "Transfer",
              "value": "3"
            },
            {
              "text": "Hold",
              "value": "4"
            },
            {
              "text": "Do Not Disturb",
              "value": "5"
            },
            {
              "text": "Redial",
              "value": "6"
            },
            {
              "text": "Call Return",
              "value": "7"
            },
            {
              "text": "SMS",
              "value": "8"
            },
            {
              "text": "Call Pickup",
              "value": "9"
            },
            {
              "text": "Call Park",
              "value": "10"
            },
            {
              "text": "DTMF",
              "value": "11"
            },
            {
              "text": "Voicemail",
              "value": "12"
            },
            {
              "text": "Speed Dial",
              "value": "13"
            },
            {
              "text": "Intercom",
              "value": "14"
            },
            {
              "text": "Line",
              "value": "15"
            },
            {
              "text": "BLF",
              "value": "16"
            },
            {
              "text": "URL",
              "value": "17"
            },
            {
              "text": "Group Listing",
              "value": "18"
            },
            {
              "text": "Public Hold",
              "value": "19"
            },
            {
              "text": "Private Hold",
              "value": "20"
            },
            {
              "text": "Shared Line",
              "value": "21"
            },
            {
              "text": "XML Phonebook",
              "value": "22"
            },
            {
              "text": "Group Pickup",
              "value": "23"
            },
            {
              "text": "Paging",
              "value": "24"
            },
            {
              "text": "Record",
              "value": "25"
            },
            {
              "text": "XML Browser",
              "value": "27"
            },
            {
              "text": "Hot Desking",
              "value": "34"
            },
            {
              "text": "URL Record",
              "value": "35"
            },
            {
              "text": "LDAP",
              "value": "38"
            },
            {
              "text": "BLF List",
              "value": "39"
            },
            {
              "text": "Prefix",
              "value": "40"
            },
            {
              "text": "Zero Touch",
              "value": "41"
            },
            {
              "text": "ACD",
              "value": "42"
            },
            {
              "text": "Local Group",
              "value": "45"
            },
            {
              "text": "Network Group",
              "value": "46"
            },
            {
              "text": "Phone Lock",
              "value": "50"
            },
            {
              "text": "Meet-Me Conference",
              "value": "55"
            },
            {
              "text": "Retrieve Park",
              "value": "56"
            },
            {
              "text": "Hoteling",
              "value": "57"
            },
            {
              "text": "ACD Trace",
              "value": "58"
            },
            {
              "text": "Disp Code",
              "value": "59"
            },
            {
              "text": "Emergency",
              "value": "60"
            },
            {
              "text": "Directory",
              "value": "61"
            }
          ]
        },
        {
          "variable": "softkey_value",
          "description": "Soft Key {count} Value",
          "type": "input"
        }
      ];

      var itemsSoftKeysT4xT5xT11xT22xT44xT55x = [
        {
          "variable": "softkey_label",
          "description": "Soft Key {count} Label",
          "type": "input"
        },
        {
          "variable": "softkey_type",
          "description": "Soft Key {count} Type",
          "type": "list",
          "options": [
            {
              "text": "N\/A",
              "value": "0"
            },
            {
              "text": "Forward",
              "value": "2"
            },
            {
              "text": "Do Not Disturb",
              "value": "5"
            },
            {
              "text": "Call Return",
              "value": "7"
            },
            {
              "text": "SMS",
              "value": "8"
            },
            {
              "text": "Direct Pickup",
              "value": "9"
            },
            {
              "text": "Speed Dial",
              "value": "13"
            },
            {
              "text": "Intercom",
              "value": "14"
            },
            {
              "text": "XML Phonebook",
              "value": "22"
            },
            {
              "text": "Group Pickup",
              "value": "23"
            },
            {
              "text": "Paging",
              "value": "24"
            },
            {
              "text": "XML Browser",
              "value": "27"
            },
            {
              "text": "History",
              "value": "28"
            },
            {
              "text": "Menu",
              "value": "30"
            },
            {
              "text": "New SMS",
              "value": "32"
            },
            {
              "text": "Status",
              "value": "33"
            },
            {
              "text": "Hot Desking",
              "value": "34"
            },
            {
              "text": "LDAP",
              "value": "38"
            },
            {
              "text": "Prefix",
              "value": "40"
            },
            {
              "text": "Zero Touch",
              "value": "41"
            },
            {
              "text": "Local Directory",
              "value": "43"
            },
            {
              "text": "Network Directory",
              "value": "44"
            },
            {
              "text": "Local Group",
              "value": "45"
            },
            {
              "text": "Network Group",
              "value": "46"
            },
            {
              "text": "XML Directory",
              "value": "47"
            },
            {
              "text": "Phone Lock",
              "value": "50"
            },
            {
              "text": "Switch Account Up",
              "value": "51"
            },
            {
              "text": "Switch Account Down",
              "value": "52"
            },
            {
              "text": "Meet-Me Conference",
              "value": "55"
            },
            {
              "text": "Directory",
              "value": "61"
            },
            {
              "text": "Buddies",
              "value": "64"
            },
            {
              "text": "My Status",
              "value": "65"
            },
            {
              "text": "Paging List",
              "value": "66"
            },
            {
              "text": "Custom Key",
              "value": "73"
            },
            {
              "text": "Moble Account",
              "value": "77"
            },
            {
              "text": "Favorite",
              "value": "85"
            }
          ]
        },
        {
          "variable": "softkey_value",
          "description": "Soft Key {count} Value",
          "type": "input"
        }
      ];

      var items;

      if (this.modelGroups.T2xT3x.includes(modelMap.model)) {
        items = itemsSoftKeysT2xT3x;
      } else if (this.modelGroups.T4xT5xT11xT22xT44xT55x.includes(modelMap.model)) {
        items = itemsSoftKeysT4xT5xT11xT22xT44xT55x;
      }

      return {
        "name": "SoftKeys",
        "items": [
          {
            "description": "SoftKeys",
            "type": "loop",
            "loop_start": 1,
            "loop_end": 4,
            "data": {
              "items": items
            }
          }
        ]
      }
    }

    this.lineKeysUI = function (modelMap) {
      var itemsLineKeysT20p = [
        {
          "variable": "linekey_type",
          "description": "Line Key {count} Type",
          "type": "list",
          "options": [
            {
              "text": "N\/A",
              "value": "0"
            },
            {
              "text": "Conference",
              "value": "1"
            },
            {
              "text": "Forward",
              "value": "2"
            },
            {
              "text": "Transfer",
              "value": "3"
            },
            {
              "text": "Hold",
              "value": "4"
            },
            {
              "text": "Do Not Disturb",
              "value": "5"
            },
            {
              "text": "Redial",
              "value": "6"
            },
            {
              "text": "Call Return",
              "value": "7"
            },
            {
              "text": "SMS",
              "value": "8"
            },
            {
              "text": "Call Pickup",
              "value": "9"
            },
            {
              "text": "Call Park",
              "value": "10"
            },
            {
              "text": "DTMF",
              "value": "11"
            },
            {
              "text": "Voicemail",
              "value": "12"
            },
            {
              "text": "Speed Dial",
              "value": "13"
            },
            {
              "text": "Intercom",
              "value": "14"
            },
            {
              "text": "Line",
              "value": "15"
            },
            {
              "text": "BLF",
              "value": "16"
            },
            {
              "text": "URL",
              "value": "17"
            },
            {
              "text": "Group Listing",
              "value": "18"
            },
            {
              "text": "Public Hold",
              "value": "19"
            },
            {
              "text": "Private Hold",
              "value": "20"
            },
            {
              "text": "Shared Line",
              "value": "21"
            },
            {
              "text": "XML Phonebook",
              "value": "22"
            },
            {
              "text": "Group Pickup",
              "value": "23"
            },
            {
              "text": "Paging",
              "value": "24"
            },
            {
              "text": "Record",
              "value": "25"
            },
            {
              "text": "XML Browser",
              "value": "27"
            },
            {
              "text": "Hot Desking",
              "value": "34"
            },
            {
              "text": "URL Record",
              "value": "35"
            },
            {
              "text": "LDAP",
              "value": "38"
            },
            {
              "text": "BLF List",
              "value": "39"
            },
            {
              "text": "Prefix",
              "value": "40"
            },
            {
              "text": "Zero Touch",
              "value": "41"
            },
            {
              "text": "ACD",
              "value": "42"
            },
            {
              "text": "Local Group",
              "value": "45"
            },
            {
              "text": "Network Group",
              "value": "46"
            },
            {
              "text": "Phone Lock",
              "value": "50"
            },
            {
              "text": "Meet-Me Conference",
              "value": "55"
            },
            {
              "text": "Retrieve Park",
              "value": "56"
            },
            {
              "text": "Hoteling",
              "value": "57"
            },
            {
              "text": "ACD Trace",
              "value": "58"
            },
            {
              "text": "Disp Code",
              "value": "59"
            },
            {
              "text": "Emergency",
              "value": "60"
            },
            {
              "text": "Directory",
              "value": "61"
            }
          ]
        },
        {
          "variable": "linekey_mode",
          "description": "Line Key {count} Event Mode",
          "type": "list",
          "options": [
            {
              "text": "BLF",
              "value": "blf"
            },
            {
              "text": "BLA",
              "value": "bla"
            }
          ]
        },
        {
          "variable": "linekey_line",
          "description": "Line Key {count} Line",
          "type": "list",
          "options": [
            {
              "text": "Auto",
              "value": "0"
            },
            {
              "text": "Line 1",
              "value": "1"
            },
            {
              "text": "Line 2",
              "value": "2"
            },
            {
              "text": "Line 3",
              "value": "3"
            }
          ]
        },
        {
          "variable": "linekey_extension",
          "description": "Line Key {count} Extension",
          "type": "input"
        },
        {
          "variable": "linekey_pickup",
          "description": "Line Key {count} Pickup Number",
          "type": "input"
        },
        {
          "variable": "linekey_label",
          "description": "Line Key {count} Label",
          "type": "input"
        }
      ];

      var itemsLineKeysT21pT22pT26p = [
        {
          "variable": "linekey_type",
          "description": "Line Key {count} Type",
          "type": "list",
          "options": [
            {
              "text": "N\/A",
              "value": "0"
            },
            {
              "text": "Conference",
              "value": "1"
            },
            {
              "text": "Forward",
              "value": "2"
            },
            {
              "text": "Transfer",
              "value": "3"
            },
            {
              "text": "Hold",
              "value": "4"
            },
            {
              "text": "Do Not Disturb",
              "value": "5"
            },
            {
              "text": "Redial",
              "value": "6"
            },
            {
              "text": "Call Return",
              "value": "7"
            },
            {
              "text": "SMS",
              "value": "8"
            },
            {
              "text": "Call Pickup",
              "value": "9"
            },
            {
              "text": "Call Park",
              "value": "10"
            },
            {
              "text": "DTMF",
              "value": "11"
            },
            {
              "text": "Voicemail",
              "value": "12"
            },
            {
              "text": "Speed Dial",
              "value": "13"
            },
            {
              "text": "Intercom",
              "value": "14"
            },
            {
              "text": "Line",
              "value": "15"
            },
            {
              "text": "BLF",
              "value": "16"
            },
            {
              "text": "URL",
              "value": "17"
            },
            {
              "text": "Group Listing",
              "value": "18"
            },
            {
              "text": "Public Hold",
              "value": "19"
            },
            {
              "text": "Private Hold",
              "value": "20"
            },
            {
              "text": "Shared Line",
              "value": "21"
            },
            {
              "text": "XML Phonebook",
              "value": "22"
            },
            {
              "text": "Group Pickup",
              "value": "23"
            },
            {
              "text": "Paging",
              "value": "24"
            },
            {
              "text": "Record",
              "value": "25"
            },
            {
              "text": "XML Browser",
              "value": "27"
            },
            {
              "text": "Hot Desking",
              "value": "34"
            },
            {
              "text": "URL Record",
              "value": "35"
            },
            {
              "text": "LDAP",
              "value": "38"
            },
            {
              "text": "BLF List",
              "value": "39"
            },
            {
              "text": "Prefix",
              "value": "40"
            },
            {
              "text": "Zero Touch",
              "value": "41"
            },
            {
              "text": "ACD",
              "value": "42"
            },
            {
              "text": "Local Group",
              "value": "45"
            },
            {
              "text": "Network Group",
              "value": "46"
            },
            {
              "text": "Phone Lock",
              "value": "50"
            },
            {
              "text": "Meet-Me Conference",
              "value": "55"
            },
            {
              "text": "Retrieve Park",
              "value": "56"
            },
            {
              "text": "Hoteling",
              "value": "57"
            },
            {
              "text": "ACD Trace",
              "value": "58"
            },
            {
              "text": "Disp Code",
              "value": "59"
            },
            {
              "text": "Emergency",
              "value": "60"
            },
            {
              "text": "Directory",
              "value": "61"
            }
          ]
        },
        {
          "variable": "linekey_mode",
          "description": "Line Key {count} Event Mode",
          "type": "list",
          "options": [
            {
              "text": "BLF",
              "value": "blf"
            },
            {
              "text": "BLA",
              "value": "bla"
            }
          ]
        },
        {
          "variable": "linekey_line",
          "description": "Line Key {count} Line",
          "type": "list",
          "options": [
            {
              "text": "Auto",
              "value": "0"
            },
            {
              "text": "Line 1",
              "value": "1"
            },
            {
              "text": "Line 2",
              "value": "2"
            },
            {
              "text": "Line 3",
              "value": "3"
            }
          ]
        },
        {
          "variable": "linekey_extension",
          "description": "Line Key {count} Extension",
          "type": "input"
        },
        {
          "variable": "linekey_pickup",
          "description": "Line Key {count} Pickup Number",
          "type": "input"
        }
      ];

      var itemsLineKeysT28p = [
        {
          "variable": "linekey_type",
          "description": "Line Key {count} Type",
          "type": "list",
          "options": [
            {
              "text": "N\/A",
              "value": "0"
            },
            {
              "text": "Conference",
              "value": "1"
            },
            {
              "text": "Forward",
              "value": "2"
            },
            {
              "text": "Transfer",
              "value": "3"
            },
            {
              "text": "Hold",
              "value": "4"
            },
            {
              "text": "Do Not Disturb",
              "value": "5"
            },
            {
              "text": "Redial",
              "value": "6"
            },
            {
              "text": "Call Return",
              "value": "7"
            },
            {
              "text": "SMS",
              "value": "8"
            },
            {
              "text": "Call Pickup",
              "value": "9"
            },
            {
              "text": "Call Park",
              "value": "10"
            },
            {
              "text": "DTMF",
              "value": "11"
            },
            {
              "text": "Voicemail",
              "value": "12"
            },
            {
              "text": "Speed Dial",
              "value": "13"
            },
            {
              "text": "Intercom",
              "value": "14"
            },
            {
              "text": "Line",
              "value": "15"
            },
            {
              "text": "BLF",
              "value": "16"
            },
            {
              "text": "URL",
              "value": "17"
            },
            {
              "text": "Group Listing",
              "value": "18"
            },
            {
              "text": "Public Hold",
              "value": "19"
            },
            {
              "text": "Private Hold",
              "value": "20"
            },
            {
              "text": "Shared Line",
              "value": "21"
            },
            {
              "text": "XML Phonebook",
              "value": "22"
            },
            {
              "text": "Group Pickup",
              "value": "23"
            },
            {
              "text": "Paging",
              "value": "24"
            },
            {
              "text": "Record",
              "value": "25"
            },
            {
              "text": "XML Browser",
              "value": "27"
            },
            {
              "text": "Hot Desking",
              "value": "34"
            },
            {
              "text": "URL Record",
              "value": "35"
            },
            {
              "text": "LDAP",
              "value": "38"
            },
            {
              "text": "BLF List",
              "value": "39"
            },
            {
              "text": "Prefix",
              "value": "40"
            },
            {
              "text": "Zero Touch",
              "value": "41"
            },
            {
              "text": "ACD",
              "value": "42"
            },
            {
              "text": "Local Group",
              "value": "45"
            },
            {
              "text": "Network Group",
              "value": "46"
            },
            {
              "text": "Phone Lock",
              "value": "50"
            },
            {
              "text": "Meet-Me Conference",
              "value": "55"
            },
            {
              "text": "Retrieve Park",
              "value": "56"
            },
            {
              "text": "Hoteling",
              "value": "57"
            },
            {
              "text": "ACD Trace",
              "value": "58"
            },
            {
              "text": "Disp Code",
              "value": "59"
            },
            {
              "text": "Emergency",
              "value": "60"
            },
            {
              "text": "Directory",
              "value": "61"
            }
          ]
        },
        {
          "variable": "linekey_mode",
          "description": "Line Key {count} Event Mode",
          "type": "list",
          "options": [
            {
              "text": "BLF",
              "value": "blf"
            },
            {
              "text": "BLA",
              "value": "bla"
            }
          ]
        },
        {
          "variable": "linekey_line",
          "description": "Line Key {count} Line",
          "type": "list",
          "options": [
            {
              "text": "Auto",
              "value": "0"
            },
            {
              "text": "Line 1",
              "value": "1"
            },
            {
              "text": "Line 2",
              "value": "2"
            },
            {
              "text": "Line 3",
              "value": "3"
            },
            {
              "text": "Line 4",
              "value": "4"
            },
            {
              "text": "Line 5",
              "value": "5"
            },
            {
              "text": "Line 6",
              "value": "6"
            }
          ]
        },
        {
          "variable": "linekey_extension",
          "description": "Line Key {count} Extension",
          "type": "input"
        },
        {
          "variable": "linekey_pickup",
          "description": "Line Key {count} Pickup Number",
          "type": "input"
        }
      ];

      var itemsLineKeysT3x = [
        {
          "variable": "linekey_type",
          "description": "Line Key {count} Type",
          "type": "list",
          "options": [
            {
              "text": "N\/A",
              "value": "0"
            },
            {
              "text": "Conference",
              "value": "1"
            },
            {
              "text": "Forward",
              "value": "2"
            },
            {
              "text": "Transfer",
              "value": "3"
            },
            {
              "text": "Hold",
              "value": "4"
            },
            {
              "text": "Do Not Disturb",
              "value": "5"
            },
            {
              "text": "Redial",
              "value": "6"
            },
            {
              "text": "Call Return",
              "value": "7"
            },
            {
              "text": "SMS",
              "value": "8"
            },
            {
              "text": "Call Pickup",
              "value": "9"
            },
            {
              "text": "Call Park",
              "value": "10"
            },
            {
              "text": "DTMF",
              "value": "11"
            },
            {
              "text": "Voicemail",
              "value": "12"
            },
            {
              "text": "Speed Dial",
              "value": "13"
            },
            {
              "text": "Intercom",
              "value": "14"
            },
            {
              "text": "Line",
              "value": "15"
            },
            {
              "text": "BLF",
              "value": "16"
            },
            {
              "text": "URL",
              "value": "17"
            },
            {
              "text": "Group Listing",
              "value": "18"
            },
            {
              "text": "Public Hold",
              "value": "19"
            },
            {
              "text": "Private Hold",
              "value": "20"
            },
            {
              "text": "Shared Line",
              "value": "21"
            },
            {
              "text": "XML Phonebook",
              "value": "22"
            },
            {
              "text": "Group Pickup",
              "value": "23"
            },
            {
              "text": "Paging",
              "value": "24"
            },
            {
              "text": "Record",
              "value": "25"
            },
            {
              "text": "XML Browser",
              "value": "27"
            },
            {
              "text": "Hot Desking",
              "value": "34"
            },
            {
              "text": "URL Record",
              "value": "35"
            },
            {
              "text": "LDAP",
              "value": "38"
            },
            {
              "text": "BLF List",
              "value": "39"
            },
            {
              "text": "Prefix",
              "value": "40"
            },
            {
              "text": "Zero Touch",
              "value": "41"
            },
            {
              "text": "ACD",
              "value": "42"
            },
            {
              "text": "Local Group",
              "value": "45"
            },
            {
              "text": "Network Group",
              "value": "46"
            },
            {
              "text": "Phone Lock",
              "value": "50"
            },
            {
              "text": "Meet-Me Conference",
              "value": "55"
            },
            {
              "text": "Retrieve Park",
              "value": "56"
            },
            {
              "text": "Hoteling",
              "value": "57"
            },
            {
              "text": "ACD Trace",
              "value": "58"
            },
            {
              "text": "Disp Code",
              "value": "59"
            },
            {
              "text": "Emergency",
              "value": "60"
            },
            {
              "text": "Directory",
              "value": "61"
            }
          ]
        },
        {
          "variable": "linekey_line",
          "description": "Line Key {count} Line",
          "type": "list",
          "options": [
            {
              "text": "Auto",
              "value": "0"
            },
            {
              "text": "Line 1",
              "value": "1"
            },
            {
              "text": "Line 2",
              "value": "2"
            },
            {
              "text": "Line 3",
              "value": "3"
            },
            {
              "text": "Line 4",
              "value": "4"
            },
            {
              "text": "Line 5",
              "value": "5"
            },
            {
              "text": "Line 6",
              "value": "6"
            }
          ]
        },
        {
          "variable": "linekey_label",
          "description": "Line Key {count} Label",
          "type": "input"
        },
        {
          "variable": "linekey_value",
          "description": "Line Key {count} Value",
          "type": "input"
        },
        {
          "variable": "linekey_pickup",
          "description": "Line Key {count} Pickup Number",
          "type": "input"
        }
      ];

      var itemsLineKeysT4xT5xT22xT44xT55x = [
        {
          "variable": "linekey_type",
          "description": "Line Key {count} Type",
          "type": "list",
          "options": [
            {
              "text": "N\/A",
              "value": "0"
            },
            {
              "text": "Conference",
              "value": "1"
            },
            {
              "text": "Forward",
              "value": "2"
            },
            {
              "text": "Transfer",
              "value": "3"
            },
            {
              "text": "Hold",
              "value": "4"
            },
            {
              "text": "Do Not Disturb",
              "value": "5"
            },
            {
              "text": "Call Return",
              "value": "7"
            },
            {
              "text": "SMS",
              "value": "8"
            },
            {
              "text": "Call Pickup",
              "value": "9"
            },
            {
              "text": "Call Park",
              "value": "10"
            },
            {
              "text": "DTMF",
              "value": "11"
            },
            {
              "text": "Voicemail",
              "value": "12"
            },
            {
              "text": "Speed Dial",
              "value": "13"
            },
            {
              "text": "Intercom",
              "value": "14"
            },
            {
              "text": "Line",
              "value": "15"
            },
            {
              "text": "BLF",
              "value": "16"
            },
            {
              "text": "URL",
              "value": "17"
            },
            {
              "text": "Group Listing",
              "value": "18"
            },
            {
              "text": "Private Hold",
              "value": "20"
            },
            {
              "text": "XML Phonebook",
              "value": "22"
            },
            {
              "text": "Group Pickup",
              "value": "23"
            },
            {
              "text": "Paging",
              "value": "24"
            },
            {
              "text": "Record",
              "value": "25"
            },
            {
              "text": "XML Browser",
              "value": "27"
            },
            {
              "text": "Hot Desking",
              "value": "34"
            },
            {
              "text": "URL Record",
              "value": "35"
            },
            {
              "text": "LDAP",
              "value": "38"
            },
            {
              "text": "BLF List",
              "value": "39"
            },
            {
              "text": "Prefix",
              "value": "40"
            },
            {
              "text": "Zero Touch",
              "value": "41"
            },
            {
              "text": "ACD",
              "value": "42"
            },
            {
              "text": "Local Group",
              "value": "45"
            },
            {
              "text": "Network Group",
              "value": "46"
            },
            {
              "text": "Phone Lock",
              "value": "50"
            },
            {
              "text": "Meet-Me Conference",
              "value": "55"
            },
            {
              "text": "Retrieve Park",
              "value": "56"
            },
            {
              "text": "Hoteling",
              "value": "57"
            },
            {
              "text": "ACD Trace",
              "value": "58"
            },
            {
              "text": "Disp Code",
              "value": "59"
            },
            {
              "text": "Emergency",
              "value": "60"
            },
            {
              "text": "Directory",
              "value": "61"
            },
            {
              "text": "Network Favorite",
              "value": "62"
            },
            {
              "text": "UC Favorite",
              "value": "63"
            },
            {
              "text": "Buddies",
              "value": "64"
            },
            {
              "text": "My Status",
              "value": "65"
            },
            {
              "text": "Paging List",
              "value": "66"
            },
            {
              "text": "Custom Key",
              "value": "73"
            }
          ]
        },
        {
          "variable": "linekey_value",
          "description": "Line Key {count} Value",
          "type": "input"
        },
        {
          "variable": "linekey_label",
          "description": "Line Key {count} Label or Short Label",
          "type": "input"
        },
        {
          "variable": "linekey_line",
          "description": "Line Key {count} Line",
          "type": "list",
          "options": [
            {
              "text": "Line 1",
              "value": "1"
            },
            {
              "text": "Line 2",
              "value": "2"
            },
            {
              "text": "Line 3",
              "value": "3"
            }
          ]
        },
        {
          "variable": "linekey_pickup",
          "description": "Line Key {count} Pickup Number",
          "type": "input"
        }
      ];

      var itemsLineKeysVP530 = [
        {
          "variable": "linekey_type",
          "description": "Line Key {count} Type",
          "type": "list",
          "options": [
            {
              "text": "Conference",
              "value": "1"
            },
            {
              "text": "Forward",
              "value": "2"
            },
            {
              "text": "Transfer",
              "value": "3"
            },
            {
              "text": "Hold",
              "value": "4"
            },
            {
              "text": "Do Not Disturb",
              "value": "5"
            },
            {
              "text": "Redial",
              "value": "6"
            },
            {
              "text": "Call Return",
              "value": "7"
            },
            {
              "text": "SMS",
              "value": "8"
            },
            {
              "text": "Call Pickup",
              "value": "9"
            },
            {
              "text": "Call Park",
              "value": "10"
            },
            {
              "text": "DTMF",
              "value": "11"
            },
            {
              "text": "Voicemail",
              "value": "12"
            },
            {
              "text": "Speed Dial",
              "value": "13"
            },
            {
              "text": "Intercom",
              "value": "14"
            },
            {
              "text": "Line",
              "value": "15"
            },
            {
              "text": "BLF",
              "value": "16"
            },
            {
              "text": "URL",
              "value": "17"
            },
            {
              "text": "Group Listing",
              "value": "18"
            },
            {
              "text": "Public Hold",
              "value": "19"
            },
            {
              "text": "Private Hold",
              "value": "20"
            },
            {
              "text": "Shared Line",
              "value": "21"
            },
            {
              "text": "XML Phonebook",
              "value": "22"
            },
            {
              "text": "Paging",
              "value": "24"
            },
            {
              "text": "Hot Desking",
              "value": "34"
            }
          ]
        },
        {
          "variable": "linekey_line",
          "description": "Line Key {count} Line",
          "type": "list",
          "options": [
            {
              "text": "Auto",
              "value": "0"
            },
            {
              "text": "Line 1",
              "value": "1"
            },
            {
              "text": "Line 2",
              "value": "2"
            },
            {
              "text": "Line 3",
              "value": "3"
            },
            {
              "text": "Line 4",
              "value": "4"
            },
            {
              "text": "Line 5",
              "value": "5"
            },
            {
              "text": "Line 6",
              "value": "6"
            }
          ]
        },
        {
          "variable": "linekey_label",
          "description": "Line Key {count} Label",
          "type": "input"
        },
        {
          "variable": "linekey_value",
          "description": "Line Key {count} Value",
          "type": "input"
        },
        {
          "variable": "memkey_btype",
          "description": "Line Key {count} DSS Type",
          "type": "list",
          "options": [
            {
              "text": "BLF",
              "value": "blf"
            },
            {
              "text": "BLA",
              "value": "bla"
            }
          ]
        }
      ];

      var items;

      if (modelMap.model === "T20P") {
        items = itemsLineKeysT20p;
      } else if (this.modelGroups.T21pT22pT26p.includes(modelMap.model)) {
        items = itemsLineKeysT21pT22pT26p;
      } else if (modelMap.model === "T28P") {
        items = itemsLineKeysT28p;
      } else if (this.modelGroups.T3x.includes(modelMap.model)) {
        items = itemsLineKeysT3x;
      } else if (this.modelGroups.T4xT5xT22xT44xT55x.includes(modelMap.model)) {
        items = itemsLineKeysT4xT5xT22xT44xT55x;
      } else if (modelMap.model === "VP530") {
        items = itemsLineKeysVP530;
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

    this.lineOptionsUI = function () {
      return {
        "name": "Line Options",
        "items": [
          {
            "variable": "display_name",
            "description": "Display Name",
            "type": "input"
          },
          {
            "variable": "sip_server",
            "description": "SIP Server",
            "max_chars": "16",
            "type": "input"
          },
          {
            "variable": "sip_server_port",
            "description": "SIP Server Port",
            "max_chars": "6",
            "type": "input"
          },
          {
            "variable": "bk_sip_server",
            "description": "SIP Server",
            "max_chars": "16",
            "type": "input"
          },
          {
            "variable": "bk_sip_server_port",
            "description": "SIP Server Port",
            "max_chars": "6",
            "type": "input"
          },
          {
            "variable": "enable_outbound_proxy_server",
            "description": "Enable Outbound Proxy",
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
            "variable": "transport",
            "description": "Transport",
            "type": "list",
            "options": [
              {
                "text": "UDP",
                "value": "0"
              },
              {
                "text": "TCP",
                "value": "1"
              },
              {
                "text": "TLS",
                "value": "2"
              }
            ]
          },
          {
            "variable": "nat_Traversal",
            "description": "NAT Traversal",
            "type": "list",
            "options": [
              {
                "text": "Disabled",
                "value": "0"
              },
              {
                "text": "STUN",
                "value": "1"
              }
            ]
          },
          {
            "variable": "stun_server",
            "description": "STUN Server",
            "max_chars": "16",
            "type": "input"
          },
          {
            "variable": "stun_server_port",
            "description": "STUN Server Port",
            "max_chars": "6",
            "type": "input"
          },
          {
            "variable": "voicemail_number",
            "description": "Voicemail Number",
            "type": "input"
          },
          {
            "variable": "missed_call_log",
            "description": "Missed Call Log",
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
            "variable": "auto_answer",
            "description": "Auto Answer",
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
          }
        ]
      }
    }

    this.sideKeysUI = function (modelMap) {
      var itemsSideKeysT26pT28pT38gVP530 = [
        {
          "variable": "$memkey_type",
          "default_value": "",
          "category": "keys",
          "description": "Side Key {$count} Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Conference",
            "value": "1"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Transfer",
            "value": "3"
          },
          {
            "text": "Hold",
            "value": "4"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Call Park",
            "value": "10"
          },
          {
            "text": "DTMF",
            "value": "11"
          },
          {
            "text": "Voicemail",
            "value": "12"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "Line",
            "value": "15"
          },
          {
            "text": "BLF",
            "value": "16"
          },
          {
            "text": "URL",
            "value": "17"
          },
          {
            "text": "Group Listing",
            "value": "18"
          },
          {
            "text": "Public Hold",
            "value": "19"
          },
          {
            "text": "Private Hold",
            "value": "20"
          },
          {
            "text": "Shared Line",
            "value": "21"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "Record",
            "value": "25"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "URL Record",
            "value": "35"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "BLF List",
            "value": "39"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "ACD",
            "value": "42"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Retrieve Park",
            "value": "56"
          },
          {
            "text": "Hoteling",
            "value": "57"
          },
          {
            "text": "ACD Trace",
            "value": "58"
          },
          {
            "text": "Disp Code",
            "value": "59"
          },
          {
            "text": "Emergency",
            "value": "60"
          },
          {
            "text": "Directory",
            "value": "61"
          }
          ]
        },
        {
          "variable": "$memkey_btype",
          "default_value": "",
          "description": "Side Key {$count} DSS Type",
          "type": "list",
          "data": [{
            "text": "BLF",
            "value": "blf"
          },
          {
            "text": "BLA",
            "value": "bla"
          }
          ]
        },
        {
          "variable": "$memkey_value",
          "default_value": "",
          "description": "Side Key {$count} Value",
          "type": "input"
        }
      ];

      var itemsSideKeysVP530 = [
        {
          "variable": "$memkey_type",
          "default_value": "",
          "category": "keys",
          "description": "Side Key {$count} Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Conference",
            "value": "1"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Transfer",
            "value": "3"
          },
          {
            "text": "Hold",
            "value": "4"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Call Park",
            "value": "10"
          },
          {
            "text": "DTMF",
            "value": "11"
          },
          {
            "text": "Voicemail",
            "value": "12"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "Line(for line key only)",
            "value": "15"
          },
          {
            "text": "BLF",
            "value": "16"
          },
          {
            "text": "URL",
            "value": "17"
          },
          {
            "text": "Group Listing",
            "value": "18"
          },
          {
            "text": "Public Hold",
            "value": "19"
          },
          {
            "text": "Private Hold",
            "value": "20"
          },
          {
            "text": "Shared Line",
            "value": "21"
          },
          {
            "text": "XML Group",
            "value": "22"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XMLBrowser",
            "value": "27"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Switch",
            "value": "37"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "XML Phonebook",
            "value": "47"
          }
          ]
        },
        {
          "variable": "$memkey_btype",
          "default_value": "",
          "description": "Side Key {$count} DSS Type",
          "type": "list",
          "data": [{
            "text": "BLF",
            "value": "blf"
          },
          {
            "text": "BLA",
            "value": "bla"
          }
          ]
        },
        {
          "variable": "$memkey_value",
          "default_value": "",
          "description": "Side Key {$count} Value",
          "type": "input"
        },
        {
          "variable": "$memkey_label",
          "default_value": "",
          "description": "Side Key {$count} Label",
          "type": "input"
        }
      ];

      if (this.modelGroups.T26pT28pT38gVP530.includes(modelMap.model)) {
        return {
          "name": "SideKeys",
          "items": [
            {
              "description": "SideKeys",
              "type": "loop",
              "loop_start": 1,
              "loop_end": 10,
              "data": {
                "items": itemsSideKeysT26pT28pT38gVP530
              }
            }
          ]
        }
      } else if (modelMap.model === "VP530") {
        return {
          "name": "SideKeys",
          "items": [
            {
              "description": "SideKeys",
              "type": "loop",
              "loop_start": 1,
              "loop_end": 18,
              "data": {
                "items": itemsSideKeysVP530
              }
            }
          ]
        }
      }
    }

    this.programmableKeysUI = function (modelMap) {
      var itemsProgrammableKeysT21pT22pT26pT28p = [
        {
          "variable": "$hardkey_up_type",
          "default_value": "28",
          "description": "Up Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_up_line",
          "default_value": "",
          "description": "Up Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_up_extension",
          "default_value": "",
          "description": "Up Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_down_type",
          "default_value": "29",
          "description": "Down Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_down_line",
          "default_value": "",
          "description": "Down Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_down_extension",
          "default_value": "",
          "description": "Down Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_left_type",
          "default_value": "7",
          "description": "Left Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_left_line",
          "default_value": "",
          "description": "Left Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_left_extension",
          "default_value": "",
          "description": "Left Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_right_type",
          "default_value": "31",
          "description": "Right Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_right_line",
          "default_value": "",
          "description": "Right Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_right_extension",
          "default_value": "",
          "description": "Right Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_ok_type",
          "default_value": "33",
          "description": "OK Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_line",
          "default_value": "",
          "description": "OK Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_extension",
          "default_value": "",
          "description": "OK Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_cancel_type",
          "default_value": "",
          "description": "Cancel Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_cancel_line",
          "default_value": "",
          "description": "Cancel Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_cancel_extension",
          "default_value": "",
          "description": "Cancel Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_fwd_type",
          "default_value": "",
          "description": "Transfer Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_line",
          "default_value": "",
          "description": "Transfer Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_extension",
          "default_value": "",
          "description": "Transfer Button Extension",
          "type": "input"
        }
      ];

      var itemsProgrammableKeysT3x = [
        {
          "variable": "$hardkey_up_type",
          "default_value": "28",
          "description": "Up Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_up_line",
          "default_value": "",
          "description": "Up Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_up_value",
          "default_value": "",
          "description": "Up Button Value",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_down_type",
          "default_value": "29",
          "description": "Down Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_down_line",
          "default_value": "",
          "description": "Down Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_down_value",
          "default_value": "",
          "description": "Down Button Value",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_left_type",
          "default_value": "7",
          "description": "Left Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_left_line",
          "default_value": "",
          "description": "Left Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_left_value",
          "default_value": "",
          "description": "Left Button Value",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_right_type",
          "default_value": "31",
          "description": "Right Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_right_line",
          "default_value": "",
          "description": "Right Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_right_value",
          "default_value": "",
          "description": "Right Button Value",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_ok_type",
          "default_value": "33",
          "description": "OK Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_line",
          "default_value": "",
          "description": "OK Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_value",
          "default_value": "",
          "description": "OK Button Value",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_cancel_type",
          "default_value": "",
          "description": "Cancel Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_cancel_line",
          "default_value": "",
          "description": "Cancel Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_cancel_value",
          "default_value": "",
          "description": "Cancel Button Value",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_fwd_type",
          "default_value": "",
          "description": "Transfer Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Redial",
            "value": "6"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Call Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Directory",
            "value": "29"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "SwitchAccount",
            "value": "31"
          },
          {
            "text": "NewSMS",
            "value": "32"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_line",
          "default_value": "",
          "description": "Transfer Button Line",
          "type": "list",
          "data": [{
            "text": "Auto",
            "value": "0"
          },
          {
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_value",
          "default_value": "",
          "description": "Transfer Button Value",
          "type": "input"
        }
      ];

      var itemsProgrammableKeysT4x = [
        {
          "variable": "$hardkey_up_type",
          "default_value": "28",
          "description": "Up Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_up_line",
          "default_value": "1",
          "description": "Up Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_up_extension",
          "default_value": "",
          "description": "Up Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_down_type",
          "default_value": "38",
          "description": "Down Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_down_line",
          "default_value": "1",
          "description": "Down Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_down_extension",
          "default_value": "",
          "description": "Down Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_left_type",
          "default_value": "7",
          "description": "Left Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_left_line",
          "default_value": "1",
          "description": "Left Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_left_extension",
          "default_value": "",
          "description": "Left Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_right_type",
          "default_value": "5",
          "description": "Right Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_right_line",
          "default_value": "1",
          "description": "Right Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_right_extension",
          "default_value": "",
          "description": "Right Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_ok_type",
          "default_value": "33",
          "description": "OK Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_line",
          "default_value": "1",
          "description": "OK Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_extension",
          "default_value": "",
          "description": "OK Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_cancel_type",
          "default_value": "0",
          "description": "Cancel Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_cancel_line",
          "default_value": "1",
          "description": "Cancel Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_cancel_extension",
          "default_value": "",
          "description": "Cancel Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_hold_type",
          "default_value": "0",
          "description": "Hold Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_hold_line",
          "default_value": "1",
          "description": "Hold Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_hold_extension",
          "default_value": "",
          "description": "Hold Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_mute_type",
          "default_value": "0",
          "description": "Mute Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_mute_line",
          "default_value": "1",
          "description": "Mute Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_mute_extension",
          "default_value": "",
          "description": "Mute Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_fwd_type",
          "default_value": "2",
          "description": "Transfer Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_line",
          "default_value": "1",
          "description": "Transfer Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_extension",
          "default_value": "",
          "description": "Transfer Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_redial_type",
          "default_value": "0",
          "description": "Redial Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_redial_line",
          "default_value": "1",
          "description": "Redial Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_redial_extension",
          "default_value": "0",
          "description": "Redial Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_mess_type",
          "default_value": "0",
          "description": "Message Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_mess_line",
          "default_value": "1",
          "description": "Message Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_mess_extension",
          "default_value": "0",
          "description": "Message Button Extension",
          "type": "input"
        }
      ];

      var itemsProgrammableKeysT5xT55x = [
        {
          "variable": "$hardkey_up_type",
          "default_value": "28",
          "description": "Up Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_up_line",
          "default_value": "1",
          "description": "Up Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_up_extension",
          "default_value": "",
          "description": "Up Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_down_type",
          "default_value": "38",
          "description": "Down Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_down_line",
          "default_value": "1",
          "description": "Down Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_down_extension",
          "default_value": "",
          "description": "Down Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_left_type",
          "default_value": "7",
          "description": "Left Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_left_line",
          "default_value": "1",
          "description": "Left Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_left_extension",
          "default_value": "",
          "description": "Left Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_right_type",
          "default_value": "5",
          "description": "Right Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_right_line",
          "default_value": "1",
          "description": "Right Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_right_extension",
          "default_value": "",
          "description": "Right Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_ok_type",
          "default_value": "33",
          "description": "OK Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_line",
          "default_value": "1",
          "description": "OK Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_extension",
          "default_value": "",
          "description": "OK Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_cancel_type",
          "default_value": "0",
          "description": "Cancel Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_cancel_line",
          "default_value": "1",
          "description": "Cancel Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_cancel_extension",
          "default_value": "",
          "description": "Cancel Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_conf_type",
          "default_value": "0",
          "description": "Conf Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_conf_line",
          "default_value": "1",
          "description": "Conf Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_conf_extension",
          "default_value": "",
          "description": "Conf Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_hold_type",
          "default_value": "0",
          "description": "Hold Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_hold_line",
          "default_value": "1",
          "description": "Hold Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_hold_extension",
          "default_value": "",
          "description": "Hold Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_mute_type",
          "default_value": "0",
          "description": "Mute Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_mute_line",
          "default_value": "1",
          "description": "Mute Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_mute_extension",
          "default_value": "",
          "description": "Mute Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_fwd_type",
          "default_value": "2",
          "description": "Transfer Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_line",
          "default_value": "1",
          "description": "Transfer Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_extension",
          "default_value": "",
          "description": "Transfer Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_redial_type",
          "default_value": "0",
          "description": "Redial Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_redial_line",
          "default_value": "1",
          "description": "Redial Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_redial_extension",
          "default_value": "0",
          "description": "Redial Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_mess_type",
          "default_value": "0",
          "description": "Message Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_mess_line",
          "default_value": "1",
          "description": "Message Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_mess_extension",
          "default_value": "0",
          "description": "Message Button Extension",
          "type": "input"
        }
      ];

      var itemsProgrammableKeysT11x = [
        {
          "variable": "$hardkey_up_type",
          "default_value": "28",
          "description": "Up Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_up_line",
          "default_value": "1",
          "description": "Up Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_up_extension",
          "default_value": "",
          "description": "Up Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_down_type",
          "default_value": "38",
          "description": "Down Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_down_line",
          "default_value": "1",
          "description": "Down Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_down_extension",
          "default_value": "",
          "description": "Down Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_left_type",
          "default_value": "7",
          "description": "Left Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_left_line",
          "default_value": "1",
          "description": "Left Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_left_extension",
          "default_value": "",
          "description": "Left Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_right_type",
          "default_value": "5",
          "description": "Right Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_right_line",
          "default_value": "1",
          "description": "Right Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_right_extension",
          "default_value": "",
          "description": "Right Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_ok_type",
          "default_value": "33",
          "description": "OK Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_line",
          "default_value": "1",
          "description": "OK Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_extension",
          "default_value": "",
          "description": "OK Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_mute_type",
          "default_value": "0",
          "description": "Mute Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_mute_line",
          "default_value": "1",
          "description": "Mute Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_mute_extension",
          "default_value": "",
          "description": "Mute Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_fwd_type",
          "default_value": "2",
          "description": "Transfer Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_line",
          "default_value": "1",
          "description": "Transfer Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_extension",
          "default_value": "",
          "description": "Transfer Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_redial_type",
          "default_value": "0",
          "description": "Redial Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_redial_line",
          "default_value": "1",
          "description": "Redial Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_redial_extension",
          "default_value": "0",
          "description": "Redial Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_mess_type",
          "default_value": "0",
          "description": "Message Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_mess_line",
          "default_value": "1",
          "description": "Message Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_mess_extension",
          "default_value": "0",
          "description": "Message Button Extension",
          "type": "input"
        }
      ];

      var itemsProgrammableKeysT22x = [
        {
          "variable": "$hardkey_up_type",
          "default_value": "28",
          "description": "Up Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_up_line",
          "default_value": "1",
          "description": "Up Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_up_extension",
          "default_value": "",
          "description": "Up Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_down_type",
          "default_value": "38",
          "description": "Down Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_down_line",
          "default_value": "1",
          "description": "Down Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_down_extension",
          "default_value": "",
          "description": "Down Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_left_type",
          "default_value": "7",
          "description": "Left Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_left_line",
          "default_value": "1",
          "description": "Left Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_left_extension",
          "default_value": "",
          "description": "Left Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_right_type",
          "default_value": "5",
          "description": "Right Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_right_line",
          "default_value": "1",
          "description": "Right Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_right_extension",
          "default_value": "",
          "description": "Right Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_ok_type",
          "default_value": "33",
          "description": "OK Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_line",
          "default_value": "1",
          "description": "OK Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_ok_extension",
          "default_value": "",
          "description": "OK Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_cancel_type",
          "default_value": "0",
          "description": "Cancel Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_cancel_line",
          "default_value": "1",
          "description": "Cancel Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_cancel_extension",
          "default_value": "",
          "description": "Cancel Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_conf_type",
          "default_value": "0",
          "description": "Conf Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_conf_line",
          "default_value": "1",
          "description": "Conf Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_conf_extension",
          "default_value": "",
          "description": "Conf Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_hold_type",
          "default_value": "0",
          "description": "Hold Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_hold_line",
          "default_value": "1",
          "description": "Hold Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_hold_extension",
          "default_value": "",
          "description": "Hold Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_mute_type",
          "default_value": "0",
          "description": "Mute Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_mute_line",
          "default_value": "1",
          "description": "Mute Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_mute_extension",
          "default_value": "",
          "description": "Mute Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_fwd_type",
          "default_value": "2",
          "description": "Transfer Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_line",
          "default_value": "1",
          "description": "Transfer Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_extension",
          "default_value": "",
          "description": "Transfer Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_redial_type",
          "default_value": "0",
          "description": "Redial Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_redial_line",
          "default_value": "1",
          "description": "Redial Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_redial_extension",
          "default_value": "0",
          "description": "Redial Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_mess_type",
          "default_value": "0",
          "description": "Message Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_mess_line",
          "default_value": "1",
          "description": "Message Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_mess_extension",
          "default_value": "0",
          "description": "Message Button Extension",
          "type": "input"
        }
      ];

      var itemsProgrammableKeysT44x = [
        {
          "variable": "$hardkey_hold_type",
          "default_value": "0",
          "description": "Hold Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_hold_line",
          "default_value": "1",
          "description": "Hold Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_hold_extension",
          "default_value": "",
          "description": "Hold Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_mute_type",
          "default_value": "0",
          "description": "Mute Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_mute_line",
          "default_value": "1",
          "description": "Mute Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_mute_extension",
          "default_value": "",
          "description": "Mute Button Extension",
          "type": "input"
        },
        {
          "type": "break"
        },
        {
          "variable": "$hardkey_fwd_type",
          "default_value": "2",
          "description": "Transfer Button Type",
          "type": "list",
          "data": [{
            "text": "N\/A",
            "value": "0"
          },
          {
            "text": "Forward",
            "value": "2"
          },
          {
            "text": "Do Not Disturb",
            "value": "5"
          },
          {
            "text": "Call Return",
            "value": "7"
          },
          {
            "text": "SMS",
            "value": "8"
          },
          {
            "text": "Direct Pickup",
            "value": "9"
          },
          {
            "text": "Speed Dial",
            "value": "13"
          },
          {
            "text": "Intercom",
            "value": "14"
          },
          {
            "text": "XML Phonebook",
            "value": "22"
          },
          {
            "text": "Group Pickup",
            "value": "23"
          },
          {
            "text": "Paging",
            "value": "24"
          },
          {
            "text": "XML Browser",
            "value": "27"
          },
          {
            "text": "History",
            "value": "28"
          },
          {
            "text": "Menu",
            "value": "30"
          },
          {
            "text": "New SMS",
            "value": "32"
          },
          {
            "text": "Status",
            "value": "33"
          },
          {
            "text": "Hot Desking",
            "value": "34"
          },
          {
            "text": "LDAP",
            "value": "38"
          },
          {
            "text": "Prefix",
            "value": "40"
          },
          {
            "text": "Zero Touch",
            "value": "41"
          },
          {
            "text": "Local Directory",
            "value": "43"
          },
          {
            "text": "Network Directory",
            "value": "44"
          },
          {
            "text": "Local Group",
            "value": "45"
          },
          {
            "text": "Network Group",
            "value": "46"
          },
          {
            "text": "XML Directory",
            "value": "47"
          },
          {
            "text": "Phone Lock",
            "value": "50"
          },
          {
            "text": "Switch Account Up",
            "value": "51"
          },
          {
            "text": "Switch Account Down",
            "value": "52"
          },
          {
            "text": "Meet-Me Conference",
            "value": "55"
          },
          {
            "text": "Directory",
            "value": "61"
          },
          {
            "text": "Buddies",
            "value": "64"
          },
          {
            "text": "My Status",
            "value": "65"
          },
          {
            "text": "Paging List",
            "value": "66"
          },
          {
            "text": "Custom Key",
            "value": "73"
          },
          {
            "text": "Moble Account",
            "value": "77"
          },
          {
            "text": "Favorite",
            "value": "85"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_line",
          "default_value": "1",
          "description": "Transfer Button Line",
          "type": "list",
          "data": [{
            "text": "Line 1",
            "value": "1"
          },
          {
            "text": "Line 2",
            "value": "2"
          },
          {
            "text": "Line 3",
            "value": "3"
          }
          ]
        },
        {
          "variable": "$hardkey_fwd_extension",
          "default_value": "",
          "description": "Transfer Button Extension",
          "type": "input"
        }
      ];

      var items;

      if (this.modelGroups.T21pT22pT26pT28p.includes(modelMap.model)) {
        items = itemsProgrammableKeysT21pT22pT26pT28p;
      } else if (this.modelGroups.T3x.includes(modelMap.model)) {
        items = itemsProgrammableKeysT3x;
      } else if (this.modelGroups.T4x.includes(modelMap.model)) {
        items = itemsProgrammableKeysT4x;
      } else if (this.modelGroups.T5xT55x.includes(modelMap.model)) {
        items = itemsProgrammableKeysT5xT55x;
      } else if (this.modelGroups.T11x.includes(modelMap.model)) {
        items = itemsProgrammableKeysT11x;
      } else if (this.modelGroups.T22x.includes(modelMap.model)) {
        items = itemsProgrammableKeysT22x;
      } else if (this.modelGroups.T44x.includes(modelMap.model)) {
        items = itemsProgrammableKeysT44x;
      }

      return {
        "name": "ProgrammableKeys",
        "items": items
      }
    }

    this.expKeys1aUI = function (modelMap) {
      return {}
    }

    this.expKeys1bUI = function (modelMap) {
      return {}
    }

  })