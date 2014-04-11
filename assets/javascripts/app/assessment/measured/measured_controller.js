(function(hitrust){
  
  hitrust.ra.controller('MeasuredCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(3);
    $scope.assessmentType = 'Measured';
    $scope.requirements = Assessment.get();
    $scope.headings = {
      response: 'Review',
      scope: 'Types of Reviews'
    };
    $scope.scopeOptions = [
      'Operational',
      'Independent',
      'Metrics'
    ];
  }]);

}(window.HT));