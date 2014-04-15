(function(assessment){
  
  assessment.controller('ProcedureCtrl', ['$scope', 'AssessmentSvc', 'htEvents', 'htNav', 
    function($scope, Assessment, events, nav){
      nav.set(1);
      $scope.assessmentType = 'Procedure';
      $scope.requirements = Assessment.get($scope.assessmentType);
      events.raise('toolbarReset');
      $scope.headings = {
        response: 'Documented',
        scope: 'Applies to Scope of Environment'
      };
      $scope.scopeOptions = [
        'None',
        'Less than Half',
        'Half',
        'Greater than Half',
        'All'
      ];
      $scope.responseOptions = [
        'No',
        'Yes'
      ];
    }
  ]);

}(window.HT.assessment));