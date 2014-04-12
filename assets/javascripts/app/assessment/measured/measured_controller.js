(function(hitrust){
  
  hitrust.ra.controller('MeasuredCtrl', ['$scope', function($scope){
    $scope.setActiveNav(3);
    $scope.assessmentType = 'Measured';
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