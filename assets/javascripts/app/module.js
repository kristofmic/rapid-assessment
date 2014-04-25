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
        templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire/assessment_questionnaire.html',
        controller: 'AssessmentQuestionnaireCtrl',
        data: {
          nav: 0,
          type: 'Policy',
          headings: {
            response: 'Documented',
            scope: 'Applies to Scope of Environment'
          }
        },
        resolve: {
          requirements: ['AssessmentSvc', function(assessment) {
            return assessment.getRequirements('Policy');
          }],
          attributes: ['AssessmentSvc', function(assessment) {
            return assessment.getAttributes('Policy');
          }]
        }
      })
      .state('assessment.procedure', {
        url: '/procedure',
        templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire/assessment_questionnaire.html',
        controller: 'AssessmentQuestionnaireCtrl',
        data: {
          nav: 1,
          type: 'Procedure',
          headings: {
            response: 'Documented',
            scope: 'Applies to Scope of Environment'
          }
        },
        resolve: {
          requirements: ['AssessmentSvc', function(assessment) {
            return assessment.getRequirements('Procedure');
          }],
          attributes: ['AssessmentSvc', function(assessment) {
            return assessment.getAttributes('Procedure');
          }]
        }
      })
      .state('assessment.implemented', {
        url: '/implemented',
        templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire/assessment_questionnaire.html',
        controller: 'AssessmentQuestionnaireCtrl',
        data: {
          nav: 2,
          type: 'Implemented',
          headings: {
            response: 'Implemented',
            scope: 'Applied to Scope of Environment'
          }
        },
        resolve: {
          requirements: ['AssessmentSvc', function(assessment) {
            return assessment.getRequirements('Implemented');
          }],
          attributes: ['AssessmentSvc', function(assessment) {
            return assessment.getAttributes('Implemented');
          }]
        }
      })
      .state('assessment.measured', {
        url: '/measured',
        templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire/assessment_questionnaire.html',
        controller: 'AssessmentQuestionnaireCtrl',
        data: {
          nav: 3,
          type: 'Measured',
          headings: {
            response: 'Review',
            scope: 'Types of Reviews'
          }
        },
        resolve: {
          requirements: ['AssessmentSvc', function(assessment) {
            return assessment.getRequirements('Measured');
          }],
          attributes: ['AssessmentSvc', function(assessment) {
            return assessment.getAttributes('Measured');
          }]
        }
      })
      .state('assessment.managed', {
        url: '/managed',
        templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire/assessment_questionnaire.html',
        controller: 'AssessmentQuestionnaireCtrl',
        data: {
          nav: 4,
          type: 'Managed',
          headings: {
            response: 'Corrective Actions',
            scope: 'Types of Corrective Actions'
          }
        },
        resolve: {
          requirements: ['AssessmentSvc', function(assessment) {
            return assessment.getRequirements('Managed');
          }],
          attributes: ['AssessmentSvc', function(assessment) {
            return assessment.getAttributes('Managed');
          }]
        }
      });
  }]);

}(window));