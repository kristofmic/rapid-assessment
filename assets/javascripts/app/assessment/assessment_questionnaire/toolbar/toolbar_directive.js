(function(assessment){

	assessment.directive('htToolbar', [function() {

		var control = ['$scope', '$filter', 'htEvents', function($scope, $filter, events) {
			$scope.select = false;
			$scope.selectPartial = false;
			$scope.activeRequirements = 0;
			$scope.answers = {
				response: {}
			};
			if ($scope.type === "Measured" || $scope.type === "Managed") {
        var originalScope = [];
      } else {
      	var originalScope = {};  
      }
      $scope.answers.scope = _.clone(originalScope);

			$scope.selected = function(value) {
				if (!value) {
					$scope.activeRequirements = 0;
					reset();
				} else {
					$scope.activeRequirements = applyFilter($scope.requirements).length;
				}
				$scope.selectPartial = false;
				events.raise('toolbarSelect', {value: value});
			};

			$scope.starred = function(value) {
				events.raise('toolbarStarred', {value: value});
			};

			$scope.setAnswers = function(value, option) {
				events.raise('toolbarAnswer', {	option: option, value: !!value});
			};

			$scope.clearAnswer = function() {
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

			var reset = function() {
				$scope.select = false;
				$scope.activeRequirements = 0;
				$scope.selectPartial = false;
				$scope.resetAnswers();
			};

			var applyFilter = function(reqs) {
				return $filter('filter')(reqs, $scope.search);
			};

			var filterSelect = function(req) {
				return $filter('filter')(req, {select: true});
			}

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
				type: '@htAssessmentType'
			}
		}

	}]);

}(window.HT.assessment));