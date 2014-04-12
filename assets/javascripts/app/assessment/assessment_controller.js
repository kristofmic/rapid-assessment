(function(hitrust){

  hitrust.ra.controller('AssessmentCtrl', ['$scope', 'HTNav', 'AssessmentSvc', function($scope, navManager, assessment){
		$scope.navs = navManager.get()
		$scope.requirements = assessment.get();

		$scope.setActiveNav = function(index) {
			navManager.set(index);
		};

		$scope.toolbar = {
			select: false,
			selectPartial: false,
			response: '',
			scope: '',
			activeRequirements: 0,
			selected: function(value) {
				if (!value) {
					$scope.toolbar.activeRequirements = 0;
					$scope.toolbar.response = '';
					$scope.toolbar.scope = '';
				} else {
					$scope.toolbar.activeRequirements = $scope.requirements.length;
				}
				$scope.toolbar.selectPartial = false;
				$scope.$broadcast('toolbarSelect', value);
			},
			setAnswer: function(model, type, index) {
				$scope.$broadcast('toolbarAnswer', type, model[type]);
			}
		};

		$scope.$on('requirementSelect', function(e, value) {
			if (value) {
				$scope.toolbar.select = true;
				$scope.toolbar.selectPartial = true;
				$scope.toolbar.activeRequirements += 1;
				if ($scope.toolbar.activeRequirements === $scope.requirements.length) {
					$scope.toolbar.selectPartial = false;	
				}
			} else {
				$scope.toolbar.activeRequirements -= 1;
				if ($scope.toolbar.activeRequirements !== $scope.requirements.length) {
					$scope.toolbar.selectPartial = true;
				}
				if ($scope.toolbar.activeRequirements === 0) {
					$scope.toolbar.select = false;
					$scope.toolbar.selectPartial = false;
				}
			}
		});

  }]);

}(window.HT));