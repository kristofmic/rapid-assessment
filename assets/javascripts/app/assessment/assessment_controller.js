(function(hitrust){

  hitrust.ra.controller('AssessmentCtrl', ['$scope', 'HTNav', function($scope, navManager){
		$scope.navs = navManager.get();

		$scope.setActiveNav = function(index) {
			navManager.set(index);
		};

		$scope.setRequirements = function(reqs) {
			$scope.requirements = reqs;
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
					$scope.toolbar.resetAnswers();
				} else {
					$scope.toolbar.activeRequirements = $scope.requirements.length;
				}
				$scope.toolbar.selectPartial = false;
				$scope.$broadcast('toolbarSelect', value);
			},
			starred: function(value) {
				$scope.$broadcast('toolbarStarred', value);
			},
			setAnswer: function(model, type, index) {
				$scope.$broadcast('toolbarAnswer', type, model[type]);
			},
			clearAnswer: function() {
				$scope.$broadcast('toolbarClear');
				$scope.toolbar.resetAnswers();
			},
			resetAnswers: function() {
				$scope.toolbar.response = null;
				$scope.toolbar.scope = null;
			},
			reset: function() {
				$scope.toolbar.select = false;
				$scope.toolbar.activeRequirements = 0;
				$scope.toolbar.selectPartial = false;
				$scope.toolbar.resetAnswers();
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