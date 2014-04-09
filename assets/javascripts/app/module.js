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
        templateUrl: 'assets/javascripts/app/assessment/policy.html',
        controller: 'PolicyCtrl'
      });
  }]);

}(window));