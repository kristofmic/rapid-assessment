(function(assessment){

  assessment.controller('AssessmentQuestionnaireCtrl', ['$scope', '$state', 'htEvents', 'AssessmentSvc', 
		function($scope, $state, events, assessment){

			$scope.requirements = assessment.get($state.current.data.type);
			$scope.headings = $state.current.data.headings;
			$scope.scopeOptions = $state.current.data.scopeOptions;
			$scope.responseOptions = $state.current.data.responseOptions;
		
			$scope.setNav($state.current.data.nav);
			events.raise('toolbarReset');

		}
	]);

}(window.HT.assessment));