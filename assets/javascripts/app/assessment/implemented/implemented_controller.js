(function(hitrust){
  
  hitrust.ra.controller('ImplementedCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(2);
    $scope.requirements = Assessment.get();
  }]);

}(window.HT));