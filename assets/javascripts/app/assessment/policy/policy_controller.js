(function(hitrust){
  
  hitrust.ra.controller('PolicyCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(0);
    $scope.assessmentType = 'Policy';
    $scope.setRequirements(Assessment.get($scope.assessmentType));
    $scope.toolbar.reset();
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