(function(hitrust){
  
  hitrust.ra.controller('ManagedCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(4);
    $scope.assessmentType = 'Managed';
    $scope.setRequirements(Assessment.get($scope.assessmentType));
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
  }]);

}(window.HT));