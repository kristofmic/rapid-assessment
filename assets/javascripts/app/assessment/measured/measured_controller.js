(function(hitrust){
  
  hitrust.ra.controller('MeasuredCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(3);
    $scope.assessmentType = 'Measured';
    $scope.setRequirements(Assessment.get($scope.assessmentType));
    $scope.toolbar.reset();
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
  }]);

}(window.HT));