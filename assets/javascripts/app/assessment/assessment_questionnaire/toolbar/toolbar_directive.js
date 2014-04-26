(function(assessment){

	assessment.directive('htToolbar', [function() {

		var control = ['$scope', '$filter', 'htEvents', function($scope, $filter, events) {
			// Data Setup
			// --Select
			$scope.select = false;
			$scope.selectPartial = false;
			$scope.activeRequirements = 0;
			$scope.answers = {
				response: {}
			};
			var originalScope;
			if ($scope.type === "Measured" || $scope.type === "Managed") {
        originalScope = [];
      } else {
				originalScope = {};
      }
      $scope.answers.scope = _.clone(originalScope);

      // --Filter
      $scope.filter = false;
      $scope.filterOptions = [
				{
					label: 'Selected',
					options: [
						{ label: 'Selected', value: 1, filter: {key: 'select', value: true} },
						{ label: 'Unselected', value: 0, filter: {key: 'select', value: false} }
					],
					active: {}
				},
				{
					label: 'Starred',
					options: [
						{ label: 'Starred', value: 1, filter: {key: 'starred', value: true} },
						{ label: 'Unstarred', value: 0, filter: {key: 'starred', value: false} }
					],
					active: {}
				},
				{
					label: $scope.responseHeading,
					options: _.map($scope.responseOptions, function(opt) {
						return {
							label: opt.attDesc,
							value: opt.attId,
							filter: {key: 'response', value: opt}
						};
					}),
					active: {}
				},
				{
					label: $scope.scopeHeading,
					options: _.map($scope.scopeOptions, function(opt) {
						return {
							label: opt.attDesc,
							value: opt.attId,
							filter: {key: 'scope', value: opt}
						};
					}),
					active: activeFilterType()
				}
      ];
      $scope.activeFilters = [];

			// $scope Functions
			// --Select
			$scope.selected = function(value) {
				if (!value) {
					$scope.activeRequirements = 0;
					reset();
				} else {
					$scope.activeRequirements = applyFilter($scope.requirements).length;
				}
				$scope.selectPartial = false;
				events.raise('toolbarSelect', { value: value });
			};

			$scope.starred = function(value) {
				events.raise('toolbarStarred', { value: value });
			};

			$scope.setAnswers = function(value, option) {
				events.raise('toolbarAnswer', {	option: option, value: !!value });
			};

			$scope.clearAnswers = function() {
				events.raise('toolbarClear');
				$scope.resetAnswers();
			};

			$scope.resetAnswers = function() {
				$scope.answers.response = {};
				$scope.answers.scope = _.clone(originalScope);
				_.each($scope.scopeOptions, function(opt){
					opt.partial = false;
				});
			};

			// --Filter
			$scope.addFilter = function(filter, index) {
				if (!_.contains($scope.activeFilters, filter)) {
					$scope.filter = true;
					$scope.activeFilters.push(filter);
				}
			};

			$scope.removeFilter = function(filter, index) {
				removeAllFilterOptions(filter.options);
				$scope.activeFilters.splice(index, 1);
				filter.active = activeFilterType();
			};

			$scope.setFilter = function(value, option, filter) {
				if (angular.isArray(filter.active)) {
					if (value) {
						events.raise('toolbarSetFilter', { filter: option.filter });
					}
					else {
						events.raise('toolbarRemoveFilter', { filter: option.filter });
					}
				}
				else {
					removeAllFilterOptions(filter.options);
					events.raise('toolbarSetFilter', { filter: option.filter });
				}
			};

			$scope.clearFilters = function() {
				while ($scope.activeFilters.length > 0) {
					$scope.removeFilter($scope.activeFilters[0]);
				}
			};

			// Helper Functions
			function reset() {
				$scope.select = false;
				$scope.activeRequirements = 0;
				$scope.selectPartial = false;
				$scope.resetAnswers();
				$scope.clearFilters();
			}

			function applyFilter(reqs) {
				var filters = _.mapValues($scope.activeFilters, function(val) {
					return val.filter;
				});

				var results = $filter('filter')(reqs, $scope.search);
				results = $filter('htToolbarFilters')(results, filters);
				return results;
			}

			function removeAllFilterOptions(options) {
				_.each(options, function(opt) {
					events.raise('toolbarRemoveFilter', { filter: opt.filter });
				});
			}

			function activeFilterType() {
				var active;
				if ($scope.type === "Measured" || $scope.type === "Managed") {
					active = [];
				} else {
					active = {};
				}
				return active;
			}

			// Event Handlers
			$scope.$on('resetToolbar', function(e) {
				reset();
			});

			$scope.$on('requirementSelect', function(e, args) {
				if (args.value) {
					$scope.select = true;
					$scope.selectPartial = true;
					$scope.activeRequirements += 1;
					if ($scope.activeRequirements === applyFilter($scope.requirements).length) {
						$scope.selectPartial = false;
					}
				} else {
					$scope.activeRequirements -= 1;
					if ($scope.activeRequirements !== applyFilter($scope.requirements).length) {
						$scope.selectPartial = true;
					}
					if ($scope.activeRequirements === 0) {
						$scope.select = false;
						$scope.selectPartial = false;
						$scope.resetAnswers();
					}
				}
			});

		}];

		// DDO
		return {
			restrict: 'A',
			replace: false,
			templateUrl: 'assets/javascripts/app/assessment/assessment_questionnaire/toolbar/toolbar.html',
			controller: control,
			scope: {
				requirements: '=htRequirements',
				search: '=htSearch',
				scopeOptions: '=htScopeOptions',
				responseOptions: '=htResponseOptions',
				scopeHeading: '=htScopeHeading',
				responseHeading: '=htResponseHeading',
				type: '@htAssessmentType'
			}
		};

	}]);

}(window.HT.assessment));