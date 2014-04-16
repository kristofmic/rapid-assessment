(function(assessment){

  assessment.controller('AssessmentQuestionnaireCtrl', ['$scope', '$state', 'htEvents', 'AssessmentSvc', 
		function($scope, $state, events, assessment){

			var type = $state.current.data.type;
			var attributes = assessment.getAttributes(type);

			$scope.requirements = assessment.getRequirements(type);
			$scope.headings = $state.current.data.headings;
			$scope.scopeOptions = _.filter(attributes, function(attr) { return attr.answerType === 'scope'; });
			$scope.responseOptions = _.filter(attributes, function(attr) { return attr.answerType === 'response'; });
		
			$scope.setNav($state.current.data.nav);
			events.raise('toolbarReset');

		}
	]);

}(window.HT.assessment));