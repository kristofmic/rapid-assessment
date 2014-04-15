(function(assessment){
  
  assessment.controller('PolicyCtrl', ['$scope', 'AssessmentSvc', 'htEvents', 'htNav',
    function($scope, Assessment, events, nav){
      nav.set(0);
      $scope.assessmentType = 'Policy';
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