(function(hitrust){

  hitrust.ra.controller('AssessmentCtrl', ['$scope', 'HTNav', function($scope, navManager){
		$scope.navs = navManager.get()

		$scope.setActiveNav = function(index) {
			navManager.set(index);
		};

		$scope.toolbar = {
			select: false,
			response: '',
			scope: '',
			activeRequirements: 0,
			selected: function(value) {
				if (!value) {
					$scope.toolbar.activeRequirements = 0;
					$scope.toolbar.response = '';
					$scope.toolbar.scope = '';
				}
				$scope.$broadcast('toolbarSelect', value);
			},
			setAnswer: function(type, answer) {
				$scope.$broadcast('toolbarAnswer', type, answer);
			}
		};

		$scope.$on('requirementSelect', function(e, value) {
			if (value) {
				$scope.toolbar.select = true;
				$scope.toolbar.activeRequirements += 1;
			} else {
				$scope.toolbar.activeRequirements -= 1;
				if ($scope.toolbar.activeRequirements === 0) {
					$scope.toolbar.select = false;
				}
			}
		});

  }]);

}(window.HT));