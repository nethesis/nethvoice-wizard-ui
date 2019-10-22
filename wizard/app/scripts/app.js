'use strict';

/**
 * @ngdoc overview
 * @name nethvoiceWizardUiApp
 * @description
 * # nethvoiceWizardUiApp
 *
 * Main module of the application.
 */
angular
  .module('nethvoiceWizardUiApp', [
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'pascalprecht.translate',
    'ui.bootstrap',
    'as.sortable',
    'patternfly',
    'frapontillo.bootstrap-switch',
    'ui.ace'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/dashboard.html',
        controller: 'DashboardCtrl',
        controllerAs: 'dashboard'
      })
      .when('/users', {
        templateUrl: 'views/users.html',
        controller: 'UsersCtrl',
        controllerAs: 'users'
      })
      .when('/trunks', {
        templateUrl: 'views/trunks.html',
        controller: 'TrunksCtrl',
        controllerAs: 'trunks'
      })
      .when('/routes', {
        templateUrl: 'views/routes.html',
        controller: 'RoutesCtrl',
        controllerAs: 'routes'
      })
      .when('/users/extensions', {
        templateUrl: 'views/users/extensions.html',
        controller: 'UsersExtensionsCtrl',
        controllerAs: 'users/extensions'
      })
      .when('/users/profiles', {
        templateUrl: 'views/users/profiles.html',
        controller: 'UsersProfilesCtrl',
        controllerAs: 'users/profiles'
      })
      .when('/users/devices', {
        templateUrl: 'views/users/devices.html',
        controller: 'UsersDevicesCtrl',
        controllerAs: 'users/devices'
      })
      .when('/users/configurations', {
        templateUrl: 'views/users/configurations.html',
        controller: 'UsersConfigurationsCtrl',
        controllerAs: 'users/configurations'
      })
      .when('/devices/inventory', {
        templateUrl: 'views/devices/inventory.html',
        controller: 'DevicesInventoryCtrl',
        controllerAs: 'devices/inventory'
      })
      .when('/devices/templates', {
        templateUrl: 'views/devices/templates.html',
        controller: 'DevicesTemplatesCtrl',
        controllerAs: 'devices/templates'
      })
      .when('/configurations', {
        templateUrl: 'views/configurations.html',
        controller: 'ConfigurationsCtrl',
        controllerAs: 'configurations'
      })
      .when('/trunks/physical', {
        templateUrl: 'views/trunks/physical.html',
        controller: 'TrunksPhysicalCtrl',
        controllerAs: 'trunks/physical'
      })
      .when('/trunks/voip', {
        templateUrl: 'views/trunks/voip.html',
        controller: 'TrunksVoipCtrl',
        controllerAs: 'trunks/voip'
      })
      .when('/routes/inbound', {
        templateUrl: 'views/routes/inbound.html',
        controller: 'RoutesInboundCtrl',
        controllerAs: 'routes/inbound'
      })
      .when('/routes/outbound', {
        templateUrl: 'views/routes/outbound.html',
        controller: 'RoutesOutboundCtrl',
        controllerAs: 'routes/outbound'
      })
      .when('/final', {
        templateUrl: 'views/final.html',
        controller: 'FinalCtrl',
        controllerAs: 'final'
      })
      .when('/admin', {
        templateUrl: 'views/admin.html',
        controller: 'AdminCtrl',
        controllerAs: 'admin'
      })
      .when('/admin/settings', {
        templateUrl: 'views/admin/settings.html',
        controller: 'AdminSettingsCtrl',
        controllerAs: 'admin/settings'
      })
      .when('/admin/report', {
        templateUrl: 'views/admin/report.html',
        controller: 'AdminReportCtrl',
        controllerAs: 'admin/report'
      })
      .when('/users/groups', {
        templateUrl: 'views/users/groups.html',
        controller: 'UsersGroupsCtrl',
        controllerAs: 'users/groups'
      })
      .when('/apps', {
        templateUrl: 'views/apps.html',
        controller: 'AppsCtrl',
        controllerAs: 'apps'
      })
      .when('/apps/cards', {
        templateUrl: 'views/apps/cards.html',
        controller: 'AppsCardsCtrl',
        controllerAs: 'apps/cards'
      })
      .when('/apps/streaming', {
        templateUrl: 'views/apps/streaming.html',
        controller: 'AppsStreamingCtrl',
        controllerAs: 'apps/streaming'
      })
      .when('/apps/paramurl', {
        templateUrl: 'views/apps/paramurl.html',
        controller: 'AppsParamurlCtrl',
        controllerAs: 'apps/paramurl'
      })
      .when('/admin/languages', {
        templateUrl: 'views/admin/languages.html',
        controller: 'AdminLanguagesCtrl',
        controllerAs: 'admin/languages'
      })
      .when('/apps/bulkextensions', {
        templateUrl: 'views/apps/bulkextensions.html',
        controller: 'BulkextensionsCtrl',
        controllerAs: 'bulkextensions'
      })
      .when('/apps/bulkdevices', {
        templateUrl: 'views/apps/bulkdevices.html',
        controller: 'BulkdevicesCtrl',
        controllerAs: 'Bulkdevices'
      })
      .when('/migration', {
        templateUrl: 'views/migration.html',
        controller: 'MigrationCtrl',
        controllerAs: 'migration'
      })
      .when('/migration/users', {
        templateUrl: 'views/migration/users.html',
        controller: 'UsersmigrationCtrl',
        controllerAs: 'usersmigration'
      })
      .when('/migration/config', {
        templateUrl: 'views/migration/config.html',
        controller: 'ConfigmigrationCtrl',
        controllerAs: 'configmigration'
      })
      .when('/migration/cdr', {
        templateUrl: 'views/migration/cdr.html',
        controller: 'CdrmigrationCtrl',
        controllerAs: 'cdrmigration'
      })
      .when('/migration/report', {
        templateUrl: 'views/migration/report.html',
        controller: 'ReportmigrationCtrl',
        controllerAs: 'reportmigration'
      })
      .when('/apps/phonebook', {
        templateUrl: 'views/apps/phonebook.html',
        controller: 'PhonebookCtrl',
        controllerAs: 'phonebook'
      })
      .when('/templates', {
        templateUrl: 'views/templates.html',
        controller: 'TemplatesCtrl',
        controllerAs: 'templates'
      })
      .when('/configurations', {
        templateUrl: 'views/configurations.html',
        controller: 'ConfigurationsCtrl',
        controllerAs: 'configurations'
      })
      .when('/bulkdevices', {
        templateUrl: 'views/bulkdevices.html',
        controller: 'BulkdevicesCtrl',
        controllerAs: 'bulkdevices'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).config(function ($translateProvider) {
    $translateProvider.useSanitizeValueStrategy(null);
    $translateProvider.useStaticFilesLoader({
      prefix: 'scripts/i18n/locale-',
      suffix: '.json'
    });
    $translateProvider.fallbackLanguage('en');
  });
