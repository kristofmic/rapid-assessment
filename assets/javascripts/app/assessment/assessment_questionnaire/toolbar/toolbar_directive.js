(function(assessment){

	assessment.directive('htToolbar', [function() {

		var control = ['$scope', 'htEvents', function($scope, events) {
			$scope.select = false;
			$scope.selectPartial = false;
			$scope.activeRequirements = 0;
			$scope.answers = {
				response: null,
				scope: null
			}

			$scope.selected = function(value) {
				if (!value) {
					$scope.activeRequirements = 0;
					reset();
				} else {
					$scope.activeRequirements = $scope.requirementsCount;
				}
				selectPartial = false;
				events.raise('toolbarSelect', {value: value});
			};

			$scope.starred = function(value) {
				events.raise('toolbarStarred', {value: value});
			};

			$scope.setAnswers = function(attrId, option) {
				events.raise('toolbarAnswer', {	option: option }
				);
			};

			$scope.clearAnswer = function() {
				events.raise('toolbarClear');
				$scope.resetAnswers();
			};

			$scope.resetAnswers = function() {
				$scope.answers.response = null;
				$scope.answers.scope = null;
			};

			var reset = function() {
				$scope.select = false;
				$scope.activeRequirements = 0;
				$scope.selectPartial = false;
				$scope.resetAnswers();
			}

			$scope.$on('resetToolbar', function(e) {
				reset();
			});

			$scope.$on('requirementSelect', function(e, value) {
				if (value) {
					$scope.select = true;
					$scope.selectPartial = true;
					$scope.activeRequirements += 1;
					if ($scope.activeRequirements === $scope.requirementsCount) {
						$scope.selectPartial = false;	
					}
				} else {
					$scope.activeRequirements -= 1;
					if ($scope.activeRequirements !== $scope.requirementsCount) {
						$scope.selectPartial = true;
					}
					if ($scope.activeRequirements === 0) {
						$scope.select = false;
						$scope.selectPartial = false;
					}
				}
			});

		}];

		return {
			restrict: 'A',
			replace: false,
			templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire/toolbar/toolbar.html',
			controller: control,
			scope: {
				requirementsCount: '@htRequirementsCount',
				search: '=htSearch',
				scopeOptions: '=htScopeOptions',
				responseOptions: '=htResponseOptions'
			}
		}

	}]);

}(window.HT.assessment));