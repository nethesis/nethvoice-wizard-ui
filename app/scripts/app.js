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
    'frapontillo.bootstrap-switch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
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
