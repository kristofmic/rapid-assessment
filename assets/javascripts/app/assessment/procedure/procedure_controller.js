(function(assessment){
  
  assessment.controller('ProcedureCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(1);
    $scope.assessmentType = 'Procedure';
    $scope.setRequirements(Assessment.get($scope.assessmentType));
    $scope.$broadcast('toolbarReset');
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

}(window.HT.assessment));