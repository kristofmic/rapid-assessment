(function(hitrust){
  
  hitrust.ra.controller('ProcedureCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(1);
    $scope.assessmentType = 'Procedure';
    $scope.requirements = Assessment.get();
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
  }]);

}(window.HT));