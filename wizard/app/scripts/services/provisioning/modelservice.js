'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.ModelService
 * @description
 * # ModelService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('ModelService', function ($q, RestService) {

    // Post phone
    this.addPhone = function (obj) {
      RestService.tpost('/tancredi/api/v1/phones', obj).then(function (res) {
        resolve(res)
      }, function (err) {
        reject(err)
      })
    }

    this.getPhones = function () {
      RestService.tget('/tancredi/api/v1/phones').then(function (res) {
        resolve(res)
      }, function (err) {
        reject(err)
      })
    }

    // Post model
    this.addModel = function (obj) {
      RestService.tpost('/tancredi/api/v1/models', obj).then(function (res) {
        resolve(res)
      }, function (err) {
        reject(err)
      })
    }

    // Retrieve the complete (phone) models collection
    this.getModels = function () {
      return $q(function (resolve, reject) {
        RestService.tget('/tancredi/api/v1/models').then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        })
      })
    }

    // Retrieve model
    this.getModel = function (name) {
      return $q(function (resolve, reject) {
        RestService.tget('/tancredi/api/v1/models/' + name).then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        })
      })
    }

    // Retrieve the default variable values
    this.getDefaults = function () {
      return $q(function (resolve, reject) {
        RestService.tget('/tancredi/api/v1/defaults').then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        })
      })
    }

    this.getDefaultsUI = function () {
      return {
        "name": "Default Settings",
        "data": [{
            "variable": "id_addr",
            "default_value": "",
            "description": "IP address of phone server",
            "type": "input"
          },
          {
            "variable": "id_addr",
            "default_value": "",
            "description": "Configuration Type",
            "type": "list",
            "options": [
              {
                "text": "TFTP/FTP",
                "value": "tftp"
              },
              {
                "text": "Web",
                "value": "http"
              }
            ]
          },
          {
            "variable": "config_firm_dir",
            "default_value": "/var/lib/tftpnethvoice/",
            "description": "Global Final Config & Firmware Directory",
            "type": "input"
          },
          {
            "variable": "time_zone",
            "default_value": "",
            "description": "Time Zone",
            "type": "list",
            "options": [
              {
                "text": "Africa/Djibouti",
                "value": ""
              },
              {
                "text": "Africa/Douala",
                "value": ""
              },
              {
                "text": "Africa/El_Aaiun",
                "value": ""
              },
              {
                "text": "Africa/Freetown",
                "value": ""
              },
              {
                "text": "Africa/Gaborone",
                "value": ""
              },
              {
                "text": "Africa/Harare",
                "value": ""
              },
              {
                "text": "Africa/Johannesburg",
                "value": ""
              },
              {
                "text": "Africa/Juba",
                "value": ""
              },
              {
                "text": "Africa/Kampala",
                "value": ""
              },
              {
                "text": "Africa/Khartoum",
                "value": ""
              },
              {
                "text": "Africa/Kigali",
                "value": ""
              },
              {
                "text": "Africa/Kinshasa",
                "value": ""
              },
              {
                "text": "Africa/Lagos",
                "value": ""
              },
              {
                "text": "Africa/Libreville",
                "value": ""
              },
              {
                "text": "Africa/Lome",
                "value": ""
              },
              {
                "text": "Africa/Luanda",
                "value": ""
              },
              {
                "text": "Africa/Lubumbashi",
                "value": ""
              },
              {
                "text": "Africa/Lusaka",
                "value": ""
              },
              {
                "text": "Africa/Malabo",
                "value": ""
              },
              {
                "text": "Africa/Maputo",
                "value": ""
              },
              {
                "text": "Africa/Maseru",
                "value": ""
              },
              {
                "text": "Africa/Mbabane",
                "value": ""
              },
              {
                "text": "Africa/Mogadishu",
                "value": ""
              },
              {
                "text": "Africa/Monrovia",
                "value": ""
              },
              {
                "text": "Africa/Nairobi",
                "value": ""
              },
              {
                "text": "Africa/Ndjamena",
                "value": ""
              },
              {
                "text": "Africa/Niamey",
                "value": ""
              },
              {
                "text": "Africa/Nouakchott",
                "value": ""
              },
              {
                "text": "Africa/Ouagadougou",
                "value": ""
              },
              {
                "text": "Africa/Porto-Novo",
                "value": ""
              },
              {
                "text": "Africa/Sao_Tome",
                "value": ""
              },
              {
                "text": "Africa/Tripoli",
                "value": ""
              },
              {
                "text": "Africa/Tunis",
                "value": ""
              },
              {
                "text": "Africa/Windhoek",
                "value": ""
              },
              {
                "text": "America/Adak",
                "value": ""
              },
              {
                "text": "America/Anchorage",
                "value": ""
              },
              {
                "text": "America/Anguilla",
                "value": ""
              },
              {
                "text": "America/Antigua",
                "value": ""
              },
              {
                "text": "America/Araguaina",
                "value": ""
              },
              {
                "text": "America/Argentina/Buenos_Aires",
                "value": ""
              },
              {
                "text": "America/Argentina/Catamarca",
                "value": ""
              },
              {
                "text": "America/Argentina/Cordoba",
                "value": ""
              },
              {
                "text": "America/Argentina/Jujuy",
                "value": ""
              },
              {
                "text": "America/Argentina/La_Rioja",
                "value": ""
              },
              {
                "text": "America/Argentina/Mendoza",
                "value": ""
              },
              {
                "text": "America/Argentina/Rio_Gallegos",
                "value": ""
              },
              {
                "text": "America/Argentina/Salta",
                "value": ""
              },
              {
                "text": "America/Argentina/San_Juan",
                "value": ""
              },
              {
                "text": "America/Argentina/San_Luis",
                "value": ""
              },
              {
                "text": "America/Argentina/Tucuman",
                "value": ""
              },
              {
                "text": "America/Argentina/Ushuaia",
                "value": ""
              },
              {
                "text": "America/Aruba",
                "value": ""
              },
              {
                "text": "America/Asuncion",
                "value": ""
              },
              {
                "text": "America/Atikokan",
                "value": ""
              },
              {
                "text": "America/Bahia_Banderas",
                "value": ""
              },
              {
                "text": "America/Bahia",
                "value": ""
              },
              {
                "text": "America/Barbados",
                "value": ""
              },
              {
                "text": "America/Belem",
                "value": ""
              },
              {
                "text": "America/Belize",
                "value": ""
              },
              {
                "text": "America/Blanc-Sablon",
                "value": ""
              },
              {
                "text": "America/Boa_Vista",
                "value": ""
              },
              {
                "text": "America/Bogota",
                "value": ""
              },
              {
                "text": "America/Boise",
                "value": ""
              },
              {
                "text": "America/Cambridge_Bay",
                "value": ""
              },
              {
                "text": "America/Campo_Grande",
                "value": ""
              },
              {
                "text": "America/Cancun",
                "value": ""
              },
              {
                "text": "America/Caracas",
                "value": ""
              },
              {
                "text": "America/Cayenne",
                "value": ""
              },
              {
                "text": "America/Cayman",
                "value": ""
              },
              {
                "text": "America/Chicago",
                "value": ""
              },
              {
                "text": "America/Chihuahua",
                "value": ""
              },
              {
                "text": "America/Costa_Rica",
                "value": ""
              },
              {
                "text": "America/Creston",
                "value": ""
              },
              {
                "text": "America/Cuiaba",
                "value": ""
              },
              {
                "text": "America/Curacao",
                "value": ""
              },
              {
                "text": "America/Danmarkshavn",
                "value": ""
              },
              {
                "text": "America/Dawson_Creek",
                "value": ""
              },
              {
                "text": "America/Dawson",
                "value": ""
              },
              {
                "text": "America/Denver",
                "value": ""
              },
              {
                "text": "America/Detroit",
                "value": ""
              },
              {
                "text": "America/Dominica",
                "value": ""
              },
              {
                "text": "America/Edmonton",
                "value": ""
              },
              {
                "text": "America/Eirunepe",
                "value": ""
              },
              {
                "text": "America/El_Salvador",
                "value": ""
              },
              {
                "text": "America/Fortaleza",
                "value": ""
              },
              {
                "text": "America/Fort_Nelson",
                "value": ""
              },
              {
                "text": "America/Glace_Bay",
                "value": ""
              },
              {
                "text": "America/Godthab",
                "value": ""
              },
              {
                "text": "America/Goose_Bay",
                "value": ""
              },
              {
                "text": "America/Grand_Turk",
                "value": ""
              },
              {
                "text": "America/Grenada",
                "value": ""
              },
              {
                "text": "America/Guadeloupe",
                "value": ""
              },
              {
                "text": "America/Guatemala",
                "value": ""
              },
              {
                "text": "America/Guayaquil",
                "value": ""
              },
              {
                "text": "America/Guyana",
                "value": ""
              },
              {
                "text": "America/Halifax",
                "value": ""
              },
              {
                "text": "America/Havana",
                "value": ""
              },
              {
                "text": "America/Hermosillo",
                "value": ""
              },
              {
                "text": "America/Indiana/Indianapolis",
                "value": ""
              },
              {
                "text": "America/Indiana/Knox",
                "value": ""
              },
              {
                "text": "America/Indiana/Marengo",
                "value": ""
              },
              {
                "text": "America/Indiana/Petersburg",
                "value": ""
              },
              {
                "text": "America/Indiana/Tell_City",
                "value": ""
              },
              {
                "text": "America/Indiana/Vevay",
                "value": ""
              },
              {
                "text": "America/Indiana/Vincennes",
                "value": ""
              },
              {
                "text": "America/Indiana/Winamac",
                "value": ""
              },
              {
                "text": "America/Inuvik",
                "value": ""
              },
              {
                "text": "America/Iqaluit",
                "value": ""
              },
              {
                "text": "America/Jamaica",
                "value": ""
              },
              {
                "text": "America/Juneau",
                "value": ""
              },
              {
                "text": "America/Kentucky/Louisville",
                "value": ""
              },
              {
                "text": "America/Kentucky/Monticello",
                "value": ""
              },
              {
                "text": "America/Kralendijk",
                "value": ""
              },
              {
                "text": "America/La_Paz",
                "value": ""
              },
              {
                "text": "America/Lima",
                "value": ""
              },
              {
                "text": "America/Los_Angeles",
                "value": ""
              },
              {
                "text": "America/Lower_Princes",
                "value": ""
              },
              {
                "text": "America/Maceio",
                "value": ""
              },
              {
                "text": "America/Managua",
                "value": ""
              },
              {
                "text": "America/Manaus",
                "value": ""
              },
              {
                "text": "America/Marigot",
                "value": ""
              },
              {
                "text": "America/Martinique",
                "value": ""
              },
              {
                "text": "America/Matamoros",
                "value": ""
              },
              {
                "text": "America/Mazatlan",
                "value": ""
              },
              {
                "text": "America/Menominee",
                "value": ""
              },
              {
                "text": "America/Merida",
                "value": ""
              },
              {
                "text": "America/Metlakatla",
                "value": ""
              },
              {
                "text": "America/Mexico_City",
                "value": ""
              },
              {
                "text": "America/Miquelon",
                "value": ""
              },
              {
                "text": "America/Moncton",
                "value": ""
              },
              {
                "text": "America/Monterrey",
                "value": ""
              },
              {
                "text": "America/Montevideo",
                "value": ""
              },
              {
                "text": "America/Montserrat",
                "value": ""
              },
              {
                "text": "America/Nassau",
                "value": ""
              },
              {
                "text": "America/New_York",
                "value": ""
              },
              {
                "text": "America/Nipigon",
                "value": ""
              },
              {
                "text": "America/Nome",
                "value": ""
              },
              {
                "text": "America/North_Dakota/Beulah",
                "value": ""
              },
              {
                "text": "America/North_Dakota/Center",
                "value": ""
              },
              {
                "text": "America/North_Dakota/New_Salem",
                "value": ""
              },
              {
                "text": "America/Ojinaga",
                "value": ""
              },
              {
                "text": "America/Panama",
                "value": ""
              },
              {
                "text": "America/Pangnirtung",
                "value": ""
              },
              {
                "text": "America/Paramaribo",
                "value": ""
              },
              {
                "text": "America/Phoenix",
                "value": ""
              },
              {
                "text": "America/Port-au-Prince",
                "value": ""
              },
              {
                "text": "America/Port_of_Spain",
                "value": ""
              },
              {
                "text": "America/Porto_Velho",
                "value": ""
              },
              {
                "text": "America/Puerto_Rico",
                "value": ""
              },
              {
                "text": "America/Punta_Arenas",
                "value": ""
              },
              {
                "text": "America/Rainy_River",
                "value": ""
              },
              {
                "text": "America/Rankin_Inlet",
                "value": ""
              },
              {
                "text": "America/Recife",
                "value": ""
              },
              {
                "text": "America/Regina",
                "value": ""
              },
              {
                "text": "America/Resolute",
                "value": ""
              },
              {
                "text": "America/Rio_Branco",
                "value": ""
              },
              {
                "text": "America/Santarem",
                "value": ""
              },
              {
                "text": "America/Santiago",
                "value": ""
              },
              {
                "text": "America/Santo_Domingo",
                "value": ""
              },
              {
                "text": "America/Scoresbysund",
                "value": ""
              },
              {
                "text": "America/Sitka",
                "value": ""
              },
              {
                "text": "America/St_Barthelemy",
                "value": ""
              },
              {
                "text": "America/St_Johns",
                "value": ""
              },
              {
                "text": "America/St_Kitts",
                "value": ""
              },
              {
                "text": "America/St_Lucia",
                "value": ""
              },
              {
                "text": "America/St_Thomas",
                "value": ""
              },
              {
                "text": "America/St_Vincent",
                "value": ""
              },
              {
                "text": "America/Swift_Current",
                "value": ""
              },
              {
                "text": "America/Tegucigalpa",
                "value": ""
              },
              {
                "text": "America/Thule",
                "value": ""
              },
              {
                "text": "America/Thunder_Bay",
                "value": ""
              },
              {
                "text": "America/Tijuana",
                "value": ""
              },
              {
                "text": "America/Toronto",
                "value": ""
              },
              {
                "text": "America/Tortola",
                "value": ""
              },
              {
                "text": "America/Vancouver",
                "value": ""
              },
              {
                "text": "America/Whitehorse",
                "value": ""
              },
              {
                "text": "America/Winnipeg",
                "value": ""
              },
              {
                "text": "America/Yakutat",
                "value": ""
              },
              {
                "text": "America/Yellowknife",
                "value": ""
              },
              {
                "text": "Antarctica/Casey",
                "value": ""
              },
              {
                "text": "Antarctica/Davis",
                "value": ""
              },
              {
                "text": "Antarctica/DumontDUrville",
                "value": ""
              },
              {
                "text": "Antarctica/Macquarie",
                "value": ""
              },
              {
                "text": "Antarctica/Mawson",
                "value": ""
              },
              {
                "text": "Antarctica/McMurdo",
                "value": ""
              },
              {
                "text": "Antarctica/Palmer",
                "value": ""
              },
              {
                "text": "Antarctica/Rothera",
                "value": ""
              },
              {
                "text": "Antarctica/Syowa",
                "value": ""
              },
              {
                "text": "Antarctica/Troll",
                "value": ""
              },
              {
                "text": "Antarctica/Vostok",
                "value": ""
              },
              {
                "text": "Arctic/Longyearbyen",
                "value": ""
              },
              {
                "text": "Asia/Aden",
                "value": ""
              },
              {
                "text": "Asia/Almaty",
                "value": ""
              },
              {
                "text": "Asia/Amman",
                "value": ""
              },
              {
                "text": "Asia/Anadyr",
                "value": ""
              },
              {
                "text": "Asia/Aqtau",
                "value": ""
              },
              {
                "text": "Asia/Aqtobe",
                "value": ""
              },
              {
                "text": "Asia/Ashgabat",
                "value": ""
              },
              {
                "text": "Asia/Atyrau",
                "value": ""
              },
              {
                "text": "Asia/Baghdad",
                "value": ""
              },
              {
                "text": "Asia/Bahrain",
                "value": ""
              },
              {
                "text": "Asia/Baku",
                "value": ""
              },
              {
                "text": "Asia/Bangkok",
                "value": ""
              },
              {
                "text": "Asia/Barnaul",
                "value": ""
              },
              {
                "text": "Asia/Beirut",
                "value": ""
              },
              {
                "text": "Asia/Bishkek",
                "value": ""
              },
              {
                "text": "Asia/Brunei",
                "value": ""
              },
              {
                "text": "Asia/Chita",
                "value": ""
              },
              {
                "text": "Asia/Choibalsan",
                "value": ""
              },
              {
                "text": "Asia/Colombo",
                "value": ""
              },
              {
                "text": "Asia/Damascus",
                "value": ""
              },
              {
                "text": "Asia/Dhaka",
                "value": ""
              },
              {
                "text": "Asia/Dili",
                "value": ""
              },
              {
                "text": "Asia/Dubai",
                "value": ""
              },
              {
                "text": "Asia/Dushanbe",
                "value": ""
              },
              {
                "text": "Asia/Famagusta",
                "value": ""
              },
              {
                "text": "Asia/Gaza",
                "value": ""
              },
              {
                "text": "Asia/Hebron",
                "value": ""
              },
              {
                "text": "Asia/Ho_Chi_Minh",
                "value": ""
              },
              {
                "text": "Asia/Hong_Kong",
                "value": ""
              },
              {
                "text": "Asia/Hovd",
                "value": ""
              },
              {
                "text": "Asia/Irkutsk",
                "value": ""
              },
              {
                "text": "Asia/Jakarta",
                "value": ""
              },
              {
                "text": "Asia/Jayapura",
                "value": ""
              },
              {
                "text": "Asia/Jerusalem",
                "value": ""
              },
              {
                "text": "Asia/Kabul",
                "value": ""
              },
              {
                "text": "Asia/Kamchatka",
                "value": ""
              },
              {
                "text": "Asia/Karachi",
                "value": ""
              },
              {
                "text": "Asia/Kathmandu",
                "value": ""
              },
              {
                "text": "Asia/Khandyga",
                "value": ""
              },
              {
                "text": "Asia/Kolkata",
                "value": ""
              },
              {
                "text": "Asia/Krasnoyarsk",
                "value": ""
              },
              {
                "text": "Asia/Kuala_Lumpur",
                "value": ""
              },
              {
                "text": "Asia/Kuching",
                "value": ""
              },
              {
                "text": "Asia/Kuwait",
                "value": ""
              },
              {
                "text": "Asia/Macau",
                "value": ""
              },
              {
                "text": "Asia/Magadan",
                "value": ""
              },
              {
                "text": "Asia/Makassar",
                "value": ""
              },
              {
                "text": "Asia/Manila",
                "value": ""
              },
              {
                "text": "Asia/Muscat",
                "value": ""
              },
              {
                "text": "Asia/Nicosia",
                "value": ""
              },
              {
                "text": "Asia/Novokuznetsk",
                "value": ""
              },
              {
                "text": "Asia/Novosibirsk",
                "value": ""
              },
              {
                "text": "Asia/Omsk",
                "value": ""
              },
              {
                "text": "Asia/Oral",
                "value": ""
              },
              {
                "text": "Asia/Phnom_Penh",
                "value": ""
              },
              {
                "text": "Asia/Pontianak",
                "value": ""
              },
              {
                "text": "Asia/Pyongyang",
                "value": ""
              },
              {
                "text": "Asia/Qatar",
                "value": ""
              },
              {
                "text": "Asia/Qyzylorda",
                "value": ""
              },
              {
                "text": "Asia/Riyadh",
                "value": ""
              },
              {
                "text": "Asia/Sakhalin",
                "value": ""
              },
              {
                "text": "Asia/Samarkand",
                "value": ""
              },
              {
                "text": "Asia/Seoul",
                "value": ""
              },
              {
                "text": "Asia/Shanghai",
                "value": ""
              },
              {
                "text": "Asia/Singapore",
                "value": ""
              },
              {
                "text": "Asia/Srednekolymsk",
                "value": ""
              },
              {
                "text": "Asia/Taipei",
                "value": ""
              },
              {
                "text": "Asia/Tashkent",
                "value": ""
              },
              {
                "text": "Asia/Tbilisi",
                "value": ""
              },
              {
                "text": "Asia/Tehran",
                "value": ""
              },
              {
                "text": "Asia/Thimphu",
                "value": ""
              },
              {
                "text": "Asia/Tokyo",
                "value": ""
              },
              {
                "text": "Asia/Tomsk",
                "value": ""
              },
              {
                "text": "Asia/Ulaanbaatar",
                "value": ""
              },
              {
                "text": "Asia/Urumqi",
                "value": ""
              },
              {
                "text": "Asia/Ust-Nera",
                "value": ""
              },
              {
                "text": "Asia/Vientiane",
                "value": ""
              },
              {
                "text": "Asia/Vladivostok",
                "value": ""
              },
              {
                "text": "Asia/Yakutsk",
                "value": ""
              },
              {
                "text": "Asia/Yangon",
                "value": ""
              },
              {
                "text": "Asia/Yekaterinburg",
                "value": ""
              },
              {
                "text": "Asia/Yerevan",
                "value": ""
              },
              {
                "text": "Atlantic/Azores",
                "value": ""
              },
              {
                "text": "Atlantic/Bermuda",
                "value": ""
              },
              {
                "text": "Atlantic/Canary",
                "value": ""
              },
              {
                "text": "Atlantic/Cape_Verde",
                "value": ""
              },
              {
                "text": "Atlantic/Faroe",
                "value": ""
              },
              {
                "text": "Atlantic/Madeira",
                "value": ""
              },
              {
                "text": "Atlantic/Reykjavik",
                "value": ""
              },
              {
                "text": "Atlantic/Stanley",
                "value": ""
              },
              {
                "text": "Atlantic/St_Helena",
                "value": ""
              },
              {
                "text": "Australia/Adelaide",
                "value": ""
              },
              {
                "text": "Australia/Brisbane",
                "value": ""
              },
              {
                "text": "Australia/Broken_Hill",
                "value": ""
              },
              {
                "text": "Australia/Currie",
                "value": ""
              },
              {
                "text": "Australia/Darwin",
                "value": ""
              },
              {
                "text": "Australia/Eucla",
                "value": ""
              },
              {
                "text": "Australia/Hobart",
                "value": ""
              },
              {
                "text": "Australia/Lindeman",
                "value": ""
              },
              {
                "text": "Australia/Lord_Howe",
                "value": ""
              },
              {
                "text": "Australia/Melbourne",
                "value": ""
              },
              {
                "text": "Australia/Perth",
                "value": ""
              },
              {
                "text": "Australia/Sydney",
                "value": ""
              },
              {
                "text": "Europe/Amsterdam",
                "value": ""
              },
              {
                "text": "Europe/Andorra",
                "value": ""
              },
              {
                "text": "Europe/Astrakhan",
                "value": ""
              },
              {
                "text": "Europe/Athens",
                "value": ""
              },
              {
                "text": "Europe/Belgrade",
                "value": ""
              },
              {
                "text": "Europe/Berlin",
                "value": ""
              },
              {
                "text": "Europe/Bratislava",
                "value": ""
              },
              {
                "text": "Europe/Brussels",
                "value": ""
              },
              {
                "text": "Europe/Bucharest",
                "value": ""
              },
              {
                "text": "Europe/Budapest",
                "value": ""
              },
              {
                "text": "Europe/Busingen",
                "value": ""
              },
              {
                "text": "Europe/Chisinau",
                "value": ""
              },
              {
                "text": "Europe/Copenhagen",
                "value": ""
              },
              {
                "text": "Europe/Dublin",
                "value": ""
              },
              {
                "text": "Europe/Gibraltar",
                "value": ""
              },
              {
                "text": "Europe/Guernsey",
                "value": ""
              },
              {
                "text": "Europe/Helsinki",
                "value": ""
              },
              {
                "text": "Europe/Isle_of_Man",
                "value": ""
              },
              {
                "text": "Europe/Istanbul",
                "value": ""
              },
              {
                "text": "Europe/Jersey",
                "value": ""
              },
              {
                "text": "Europe/Kaliningrad",
                "value": ""
              },
              {
                "text": "Europe/Kiev",
                "value": ""
              },
              {
                "text": "Europe/Kirov",
                "value": ""
              },
              {
                "text": "Europe/Lisbon",
                "value": ""
              },
              {
                "text": "Europe/Ljubljana",
                "value": ""
              },
              {
                "text": "Europe/London",
                "value": ""
              },
              {
                "text": "Europe/Luxembourg",
                "value": ""
              },
              {
                "text": "Europe/Madrid",
                "value": ""
              },
              {
                "text": "Europe/Malta",
                "value": ""
              },
              {
                "text": "Europe/Mariehamn",
                "value": ""
              },
              {
                "text": "Europe/Minsk",
                "value": ""
              },
              {
                "text": "Europe/Monaco",
                "value": ""
              },
              {
                "text": "Europe/Moscow",
                "value": ""
              },
              {
                "text": "Europe/Oslo",
                "value": ""
              },
              {
                "text": "Europe/Paris",
                "value": ""
              },
              {
                "text": "Europe/Podgorica",
                "value": ""
              },
              {
                "text": "Europe/Prague",
                "value": ""
              },
              {
                "text": "Europe/Riga",
                "value": ""
              },
              {
                "text": "Europe/Rome",
                "value": ""
              },
              {
                "text": "Europe/Samara",
                "value": ""
              },
              {
                "text": "Europe/San_Marino",
                "value": ""
              },
              {
                "text": "Europe/Sarajevo",
                "value": ""
              },
              {
                "text": "Europe/Saratov",
                "value": ""
              },
              {
                "text": "Europe/Simferopol",
                "value": ""
              },
              {
                "text": "Europe/Skopje",
                "value": ""
              },
              {
                "text": "Europe/Sofia",
                "value": ""
              },
              {
                "text": "Europe/Stockholm",
                "value": ""
              },
              {
                "text": "Europe/Tallinn",
                "value": ""
              },
              {
                "text": "Europe/Tirane",
                "value": ""
              },
              {
                "text": "Europe/Ulyanovsk",
                "value": ""
              },
              {
                "text": "Europe/Uzhgorod",
                "value": ""
              },
              {
                "text": "Europe/Vaduz",
                "value": ""
              },
              {
                "text": "Europe/Vatican",
                "value": ""
              },
              {
                "text": "Europe/Vienna",
                "value": ""
              },
              {
                "text": "Europe/Vilnius",
                "value": ""
              },
              {
                "text": "Europe/Volgograd",
                "value": ""
              },
              {
                "text": "Europe/Warsaw",
                "value": ""
              },
              {
                "text": "Europe/Zagreb",
                "value": ""
              },
              {
                "text": "Europe/Zaporozhye",
                "value": ""
              },
              {
                "text": "Europe/Zurich",
                "value": ""
              },
              {
                "text": "Indian/Antananarivo",
                "value": ""
              },
              {
                "text": "Indian/Chagos",
                "value": ""
              },
              {
                "text": "Indian/Christmas",
                "value": ""
              },
              {
                "text": "Indian/Cocos",
                "value": ""
              },
              {
                "text": "Indian/Comoro",
                "value": ""
              },
              {
                "text": "Indian/Kerguelen",
                "value": ""
              },
              {
                "text": "Indian/Mahe",
                "value": ""
              },
              {
                "text": "Indian/Maldives",
                "value": ""
              },
              {
                "text": "Indian/Mauritius",
                "value": ""
              },
              {
                "text": "Indian/Mayotte",
                "value": ""
              },
              {
                "text": "Indian/Reunion",
                "value": ""
              },
              {
                "text": "Pacific/Apia",
                "value": ""
              },
              {
                "text": "Pacific/Auckland",
                "value": ""
              },
              {
                "text": "Pacific/Bougainville",
                "value": ""
              },
              {
                "text": "Pacific/Chatham",
                "value": ""
              },
              {
                "text": "Pacific/Chuuk",
                "value": ""
              },
              {
                "text": "Pacific/Easter",
                "value": ""
              },
              {
                "text": "Pacific/Efate",
                "value": ""
              },
              {
                "text": "Pacific/Enderbury",
                "value": ""
              },
              {
                "text": "Pacific/Fakaofo",
                "value": ""
              },
              {
                "text": "Pacific/Fiji",
                "value": ""
              },
              {
                "text": "Pacific/Funafuti",
                "value": ""
              },
              {
                "text": "Pacific/Galapagos",
                "value": ""
              },
              {
                "text": "Pacific/Gambier",
                "value": ""
              },
              {
                "text": "Pacific/Guadalcanal",
                "value": ""
              },
              {
                "text": "Pacific/Guam",
                "value": ""
              },
              {
                "text": "Pacific/Honolulu",
                "value": ""
              },
              {
                "text": "Pacific/Kiritimati",
                "value": ""
              },
              {
                "text": "Pacific/Kosrae",
                "value": ""
              },
              {
                "text": "Pacific/Kwajalein",
                "value": ""
              },
              {
                "text": "Pacific/Majuro",
                "value": ""
              },
              {
                "text": "Pacific/Marquesas",
                "value": ""
              },
              {
                "text": "Pacific/Midway",
                "value": ""
              },
              {
                "text": "Pacific/Nauru",
                "value": ""
              },
              {
                "text": "Pacific/Niue",
                "value": ""
              },
              {
                "text": "Pacific/Norfolk",
                "value": ""
              },
              {
                "text": "Pacific/Noumea",
                "value": ""
              },
              {
                "text": "Pacific/Pago_Pago",
                "value": ""
              },
              {
                "text": "Pacific/Palau",
                "value": ""
              },
              {
                "text": "Pacific/Pitcairn",
                "value": ""
              },
              {
                "text": "Pacific/Pohnpei",
                "value": ""
              },
              {
                "text": "Pacific/Port_Moresby",
                "value": ""
              },
              {
                "text": "Pacific/Rarotonga",
                "value": ""
              },
              {
                "text": "Pacific/Saipan",
                "value": ""
              },
              {
                "text": "Pacific/Tahiti",
                "value": ""
              },
              {
                "text": "Pacific/Tarawa",
                "value": ""
              },
              {
                "text": "Pacific/Tongatapu",
                "value": ""
              },
              {
                "text": "Pacific/Wake",
                "value": ""
              },
              {
                "text": "Pacific/Wallis",
                "value": ""
              },
              {
                "text": "UTC",
                "value": ""
              }
            ]
          },
          {
            "variable": "ntp_server",
            "default_value": "",
            "description": "Time Server (NTP Server)",
            "type": "input"
          },
          {
            "variable": "config_firm_dir",
            "default_value": "/usr/bin/nmap",
            "description": "NMAP Executable Path",
            "type": "input"
          },
          {
            "variable": "config_firm_dir",
            "default_value": "/usr/sbin/arp",
            "description": "ARP Executable Path",
            "type": "input"
          },
          {
            "variable": "config_firm_dir",
            "default_value": "/usr/sbin/asterisk",
            "description": "Asterisk Executable Path",
            "type": "input"
          }
        ]
      }
    }

  })