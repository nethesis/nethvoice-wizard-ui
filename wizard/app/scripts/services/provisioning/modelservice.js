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
        RestService.tget('/tancredi/api/v1/models').then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

    this.createModel = function (model) {
      return $q(function (resolve, reject) {
        RestService.tpost('/tancredi/api/v1/models', model).then(function (res) {
          resolve(res);
        }, function (err) {
          reject(err);
        });
      });
    };

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

    // Retrieve all the used models
    this.getUsedModels = function () {
      return $q(function (resolve, reject) {
        RestService.tget('/tancredi/api/v1/models?filter[used]').then(function (res) {
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

    // Retrieve original
    this.getOriginal = function (name) {
      return $q(function (resolve, reject) {
        RestService.tget('/tancredi/api/v1/models/' + name + '/version/original').then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        })
      })
    }

    // Update model
    this.patchModel = function (name, obj) {
      return $q(function (resolve, reject) {
        RestService.tpatch('/tancredi/api/v1/models/' + name, obj).then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        })
      })
    }

    // Create model
    this.createModel = function (obj) {
      return $q(function (resolve, reject) {
        RestService.tpost('/tancredi/api/v1/models', obj).then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        })
      })
    }

    // Delete model
    this.deleteModel = function (name) {
      return $q(function (resolve, reject) {
        RestService.tdelete('/tancredi/api/v1/models/' + name).then(function (res) {
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

    // Set the default variable values
    this.setDefaults = function (obj) {
      return $q(function (resolve, reject) {
        RestService.tpatch('/tancredi/api/v1/defaults', obj).then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        })
      })
    }

    // Set the cloud provisioning value
    this.setCloudProvisioning = function (val) {
      return $q(function (resolve, reject) {
        RestService.post('/provisioning/cloud/' + val).then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        })
      })
    }

    // Get the cloud provisioning value
    this.getCloudProvisioning = function () {
      return $q(function (resolve, reject) {
        RestService.get('/provisioning/cloud').then(function (res) {
          resolve(res)
        }, function (err) {
          reject(err)
        })
      })
    }

  })