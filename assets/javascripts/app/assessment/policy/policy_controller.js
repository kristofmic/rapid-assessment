(function(hitrust){
  
  hitrust.ra.controller('PolicyCtrl', ['$scope', function($scope){
    $scope.setActiveNav(0);
    $scope.assessmentType = 'Policy';
    $scope.headings = {
      response: 'Documented',
      scope: 'Applies to Scope of Environment'
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