(function(hitrust){
  
  hitrust.ra.controller('PolicyCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(0);
    $scope.requirements = Assessment.get();
  }]);

}(window.HT));