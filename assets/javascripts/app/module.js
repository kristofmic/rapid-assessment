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
          },
          scopeOptions: [
            'None',
            'Less than Half',
            'Half',
            'Greater than Half',
            'All'
          ],
          responseOptions: [
            'No',
            'Yes'
          ]
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
          },
          scopeOptions: [
            'None',
            'Less than Half',
            'Half',
            'Greater than Half',
            'All'
          ],
          responseOptions: [
            'No',
            'Yes'
          ]
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
          },
          scopeOptions: [
            'None',
            'Less than Half',
            'Half',
            'Greater than Half',
            'All'
          ],
          responseOptions: [
            'No',
            'Yes'
          ]
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
          },
          scopeOptions: [
            'Operational',
            'Independent',
            'Metrics'
          ],
          responseOptions: [
            'No',
            'Yes'
          ]
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
          },
          scopeOptions: [
            'Operational',
            'Independent',
            'Metrics'
          ],
          responseOptions: [
            'No',
            'Yes'
          ]
        }
      });
  }]);

}(window));