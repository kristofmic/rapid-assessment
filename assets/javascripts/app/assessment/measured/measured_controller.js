(function(hitrust){
  
  hitrust.ra.controller('MeasuredCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.setActiveNav(3);
    $scope.requirements = Assessment.get();
  }]);

}(window.HT));