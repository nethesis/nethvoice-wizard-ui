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

    // Retrieve the complete (phone) models collection
    this.getModels = function () {
      return $q(function (resolve, reject) {
        var res = {
          data: [{
            "name": "Fanvil-X5S",
            "display_name": "Fanvil X5S IP Phone",
            "model_url": "/tancredi/api/v1/models/fanvil-x5s",
          }, {
            "name": "Fanvil-X3S",
            "display_name": "Fanvil X3S IP Phone",
            "model_url": "/tancredi/api/v1/models/fanvil-x3s",
          }]
        }

        resolve(res)

        // RestService.get('/models').then(function (res) {
        //   resolve(res)
        // }, function (err) {
        //   reject(err)
        // })
      })
    }

    // Retrieve model
    this.getModel = function (name) {
      return $q(function (resolve, reject) {
        var res = {
          data: {
            "name": "Fanvil-X5S",
            "display_name": "Fanvil X5S IP Phone",
            "variables": {
              "language" : "English",
              "admin_mode" : "on",
              "admin_mode_password" : "admin",
              "call_waiting" : 0,
              "date_format" : "off",
              "defaultringer" : "Ringer1",
              "dkey_conf" : "keyevent F_CONFERENCE",
              "dkey_directory" : "keyevent F_DIRECTORY_SEARCH",
              "dkey_dnd" : "keyevent F_DND",
              "dkey_help" : "keyevent F_HELP",
              "dkey_hold" : "keyevent F_R",
              "dkey_label_page_next" : "keyevent F_LABEL_PAGE_NEXT",
              "dkey_record" : "dtmf *1",
              "dkey_redial" : "keyevent F_REDIAL",
              "dkey_retrieve" : "speed *97",
              "dkey_snom" : "dtmf ##70",
              "dkey_transfer" : "keyevent F_TRANSFER",
              "dndoff" : "",
              "dndon" : "",
              "gui_fkey1" : "keyevent F_CALL_LIST",
              "gui_fkey2" : "keyevent F_REDIAL",
              "gui_fkey3" : "keyevent F_REDIRECT",
              "gui_fkey4" : "keyevent F_HELP",
              "http_pass" : "admin",
              "ldap_base" : "dc:phonebook,dc:nh",
              "ldap_name_attr" : "cn o",
              "ldap_name_display" : "%cn %o",
              "ldap_name_filter" : "(|(cn:%)(o:%))",
              "ldap_number_attr" : "telephoneNumber mobile homePhone",
              "ldap_number_filter" : "(|(telephoneNumber:%)(mobile:%)(homePhone:%))",
              "ldap_port" : "10389",
              "ldap_server" : "192.168.11.1",
              "number" : "",
              "provisioning_path" : "192.168.11.1",
              "provisioning_type" : "https",
              "svlan_id" : "",
              "svlan_qos" : 0,
              "time_24_format" : "on",
              "timezone" : "Europe/Rome",
              "tones_scheme" : "ITA",
              "type" : "",
              "value" : "",
              "vlan_pc_id" : "",
              "vlan_pc_priority" : "",
              "vlan_port_tagging" : "off",
              "provisioning_type" : "https",
              "provisioning_server" : "192.168.122.75",
              "admin_mode_login" : "admin",
              "admin_mode_password" : "admin",
              "call_waiting" : 0,
              "cfalwaysoff" : "*73",
              "cfalwayson" : "*72",
              "cfbusyoff" : "*91",
              "cfbusyon" : "*90",
              "cftimeout" : 15,
              "cftimeoutoff" : "*53",
              "cftimeouton" : "*52",
              "context" : "active",
              "date_us_format" : "off",
              "defaultringer" : "Ringer1",
              "language" : "German",
              "model" : 725,
              "model_template" : "snom-MODEL.tmpl"
            }
          }
        }

        resolve(res)

        // RestService.get('/models/' + name).then(function (res) {
        //   resolve(res)
        // }, function (err) {
        //   reject(err)
        // })
      })
    }

    // Retrieve the default variable values
    // this.getDefaults = function () {
    //   return $q(function (resolve, reject) {
    //     var res = {}
    //     resolve(res)
    //     // RestService.get('/defaults').then(function (res) {
    //     //   resolve(res)
    //     // }, function (err) {
    //     //   reject(err)
    //     // })
    //   })
    // }

  })