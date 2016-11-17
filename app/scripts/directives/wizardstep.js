'use strict';

/**
 * @ngdoc directive
 * @name nethvoiceWizardUiApp.directive:WizardStep
 * @description
 * # WizardStep
 */
angular.module('nethvoiceWizardUiApp')
  .directive('wizardStep', function() {
    return {
      templateUrl: 'scripts/directives/wizard-step.html',
      controller: function($scope, $route, $location) {
        $scope.appConfig = appConfig;
        $scope.currentStep = $route.current.controllerAs.split('/')[1];
        $scope.wizard.stepCount = appConfig.STEP_MAP[$scope.currentStep];
        $scope.prevState = appConfig.STEP_WIZARD[$scope.currentStep].prev;
        $scope.nextState = appConfig.STEP_WIZARD[$scope.currentStep].next;

        $scope.resolveProgress = function() {
          return Math.floor($scope.wizard.stepCount * 100 / appConfig.TOTAL_STEP);
        };

        $scope.prevStep = function() {
          if (appConfig.STEP_WIZARD[$scope.currentStep].prev) {
            $location.path(appConfig.STEP_WIZARD[$scope.currentStep].prev);
            $scope.wizard.stepCount--;
          }
          return appConfig.STEP_WIZARD[$scope.currentStep].prev;
        };

        $scope.nextStep = function() {
          if (appConfig.STEP_WIZARD[$scope.currentStep].next) {
            $location.path(appConfig.STEP_WIZARD[$scope.currentStep].next);
            $scope.wizard.stepCount++;
          }
          return appConfig.STEP_WIZARD[$scope.currentStep].next;
        };
      }
    };
  });