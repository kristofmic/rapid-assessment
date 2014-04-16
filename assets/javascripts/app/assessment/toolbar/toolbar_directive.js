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
					$scope.activeRequirements = $scope.htRequirementsCount;
				}
				selectPartial = false;
				events.raise('toolbarSelect', {value: value});
			};

			$scope.starred = function(value) {
				events.raise('toolbarStarred', {value: value});
			};

			$scope.setAnswer = function(model, type, index) {
				events.raise('toolbarAnswer', 
					{	
						type: type, 
						answer: model[type]
					}
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

			$scope.filter = (function(){
				var filters = [];

				var updateFilters = function(filter, value) {
					if (value) {
						filters.push(filter);
					} else {
						_.remove(filters, function(f) {
							return f === filter;
						});
					}
				};

				var applied = function(filter) {
					return _.contains(filters, filter);
				};

				var remove = function(filter) {
					updateFilters(filter, false);
					events.raise('toolbarFilter', {filter: filter, value: undefined})
				};

				var add = function(filter) {
					if (!applied(filter)) {
						updateFilters(filter, true);
						events.raise('toolbarFilter', {filter: filter, value: true})
					}
				};

				return {
					filters: filters,
					remove: remove,
					add: add
				};
			}());

			$scope.$on('toolbarReset', function(e) {
				reset();
			});

			$scope.$on('requirementSelect', function(e, value) {
				if (value) {
					$scope.select = true;
					$scope.selectPartial = true;
					$scope.activeRequirements += 1;
					if ($scope.activeRequirements === $scope.htRequirementsCount) {
						$scope.selectPartial = false;	
					}
				} else {
					$scope.activeRequirements -= 1;
					if ($scope.activeRequirements !== $scope.htRequirementsCount) {
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
			templateUrl: 'assets/javascripts/app/assessment/toolbar/toolbar.html',
			controller: control,
			scope: {
				htRequirementsCount: '=',
				htSearch: '=',
				htScopes: '=',
				htResponses: '='
			}
		}

	}]);

}(window.HT.assessment));