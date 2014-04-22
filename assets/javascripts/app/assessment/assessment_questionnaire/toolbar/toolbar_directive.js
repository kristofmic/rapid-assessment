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
					setupMultiSelect(applyFilter($scope.requirements));
				}
				selectPartial = false;
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

			var setupMultiSelect = function(reqs) {
				if (angular.isArray($scope.answers.scope)) {
					_.each(reqs, function(req){
						_.each(req.scope, function(selected) {
							var index = _.findIndex($scope.answers.scope, function(opt) {
								return opt.attId === selected.attId
							});
							if (index >= 0) {
								$scope.answers.scope[index].count += 1;
							}
							else {
								$scope.answers.scope.push(_.clone(selected));
								_.last($scope.answers.scope).count = 1;
							}
						});
					});

					_.each($scope.answers.scope, function(opt) {
						var index = _.findIndex($scope.scopeOptions, function(sOpt) {
							return sOpt.attId === opt.attId;
						});
						if (index >= 0) {
							if (opt.count < $scope.activeRequirements) {
								$scope.scopeOptions[index].partial = true;
							} 
							else {
								$scope.scopeOptions[index].partial = false;
							}
						}
					});	
				}
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

			$scope.$on('answerToolbar', function(e, args) {
				if ($scope.select) {
					setupMultiSelect([args.req]);
				}
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
				setupMultiSelect([args.req]);
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