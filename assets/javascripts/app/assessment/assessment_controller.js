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
			requirements: {},
			activeRequirements: 0,
			selected: function() {
				if (!$scope.toolbar.select) {
					$scope.toolbar.activeRequirements = 0;
					$scope.toolbar.response = '';
					$scope.toolbar.scope = '';
				}
				$scope.$broadcast('toolbarSelect', $scope.toolbar.select);
			},
			setAnswer: function(type, answer) {
				$scope.$broadcast('toolbarAnswer', type, answer);
			}
		};

		$scope.$on('reqSelect', function(e, req) {
			if (req.select) {
				$scope.toolbar.select = true;
				$scope.toolbar.requirements[req.fID] = req;
				$scope.toolbar.activeRequirements += 1;
			} else {
				$scope.toolbar.requirements[req.fID] = undefined;
				$scope.toolbar.activeRequirements -= 1;
				if ($scope.toolbar.activeRequirements === 0) {
					$scope.toolbar.select = false;
				}
			}
		});

  }]);

}(window.HT));