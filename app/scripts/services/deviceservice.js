'use strict';

/**
 * @ngdoc service
 * @name nethvoiceWizardUiApp.DeviceService
 * @description
 * # DeviceService
 * Service in the nethvoiceWizardUiApp.
 */
angular.module('nethvoiceWizardUiApp')
  .service('DeviceService', function($q, RestService, UtilService) {
    this.list = function() {
      return $q(function(resolve, reject) {
        // RestService.get('/devices/scan').then(function(res) {
        //   resolve(res);
        // }, function(err) {
        //   reject(err);
        // });
          resolve({
            data: [{
              "mac": "00:15:65:5A:60:1F",
              "ipv4": "192.168.5.122",
              "manufacturer": "Yealink\/Dreamwave",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "7C:1E:B3:00:49:7F",
              "ipv4": "192.168.5.136",
              "manufacturer": "2N",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "C4:64:13:3D:15:F7",
              "ipv4": "192.168.5.139",
              "manufacturer": "Cisco\/Linksys",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "00:04:13:74:2F:7C",
              "ipv4": "192.168.5.150",
              "manufacturer": "Snom",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "00:04:13:71:26:A8",
              "ipv4": "192.168.5.153",
              "manufacturer": "Snom",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "00:15:65:5A:5D:3B",
              "ipv4": "192.168.5.155",
              "manufacturer": "Yealink\/Dreamwave",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "00:15:65:11:5B:B5",
              "ipv4": "192.168.5.160",
              "manufacturer": "Yealink\/Dreamwave",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "00:04:F2:2D:6B:15",
              "ipv4": "192.168.5.164",
              "manufacturer": "Polycom",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "7C:1E:B3:00:49:80",
              "ipv4": "192.168.5.169",
              "manufacturer": "2N",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "00:04:13:84:00:9F",
              "ipv4": "192.168.5.170",
              "manufacturer": "Snom",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "00:50:58:50:0A:6E",
              "ipv4": "192.168.5.56",
              "manufacturer": "Sangoma",
              "type": "phone",
              "model": "S300"
            }, {
              "mac": "00:50:58:50:11:46",
              "ipv4": "192.168.5.71",
              "manufacturer": "Sangoma",
              "type": "phone",
              "model": "S500"
            }, {
              "mac": "00:04:13:2F:63:47",
              "ipv4": "192.168.5.84",
              "manufacturer": "Snom",
              "type": "phone",
              "model": "300"
            }, {
              "mac": "00:04:F2:1D:20:D7",
              "ipv4": "192.168.5.85",
              "manufacturer": "Polycom",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "00:50:58:50:3D:8F",
              "ipv4": "192.168.5.90",
              "manufacturer": "Sangoma",
              "type": "phone",
              "model": "S300"
            }, {
              "mac": "00:15:65:26:C6:6D",
              "ipv4": "192.168.5.92",
              "manufacturer": "Yealink\/Dreamwave",
              "type": "phone",
              "model": "unknown"
            }, {
              "mac": "00:0F:D3:05:9F:B2",
              "ipv4": "192.168.5.95",
              "manufacturer": "Digium",
              "type": "phone",
              "model": "unknown"
            }]
          });
      });
    };

    this.startScan = function(network) {
      return $q(function(resolve, reject) {
        RestService.post('/devices/scan', {
          network: network.ip,
          cidr: UtilService.maskToCidr(network.netmask)
        }).then(function(res) {
          resolve(res);
        }, function(err) {
          reject(err);
        });
      });
    }
  });