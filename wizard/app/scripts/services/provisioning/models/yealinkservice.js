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
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
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
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T23G": {
          "model": "T23G",
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
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
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
          },
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T29G": {
          "model": "T29G",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "wallpaper": true,
          "lineKeys": 27,
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
          },
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T40PG": {
          "model": "T40PG",
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
              "start": 13,
              "end": 13
            }
          ],
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T41PS": {
          "model": "T41PS",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "lineKeys": 15,
          "softKeys": [
            {
              "start": 1,
              "end": 10
            },
            {
              "start": 13,
              "end": 13
            }
          ],
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T42GS": {
          "model": "T42GS",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "lineKeys": 15,
          "softKeys": [
            {
              "start": 1,
              "end": 10
            },
            {
              "start": 13,
              "end": 13
            }
          ],
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T46GS": {
          "model": "T46GS",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "wallpaper": true,
          "screensaver": true,
          "lineKeys": 27,
          "softKeys": [
            {
              "start": 1,
              "end": 10
            },
            {
              "start": 12,
              "end": 14
            }
          ],
          "expansionKeys": {
            "modules": 6,
            "keys": [
              {
                "start": 1,
                "end": 40
              }
            ]
          },
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T48GS": {
          "model": "T48GS",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "wallpaper": true,
          "screensaver": true,
          "lineKeys": 29,
          "softKeys": [
            {
              "start": 1,
              "end": 10
            },
            {
              "start": 12,
              "end": 14
            }
          ],
          "expansionKeys": {
            "modules": 6,
            "keys": [
              {
                "start": 1,
                "end": 40
              }
            ]
          },
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T49G": {
          "model": "T49G",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "wallpaper": true,
          "screensaver": true,
          "lineKeys": 29,
          "softKeys": [
            {
              "start": 1,
              "end": 4
            },
            {
              "start": 12,
              "end": 14
            }
          ],
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T53": {
          "model": "T53",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "lineKeys": 27,
          "softKeys": [
            {
              "start": 1,
              "end": 10
            },
            {
              "start": 13,
              "end": 13
            }
          ],
          "expansionKeys": {
            "modules": 3,
            "keys": [
              {
                "start": 1,
                "end": 60
              }
            ]
          },
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T52": {
          "model": "T52",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "wallpaper": true,
          "screensaver": true,
          "lineKeys": 27,
          "softKeys": [
            {
              "start": 1,
              "end": 10
            },
            {
              "start": 13,
              "end": 13
            }
          ],
          "expansionKeys": {
            "modules": 3,
            "keys": [
              {
                "start": 1,
                "end": 60
              }
            ]
          },
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T54": {
          "model": "T54",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "wallpaper": true,
          "screensaver": true,
          "lineKeys": 27,
          "softKeys": [
            {
              "start": 1,
              "end": 10
            },
            {
              "start": 12,
              "end": 14
            }
          ],
          "expansionKeys": {
            "modules": 3,
            "keys": [
              {
                "start": 1,
                "end": 60
              }
            ]
          },
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T56": {
          "model": "T56",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "wallpaper": true,
          "screensaver": true,
          "lineKeys": 27,
          "softKeys": [
            {
              "start": 1,
              "end": 4
            },
            {
              "start": 12,
              "end": 14
            }
          ],
          "expansionKeys": {
            "modules": 3,
            "keys": [
              {
                "start": 1,
                "end": 60
              }
            ]
          },
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T57": {
          "model": "T57",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "wallpaper": true,
          "screensaver": true,
          "lineKeys": 29,
          "softKeys": [
            {
              "start": 1,
              "end": 4
            },
            {
              "start": 12,
              "end": 14
            }
          ],
          "expansionKeys": {
            "modules": 3,
            "keys": [
              {
                "start": 1,
                "end": 60
              }
            ]
          },
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "T58": {
          "model": "T58",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "wallpaper": true,
          "screensaver": true,
          "lineKeys": 27,
          "softKeys": [
            {
              "start": 1,
              "end": 4
            },
            {
              "start": 12,
              "end": 14
            }
          ],
          "expansionKeys": {
            "modules": 3,
            "keys": [
              {
                "start": 1,
                "end": 60
              }
            ]
          },
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        },
        "VP59": {
          "model": "VP59",
          "vlan": true,
          "provisioning": true,
          "password": true,
          "ringtone": true,
          "settings": true,
          "ldap": true,
          "display": true,
          "wallpaper": true,
          "screensaver": true,
          "lineKeys": 27,
          "softKeys": [
            {
              "start": 1,
              "end": 4
            },
            {
              "start": 12,
              "end": 14
            }
          ],
          "hidden_variables": [
            "programablekey_label_5",
            "programablekey_label_6",
            "programablekey_label_7",
            "programablekey_label_8",
            "programablekey_label_9",
            "programablekey_label_10",
            "programablekey_label_11",
            "programablekey_label_12",
            "programablekey_label_13",
            "programablekey_label_14"
          ]
        }
      }
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
            "type": "password"
          },
          {
            "variable": "userpw",
            "description": "User password",
            "type": "password"
          },
          {
            "variable": "varpw",
            "description": "Var password",
            "type": "password"
          }
        ];
      }

      return {
        "name": "General",
        "items": settingsItems.concat(passwordItems)
      }
    }

    this.preferences = function (modelMap) {
      if (!hasPreferencesSection(modelMap)) {
        return;
      }

      var ringtoneItems = [];
      var displayItems = [];
      var wallpaperItems = [];
      var screensaverItems = [];

      if (modelMap.ringtone) {
        ringtoneItems = [
          {
            "variable": "default_ringtone",
            "description": "Default Ringtone",
            "type": "list",
            "options": [
              {
                "text": "Common",
                "value": "Common"
              },
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
              },
            ]
          },
          {
            "variable": "ringtone_url", // TODO upload
            "description": "Ringtone URL",
            "type": "input"
          },
        ]
      }

      if (modelMap.display) {
        displayItems = [
          {
            "variable": "lcd_logo_mode",
            "description": "LCD Logo Mode",
            "type": "list",
            "options": [
              {
                "text": "Common",
                "value": "Common"
              },
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
              },
            ]
          },
          {
            "variable": "lcd_logo_url",
            "description": "LCD Logo URL", // TODO upload
            "type": "input"
          },
          {
            "variable": "contrast",
            "description": "Contrast",
            "type": "list",
            "options": [
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
              }
            ]
          },
          {
            "variable": "backlight_time",
            "description": "Backlight Time",
            "type": "list",
            "options": [
              {
                "text": "Always on",
                "value": "0"
              },
              {
                "text": "Always off",
                "value": "1"
              },
              {
                "text": "15s",
                "value": "15"
              },
              {
                "text": "30s",
                "value": "30"
              },
              {
                "text": "1min",
                "value": "60"
              },
              {
                "text": "2min",
                "value": "120"
              },
              {
                "text": "5min",
                "value": "300"
              },
              {
                "text": "10min",
                "value": "600"
              },
              {
                "text": "30min",
                "value": "1800"
              }
            ]
          },
          {
            "variable": "inactive_backlight_level",
            "description": "Inactive Backlight Level",
            "type": "list",
            "options": [
              {
                "text": "Off",
                "value": "0"
              },
              {
                "text": "Low",
                "value": "1"
              }
            ]
          },

          {
            "variable": "active_backlight_level",
            "description": "Active Backlight Level",
            "type": "list",
            "options": [
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
              }
            ]
          }
        ];
      }

      if (modelMap.wallpaper) {
        wallpaperItems = [
          {
            "variable": "wallpaper",
            "description": "Wallpaper",
            "type": "list",
            "options": [
              {
                "text": "Default.jpg",
                "value": "Default.jpg"
              },
              {
                "text": "Default.png",
                "value": "Default.png"
              },
              {
                "text": "01.jpg",
                "value": "01.jpg"
              },
              {
                "text": "01.png",
                "value": "01.png"
              },
              {
                "text": "02.jpg",
                "value": "02.jpg"
              },
              {
                "text": "02.png",
                "value": "02.png"
              },
              {
                "text": "03.jpg",
                "value": "03.jpg"
              },
              {
                "text": "03.png",
                "value": "03.png"
              },
              {
                "text": "04.jpg",
                "value": "04.jpg"
              },
              {
                "text": "04.png",
                "value": "04.png"
              },
              {
                "text": "05.jpg",
                "value": "05.jpg"
              },
              {
                "text": "05.png",
                "value": "05.png"
              },
            ]
          },
          {
            "variable": "wallpaperurl", // TODO upload
            "description": "Wallpaper URL",
            "type": "input"
          },
        ];
      }

      if (modelMap.screensaver) {
        screensaverItems = [
          {
            "variable": "screensaver_mode",
            "description": "Screensaver Mode",
            "type": "list",
            "options": [
              {
                "text": "System",
                "value": "0"
              },
              {
                "text": "Custom",
                "value": "1"
              },
              {
                "text": "Server XML",
                "value": "2"
              },
              {
                "text": "Clock (VP59 / T58A)",
                "value": "0"
              },
              {
                "text": "Colours (VP59 / T58A)",
                "value": "1"
              },
              {
                "text": "Photo Frame (VP59 / T58A)",
                "value": "2"
              },
              {
                "text": "Photo Table (VP59 / T58A)",
                "value": "3"
              },
            ]
          },
          {
            "variable": "screesaver_url", // TODO upload
            "description": "Screensaver URL",
            "type": "input"
          },
          {
            "variable": "screensaver_wait_time",
            "description": "Screensaver Wait Time",
            "type": "list",
            "options": [
              {
                "text": "15s",
                "value": "15"
              },
              {
                "text": "30s",
                "value": "30"
              },
              {
                "text": "1min",
                "value": "60"
              },
              {
                "text": "2min",
                "value": "120"
              },
              {
                "text": "5min",
                "value": "300"
              },
              {
                "text": "10min",
                "value": "600"
              },
              {
                "text": "30min",
                "value": "1800"
              },
              {
                "text": "1h",
                "value": "3600"
              },
              {
                "text": "2h",
                "value": "7200"
              }
            ]
          }
        ];
      }

      return {
        "name": "Preferences",
        "items": ringtoneItems.concat(displayItems).concat(wallpaperItems).concat(screensaverItems)
      }
    }

    this.network = function (modelMap) {
      if (!hasNetworkSection(modelMap)) {
        return;
      }

      var ldapItems = [];
      var vlanItems = [];

      if (modelMap.ldap) {
        ldapItems = [
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
          }
        ];
      }

      if (modelMap.vlan) {
        vlanItems = [
          {
            "variable": "vlan_dhcp_enable",
            "description": "DHCP VLAN Discovery",
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
            "variable": "data_vlan_qos",
            "description": "VLAN Priority for PC port",
            "type": "list",
            "options": [
              {
                "text": "0 (lowest)",
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
                "value": "6"
              },
              {
                "text": "7 (highest)",
                "value": "7"
              }
            ]
          },
          {
            "variable": "data_vlan_id",
            "description": "VLAN ID for PC port",
            "type": "input"
          },
          {
            "variable": "data_vlan_enable",
            "description": "VLAN Enable for PC port",
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
            "variable": "voice_vlan_qos",
            "description": "VLAN Priority for Internet port",
            "type": "list",
            "options": [
              {
                "text": "0 (lowest)",
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
                "value": "6"
              },
              {
                "text": "7 (highest)",
                "value": "7"
              }
            ]
          },
          {
            "variable": "voice_vlan_id",
            "description": "VLAN ID for Internet port",
            "type": "input"
          },
          {
            "variable": "voice_vlan_enable",
            "description": "VLAN Enable for Internet port",
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
            "description": "DHCP Options (comma separated)",
            "type": "input"
          }
        ];
      }

      return {
        "name": "Network",
        "items": ldapItems.concat(vlanItems)
      }
    }

    this.provisioning = function (modelMap) {
      if (!hasProvisioningSection(modelMap)) {
        return;
      }

      return {
        "name": "Provisioning",
        "items": [
          {
            "variable": "dhcp_enable",
            "description": "DHCP Active",
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
            "variable": "weekly_enable",
            "description": "Weekly Provisioning",
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
            "variable": "weekly_dayofweek",
            "description": "Weekly Provisioning Days of Week",
            "type": "input"
          },
          {
            "variable": "weekly_end_time",
            "description": "Weekly End Time",
            "type": "input"
          },
          {
            "variable": "weekly_begin_time",
            "description": "Weekly Begin Time",
            "type": "input"
          },
          {
            "variable": "begin_time_hour",
            "description": "Begin Time - Hour",
            "type": "input"
          },
          {
            "variable": "begin_time_minutes",
            "description": "Begin Time - Minute",
            "type": "input"
          },
          {
            "variable": "pnp_enable",
            "description": "Plug and Play (PnP)",
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
          }
        ]
      }
    }

    this.softKeys = function (modelMap) {
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
                  "type": "input"
                },
                {
                  "variable": "programablekey_history_type",
                  "description": "History Type",
                  "type": "list",
                  "options": [
                    {
                      "text": "Local History",
                      "value": "0"
                    },
                    {
                      "text": "Network CallLog",
                      "value": "1"
                    }
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
                  "type": "input"
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
                {
                  "variable": "linekey_extension",
                  "description": "Extension",
                  "type": "input"
                },
                {
                  "variable": "linekey_xml_phonebook",
                  "description": "XML Phonebook",
                  "type": "input"
                }
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
                  "type": "input"
                },
                {
                  "variable": "expkey_value",
                  "description": "Value",
                  "type": "input"
                },
                {
                  "variable": "expkey_value",
                  "description": "Value",
                  "type": input
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
  })
