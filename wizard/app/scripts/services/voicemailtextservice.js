"use strict";

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.VoicemailTextService
 * @description
 * # VoicemailTextService
 * Service in the nethvoiceWizardUiApp.
 */
angular
  .module("nethvoiceWizardUiApp")
  .service("VoicemailTextService", function ($q, RestService) {
    //Get status of google speech to text
    this.getGoogleSpeechStatus = function () {
      return $q(function (resolve, reject) {
        RestService.get("/configuration/voicemailgooglestt").then(
          function (res) {
            resolve(res);
          },
          function (err) {
            reject(err);
          }
        );
      });
    };

    //Send new status of google speech to text
    this.sendGoogleSpeechStatus = function (status) {
      return $q(function (resolve, reject) {
        RestService.post("/configuration/voicemailgooglestt/", status).then(
          function (res) {
            resolve(res);
          },
          function (err) {
            reject(err);
          }
        );
      });
    };
  });
