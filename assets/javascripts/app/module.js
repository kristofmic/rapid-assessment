(function(global) {

  var hitrust = global.HT = global.HT || {};
  hitrust.ra = angular.module('hitrust-ra', ['ui.router']);

  hitrust.ra.config(['$stateProvider', '$urlRouterProvider', 
  function($stateProvider, $urlRouterProvider){
    $urlRouterProvider.otherwise("/assessment");

    $stateProvider
      .state('assessment', {
        url: '/assessment',
        templateUrl: 'assets/javascripts/app/assessment/assessment.html',
        controller: 'AssessmentCtrl'
      })
      .state('assessment.policy', {
        url: '/policy',
        templateUrl: 'assets/javascripts/app/assessment/policy/policy.html',
        controller: 'PolicyCtrl'
      })
      .state('assessment.procedure', {
        url: '/procedure',
        templateUrl: 'assets/javascripts/app/assessment/procedure/procedure.html',
        controller: 'ProcedureCtrl'
      })
      .state('assessment.implemented', {
        url: '/implemented',
        templateUrl: 'assets/javascripts/app/assessment/implemented/implemented.html',
        controller: 'ImplementedCtrl'
      })
      .state('assessment.measured', {
        url: '/measured',
        templateUrl: 'assets/javascripts/app/assessment/measured/measured.html',
        controller: 'MeasuredCtrl'
      })
      .state('assessment.managed', {
        url: '/managed',
        templateUrl: 'assets/javascripts/app/assessment/managed/managed.html',
        controller: 'ManagedCtrl'
      });
  }]);

}(window));