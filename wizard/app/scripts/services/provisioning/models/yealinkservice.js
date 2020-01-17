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
        "t11x": { //// remove family/series?
          "T19P_E2": {
            "model": "T19P_E2",
            "vlan": true,
            "provisioning": true,
            "password": true,
            "ringtone": true,
            "settings": true,
            "ldap": true,
            "display": true,
            "softKeys": [
              {
                "start": 1,
                "end": 9
              },
              {
                "start": 13,
                "end": 14
              }
            ],
            "hidden_variables": [
              "programablekey_label_5",
              "programablekey_label_6",
              "programablekey_label_7",
              "programablekey_label_8",
              "programablekey_label_9",
              "programablekey_label_13",
              "programablekey_label_14"
            ]
          }
        },
        "t22x": {
          "T21P_E2": {
            "model": "T21P_E2",
            "vlan": true,
            "provisioning": true,
            "password": true,
            "ringtone": true,
            "settings": true,
            "ldap": true,
            "display": true,
            "lineKeys": 2,
            "softKeys": [
              {
                "start": 1,
                "end": 10
              },
              {
                "start": 14,
                "end": 14
              }
            ],
            "hidden_variables": [
              "programablekey_label_5",
              "programablekey_label_6",
              "programablekey_label_7",
              "programablekey_label_8",
              "programablekey_label_9",
              "programablekey_label_13",
              "programablekey_label_14"
            ]
          },
          "T23P_G": {
            "model": "T23P_G",
            "vlan": true,
            "provisioning": true,
            "password": true,
            "ringtone": true,
            "settings": true,
            "ldap": true,
            "display": true,
            "lineKeys": 3,
            "softKeys": [
              {
                "start": 1,
                "end": 10
              },
              {
                "start": 14,
                "end": 14
              }
            ],
            "hidden_variables": [
              "programablekey_label_5",
              "programablekey_label_6",
              "programablekey_label_7",
              "programablekey_label_8",
              "programablekey_label_9",
              "programablekey_label_13",
              "programablekey_label_14"
            ]
          },
          "T27G": {
            "model": "T27G",
            "vlan": true,
            "provisioning": true,
            "password": true,
            "ringtone": true,
            "settings": true,
            "ldap": true,
            "display": true,
            "lineKeys": 21,
            "softKeys": [
              {
                "start": 1,
                "end": 14
              }
            ],
            "expansionKeys": {
              "modules": 6,
              "keys": [
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
        "t5x": {
          "T53": {
            "model": "T53",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 21,
            "programmableKeys": true
          },
          "T53W": { //// rimuovere
            "model": "T53W",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 21,
            "programmableKeys": true
          },
          "T54S": { //// eliminare
            "model": "T54S",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 10,
            "programmableKeys": true
          },
          "T54W": { //// verificare 
            "model": "T54W",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true
          }
        },
        "t55x": {
          "T56A": { // verificare (rimuovere?)
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
          "T58A": {
            "model": "T58A",
            "provisioning": true,
            "softKeys": true,
            "lineKeys": 27,
            "programmableKeys": true
          },
          "T58V": { //// rimuovere
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

    this.modelGroups = { //// todo delete?
      "T4xT5xT11xT22xT44xT55x": [
        "T40P", "T40G", "T41P", "T41S", "T42S", "T42G", "T46G", "T46S", "T48G", "T48S",
        "T53", "T53W", "T54S", "T54W",
        "T19P_E2",
        "T21P_E2", "T23P_G", "T27P", "T27G", "T29G",
        "T49G",
        "T56A", "T57", "T58A", "T58V", "VP59"
      ],
      "T4xT5xT22xT44xT55x": [
        "T40P", "T40G", "T41P", "T41S", "T42S", "T42G", "T46G", "T46S", "T48G", "T48S",
        "T53", "T53W", "T54S", "T54W",
        "T21P_E2", "T23P_G", "T27P", "T27G", "T29G",
        "T49G",
        "T56A", "T57", "T58A", "T58V", "VP59"
      ],
      "T4x": [
        "T40P", "T40G", "T41P", "T41S", "T42S", "T42G", "T46G", "T46S", "T48G", "T48S"
      ],
      "T5xT55x": [
        "T40P", "T40G", "T41P", "T41S", "T42S", "T42G", "T46G", "T46S", "T48G", "T48S",
        "T56A", "T57", "T58A", "T58V", "VP59"
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

    this.hasGeneralSection = function (modelMap) { //// move somewhere else, vendor independent
      return modelMap.settings || modelMap.password;
    }

    this.hasPreferencesSection = function (modelMap) { //// move somewhere else, vendor independent
      return modelMap.ringtone || modelMap.display || modelMap.wallpaper || modelMap.screensaver;
    }

    this.hasNetworkSection = function (modelMap) { //// move somewhere else, vendor independent
      return modelMap.vlan || modelMap.ldap;
    }

    this.hasProvisioningSection = function (modelMap) { //// move somewhere else, vendor independent
      return modelMap.provisioning;
    }

    this.hasSoftKeysSection = function (modelMap) { //// move somewhere else, vendor independent
      return modelMap.softKeys;
    }

    this.hasLineKeysSection = function (modelMap) { //// move somewhere else, vendor independent
      return modelMap.lineKeys;
    }

    this.hasExpansionKeysSection = function (modelMap) { //// move somewhere else, vendor independent
      return modelMap.expansionKeys;
    }

    this.general = function (modelMap) {
      if (!hasGeneralSection(modelMap)) {
        return;
      }

      var settingsItems = [];
      var passwordItems = [];

      if (modelMap.settings) {
        settingsItems = [
          {
            "variable": "yealink.language(language)", //// todo should rename according to macro?
            "description": "Language display (phone UI)",
            "type": "list",
            "options": [
              {
                "text": "English",
                "value": "English"
              },
              {
                "text": "Chinese",
                "value": "Chinese"
              },
              {
                "text": "Simplified Chinese",
                "value": "Simplified Chinese"
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
            "variable": "network_time_server",
            "description": "Network time (NTP) server",
            "type": "input"
          },
          {
            "variable": "yealink.timezone(timezone)", //// todo should rename according to macro?
            "description": "Time zone",
            "type": "list",
            "options": [
              {
                "text": "Africa/Abidjan",
                "value": "Africa/Abidjan"
              },
              {
                "text": "Africa/Accra",
                "value": "Africa/Accra"
              },
              {
                "text": "Africa/Addis_Ababa",
                "value": "Africa/Addis_Ababa"
              },
              {
                "text": "Africa/Algiers",
                "value": "Africa/Algiers"
              },
              {
                "text": "Africa/Asmara",
                "value": "Africa/Asmara"
              },
              {
                "text": "Africa/Bamako",
                "value": "Africa/Bamako"
              },
              {
                "text": "Africa/Bangui",
                "value": "Africa/Bangui"
              },
              {
                "text": "Africa/Banjul",
                "value": "Africa/Banjul"
              },
              {
                "text": "Africa/Bissau",
                "value": "Africa/Bissau"
              },
              {
                "text": "Africa/Blantyre",
                "value": "Africa/Blantyre"
              },
              {
                "text": "Africa/Brazzaville",
                "value": "Africa/Brazzaville"
              },
              {
                "text": "Africa/Bujumbura",
                "value": "Africa/Bujumbura"
              },
              {
                "text": "Africa/Cairo",
                "value": "Africa/Cairo"
              },
              {
                "text": "Africa/Casablanca",
                "value": "Africa/Casablanca"
              },
              {
                "text": "Africa/Ceuta",
                "value": "Africa/Ceuta"
              },
              {
                "text": "Africa/Conakry",
                "value": "Africa/Conakry"
              },
              {
                "text": "Africa/Dakar",
                "value": "Africa/Dakar"
              },
              {
                "text": "Africa/Dar_es_Salaam",
                "value": "Africa/Dar_es_Salaam"
              },
              {
                "text": "Africa/Djibouti",
                "value": "Africa/Djibouti"
              },
              {
                "text": "Africa/Douala",
                "value": "Africa/Douala"
              },
              {
                "text": "Africa/El_Aaiun",
                "value": "Africa/El_Aaiun"
              },
              {
                "text": "Africa/Freetown",
                "value": "Africa/Freetown"
              },
              {
                "text": "Africa/Gaborone",
                "value": "Africa/Gaborone"
              },
              {
                "text": "Africa/Harare",
                "value": "Africa/Harare"
              },
              {
                "text": "Africa/Johannesburg",
                "value": "Africa/Johannesburg"
              },
              {
                "text": "Africa/Juba",
                "value": "Africa/Juba"
              },
              {
                "text": "Africa/Kampala",
                "value": "Africa/Kampala"
              },
              {
                "text": "Africa/Khartoum",
                "value": "Africa/Khartoum"
              },
              {
                "text": "Africa/Kigali",
                "value": "Africa/Kigali"
              },
              {
                "text": "Africa/Kinshasa",
                "value": "Africa/Kinshasa"
              },
              {
                "text": "Africa/Lagos",
                "value": "Africa/Lagos"
              },
              {
                "text": "Africa/Libreville",
                "value": "Africa/Libreville"
              },
              {
                "text": "Africa/Lome",
                "value": "Africa/Lome"
              },
              {
                "text": "Africa/Luanda",
                "value": "Africa/Luanda"
              },
              {
                "text": "Africa/Lubumbashi",
                "value": "Africa/Lubumbashi"
              },
              {
                "text": "Africa/Lusaka",
                "value": "Africa/Lusaka"
              },
              {
                "text": "Africa/Malabo",
                "value": "Africa/Malabo"
              },
              {
                "text": "Africa/Maputo",
                "value": "Africa/Maputo"
              },
              {
                "text": "Africa/Maseru",
                "value": "Africa/Maseru"
              },
              {
                "text": "Africa/Mbabane",
                "value": "Africa/Mbabane"
              },
              {
                "text": "Africa/Mogadishu",
                "value": "Africa/Mogadishu"
              },
              {
                "text": "Africa/Monrovia",
                "value": "Africa/Monrovia"
              },
              {
                "text": "Africa/Nairobi",
                "value": "Africa/Nairobi"
              },
              {
                "text": "Africa/Ndjamena",
                "value": "Africa/Ndjamena"
              },
              {
                "text": "Africa/Niamey",
                "value": "Africa/Niamey"
              },
              {
                "text": "Africa/Nouakchott",
                "value": "Africa/Nouakchott"
              },
              {
                "text": "Africa/Ouagadougou",
                "value": "Africa/Ouagadougou"
              },
              {
                "text": "Africa/Porto-Novo",
                "value": "Africa/Porto-Novo"
              },
              {
                "text": "Africa/Sao_Tome",
                "value": "Africa/Sao_Tome"
              },
              {
                "text": "Africa/Tripoli",
                "value": "Africa/Tripoli"
              },
              {
                "text": "Africa/Tunis",
                "value": "Africa/Tunis"
              },
              {
                "text": "Africa/Windhoek",
                "value": "Africa/Windhoek"
              },
              {
                "text": "America/Adak",
                "value": "America/Adak"
              },
              {
                "text": "America/Anchorage",
                "value": "America/Anchorage"
              },
              {
                "text": "America/Anguilla",
                "value": "America/Anguilla"
              },
              {
                "text": "America/Antigua",
                "value": "America/Antigua"
              },
              {
                "text": "America/Araguaina",
                "value": "America/Araguaina"
              },
              {
                "text": "America/Argentina/Buenos_Aires",
                "value": "America/Argentina/Buenos_Aires"
              },
              {
                "text": "America/Argentina/Catamarca",
                "value": "America/Argentina/Catamarca"
              },
              {
                "text": "America/Argentina/Cordoba",
                "value": "America/Argentina/Cordoba"
              },
              {
                "text": "America/Argentina/Jujuy",
                "value": "America/Argentina/Jujuy"
              },
              {
                "text": "America/Argentina/La_Rioja",
                "value": "America/Argentina/La_Rioja"
              },
              {
                "text": "America/Argentina/Mendoza",
                "value": "America/Argentina/Mendoza"
              },
              {
                "text": "America/Argentina/Rio_Gallegos",
                "value": "America/Argentina/Rio_Gallegos"
              },
              {
                "text": "America/Argentina/Salta",
                "value": "America/Argentina/Salta"
              },
              {
                "text": "America/Argentina/San_Juan",
                "value": "America/Argentina/San_Juan"
              },
              {
                "text": "America/Argentina/San_Luis",
                "value": "America/Argentina/San_Luis"
              },
              {
                "text": "America/Argentina/Tucuman",
                "value": "America/Argentina/Tucuman"
              },
              {
                "text": "America/Argentina/Ushuaia",
                "value": "America/Argentina/Ushuaia"
              },
              {
                "text": "America/Aruba",
                "value": "America/Aruba"
              },
              {
                "text": "America/Asuncion",
                "value": "America/Asuncion"
              },
              {
                "text": "America/Atikokan",
                "value": "America/Atikokan"
              },
              {
                "text": "America/Bahia_Banderas",
                "value": "America/Bahia_Banderas"
              },
              {
                "text": "America/Bahia",
                "value": "America/Bahia"
              },
              {
                "text": "America/Barbados",
                "value": "America/Barbados"
              },
              {
                "text": "America/Belem",
                "value": "America/Belem"
              },
              {
                "text": "America/Belize",
                "value": "America/Belize"
              },
              {
                "text": "America/Blanc-Sablon",
                "value": "America/Blanc-Sablon"
              },
              {
                "text": "America/Boa_Vista",
                "value": "America/Boa_Vista"
              },
              {
                "text": "America/Bogota",
                "value": "America/Bogota"
              },
              {
                "text": "America/Boise",
                "value": "America/Boise"
              },
              {
                "text": "America/Cambridge_Bay",
                "value": "America/Cambridge_Bay"
              },
              {
                "text": "America/Campo_Grande",
                "value": "America/Campo_Grande"
              },
              {
                "text": "America/Cancun",
                "value": "America/Cancun"
              },
              {
                "text": "America/Caracas",
                "value": "America/Caracas"
              },
              {
                "text": "America/Cayenne",
                "value": "America/Cayenne"
              },
              {
                "text": "America/Cayman",
                "value": "America/Cayman"
              },
              {
                "text": "America/Chicago",
                "value": "America/Chicago"
              },
              {
                "text": "America/Chihuahua",
                "value": "America/Chihuahua"
              },
              {
                "text": "America/Costa_Rica",
                "value": "America/Costa_Rica"
              },
              {
                "text": "America/Creston",
                "value": "America/Creston"
              },
              {
                "text": "America/Cuiaba",
                "value": "America/Cuiaba"
              },
              {
                "text": "America/Curacao",
                "value": "America/Curacao"
              },
              {
                "text": "America/Danmarkshavn",
                "value": "America/Danmarkshavn"
              },
              {
                "text": "America/Dawson_Creek",
                "value": "America/Dawson_Creek"
              },
              {
                "text": "America/Dawson",
                "value": "America/Dawson"
              },
              {
                "text": "America/Denver",
                "value": "America/Denver"
              },
              {
                "text": "America/Detroit",
                "value": "America/Detroit"
              },
              {
                "text": "America/Dominica",
                "value": "America/Dominica"
              },
              {
                "text": "America/Edmonton",
                "value": "America/Edmonton"
              },
              {
                "text": "America/Eirunepe",
                "value": "America/Eirunepe"
              },
              {
                "text": "America/El_Salvador",
                "value": "America/El_Salvador"
              },
              {
                "text": "America/Fortaleza",
                "value": "America/Fortaleza"
              },
              {
                "text": "America/Fort_Nelson",
                "value": "America/Fort_Nelson"
              },
              {
                "text": "America/Glace_Bay",
                "value": "America/Glace_Bay"
              },
              {
                "text": "America/Godthab",
                "value": "America/Godthab"
              },
              {
                "text": "America/Goose_Bay",
                "value": "America/Goose_Bay"
              },
              {
                "text": "America/Grand_Turk",
                "value": "America/Grand_Turk"
              },
              {
                "text": "America/Grenada",
                "value": "America/Grenada"
              },
              {
                "text": "America/Guadeloupe",
                "value": "America/Guadeloupe"
              },
              {
                "text": "America/Guatemala",
                "value": "America/Guatemala"
              },
              {
                "text": "America/Guayaquil",
                "value": "America/Guayaquil"
              },
              {
                "text": "America/Guyana",
                "value": "America/Guyana"
              },
              {
                "text": "America/Halifax",
                "value": "America/Halifax"
              },
              {
                "text": "America/Havana",
                "value": "America/Havana"
              },
              {
                "text": "America/Hermosillo",
                "value": "America/Hermosillo"
              },
              {
                "text": "America/Indiana/Indianapolis",
                "value": "America/Indiana/Indianapolis"
              },
              {
                "text": "America/Indiana/Knox",
                "value": "America/Indiana/Knox"
              },
              {
                "text": "America/Indiana/Marengo",
                "value": "America/Indiana/Marengo"
              },
              {
                "text": "America/Indiana/Petersburg",
                "value": "America/Indiana/Petersburg"
              },
              {
                "text": "America/Indiana/Tell_City",
                "value": "America/Indiana/Tell_City"
              },
              {
                "text": "America/Indiana/Vevay",
                "value": "America/Indiana/Vevay"
              },
              {
                "text": "America/Indiana/Vincennes",
                "value": "America/Indiana/Vincennes"
              },
              {
                "text": "America/Indiana/Winamac",
                "value": "America/Indiana/Winamac"
              },
              {
                "text": "America/Inuvik",
                "value": "America/Inuvik"
              },
              {
                "text": "America/Iqaluit",
                "value": "America/Iqaluit"
              },
              {
                "text": "America/Jamaica",
                "value": "America/Jamaica"
              },
              {
                "text": "America/Juneau",
                "value": "America/Juneau"
              },
              {
                "text": "America/Kentucky/Louisville",
                "value": "America/Kentucky/Louisville"
              },
              {
                "text": "America/Kentucky/Monticello",
                "value": "America/Kentucky/Monticello"
              },
              {
                "text": "America/Kralendijk",
                "value": "America/Kralendijk"
              },
              {
                "text": "America/La_Paz",
                "value": "America/La_Paz"
              },
              {
                "text": "America/Lima",
                "value": "America/Lima"
              },
              {
                "text": "America/Los_Angeles",
                "value": "America/Los_Angeles"
              },
              {
                "text": "America/Lower_Princes",
                "value": "America/Lower_Princes"
              },
              {
                "text": "America/Maceio",
                "value": "America/Maceio"
              },
              {
                "text": "America/Managua",
                "value": "America/Managua"
              },
              {
                "text": "America/Manaus",
                "value": "America/Manaus"
              },
              {
                "text": "America/Marigot",
                "value": "America/Marigot"
              },
              {
                "text": "America/Martinique",
                "value": "America/Martinique"
              },
              {
                "text": "America/Matamoros",
                "value": "America/Matamoros"
              },
              {
                "text": "America/Mazatlan",
                "value": "America/Mazatlan"
              },
              {
                "text": "America/Menominee",
                "value": "America/Menominee"
              },
              {
                "text": "America/Merida",
                "value": "America/Merida"
              },
              {
                "text": "America/Metlakatla",
                "value": "America/Metlakatla"
              },
              {
                "text": "America/Mexico_City",
                "value": "America/Mexico_City"
              },
              {
                "text": "America/Miquelon",
                "value": "America/Miquelon"
              },
              {
                "text": "America/Moncton",
                "value": "America/Moncton"
              },
              {
                "text": "America/Monterrey",
                "value": "America/Monterrey"
              },
              {
                "text": "America/Montevideo",
                "value": "America/Montevideo"
              },
              {
                "text": "America/Montserrat",
                "value": "America/Montserrat"
              },
              {
                "text": "America/Nassau",
                "value": "America/Nassau"
              },
              {
                "text": "America/New_York",
                "value": "America/New_York"
              },
              {
                "text": "America/Nipigon",
                "value": "America/Nipigon"
              },
              {
                "text": "America/Nome",
                "value": "America/Nome"
              },
              {
                "text": "America/North_Dakota/Beulah",
                "value": "America/North_Dakota/Beulah"
              },
              {
                "text": "America/North_Dakota/Center",
                "value": "America/North_Dakota/Center"
              },
              {
                "text": "America/North_Dakota/New_Salem",
                "value": "America/North_Dakota/New_Salem"
              },
              {
                "text": "America/Ojinaga",
                "value": "America/Ojinaga"
              },
              {
                "text": "America/Panama",
                "value": "America/Panama"
              },
              {
                "text": "America/Pangnirtung",
                "value": "America/Pangnirtung"
              },
              {
                "text": "America/Paramaribo",
                "value": "America/Paramaribo"
              },
              {
                "text": "America/Phoenix",
                "value": "America/Phoenix"
              },
              {
                "text": "America/Port-au-Prince",
                "value": "America/Port-au-Prince"
              },
              {
                "text": "America/Port_of_Spain",
                "value": "America/Port_of_Spain"
              },
              {
                "text": "America/Porto_Velho",
                "value": "America/Porto_Velho"
              },
              {
                "text": "America/Puerto_Rico",
                "value": "America/Puerto_Rico"
              },
              {
                "text": "America/Punta_Arenas",
                "value": "America/Punta_Arenas"
              },
              {
                "text": "America/Rainy_River",
                "value": "America/Rainy_River"
              },
              {
                "text": "America/Rankin_Inlet",
                "value": "America/Rankin_Inlet"
              },
              {
                "text": "America/Recife",
                "value": "America/Recife"
              },
              {
                "text": "America/Regina",
                "value": "America/Regina"
              },
              {
                "text": "America/Resolute",
                "value": "America/Resolute"
              },
              {
                "text": "America/Rio_Branco",
                "value": "America/Rio_Branco"
              },
              {
                "text": "America/Santarem",
                "value": "America/Santarem"
              },
              {
                "text": "America/Santiago",
                "value": "America/Santiago"
              },
              {
                "text": "America/Santo_Domingo",
                "value": "America/Santo_Domingo"
              },
              {
                "text": "America/Scoresbysund",
                "value": "America/Scoresbysund"
              },
              {
                "text": "America/Sitka",
                "value": "America/Sitka"
              },
              {
                "text": "America/St_Barthelemy",
                "value": "America/St_Barthelemy"
              },
              {
                "text": "America/St_Johns",
                "value": "America/St_Johns"
              },
              {
                "text": "America/St_Kitts",
                "value": "America/St_Kitts"
              },
              {
                "text": "America/St_Lucia",
                "value": "America/St_Lucia"
              },
              {
                "text": "America/St_Thomas",
                "value": "America/St_Thomas"
              },
              {
                "text": "America/St_Vincent",
                "value": "America/St_Vincent"
              },
              {
                "text": "America/Swift_Current",
                "value": "America/Swift_Current"
              },
              {
                "text": "America/Tegucigalpa",
                "value": "America/Tegucigalpa"
              },
              {
                "text": "America/Thule",
                "value": "America/Thule"
              },
              {
                "text": "America/Thunder_Bay",
                "value": "America/Thunder_Bay"
              },
              {
                "text": "America/Tijuana",
                "value": "America/Tijuana"
              },
              {
                "text": "America/Toronto",
                "value": "America/Toronto"
              },
              {
                "text": "America/Tortola",
                "value": "America/Tortola"
              },
              {
                "text": "America/Vancouver",
                "value": "America/Vancouver"
              },
              {
                "text": "America/Whitehorse",
                "value": "America/Whitehorse"
              },
              {
                "text": "America/Winnipeg",
                "value": "America/Winnipeg"
              },
              {
                "text": "America/Yakutat",
                "value": "America/Yakutat"
              },
              {
                "text": "America/Yellowknife",
                "value": "America/Yellowknife"
              },
              {
                "text": "Antarctica/Casey",
                "value": "Antarctica/Casey"
              },
              {
                "text": "Antarctica/Davis",
                "value": "Antarctica/Davis"
              },
              {
                "text": "Antarctica/DumontDUrville",
                "value": "Antarctica/DumontDUrville"
              },
              {
                "text": "Antarctica/Macquarie",
                "value": "Antarctica/Macquarie"
              },
              {
                "text": "Antarctica/Mawson",
                "value": "Antarctica/Mawson"
              },
              {
                "text": "Antarctica/McMurdo",
                "value": "Antarctica/McMurdo"
              },
              {
                "text": "Antarctica/Palmer",
                "value": "Antarctica/Palmer"
              },
              {
                "text": "Antarctica/Rothera",
                "value": "Antarctica/Rothera"
              },
              {
                "text": "Antarctica/Syowa",
                "value": "Antarctica/Syowa"
              },
              {
                "text": "Antarctica/Troll",
                "value": "Antarctica/Troll"
              },
              {
                "text": "Antarctica/Vostok",
                "value": "Antarctica/Vostok"
              },
              {
                "text": "Arctic/Longyearbyen",
                "value": "Arctic/Longyearbyen"
              },
              {
                "text": "Asia/Aden",
                "value": "Asia/Aden"
              },
              {
                "text": "Asia/Almaty",
                "value": "Asia/Almaty"
              },
              {
                "text": "Asia/Amman",
                "value": "Asia/Amman"
              },
              {
                "text": "Asia/Anadyr",
                "value": "Asia/Anadyr"
              },
              {
                "text": "Asia/Aqtau",
                "value": "Asia/Aqtau"
              },
              {
                "text": "Asia/Aqtobe",
                "value": "Asia/Aqtobe"
              },
              {
                "text": "Asia/Ashgabat",
                "value": "Asia/Ashgabat"
              },
              {
                "text": "Asia/Atyrau",
                "value": "Asia/Atyrau"
              },
              {
                "text": "Asia/Baghdad",
                "value": "Asia/Baghdad"
              },
              {
                "text": "Asia/Bahrain",
                "value": "Asia/Bahrain"
              },
              {
                "text": "Asia/Baku",
                "value": "Asia/Baku"
              },
              {
                "text": "Asia/Bangkok",
                "value": "Asia/Bangkok"
              },
              {
                "text": "Asia/Barnaul",
                "value": "Asia/Barnaul"
              },
              {
                "text": "Asia/Beirut",
                "value": "Asia/Beirut"
              },
              {
                "text": "Asia/Bishkek",
                "value": "Asia/Bishkek"
              },
              {
                "text": "Asia/Brunei",
                "value": "Asia/Brunei"
              },
              {
                "text": "Asia/Chita",
                "value": "Asia/Chita"
              },
              {
                "text": "Asia/Choibalsan",
                "value": "Asia/Choibalsan"
              },
              {
                "text": "Asia/Colombo",
                "value": "Asia/Colombo"
              },
              {
                "text": "Asia/Damascus",
                "value": "Asia/Damascus"
              },
              {
                "text": "Asia/Dhaka",
                "value": "Asia/Dhaka"
              },
              {
                "text": "Asia/Dili",
                "value": "Asia/Dili"
              },
              {
                "text": "Asia/Dubai",
                "value": "Asia/Dubai"
              },
              {
                "text": "Asia/Dushanbe",
                "value": "Asia/Dushanbe"
              },
              {
                "text": "Asia/Famagusta",
                "value": "Asia/Famagusta"
              },
              {
                "text": "Asia/Gaza",
                "value": "Asia/Gaza"
              },
              {
                "text": "Asia/Hebron",
                "value": "Asia/Hebron"
              },
              {
                "text": "Asia/Ho_Chi_Minh",
                "value": "Asia/Ho_Chi_Minh"
              },
              {
                "text": "Asia/Hong_Kong",
                "value": "Asia/Hong_Kong"
              },
              {
                "text": "Asia/Hovd",
                "value": "Asia/Hovd"
              },
              {
                "text": "Asia/Irkutsk",
                "value": "Asia/Irkutsk"
              },
              {
                "text": "Asia/Jakarta",
                "value": "Asia/Jakarta"
              },
              {
                "text": "Asia/Jayapura",
                "value": "Asia/Jayapura"
              },
              {
                "text": "Asia/Jerusalem",
                "value": "Asia/Jerusalem"
              },
              {
                "text": "Asia/Kabul",
                "value": "Asia/Kabul"
              },
              {
                "text": "Asia/Kamchatka",
                "value": "Asia/Kamchatka"
              },
              {
                "text": "Asia/Karachi",
                "value": "Asia/Karachi"
              },
              {
                "text": "Asia/Kathmandu",
                "value": "Asia/Kathmandu"
              },
              {
                "text": "Asia/Khandyga",
                "value": "Asia/Khandyga"
              },
              {
                "text": "Asia/Kolkata",
                "value": "Asia/Kolkata"
              },
              {
                "text": "Asia/Krasnoyarsk",
                "value": "Asia/Krasnoyarsk"
              },
              {
                "text": "Asia/Kuala_Lumpur",
                "value": "Asia/Kuala_Lumpur"
              },
              {
                "text": "Asia/Kuching",
                "value": "Asia/Kuching"
              },
              {
                "text": "Asia/Kuwait",
                "value": "Asia/Kuwait"
              },
              {
                "text": "Asia/Macau",
                "value": "Asia/Macau"
              },
              {
                "text": "Asia/Magadan",
                "value": "Asia/Magadan"
              },
              {
                "text": "Asia/Makassar",
                "value": "Asia/Makassar"
              },
              {
                "text": "Asia/Manila",
                "value": "Asia/Manila"
              },
              {
                "text": "Asia/Muscat",
                "value": "Asia/Muscat"
              },
              {
                "text": "Asia/Nicosia",
                "value": "Asia/Nicosia"
              },
              {
                "text": "Asia/Novokuznetsk",
                "value": "Asia/Novokuznetsk"
              },
              {
                "text": "Asia/Novosibirsk",
                "value": "Asia/Novosibirsk"
              },
              {
                "text": "Asia/Omsk",
                "value": "Asia/Omsk"
              },
              {
                "text": "Asia/Oral",
                "value": "Asia/Oral"
              },
              {
                "text": "Asia/Phnom_Penh",
                "value": "Asia/Phnom_Penh"
              },
              {
                "text": "Asia/Pontianak",
                "value": "Asia/Pontianak"
              },
              {
                "text": "Asia/Pyongyang",
                "value": "Asia/Pyongyang"
              },
              {
                "text": "Asia/Qatar",
                "value": "Asia/Qatar"
              },
              {
                "text": "Asia/Qyzylorda",
                "value": "Asia/Qyzylorda"
              },
              {
                "text": "Asia/Riyadh",
                "value": "Asia/Riyadh"
              },
              {
                "text": "Asia/Sakhalin",
                "value": "Asia/Sakhalin"
              },
              {
                "text": "Asia/Samarkand",
                "value": "Asia/Samarkand"
              },
              {
                "text": "Asia/Seoul",
                "value": "Asia/Seoul"
              },
              {
                "text": "Asia/Shanghai",
                "value": "Asia/Shanghai"
              },
              {
                "text": "Asia/Singapore",
                "value": "Asia/Singapore"
              },
              {
                "text": "Asia/Srednekolymsk",
                "value": "Asia/Srednekolymsk"
              },
              {
                "text": "Asia/Taipei",
                "value": "Asia/Taipei"
              },
              {
                "text": "Asia/Tashkent",
                "value": "Asia/Tashkent"
              },
              {
                "text": "Asia/Tbilisi",
                "value": "Asia/Tbilisi"
              },
              {
                "text": "Asia/Tehran",
                "value": "Asia/Tehran"
              },
              {
                "text": "Asia/Thimphu",
                "value": "Asia/Thimphu"
              },
              {
                "text": "Asia/Tokyo",
                "value": "Asia/Tokyo"
              },
              {
                "text": "Asia/Tomsk",
                "value": "Asia/Tomsk"
              },
              {
                "text": "Asia/Ulaanbaatar",
                "value": "Asia/Ulaanbaatar"
              },
              {
                "text": "Asia/Urumqi",
                "value": "Asia/Urumqi"
              },
              {
                "text": "Asia/Ust-Nera",
                "value": "Asia/Ust-Nera"
              },
              {
                "text": "Asia/Vientiane",
                "value": "Asia/Vientiane"
              },
              {
                "text": "Asia/Vladivostok",
                "value": "Asia/Vladivostok"
              },
              {
                "text": "Asia/Yakutsk",
                "value": "Asia/Yakutsk"
              },
              {
                "text": "Asia/Yangon",
                "value": "Asia/Yangon"
              },
              {
                "text": "Asia/Yekaterinburg",
                "value": "Asia/Yekaterinburg"
              },
              {
                "text": "Asia/Yerevan",
                "value": "Asia/Yerevan"
              },
              {
                "text": "Atlantic/Azores",
                "value": "Atlantic/Azores"
              },
              {
                "text": "Atlantic/Bermuda",
                "value": "Atlantic/Bermuda"
              },
              {
                "text": "Atlantic/Canary",
                "value": "Atlantic/Canary"
              },
              {
                "text": "Atlantic/Cape_Verde",
                "value": "Atlantic/Cape_Verde"
              },
              {
                "text": "Atlantic/Faroe",
                "value": "Atlantic/Faroe"
              },
              {
                "text": "Atlantic/Madeira",
                "value": "Atlantic/Madeira"
              },
              {
                "text": "Atlantic/Reykjavik",
                "value": "Atlantic/Reykjavik"
              },
              {
                "text": "Atlantic/Stanley",
                "value": "Atlantic/Stanley"
              },
              {
                "text": "Atlantic/St_Helena",
                "value": "Atlantic/St_Helena"
              },
              {
                "text": "Australia/Adelaide",
                "value": "Australia/Adelaide"
              },
              {
                "text": "Australia/Brisbane",
                "value": "Australia/Brisbane"
              },
              {
                "text": "Australia/Broken_Hill",
                "value": "Australia/Broken_Hill"
              },
              {
                "text": "Australia/Currie",
                "value": "Australia/Currie"
              },
              {
                "text": "Australia/Darwin",
                "value": "Australia/Darwin"
              },
              {
                "text": "Australia/Eucla",
                "value": "Australia/Eucla"
              },
              {
                "text": "Australia/Hobart",
                "value": "Australia/Hobart"
              },
              {
                "text": "Australia/Lindeman",
                "value": "Australia/Lindeman"
              },
              {
                "text": "Australia/Lord_Howe",
                "value": "Australia/Lord_Howe"
              },
              {
                "text": "Australia/Melbourne",
                "value": "Australia/Melbourne"
              },
              {
                "text": "Australia/Perth",
                "value": "Australia/Perth"
              },
              {
                "text": "Australia/Sydney",
                "value": "Australia/Sydney"
              },
              {
                "text": "Europe/Amsterdam",
                "value": "Europe/Amsterdam"
              },
              {
                "text": "Europe/Andorra",
                "value": "Europe/Andorra"
              },
              {
                "text": "Europe/Astrakhan",
                "value": "Europe/Astrakhan"
              },
              {
                "text": "Europe/Athens",
                "value": "Europe/Athens"
              },
              {
                "text": "Europe/Belgrade",
                "value": "Europe/Belgrade"
              },
              {
                "text": "Europe/Berlin",
                "value": "Europe/Berlin"
              },
              {
                "text": "Europe/Bratislava",
                "value": "Europe/Bratislava"
              },
              {
                "text": "Europe/Brussels",
                "value": "Europe/Brussels"
              },
              {
                "text": "Europe/Bucharest",
                "value": "Europe/Bucharest"
              },
              {
                "text": "Europe/Budapest",
                "value": "Europe/Budapest"
              },
              {
                "text": "Europe/Busingen",
                "value": "Europe/Busingen"
              },
              {
                "text": "Europe/Chisinau",
                "value": "Europe/Chisinau"
              },
              {
                "text": "Europe/Copenhagen",
                "value": "Europe/Copenhagen"
              },
              {
                "text": "Europe/Dublin",
                "value": "Europe/Dublin"
              },
              {
                "text": "Europe/Gibraltar",
                "value": "Europe/Gibraltar"
              },
              {
                "text": "Europe/Guernsey",
                "value": "Europe/Guernsey"
              },
              {
                "text": "Europe/Helsinki",
                "value": "Europe/Helsinki"
              },
              {
                "text": "Europe/Isle_of_Man",
                "value": "Europe/Isle_of_Man"
              },
              {
                "text": "Europe/Istanbul",
                "value": "Europe/Istanbul"
              },
              {
                "text": "Europe/Jersey",
                "value": "Europe/Jersey"
              },
              {
                "text": "Europe/Kaliningrad",
                "value": "Europe/Kaliningrad"
              },
              {
                "text": "Europe/Kiev",
                "value": "Europe/Kiev"
              },
              {
                "text": "Europe/Kirov",
                "value": "Europe/Kirov"
              },
              {
                "text": "Europe/Lisbon",
                "value": "Europe/Lisbon"
              },
              {
                "text": "Europe/Ljubljana",
                "value": "Europe/Ljubljana"
              },
              {
                "text": "Europe/London",
                "value": "Europe/London"
              },
              {
                "text": "Europe/Luxembourg",
                "value": "Europe/Luxembourg"
              },
              {
                "text": "Europe/Madrid",
                "value": "Europe/Madrid"
              },
              {
                "text": "Europe/Malta",
                "value": "Europe/Malta"
              },
              {
                "text": "Europe/Mariehamn",
                "value": "Europe/Mariehamn"
              },
              {
                "text": "Europe/Minsk",
                "value": "Europe/Minsk"
              },
              {
                "text": "Europe/Monaco",
                "value": "Europe/Monaco"
              },
              {
                "text": "Europe/Moscow",
                "value": "Europe/Moscow"
              },
              {
                "text": "Europe/Oslo",
                "value": "Europe/Oslo"
              },
              {
                "text": "Europe/Paris",
                "value": "Europe/Paris"
              },
              {
                "text": "Europe/Podgorica",
                "value": "Europe/Podgorica"
              },
              {
                "text": "Europe/Prague",
                "value": "Europe/Prague"
              },
              {
                "text": "Europe/Riga",
                "value": "Europe/Riga"
              },
              {
                "text": "Europe/Rome",
                "value": "Europe/Rome"
              },
              {
                "text": "Europe/Samara",
                "value": "Europe/Samara"
              },
              {
                "text": "Europe/San_Marino",
                "value": "Europe/San_Marino"
              },
              {
                "text": "Europe/Sarajevo",
                "value": "Europe/Sarajevo"
              },
              {
                "text": "Europe/Saratov",
                "value": "Europe/Saratov"
              },
              {
                "text": "Europe/Simferopol",
                "value": "Europe/Simferopol"
              },
              {
                "text": "Europe/Skopje",
                "value": "Europe/Skopje"
              },
              {
                "text": "Europe/Sofia",
                "value": "Europe/Sofia"
              },
              {
                "text": "Europe/Stockholm",
                "value": "Europe/Stockholm"
              },
              {
                "text": "Europe/Tallinn",
                "value": "Europe/Tallinn"
              },
              {
                "text": "Europe/Tirane",
                "value": "Europe/Tirane"
              },
              {
                "text": "Europe/Ulyanovsk",
                "value": "Europe/Ulyanovsk"
              },
              {
                "text": "Europe/Uzhgorod",
                "value": "Europe/Uzhgorod"
              },
              {
                "text": "Europe/Vaduz",
                "value": "Europe/Vaduz"
              },
              {
                "text": "Europe/Vatican",
                "value": "Europe/Vatican"
              },
              {
                "text": "Europe/Vienna",
                "value": "Europe/Vienna"
              },
              {
                "text": "Europe/Vilnius",
                "value": "Europe/Vilnius"
              },
              {
                "text": "Europe/Volgograd",
                "value": "Europe/Volgograd"
              },
              {
                "text": "Europe/Warsaw",
                "value": "Europe/Warsaw"
              },
              {
                "text": "Europe/Zagreb",
                "value": "Europe/Zagreb"
              },
              {
                "text": "Europe/Zaporozhye",
                "value": "Europe/Zaporozhye"
              },
              {
                "text": "Europe/Zurich",
                "value": "Europe/Zurich"
              },
              {
                "text": "Indian/Antananarivo",
                "value": "Indian/Antananarivo"
              },
              {
                "text": "Indian/Chagos",
                "value": "Indian/Chagos"
              },
              {
                "text": "Indian/Christmas",
                "value": "Indian/Christmas"
              },
              {
                "text": "Indian/Cocos",
                "value": "Indian/Cocos"
              },
              {
                "text": "Indian/Comoro",
                "value": "Indian/Comoro"
              },
              {
                "text": "Indian/Kerguelen",
                "value": "Indian/Kerguelen"
              },
              {
                "text": "Indian/Mahe",
                "value": "Indian/Mahe"
              },
              {
                "text": "Indian/Maldives",
                "value": "Indian/Maldives"
              },
              {
                "text": "Indian/Mauritius",
                "value": "Indian/Mauritius"
              },
              {
                "text": "Indian/Mayotte",
                "value": "Indian/Mayotte"
              },
              {
                "text": "Indian/Reunion",
                "value": "Indian/Reunion"
              },
              {
                "text": "Pacific/Apia",
                "value": "Pacific/Apia"
              },
              {
                "text": "Pacific/Auckland",
                "value": "Pacific/Auckland"
              },
              {
                "text": "Pacific/Bougainville",
                "value": "Pacific/Bougainville"
              },
              {
                "text": "Pacific/Chatham",
                "value": "Pacific/Chatham"
              },
              {
                "text": "Pacific/Chuuk",
                "value": "Pacific/Chuuk"
              },
              {
                "text": "Pacific/Easter",
                "value": "Pacific/Easter"
              },
              {
                "text": "Pacific/Efate",
                "value": "Pacific/Efate"
              },
              {
                "text": "Pacific/Enderbury",
                "value": "Pacific/Enderbury"
              },
              {
                "text": "Pacific/Fakaofo",
                "value": "Pacific/Fakaofo"
              },
              {
                "text": "Pacific/Fiji",
                "value": "Pacific/Fiji"
              },
              {
                "text": "Pacific/Funafuti",
                "value": "Pacific/Funafuti"
              },
              {
                "text": "Pacific/Galapagos",
                "value": "Pacific/Galapagos"
              },
              {
                "text": "Pacific/Gambier",
                "value": "Pacific/Gambier"
              },
              {
                "text": "Pacific/Guadalcanal",
                "value": "Pacific/Guadalcanal"
              },
              {
                "text": "Pacific/Guam",
                "value": "Pacific/Guam"
              },
              {
                "text": "Pacific/Honolulu",
                "value": "Pacific/Honolulu"
              },
              {
                "text": "Pacific/Kiritimati",
                "value": "Pacific/Kiritimati"
              },
              {
                "text": "Pacific/Kosrae",
                "value": "Pacific/Kosrae"
              },
              {
                "text": "Pacific/Kwajalein",
                "value": "Pacific/Kwajalein"
              },
              {
                "text": "Pacific/Majuro",
                "value": "Pacific/Majuro"
              },
              {
                "text": "Pacific/Marquesas",
                "value": "Pacific/Marquesas"
              },
              {
                "text": "Pacific/Midway",
                "value": "Pacific/Midway"
              },
              {
                "text": "Pacific/Nauru",
                "value": "Pacific/Nauru"
              },
              {
                "text": "Pacific/Niue",
                "value": "Pacific/Niue"
              },
              {
                "text": "Pacific/Norfolk",
                "value": "Pacific/Norfolk"
              },
              {
                "text": "Pacific/Noumea",
                "value": "Pacific/Noumea"
              },
              {
                "text": "Pacific/Pago_Pago",
                "value": "Pacific/Pago_Pago"
              },
              {
                "text": "Pacific/Palau",
                "value": "Pacific/Palau"
              },
              {
                "text": "Pacific/Pitcairn",
                "value": "Pacific/Pitcairn"
              },
              {
                "text": "Pacific/Pohnpei",
                "value": "Pacific/Pohnpei"
              },
              {
                "text": "Pacific/Port_Moresby",
                "value": "Pacific/Port_Moresby"
              },
              {
                "text": "Pacific/Rarotonga",
                "value": "Pacific/Rarotonga"
              },
              {
                "text": "Pacific/Saipan",
                "value": "Pacific/Saipan"
              },
              {
                "text": "Pacific/Tahiti",
                "value": "Pacific/Tahiti"
              },
              {
                "text": "Pacific/Tarawa",
                "value": "Pacific/Tarawa"
              },
              {
                "text": "Pacific/Tongatapu",
                "value": "Pacific/Tongatapu"
              },
              {
                "text": "Pacific/Wake",
                "value": "Pacific/Wake"
              },
              {
                "text": "Pacific/Wallis",
                "value": "Pacific/Wallis"
              },
              {
                "text": "UTC",
                "value": "UTC"
              }
            ]
          },
          {
            "variable": "yealink.timezoneName(timezone)", //// todo should rename according to macro?
            "description": "Time zone name",
            "type": "list",
            "options": [
              {
                "text": "Africa/Abidjan",
                "value": "Africa/Abidjan"
              },
              {
                "text": "Africa/Accra",
                "value": "Africa/Accra"
              },
              {
                "text": "Africa/Addis_Ababa",
                "value": "Africa/Addis_Ababa"
              },
              {
                "text": "Africa/Algiers",
                "value": "Africa/Algiers"
              },
              {
                "text": "Africa/Asmara",
                "value": "Africa/Asmara"
              },
              {
                "text": "Africa/Bamako",
                "value": "Africa/Bamako"
              },
              {
                "text": "Africa/Bangui",
                "value": "Africa/Bangui"
              },
              {
                "text": "Africa/Banjul",
                "value": "Africa/Banjul"
              },
              {
                "text": "Africa/Bissau",
                "value": "Africa/Bissau"
              },
              {
                "text": "Africa/Blantyre",
                "value": "Africa/Blantyre"
              },
              {
                "text": "Africa/Brazzaville",
                "value": "Africa/Brazzaville"
              },
              {
                "text": "Africa/Bujumbura",
                "value": "Africa/Bujumbura"
              },
              {
                "text": "Africa/Cairo",
                "value": "Africa/Cairo"
              },
              {
                "text": "Africa/Casablanca",
                "value": "Africa/Casablanca"
              },
              {
                "text": "Africa/Ceuta",
                "value": "Africa/Ceuta"
              },
              {
                "text": "Africa/Conakry",
                "value": "Africa/Conakry"
              },
              {
                "text": "Africa/Dakar",
                "value": "Africa/Dakar"
              },
              {
                "text": "Africa/Dar_es_Salaam",
                "value": "Africa/Dar_es_Salaam"
              },
              {
                "text": "Africa/Djibouti",
                "value": "Africa/Djibouti"
              },
              {
                "text": "Africa/Douala",
                "value": "Africa/Douala"
              },
              {
                "text": "Africa/El_Aaiun",
                "value": "Africa/El_Aaiun"
              },
              {
                "text": "Africa/Freetown",
                "value": "Africa/Freetown"
              },
              {
                "text": "Africa/Gaborone",
                "value": "Africa/Gaborone"
              },
              {
                "text": "Africa/Harare",
                "value": "Africa/Harare"
              },
              {
                "text": "Africa/Johannesburg",
                "value": "Africa/Johannesburg"
              },
              {
                "text": "Africa/Juba",
                "value": "Africa/Juba"
              },
              {
                "text": "Africa/Kampala",
                "value": "Africa/Kampala"
              },
              {
                "text": "Africa/Khartoum",
                "value": "Africa/Khartoum"
              },
              {
                "text": "Africa/Kigali",
                "value": "Africa/Kigali"
              },
              {
                "text": "Africa/Kinshasa",
                "value": "Africa/Kinshasa"
              },
              {
                "text": "Africa/Lagos",
                "value": "Africa/Lagos"
              },
              {
                "text": "Africa/Libreville",
                "value": "Africa/Libreville"
              },
              {
                "text": "Africa/Lome",
                "value": "Africa/Lome"
              },
              {
                "text": "Africa/Luanda",
                "value": "Africa/Luanda"
              },
              {
                "text": "Africa/Lubumbashi",
                "value": "Africa/Lubumbashi"
              },
              {
                "text": "Africa/Lusaka",
                "value": "Africa/Lusaka"
              },
              {
                "text": "Africa/Malabo",
                "value": "Africa/Malabo"
              },
              {
                "text": "Africa/Maputo",
                "value": "Africa/Maputo"
              },
              {
                "text": "Africa/Maseru",
                "value": "Africa/Maseru"
              },
              {
                "text": "Africa/Mbabane",
                "value": "Africa/Mbabane"
              },
              {
                "text": "Africa/Mogadishu",
                "value": "Africa/Mogadishu"
              },
              {
                "text": "Africa/Monrovia",
                "value": "Africa/Monrovia"
              },
              {
                "text": "Africa/Nairobi",
                "value": "Africa/Nairobi"
              },
              {
                "text": "Africa/Ndjamena",
                "value": "Africa/Ndjamena"
              },
              {
                "text": "Africa/Niamey",
                "value": "Africa/Niamey"
              },
              {
                "text": "Africa/Nouakchott",
                "value": "Africa/Nouakchott"
              },
              {
                "text": "Africa/Ouagadougou",
                "value": "Africa/Ouagadougou"
              },
              {
                "text": "Africa/Porto-Novo",
                "value": "Africa/Porto-Novo"
              },
              {
                "text": "Africa/Sao_Tome",
                "value": "Africa/Sao_Tome"
              },
              {
                "text": "Africa/Tripoli",
                "value": "Africa/Tripoli"
              },
              {
                "text": "Africa/Tunis",
                "value": "Africa/Tunis"
              },
              {
                "text": "Africa/Windhoek",
                "value": "Africa/Windhoek"
              },
              {
                "text": "America/Adak",
                "value": "America/Adak"
              },
              {
                "text": "America/Anchorage",
                "value": "America/Anchorage"
              },
              {
                "text": "America/Anguilla",
                "value": "America/Anguilla"
              },
              {
                "text": "America/Antigua",
                "value": "America/Antigua"
              },
              {
                "text": "America/Araguaina",
                "value": "America/Araguaina"
              },
              {
                "text": "America/Argentina/Buenos_Aires",
                "value": "America/Argentina/Buenos_Aires"
              },
              {
                "text": "America/Argentina/Catamarca",
                "value": "America/Argentina/Catamarca"
              },
              {
                "text": "America/Argentina/Cordoba",
                "value": "America/Argentina/Cordoba"
              },
              {
                "text": "America/Argentina/Jujuy",
                "value": "America/Argentina/Jujuy"
              },
              {
                "text": "America/Argentina/La_Rioja",
                "value": "America/Argentina/La_Rioja"
              },
              {
                "text": "America/Argentina/Mendoza",
                "value": "America/Argentina/Mendoza"
              },
              {
                "text": "America/Argentina/Rio_Gallegos",
                "value": "America/Argentina/Rio_Gallegos"
              },
              {
                "text": "America/Argentina/Salta",
                "value": "America/Argentina/Salta"
              },
              {
                "text": "America/Argentina/San_Juan",
                "value": "America/Argentina/San_Juan"
              },
              {
                "text": "America/Argentina/San_Luis",
                "value": "America/Argentina/San_Luis"
              },
              {
                "text": "America/Argentina/Tucuman",
                "value": "America/Argentina/Tucuman"
              },
              {
                "text": "America/Argentina/Ushuaia",
                "value": "America/Argentina/Ushuaia"
              },
              {
                "text": "America/Aruba",
                "value": "America/Aruba"
              },
              {
                "text": "America/Asuncion",
                "value": "America/Asuncion"
              },
              {
                "text": "America/Atikokan",
                "value": "America/Atikokan"
              },
              {
                "text": "America/Bahia_Banderas",
                "value": "America/Bahia_Banderas"
              },
              {
                "text": "America/Bahia",
                "value": "America/Bahia"
              },
              {
                "text": "America/Barbados",
                "value": "America/Barbados"
              },
              {
                "text": "America/Belem",
                "value": "America/Belem"
              },
              {
                "text": "America/Belize",
                "value": "America/Belize"
              },
              {
                "text": "America/Blanc-Sablon",
                "value": "America/Blanc-Sablon"
              },
              {
                "text": "America/Boa_Vista",
                "value": "America/Boa_Vista"
              },
              {
                "text": "America/Bogota",
                "value": "America/Bogota"
              },
              {
                "text": "America/Boise",
                "value": "America/Boise"
              },
              {
                "text": "America/Cambridge_Bay",
                "value": "America/Cambridge_Bay"
              },
              {
                "text": "America/Campo_Grande",
                "value": "America/Campo_Grande"
              },
              {
                "text": "America/Cancun",
                "value": "America/Cancun"
              },
              {
                "text": "America/Caracas",
                "value": "America/Caracas"
              },
              {
                "text": "America/Cayenne",
                "value": "America/Cayenne"
              },
              {
                "text": "America/Cayman",
                "value": "America/Cayman"
              },
              {
                "text": "America/Chicago",
                "value": "America/Chicago"
              },
              {
                "text": "America/Chihuahua",
                "value": "America/Chihuahua"
              },
              {
                "text": "America/Costa_Rica",
                "value": "America/Costa_Rica"
              },
              {
                "text": "America/Creston",
                "value": "America/Creston"
              },
              {
                "text": "America/Cuiaba",
                "value": "America/Cuiaba"
              },
              {
                "text": "America/Curacao",
                "value": "America/Curacao"
              },
              {
                "text": "America/Danmarkshavn",
                "value": "America/Danmarkshavn"
              },
              {
                "text": "America/Dawson_Creek",
                "value": "America/Dawson_Creek"
              },
              {
                "text": "America/Dawson",
                "value": "America/Dawson"
              },
              {
                "text": "America/Denver",
                "value": "America/Denver"
              },
              {
                "text": "America/Detroit",
                "value": "America/Detroit"
              },
              {
                "text": "America/Dominica",
                "value": "America/Dominica"
              },
              {
                "text": "America/Edmonton",
                "value": "America/Edmonton"
              },
              {
                "text": "America/Eirunepe",
                "value": "America/Eirunepe"
              },
              {
                "text": "America/El_Salvador",
                "value": "America/El_Salvador"
              },
              {
                "text": "America/Fortaleza",
                "value": "America/Fortaleza"
              },
              {
                "text": "America/Fort_Nelson",
                "value": "America/Fort_Nelson"
              },
              {
                "text": "America/Glace_Bay",
                "value": "America/Glace_Bay"
              },
              {
                "text": "America/Godthab",
                "value": "America/Godthab"
              },
              {
                "text": "America/Goose_Bay",
                "value": "America/Goose_Bay"
              },
              {
                "text": "America/Grand_Turk",
                "value": "America/Grand_Turk"
              },
              {
                "text": "America/Grenada",
                "value": "America/Grenada"
              },
              {
                "text": "America/Guadeloupe",
                "value": "America/Guadeloupe"
              },
              {
                "text": "America/Guatemala",
                "value": "America/Guatemala"
              },
              {
                "text": "America/Guayaquil",
                "value": "America/Guayaquil"
              },
              {
                "text": "America/Guyana",
                "value": "America/Guyana"
              },
              {
                "text": "America/Halifax",
                "value": "America/Halifax"
              },
              {
                "text": "America/Havana",
                "value": "America/Havana"
              },
              {
                "text": "America/Hermosillo",
                "value": "America/Hermosillo"
              },
              {
                "text": "America/Indiana/Indianapolis",
                "value": "America/Indiana/Indianapolis"
              },
              {
                "text": "America/Indiana/Knox",
                "value": "America/Indiana/Knox"
              },
              {
                "text": "America/Indiana/Marengo",
                "value": "America/Indiana/Marengo"
              },
              {
                "text": "America/Indiana/Petersburg",
                "value": "America/Indiana/Petersburg"
              },
              {
                "text": "America/Indiana/Tell_City",
                "value": "America/Indiana/Tell_City"
              },
              {
                "text": "America/Indiana/Vevay",
                "value": "America/Indiana/Vevay"
              },
              {
                "text": "America/Indiana/Vincennes",
                "value": "America/Indiana/Vincennes"
              },
              {
                "text": "America/Indiana/Winamac",
                "value": "America/Indiana/Winamac"
              },
              {
                "text": "America/Inuvik",
                "value": "America/Inuvik"
              },
              {
                "text": "America/Iqaluit",
                "value": "America/Iqaluit"
              },
              {
                "text": "America/Jamaica",
                "value": "America/Jamaica"
              },
              {
                "text": "America/Juneau",
                "value": "America/Juneau"
              },
              {
                "text": "America/Kentucky/Louisville",
                "value": "America/Kentucky/Louisville"
              },
              {
                "text": "America/Kentucky/Monticello",
                "value": "America/Kentucky/Monticello"
              },
              {
                "text": "America/Kralendijk",
                "value": "America/Kralendijk"
              },
              {
                "text": "America/La_Paz",
                "value": "America/La_Paz"
              },
              {
                "text": "America/Lima",
                "value": "America/Lima"
              },
              {
                "text": "America/Los_Angeles",
                "value": "America/Los_Angeles"
              },
              {
                "text": "America/Lower_Princes",
                "value": "America/Lower_Princes"
              },
              {
                "text": "America/Maceio",
                "value": "America/Maceio"
              },
              {
                "text": "America/Managua",
                "value": "America/Managua"
              },
              {
                "text": "America/Manaus",
                "value": "America/Manaus"
              },
              {
                "text": "America/Marigot",
                "value": "America/Marigot"
              },
              {
                "text": "America/Martinique",
                "value": "America/Martinique"
              },
              {
                "text": "America/Matamoros",
                "value": "America/Matamoros"
              },
              {
                "text": "America/Mazatlan",
                "value": "America/Mazatlan"
              },
              {
                "text": "America/Menominee",
                "value": "America/Menominee"
              },
              {
                "text": "America/Merida",
                "value": "America/Merida"
              },
              {
                "text": "America/Metlakatla",
                "value": "America/Metlakatla"
              },
              {
                "text": "America/Mexico_City",
                "value": "America/Mexico_City"
              },
              {
                "text": "America/Miquelon",
                "value": "America/Miquelon"
              },
              {
                "text": "America/Moncton",
                "value": "America/Moncton"
              },
              {
                "text": "America/Monterrey",
                "value": "America/Monterrey"
              },
              {
                "text": "America/Montevideo",
                "value": "America/Montevideo"
              },
              {
                "text": "America/Montserrat",
                "value": "America/Montserrat"
              },
              {
                "text": "America/Nassau",
                "value": "America/Nassau"
              },
              {
                "text": "America/New_York",
                "value": "America/New_York"
              },
              {
                "text": "America/Nipigon",
                "value": "America/Nipigon"
              },
              {
                "text": "America/Nome",
                "value": "America/Nome"
              },
              {
                "text": "America/North_Dakota/Beulah",
                "value": "America/North_Dakota/Beulah"
              },
              {
                "text": "America/North_Dakota/Center",
                "value": "America/North_Dakota/Center"
              },
              {
                "text": "America/North_Dakota/New_Salem",
                "value": "America/North_Dakota/New_Salem"
              },
              {
                "text": "America/Ojinaga",
                "value": "America/Ojinaga"
              },
              {
                "text": "America/Panama",
                "value": "America/Panama"
              },
              {
                "text": "America/Pangnirtung",
                "value": "America/Pangnirtung"
              },
              {
                "text": "America/Paramaribo",
                "value": "America/Paramaribo"
              },
              {
                "text": "America/Phoenix",
                "value": "America/Phoenix"
              },
              {
                "text": "America/Port-au-Prince",
                "value": "America/Port-au-Prince"
              },
              {
                "text": "America/Port_of_Spain",
                "value": "America/Port_of_Spain"
              },
              {
                "text": "America/Porto_Velho",
                "value": "America/Porto_Velho"
              },
              {
                "text": "America/Puerto_Rico",
                "value": "America/Puerto_Rico"
              },
              {
                "text": "America/Punta_Arenas",
                "value": "America/Punta_Arenas"
              },
              {
                "text": "America/Rainy_River",
                "value": "America/Rainy_River"
              },
              {
                "text": "America/Rankin_Inlet",
                "value": "America/Rankin_Inlet"
              },
              {
                "text": "America/Recife",
                "value": "America/Recife"
              },
              {
                "text": "America/Regina",
                "value": "America/Regina"
              },
              {
                "text": "America/Resolute",
                "value": "America/Resolute"
              },
              {
                "text": "America/Rio_Branco",
                "value": "America/Rio_Branco"
              },
              {
                "text": "America/Santarem",
                "value": "America/Santarem"
              },
              {
                "text": "America/Santiago",
                "value": "America/Santiago"
              },
              {
                "text": "America/Santo_Domingo",
                "value": "America/Santo_Domingo"
              },
              {
                "text": "America/Scoresbysund",
                "value": "America/Scoresbysund"
              },
              {
                "text": "America/Sitka",
                "value": "America/Sitka"
              },
              {
                "text": "America/St_Barthelemy",
                "value": "America/St_Barthelemy"
              },
              {
                "text": "America/St_Johns",
                "value": "America/St_Johns"
              },
              {
                "text": "America/St_Kitts",
                "value": "America/St_Kitts"
              },
              {
                "text": "America/St_Lucia",
                "value": "America/St_Lucia"
              },
              {
                "text": "America/St_Thomas",
                "value": "America/St_Thomas"
              },
              {
                "text": "America/St_Vincent",
                "value": "America/St_Vincent"
              },
              {
                "text": "America/Swift_Current",
                "value": "America/Swift_Current"
              },
              {
                "text": "America/Tegucigalpa",
                "value": "America/Tegucigalpa"
              },
              {
                "text": "America/Thule",
                "value": "America/Thule"
              },
              {
                "text": "America/Thunder_Bay",
                "value": "America/Thunder_Bay"
              },
              {
                "text": "America/Tijuana",
                "value": "America/Tijuana"
              },
              {
                "text": "America/Toronto",
                "value": "America/Toronto"
              },
              {
                "text": "America/Tortola",
                "value": "America/Tortola"
              },
              {
                "text": "America/Vancouver",
                "value": "America/Vancouver"
              },
              {
                "text": "America/Whitehorse",
                "value": "America/Whitehorse"
              },
              {
                "text": "America/Winnipeg",
                "value": "America/Winnipeg"
              },
              {
                "text": "America/Yakutat",
                "value": "America/Yakutat"
              },
              {
                "text": "America/Yellowknife",
                "value": "America/Yellowknife"
              },
              {
                "text": "Antarctica/Casey",
                "value": "Antarctica/Casey"
              },
              {
                "text": "Antarctica/Davis",
                "value": "Antarctica/Davis"
              },
              {
                "text": "Antarctica/DumontDUrville",
                "value": "Antarctica/DumontDUrville"
              },
              {
                "text": "Antarctica/Macquarie",
                "value": "Antarctica/Macquarie"
              },
              {
                "text": "Antarctica/Mawson",
                "value": "Antarctica/Mawson"
              },
              {
                "text": "Antarctica/McMurdo",
                "value": "Antarctica/McMurdo"
              },
              {
                "text": "Antarctica/Palmer",
                "value": "Antarctica/Palmer"
              },
              {
                "text": "Antarctica/Rothera",
                "value": "Antarctica/Rothera"
              },
              {
                "text": "Antarctica/Syowa",
                "value": "Antarctica/Syowa"
              },
              {
                "text": "Antarctica/Troll",
                "value": "Antarctica/Troll"
              },
              {
                "text": "Antarctica/Vostok",
                "value": "Antarctica/Vostok"
              },
              {
                "text": "Arctic/Longyearbyen",
                "value": "Arctic/Longyearbyen"
              },
              {
                "text": "Asia/Aden",
                "value": "Asia/Aden"
              },
              {
                "text": "Asia/Almaty",
                "value": "Asia/Almaty"
              },
              {
                "text": "Asia/Amman",
                "value": "Asia/Amman"
              },
              {
                "text": "Asia/Anadyr",
                "value": "Asia/Anadyr"
              },
              {
                "text": "Asia/Aqtau",
                "value": "Asia/Aqtau"
              },
              {
                "text": "Asia/Aqtobe",
                "value": "Asia/Aqtobe"
              },
              {
                "text": "Asia/Ashgabat",
                "value": "Asia/Ashgabat"
              },
              {
                "text": "Asia/Atyrau",
                "value": "Asia/Atyrau"
              },
              {
                "text": "Asia/Baghdad",
                "value": "Asia/Baghdad"
              },
              {
                "text": "Asia/Bahrain",
                "value": "Asia/Bahrain"
              },
              {
                "text": "Asia/Baku",
                "value": "Asia/Baku"
              },
              {
                "text": "Asia/Bangkok",
                "value": "Asia/Bangkok"
              },
              {
                "text": "Asia/Barnaul",
                "value": "Asia/Barnaul"
              },
              {
                "text": "Asia/Beirut",
                "value": "Asia/Beirut"
              },
              {
                "text": "Asia/Bishkek",
                "value": "Asia/Bishkek"
              },
              {
                "text": "Asia/Brunei",
                "value": "Asia/Brunei"
              },
              {
                "text": "Asia/Chita",
                "value": "Asia/Chita"
              },
              {
                "text": "Asia/Choibalsan",
                "value": "Asia/Choibalsan"
              },
              {
                "text": "Asia/Colombo",
                "value": "Asia/Colombo"
              },
              {
                "text": "Asia/Damascus",
                "value": "Asia/Damascus"
              },
              {
                "text": "Asia/Dhaka",
                "value": "Asia/Dhaka"
              },
              {
                "text": "Asia/Dili",
                "value": "Asia/Dili"
              },
              {
                "text": "Asia/Dubai",
                "value": "Asia/Dubai"
              },
              {
                "text": "Asia/Dushanbe",
                "value": "Asia/Dushanbe"
              },
              {
                "text": "Asia/Famagusta",
                "value": "Asia/Famagusta"
              },
              {
                "text": "Asia/Gaza",
                "value": "Asia/Gaza"
              },
              {
                "text": "Asia/Hebron",
                "value": "Asia/Hebron"
              },
              {
                "text": "Asia/Ho_Chi_Minh",
                "value": "Asia/Ho_Chi_Minh"
              },
              {
                "text": "Asia/Hong_Kong",
                "value": "Asia/Hong_Kong"
              },
              {
                "text": "Asia/Hovd",
                "value": "Asia/Hovd"
              },
              {
                "text": "Asia/Irkutsk",
                "value": "Asia/Irkutsk"
              },
              {
                "text": "Asia/Jakarta",
                "value": "Asia/Jakarta"
              },
              {
                "text": "Asia/Jayapura",
                "value": "Asia/Jayapura"
              },
              {
                "text": "Asia/Jerusalem",
                "value": "Asia/Jerusalem"
              },
              {
                "text": "Asia/Kabul",
                "value": "Asia/Kabul"
              },
              {
                "text": "Asia/Kamchatka",
                "value": "Asia/Kamchatka"
              },
              {
                "text": "Asia/Karachi",
                "value": "Asia/Karachi"
              },
              {
                "text": "Asia/Kathmandu",
                "value": "Asia/Kathmandu"
              },
              {
                "text": "Asia/Khandyga",
                "value": "Asia/Khandyga"
              },
              {
                "text": "Asia/Kolkata",
                "value": "Asia/Kolkata"
              },
              {
                "text": "Asia/Krasnoyarsk",
                "value": "Asia/Krasnoyarsk"
              },
              {
                "text": "Asia/Kuala_Lumpur",
                "value": "Asia/Kuala_Lumpur"
              },
              {
                "text": "Asia/Kuching",
                "value": "Asia/Kuching"
              },
              {
                "text": "Asia/Kuwait",
                "value": "Asia/Kuwait"
              },
              {
                "text": "Asia/Macau",
                "value": "Asia/Macau"
              },
              {
                "text": "Asia/Magadan",
                "value": "Asia/Magadan"
              },
              {
                "text": "Asia/Makassar",
                "value": "Asia/Makassar"
              },
              {
                "text": "Asia/Manila",
                "value": "Asia/Manila"
              },
              {
                "text": "Asia/Muscat",
                "value": "Asia/Muscat"
              },
              {
                "text": "Asia/Nicosia",
                "value": "Asia/Nicosia"
              },
              {
                "text": "Asia/Novokuznetsk",
                "value": "Asia/Novokuznetsk"
              },
              {
                "text": "Asia/Novosibirsk",
                "value": "Asia/Novosibirsk"
              },
              {
                "text": "Asia/Omsk",
                "value": "Asia/Omsk"
              },
              {
                "text": "Asia/Oral",
                "value": "Asia/Oral"
              },
              {
                "text": "Asia/Phnom_Penh",
                "value": "Asia/Phnom_Penh"
              },
              {
                "text": "Asia/Pontianak",
                "value": "Asia/Pontianak"
              },
              {
                "text": "Asia/Pyongyang",
                "value": "Asia/Pyongyang"
              },
              {
                "text": "Asia/Qatar",
                "value": "Asia/Qatar"
              },
              {
                "text": "Asia/Qyzylorda",
                "value": "Asia/Qyzylorda"
              },
              {
                "text": "Asia/Riyadh",
                "value": "Asia/Riyadh"
              },
              {
                "text": "Asia/Sakhalin",
                "value": "Asia/Sakhalin"
              },
              {
                "text": "Asia/Samarkand",
                "value": "Asia/Samarkand"
              },
              {
                "text": "Asia/Seoul",
                "value": "Asia/Seoul"
              },
              {
                "text": "Asia/Shanghai",
                "value": "Asia/Shanghai"
              },
              {
                "text": "Asia/Singapore",
                "value": "Asia/Singapore"
              },
              {
                "text": "Asia/Srednekolymsk",
                "value": "Asia/Srednekolymsk"
              },
              {
                "text": "Asia/Taipei",
                "value": "Asia/Taipei"
              },
              {
                "text": "Asia/Tashkent",
                "value": "Asia/Tashkent"
              },
              {
                "text": "Asia/Tbilisi",
                "value": "Asia/Tbilisi"
              },
              {
                "text": "Asia/Tehran",
                "value": "Asia/Tehran"
              },
              {
                "text": "Asia/Thimphu",
                "value": "Asia/Thimphu"
              },
              {
                "text": "Asia/Tokyo",
                "value": "Asia/Tokyo"
              },
              {
                "text": "Asia/Tomsk",
                "value": "Asia/Tomsk"
              },
              {
                "text": "Asia/Ulaanbaatar",
                "value": "Asia/Ulaanbaatar"
              },
              {
                "text": "Asia/Urumqi",
                "value": "Asia/Urumqi"
              },
              {
                "text": "Asia/Ust-Nera",
                "value": "Asia/Ust-Nera"
              },
              {
                "text": "Asia/Vientiane",
                "value": "Asia/Vientiane"
              },
              {
                "text": "Asia/Vladivostok",
                "value": "Asia/Vladivostok"
              },
              {
                "text": "Asia/Yakutsk",
                "value": "Asia/Yakutsk"
              },
              {
                "text": "Asia/Yangon",
                "value": "Asia/Yangon"
              },
              {
                "text": "Asia/Yekaterinburg",
                "value": "Asia/Yekaterinburg"
              },
              {
                "text": "Asia/Yerevan",
                "value": "Asia/Yerevan"
              },
              {
                "text": "Atlantic/Azores",
                "value": "Atlantic/Azores"
              },
              {
                "text": "Atlantic/Bermuda",
                "value": "Atlantic/Bermuda"
              },
              {
                "text": "Atlantic/Canary",
                "value": "Atlantic/Canary"
              },
              {
                "text": "Atlantic/Cape_Verde",
                "value": "Atlantic/Cape_Verde"
              },
              {
                "text": "Atlantic/Faroe",
                "value": "Atlantic/Faroe"
              },
              {
                "text": "Atlantic/Madeira",
                "value": "Atlantic/Madeira"
              },
              {
                "text": "Atlantic/Reykjavik",
                "value": "Atlantic/Reykjavik"
              },
              {
                "text": "Atlantic/Stanley",
                "value": "Atlantic/Stanley"
              },
              {
                "text": "Atlantic/St_Helena",
                "value": "Atlantic/St_Helena"
              },
              {
                "text": "Australia/Adelaide",
                "value": "Australia/Adelaide"
              },
              {
                "text": "Australia/Brisbane",
                "value": "Australia/Brisbane"
              },
              {
                "text": "Australia/Broken_Hill",
                "value": "Australia/Broken_Hill"
              },
              {
                "text": "Australia/Currie",
                "value": "Australia/Currie"
              },
              {
                "text": "Australia/Darwin",
                "value": "Australia/Darwin"
              },
              {
                "text": "Australia/Eucla",
                "value": "Australia/Eucla"
              },
              {
                "text": "Australia/Hobart",
                "value": "Australia/Hobart"
              },
              {
                "text": "Australia/Lindeman",
                "value": "Australia/Lindeman"
              },
              {
                "text": "Australia/Lord_Howe",
                "value": "Australia/Lord_Howe"
              },
              {
                "text": "Australia/Melbourne",
                "value": "Australia/Melbourne"
              },
              {
                "text": "Australia/Perth",
                "value": "Australia/Perth"
              },
              {
                "text": "Australia/Sydney",
                "value": "Australia/Sydney"
              },
              {
                "text": "Europe/Amsterdam",
                "value": "Europe/Amsterdam"
              },
              {
                "text": "Europe/Andorra",
                "value": "Europe/Andorra"
              },
              {
                "text": "Europe/Astrakhan",
                "value": "Europe/Astrakhan"
              },
              {
                "text": "Europe/Athens",
                "value": "Europe/Athens"
              },
              {
                "text": "Europe/Belgrade",
                "value": "Europe/Belgrade"
              },
              {
                "text": "Europe/Berlin",
                "value": "Europe/Berlin"
              },
              {
                "text": "Europe/Bratislava",
                "value": "Europe/Bratislava"
              },
              {
                "text": "Europe/Brussels",
                "value": "Europe/Brussels"
              },
              {
                "text": "Europe/Bucharest",
                "value": "Europe/Bucharest"
              },
              {
                "text": "Europe/Budapest",
                "value": "Europe/Budapest"
              },
              {
                "text": "Europe/Busingen",
                "value": "Europe/Busingen"
              },
              {
                "text": "Europe/Chisinau",
                "value": "Europe/Chisinau"
              },
              {
                "text": "Europe/Copenhagen",
                "value": "Europe/Copenhagen"
              },
              {
                "text": "Europe/Dublin",
                "value": "Europe/Dublin"
              },
              {
                "text": "Europe/Gibraltar",
                "value": "Europe/Gibraltar"
              },
              {
                "text": "Europe/Guernsey",
                "value": "Europe/Guernsey"
              },
              {
                "text": "Europe/Helsinki",
                "value": "Europe/Helsinki"
              },
              {
                "text": "Europe/Isle_of_Man",
                "value": "Europe/Isle_of_Man"
              },
              {
                "text": "Europe/Istanbul",
                "value": "Europe/Istanbul"
              },
              {
                "text": "Europe/Jersey",
                "value": "Europe/Jersey"
              },
              {
                "text": "Europe/Kaliningrad",
                "value": "Europe/Kaliningrad"
              },
              {
                "text": "Europe/Kiev",
                "value": "Europe/Kiev"
              },
              {
                "text": "Europe/Kirov",
                "value": "Europe/Kirov"
              },
              {
                "text": "Europe/Lisbon",
                "value": "Europe/Lisbon"
              },
              {
                "text": "Europe/Ljubljana",
                "value": "Europe/Ljubljana"
              },
              {
                "text": "Europe/London",
                "value": "Europe/London"
              },
              {
                "text": "Europe/Luxembourg",
                "value": "Europe/Luxembourg"
              },
              {
                "text": "Europe/Madrid",
                "value": "Europe/Madrid"
              },
              {
                "text": "Europe/Malta",
                "value": "Europe/Malta"
              },
              {
                "text": "Europe/Mariehamn",
                "value": "Europe/Mariehamn"
              },
              {
                "text": "Europe/Minsk",
                "value": "Europe/Minsk"
              },
              {
                "text": "Europe/Monaco",
                "value": "Europe/Monaco"
              },
              {
                "text": "Europe/Moscow",
                "value": "Europe/Moscow"
              },
              {
                "text": "Europe/Oslo",
                "value": "Europe/Oslo"
              },
              {
                "text": "Europe/Paris",
                "value": "Europe/Paris"
              },
              {
                "text": "Europe/Podgorica",
                "value": "Europe/Podgorica"
              },
              {
                "text": "Europe/Prague",
                "value": "Europe/Prague"
              },
              {
                "text": "Europe/Riga",
                "value": "Europe/Riga"
              },
              {
                "text": "Europe/Rome",
                "value": "Europe/Rome"
              },
              {
                "text": "Europe/Samara",
                "value": "Europe/Samara"
              },
              {
                "text": "Europe/San_Marino",
                "value": "Europe/San_Marino"
              },
              {
                "text": "Europe/Sarajevo",
                "value": "Europe/Sarajevo"
              },
              {
                "text": "Europe/Saratov",
                "value": "Europe/Saratov"
              },
              {
                "text": "Europe/Simferopol",
                "value": "Europe/Simferopol"
              },
              {
                "text": "Europe/Skopje",
                "value": "Europe/Skopje"
              },
              {
                "text": "Europe/Sofia",
                "value": "Europe/Sofia"
              },
              {
                "text": "Europe/Stockholm",
                "value": "Europe/Stockholm"
              },
              {
                "text": "Europe/Tallinn",
                "value": "Europe/Tallinn"
              },
              {
                "text": "Europe/Tirane",
                "value": "Europe/Tirane"
              },
              {
                "text": "Europe/Ulyanovsk",
                "value": "Europe/Ulyanovsk"
              },
              {
                "text": "Europe/Uzhgorod",
                "value": "Europe/Uzhgorod"
              },
              {
                "text": "Europe/Vaduz",
                "value": "Europe/Vaduz"
              },
              {
                "text": "Europe/Vatican",
                "value": "Europe/Vatican"
              },
              {
                "text": "Europe/Vienna",
                "value": "Europe/Vienna"
              },
              {
                "text": "Europe/Vilnius",
                "value": "Europe/Vilnius"
              },
              {
                "text": "Europe/Volgograd",
                "value": "Europe/Volgograd"
              },
              {
                "text": "Europe/Warsaw",
                "value": "Europe/Warsaw"
              },
              {
                "text": "Europe/Zagreb",
                "value": "Europe/Zagreb"
              },
              {
                "text": "Europe/Zaporozhye",
                "value": "Europe/Zaporozhye"
              },
              {
                "text": "Europe/Zurich",
                "value": "Europe/Zurich"
              },
              {
                "text": "Indian/Antananarivo",
                "value": "Indian/Antananarivo"
              },
              {
                "text": "Indian/Chagos",
                "value": "Indian/Chagos"
              },
              {
                "text": "Indian/Christmas",
                "value": "Indian/Christmas"
              },
              {
                "text": "Indian/Cocos",
                "value": "Indian/Cocos"
              },
              {
                "text": "Indian/Comoro",
                "value": "Indian/Comoro"
              },
              {
                "text": "Indian/Kerguelen",
                "value": "Indian/Kerguelen"
              },
              {
                "text": "Indian/Mahe",
                "value": "Indian/Mahe"
              },
              {
                "text": "Indian/Maldives",
                "value": "Indian/Maldives"
              },
              {
                "text": "Indian/Mauritius",
                "value": "Indian/Mauritius"
              },
              {
                "text": "Indian/Mayotte",
                "value": "Indian/Mayotte"
              },
              {
                "text": "Indian/Reunion",
                "value": "Indian/Reunion"
              },
              {
                "text": "Pacific/Apia",
                "value": "Pacific/Apia"
              },
              {
                "text": "Pacific/Auckland",
                "value": "Pacific/Auckland"
              },
              {
                "text": "Pacific/Bougainville",
                "value": "Pacific/Bougainville"
              },
              {
                "text": "Pacific/Chatham",
                "value": "Pacific/Chatham"
              },
              {
                "text": "Pacific/Chuuk",
                "value": "Pacific/Chuuk"
              },
              {
                "text": "Pacific/Easter",
                "value": "Pacific/Easter"
              },
              {
                "text": "Pacific/Efate",
                "value": "Pacific/Efate"
              },
              {
                "text": "Pacific/Enderbury",
                "value": "Pacific/Enderbury"
              },
              {
                "text": "Pacific/Fakaofo",
                "value": "Pacific/Fakaofo"
              },
              {
                "text": "Pacific/Fiji",
                "value": "Pacific/Fiji"
              },
              {
                "text": "Pacific/Funafuti",
                "value": "Pacific/Funafuti"
              },
              {
                "text": "Pacific/Galapagos",
                "value": "Pacific/Galapagos"
              },
              {
                "text": "Pacific/Gambier",
                "value": "Pacific/Gambier"
              },
              {
                "text": "Pacific/Guadalcanal",
                "value": "Pacific/Guadalcanal"
              },
              {
                "text": "Pacific/Guam",
                "value": "Pacific/Guam"
              },
              {
                "text": "Pacific/Honolulu",
                "value": "Pacific/Honolulu"
              },
              {
                "text": "Pacific/Kiritimati",
                "value": "Pacific/Kiritimati"
              },
              {
                "text": "Pacific/Kosrae",
                "value": "Pacific/Kosrae"
              },
              {
                "text": "Pacific/Kwajalein",
                "value": "Pacific/Kwajalein"
              },
              {
                "text": "Pacific/Majuro",
                "value": "Pacific/Majuro"
              },
              {
                "text": "Pacific/Marquesas",
                "value": "Pacific/Marquesas"
              },
              {
                "text": "Pacific/Midway",
                "value": "Pacific/Midway"
              },
              {
                "text": "Pacific/Nauru",
                "value": "Pacific/Nauru"
              },
              {
                "text": "Pacific/Niue",
                "value": "Pacific/Niue"
              },
              {
                "text": "Pacific/Norfolk",
                "value": "Pacific/Norfolk"
              },
              {
                "text": "Pacific/Noumea",
                "value": "Pacific/Noumea"
              },
              {
                "text": "Pacific/Pago_Pago",
                "value": "Pacific/Pago_Pago"
              },
              {
                "text": "Pacific/Palau",
                "value": "Pacific/Palau"
              },
              {
                "text": "Pacific/Pitcairn",
                "value": "Pacific/Pitcairn"
              },
              {
                "text": "Pacific/Pohnpei",
                "value": "Pacific/Pohnpei"
              },
              {
                "text": "Pacific/Port_Moresby",
                "value": "Pacific/Port_Moresby"
              },
              {
                "text": "Pacific/Rarotonga",
                "value": "Pacific/Rarotonga"
              },
              {
                "text": "Pacific/Saipan",
                "value": "Pacific/Saipan"
              },
              {
                "text": "Pacific/Tahiti",
                "value": "Pacific/Tahiti"
              },
              {
                "text": "Pacific/Tarawa",
                "value": "Pacific/Tarawa"
              },
              {
                "text": "Pacific/Tongatapu",
                "value": "Pacific/Tongatapu"
              },
              {
                "text": "Pacific/Wake",
                "value": "Pacific/Wake"
              },
              {
                "text": "Pacific/Wallis",
                "value": "Pacific/Wallis"
              },
              {
                "text": "UTC",
                "value": "UTC"
              }
            ]
          },
          {
            "variable": "yealink.tonezone(tonezone)", //// todo should rename according to macro?
            "description": "Tone zone",
            "type": "list",
            "options": [
              {
                "text": "Angola",
                "value": "ao"
              },
              {
                "text": "Argentina",
                "value": "ar"
              },
              {
                "text": "Australia",
                "value": "au"
              },
              {
                "text": "Austria",
                "value": "at"
              },
              {
                "text": "Belgium",
                "value": "be"
              },
              {
                "text": "Brazil",
                "value": "br"
              },
              {
                "text": "Bulgaria",
                "value": "bg"
              },
              {
                "text": "Chile",
                "value": "cl"
              },
              {
                "text": "China",
                "value": "cn"
              },
              {
                "text": "Colombia (Republic of)",
                "value": "co"
              },
              {
                "text": "Costa Rica",
                "value": "cr"
              },
              {
                "text": "Czech Republic",
                "value": "cz"
              },
              {
                "text": "Denmark",
                "value": "dk"
              },
              {
                "text": "Estonia",
                "value": "ee"
              },
              {
                "text": "Finland",
                "value": "fi"
              },
              {
                "text": "France",
                "value": "fr"
              },
              {
                "text": "Germany",
                "value": "de"
              },
              {
                "text": "Greece",
                "value": "gr"
              },
              {
                "text": "Hong Kong",
                "value": "hk"
              },
              {
                "text": "Hungary",
                "value": "hu"
              },
              {
                "text": "India",
                "value": "in"
              },
              {
                "text": "Iran",
                "value": "ir"
              },
              {
                "text": "Ireland",
                "value": "ie"
              },
              {
                "text": "Israel",
                "value": "il"
              },
              {
                "text": "Italy",
                "value": "it"
              },
              {
                "text": "Japan",
                "value": "jp"
              },
              {
                "text": "Kenya (Republic of)",
                "value": "ke"
              },
              {
                "text": "Lithuania",
                "value": "lt"
              },
              {
                "text": "Macao",
                "value": "mo"
              },
              {
                "text": "Malaysia",
                "value": "my"
              },
              {
                "text": "Mexico",
                "value": "mx"
              },
              {
                "text": "Netherlands",
                "value": "nl"
              },
              {
                "text": "New Zealand",
                "value": "nz"
              },
              {
                "text": "Norway",
                "value": "no"
              },
              {
                "text": "Pakistan",
                "value": "pk"
              },
              {
                "text": "Panama",
                "value": "pa"
              },
              {
                "text": "Philippines",
                "value": "phl"
              },
              {
                "text": "Poland",
                "value": "pl"
              },
              {
                "text": "Portugal",
                "value": "pt"
              },
              {
                "text": "Romania",
                "value": "ro"
              },
              {
                "text": "Russian Federation",
                "value": "ru"
              },
              {
                "text": "Singapore",
                "value": "sg"
              },
              {
                "text": "South Africa",
                "value": "za"
              },
              {
                "text": "Spain",
                "value": "es"
              },
              {
                "text": "Sweden",
                "value": "se"
              },
              {
                "text": "Switzerland",
                "value": "ch"
              },
              {
                "text": "Taiwan",
                "value": "tw"
              },
              {
                "text": "Tanzania (United Republic of)",
                "value": "tz"
              },
              {
                "text": "Thailand",
                "value": "th"
              },
              {
                "text": "Turkey",
                "value": "tr"
              },
              {
                "text": "Uganda (Republic of)",
                "value": "ug"
              },
              {
                "text": "United Kingdom",
                "value": "uk"
              },
              {
                "text": "United States / North America",
                "value": "us"
              },
              {
                "text": "United States Circa 1950/ North America",
                "value": "us-old"
              },
              {
                "text": "Venezuela / South America",
                "value": "ve"
              }
            ]
          },
          {
            "variable": "pound",
            "description": "Use '#' or '*' key as send",
            "type": "list",
            "options": [
              {
                "text": "Disabled",
                "value": "0"
              },
              {
                "text": "# key",
                "value": "1"
              },
              {
                "text": "* key",
                "value": "2"
              }
            ]
          },
          {
            "variable": "dss_transfer",
            "description": "Transfer mode for DSS key",
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
            "variable": "auto_redial",
            "description": "Auto redial",
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
            "variable": "date_format",
            "description": "Date format",
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
            "description": "Time format",
            "type": "list",
            "options": [
              {
                "text": "12-hour",
                "value": "0"
              },
              {
                "text": "24-hour",
                "value": "1"
              }
            ]
          },
          {
            "variable": "firmware_url", // TODO upload
            "description": "Firmware URL",
            "type": "input"
          },
        ];
      }

      if (modelMap.password) {
        passwordItems = [
          {
            "variable": "adminpw",
            "description": "Admin password",
            "type": "input"
          },
          {
            "variable": "userpw",
            "description": "User password",
            "type": "input"
          },
          {
            "variable": "varpw",
            "description": "Var password",
            "type": "input"
          }
        ];
      }

      return {
        "name": "General",
        "items": settingsItems.concat(passwordItems)
      }
    }

    this.preferences = function (modelMap) {
      if (modelMap.ringtone) {
        //// todo 
      }

      if (modelMap.display) {
        //// todo 
      }

      if (modelMap.wallpaper) {
        //// todo 
      }

      if (modelMap.screensaver) {
        //// todo 
      }
    }

    this.network = function (modelMap) {
      if (modelMap.vlan) {
        //// todo
      }

      if (modelMap.ldap) {
        //// todo
      }
    }

    this.provisioning = function (modelMap) {
      if (modelMap.provisioning) {
        //// todo
      }
    }

    this.softKeys = function (modelMap) { ////// todo fix items
      if (!hasSoftKeysSection(modelMap)) {
        return;
      }

      return {
        "name": "Soft Keys",
        "items": [
          {
            "description": "Soft Keys",
            "type": "loop",
            "keys": modelMap.softKeys,
            "data": {
              "items": [
                {
                  "variable": "programablekey_type",
                  "description": "Type",
                  "type": "list",
                  "options": [
                    {
                      "text": "N/A",
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
                      "text": "XML Group",
                      "value": "22"
                    },
                    {
                      "text": "Group Pickup",
                      "value": "23"
                    },
                    {
                      "text": "Multicast Paging",
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
                      "text": "Local Group",
                      "value": "45"
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
                      "text": "Directory",
                      "value": "61"
                    },
                    {
                      "text": "Paging List",
                      "value": "66"
                    },
                    {
                      "text": "Favorite",
                      "value": "85"
                    },
                    {
                      "text": "Extend",
                      "value": "150"
                    }
                  ]
                },
                {
                  "variable": "programablekey_label",
                  "description": "Label",
                  "type": "input"
                },
                {
                  "variable": "programablekey_value",
                  "description": "Value",
                  "type": "input"
                },
                {
                  "variable": "programablekey_line",
                  "description": "Line",
                  "type": "list",
                  "options": [
                    // T58A/T57W/T54W/T48U/T48S/T48G/T46U/T46S/T46G/T29G: 0, 1-16; //// todo usare input per semplificare?
                    // T53W/T53/T43U/T42S/T42G: 0, 1-12;
                    // T41P/T41S/T27G: 0, 1-6;
                    // T40P/T40G/T23P/T23G: 0, 1-3;
                    // T21(P) E2: 0, 1-2;
                    // CP920: 1, 101, 102.
                    // CP960: 0, 1.

                    // 0-All (it is configurable only when "features.fwd_mode" is set to 1 (Custom) and "programablekey.X.type"
                    // is set to 2 (Forward)).
                    // 1-Line 1
                    // 2-Line 2
                    // …
                    // 16-Line 16
                    // 101-PSTN1
                    // 102-PSTN2

                    // Note: The permitted value 0 is not applicable to T48G/T46G/T42G/T41P/T29G phones.
                  ]
                },
                {
                  "variable": "programablekey_history_type",
                  "description": "History Type",
                  "type": "list",
                  "options": [
                    // 0-Local History ////
                    // 1-Network CallLog (only appear when "bw.enable=1" and "bw.xsi.call_log.enable=1")
                  ]
                },
                {
                  "variable": "programablekey_xml_phonebook",
                  "description": "XML Phonebook",
                  "type": "input"
                },
                {
                  "variable": "programablekey_extension",
                  "description": "Extension",
                  "type": "???"
                  // For multicast paging:
                  // 0 to 31

                  // For intercom feature:
                  // String within 256 characters
                }
              ]
            }
          }
        ]
      }
    }

    this.lineKeys = function (modelMap) {
      if (!hasLineKeysSection(modelMap)) {
        return;
      }

      return {
        "name": "Line Keys",
        "items": [
          {
            "description": "Line Keys",
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
                      "text": "DND",
                      "value": "5"
                    },
                    {
                      "text": "Recall",
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
                      "text": "Call Park",
                      "value": "10"
                    },
                    {
                      "text": "DTMF",
                      "value": "11"
                    },
                    {
                      "text": "Voice Mail",
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
                      "text": "Group Listening",
                      "value": "18"
                    },
                    {
                      "text": "Private Hold",
                      "value": "20"
                    },
                    {
                      "text": "XML Group",
                      "value": "22"
                    },
                    {
                      "text": "Group Pickup",
                      "value": "23"
                    },
                    {
                      "text": "Multicast Paging",
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
                      "text": "XML Directory",
                      "value": "47"
                    },
                    {
                      "text": "Phone Lock",
                      "value": "50"
                    },
                    {
                      "text": "Retrieve Park",
                      "value": "56"
                    },
                    {
                      "text": "Directory",
                      "value": "61"
                    },
                    {
                      "text": "Paging List",
                      "value": "66"
                    }
                  ]
                },
                {
                  "variable": "linekey_line",
                  "description": "Line",
                  "type": "input"
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
                },
                //// linekey_extension
                // For multicast paging:
                // 0 to 31
                // For BLF/BLF list/intercom feature:
                // String within 256 characters
                {
                  "variable": "linekey_xml_phonebook",
                  "description": "XML Phonebook",
                  "type": "input"
                }

                //// linekey_shortlabel (not found on spreadsheet)
              ]
            }
          }
        ]
      }
    }

    this.expansionKeys = function (modelMap) {
      if (!hasExpansionKeysSection(modelMap)) {
        return;
      }

      return {
        "name": "Expansion Keys",
        "items": [
          {
            "description": "Expansion Keys",
            "type": "loop",
            "expansionKeys": modelMap.expansionKeys,
            "data": {
              "items": [
                {
                  "variable": "expkey_type",
                  "description": "Type",
                  "type": "list",
                  "options": [
                    {
                      "text": "N/A",
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
                      "text": "DND",
                      "value": "5"
                    },
                    {
                      "text": "Recall",
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
                      "text": "Call Park",
                      "value": "10"
                    },
                    {
                      "text": "DTMF",
                      "value": "11"
                    },
                    {
                      "text": "Voice Mail",
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
                      "text": "Group Listening",
                      "value": "18"
                    },
                    {
                      "text": "Private Hold",
                      "value": "20"
                    },
                    {
                      "text": "XML Group",
                      "value": "22"
                    },
                    {
                      "text": "Group Pickup",
                      "value": "23"
                    },
                    {
                      "text": "Multicast Paging",
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
                      "text": "Phone Lock",
                      "value": "50"
                    },
                    {
                      "text": "Retrieve Park",
                      "value": "56"
                    },
                    {
                      "text": "Directory",
                      "value": "61"
                    },
                    {
                      "text": "Paging List",
                      "value": "66"
                    }
                  ]
                },
                {
                  "variable": "expkey_line",
                  "description": "Line",
                  "type": "list",
                  "options": [
                    //// todo
                    // T57W/T54W/T48U/T48S/T48G/T46U/T46S/T46G/T29G: 0, 1-16;
                    // T53W/T53/T43U: 0, 1-12;
                    // T27G: 0, 1-6;

                    // Note: The permitted value 0 is configurable only when "features.fwd_mode" is set to 1 (Custom) and
                    // "expansion_module.X.key.Y.type" is set to 2 (Forward). This permitted value is not applicable to
                    // T48G/T46G/T29G phones.
                  ]
                },
                {
                  "variable": "expkey_value",
                  "description": "Value",
                  "type": "input"
                },
                {
                  "variable": "expkey_value",
                  "description": "Value",
                  "type": "???"
                  // For multicast paging:
                  // 0 to 31

                  // For BLF/BLF list/intercom feature:
                  // String within 256 characters
                },
                {
                  "variable": "expkey_label",
                  "description": "Label",
                  "type": "input"
                },
                {
                  "variable": "expkey_xml_phonebook",
                  "description": "XML Phonebook",
                  "type": "input"
                }
              ]
            }
          }
        ]
      }
    }



    this.OLDgeneralUI = function (modelMap) { //// todo delete
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

      if (this.modelGroups.T4xT5xT11xT22xT44xT55x.includes(modelMap.model)) {
        return {
          "name": "General",
          "items": itemsGeneralT4xT5xT11xT22xT44xT55x
        }
      }
    }

    this.OLDpreferenceUI = function (modelMap) {
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

      if (this.modelGroups.T4xT5xT11xT22xT44xT55x.includes(modelMap.model)) {
        return {
          "name": "Preferences",
          "items": angular.copy(itemsPreferencesT4xT5xT11xT22xT44xT55x)
        }
      }
    }

    this.OLDnetworkUI = function (modelMap) {
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

      if (this.modelGroups.T4xT5xT11xT22xT44xT55x.includes(modelMap.model)) {
        return {
          "name": "Network",
          "items": angular.copy(itemsNetworkT4xT5xT11xT22xT44xT55x)
        }
      }
    }

    this.OLDprovisioningUI = function () {
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

    this.OLDsoftKeysUI = function (modelMap) {
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
              "text": "N/A",
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
              "text": "XML Group",
              "value": "22"
            },
            {
              "text": "Group Pickup",
              "value": "23"
            },
            {
              "text": "Multicast Paging",
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
              "text": "Local Group",
              "value": "45"
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
              "text": "Directory",
              "value": "61"
            },
            {
              "text": "Paging List",
              "value": "66"
            },
            {
              "text": "Favorite",
              "value": "85"
            },
            {
              "text": "Extend",
              "value": "150"
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

      if (this.modelGroups.T4xT5xT11xT22xT44xT55x.includes(modelMap.model)) {
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

    this.OLDlineKeysUI = function (modelMap) {
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

      var items;

      if (this.modelGroups.T4xT5xT22xT44xT55x.includes(modelMap.model)) {
        items = itemsLineKeysT4xT5xT22xT44xT55x;
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

    this.OLDLineOptionsUI = function () {
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

    this.OLDprogrammableKeysUI = function (modelMap) {
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

      if (this.modelGroups.T4x.includes(modelMap.model)) {
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

    this.OLDexpKeys1aUI = function (modelMap) {
      return {}
    }

    this.OLDexpKeys1bUI = function (modelMap) {
      return {}
    }

  })