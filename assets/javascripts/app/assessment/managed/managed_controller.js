(function(hitrust){
  
  hitrust.ra.controller('ManagedCtrl', ['$scope', function($scope){
    $scope.setActiveNav(4);
    $scope.assessmentType = 'Managed';
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