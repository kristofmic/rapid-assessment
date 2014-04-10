(function(hitrust){
  
  hitrust.ra.controller('ManagedCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(4);
    $scope.requirements = Assessment.get();
  }]);

}(window.HT));