(function(assessment){

  assessment.controller('AssessmentCtrl', ['$scope', 'htNav', function($scope, nav){
		$scope.navs = nav.get();
  }]);

}(window.HT.assessment));