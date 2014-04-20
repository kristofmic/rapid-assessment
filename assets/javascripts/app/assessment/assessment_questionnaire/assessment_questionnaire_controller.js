(function(assessment){

  assessment.controller('AssessmentQuestionnaireCtrl', ['$scope', '$state', 'htEvents', 'AssessmentSvc', 
		function($scope, $state, events, assessment){

			$scope.type = $state.current.data.type;

			assessment.getRequirements($scope.type, function(reqs) {
				$scope.requirements = reqs;
				_.each($scope.requirements, function(req) {
					req.select = false;
				});
			});

			$scope.headings = $state.current.data.headings;

			assessment.getAttributes($scope.type, function(attrs) {
				$scope.scopeOptions = _.filter(attrs, function(attr) { return attr.answerType === 'scope'; });
				$scope.responseOptions = _.filter(attrs, function(attr) { return attr.answerType === 'response'; });
			});
		
			$scope.setNav($state.current.data.nav);
			events.raise('resetToolbar');
			
		}
	]);

}(window.HT.assessment));