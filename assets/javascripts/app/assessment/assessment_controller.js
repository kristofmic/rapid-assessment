(function(hitrust){

  hitrust.ra.controller('AssessmentCtrl', ['$scope', function($scope){
		$scope.navs = [
			{
				label: 'Policy',
				sref: 'assessment.policy',
				active: false
			},
			{
				label: 'Procedure',
				sref: 'assessment.procedure',
				active: false
			},
			{
				label: 'Implemented',
				sref: 'assessment.implemented',
				active: false
			},
			{
				label: 'Measured',
				sref: 'assessment.measured',
				active: false
			},
			{
				label: 'Managed',
				sref: 'assessment.managed',
				active: false
			}
		];

		$scope.setActiveNav = function(index) {
			angular.forEach($scope.navs, function(val, i) {
				(i === index) ? val.active = true : val.active = false;
			});
		};

		window.getScope = function() {
    	return $scope;
    }

  }]);

}(window.HT));