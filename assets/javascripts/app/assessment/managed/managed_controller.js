(function(hitrust){
  
  hitrust.ra.controller('ManagedCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(4);
    $scope.assessmentType = 'Managed';
    $scope.requirements = Assessment.get();
    $scope.headings = {
      response: 'Corrective Actions',
      scope: 'Types of Corrective Actions'
    };
    $scope.scopeOptions = [
      'Operational',
      'Independent',
      'Metrics'
    ];
  }]);

}(window.HT));