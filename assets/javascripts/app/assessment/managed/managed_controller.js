(function(assessment){
  
  assessment.controller('ManagedCtrl', ['$scope', 'AssessmentSvc', 'htEvents', 'htNav',
    function($scope, Assessment, events, nav){
      nav.set(4);
      $scope.assessmentType = 'Managed';
      $scope.requirements = Assessment.get($scope.assessmentType);
      events.raise('toolbarReset');
      $scope.headings = {
        response: 'Corrective Actions',
        scope: 'Types of Corrective Actions'
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