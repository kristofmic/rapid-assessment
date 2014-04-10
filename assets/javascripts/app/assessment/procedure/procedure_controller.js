(function(hitrust){
  
  hitrust.ra.controller('ProcedureCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(1);
    $scope.requirements = Assessment.get();
  }]);

}(window.HT));