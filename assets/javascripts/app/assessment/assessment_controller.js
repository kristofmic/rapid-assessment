(function(assessment){

  assessment.controller('AssessmentCtrl', ['$scope', 'htNav', function($scope, nav){
		$scope.navs = nav.get();

		$scope.setActiveNav = function(index) {
			nav.set(index);
		};

		$scope.setRequirements = function(reqs) {
			$scope.requirements = reqs;
		};

  }]);

}(window.HT.assessment));