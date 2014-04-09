(function(global){
  
  var hitrust = global.HT = global.HT || {};
  
  hitrust.ra.controller('PolicyCtrl', ['$scope', 'AssessmentSvc', function($scope, Assessment){
    $scope.requirements = Assessment.get();
    console.log($scope.requirements);
  }]);

}(window));