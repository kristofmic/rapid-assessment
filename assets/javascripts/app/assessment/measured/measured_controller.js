(function(assessment){
  
  assessment.controller('MeasuredCtrl', ['$scope', 'AssessmentSvc', 'htEvents', 'htNav',
    function($scope, Assessment, events, nav){
      nav.set(3);
      $scope.assessmentType = 'Measured';
      $scope.requirements = Assessment.get($scope.assessmentType);
      events.raise('toolbarReset');
      $scope.headings = {
        response: 'Review',
        scope: 'Types of Reviews'
      };
      $scope.scopeOptions = [
        'Operational',
        'Independent',
        'Metrics'
      ];
      $scope.responseOptions = [
        'No',
        'Yes'
      ];
    }
  ]);

}(window.HT.assessment));