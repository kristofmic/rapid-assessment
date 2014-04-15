(function(assessment){
  
  assessment.controller('ImplementedCtrl', ['$scope', 'AssessmentSvc', 'htEvents', 'htNav',
    function($scope, Assessment, events, nav){
      nav.set(2);
      $scope.assessmentType = 'Implemented';
      $scope.requirements = Assessment.get($scope.assessmentType);
      events.raise('toolbarReset');
      $scope.headings = {
        response: 'Implemented',
        scope: 'Applied to Scope of Environment'
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