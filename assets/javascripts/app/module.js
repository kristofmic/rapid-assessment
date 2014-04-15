(function(global) {

  var hitrust = global.HT = global.HT || {};
  hitrust.ra = angular.module('hitrust-ra', ['ui.router', 'ht-assessment']);

  hitrust.ra.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/assessment/policy");

    $stateProvider
      .state('assessment', {
        url: '/assessment',
        templateUrl: 'assets/javascripts/app/assessment/assessment.html',
        controller: 'AssessmentCtrl',
        abstract: true
      })
      .state('assessment.policy', {
        url: '/policy',
        templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire.html',
        controller: 'PolicyCtrl'
      })
      .state('assessment.procedure', {
        url: '/procedure',
        templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire.html',
        controller: 'ProcedureCtrl'
      })
      .state('assessment.implemented', {
        url: '/implemented',
        templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire.html',
        controller: 'ImplementedCtrl'
      })
      .state('assessment.measured', {
        url: '/measured',
        templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire.html',
        controller: 'MeasuredCtrl'
      })
      .state('assessment.managed', {
        url: '/managed',
        templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire.html',
        controller: 'ManagedCtrl'
      });
  }]);

}(window));