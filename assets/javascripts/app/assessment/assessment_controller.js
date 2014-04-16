(function(assessment){

  assessment.controller('AssessmentCtrl', ['$scope', 'htNav', function($scope, nav){
		$scope.navs = nav.get();

		$scope.setNav = function(index) {
			nav.set(index);
		};
  }]);

}(window.HT.assessment));