(function(hitrust){
  
  hitrust.ra.controller('ImplementedCtrl', ['$scope', function($scope){
    $scope.setActiveNav(2);
    $scope.assessmentType = 'Implemented';
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
  }]);

}(window.HT));