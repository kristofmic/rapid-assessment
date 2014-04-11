(function(hitrust){
  
  hitrust.ra.directive('htAssessmentTable', ['AssessmentSvc', function(Assessment){

    var linker = function(scope, elem, attrs) {
        scope.responses = {};
        scope.scopes = {};
    };

    var control = ['$scope', function($scope) {
        $scope.setResponse = function(fid) {
            Assessment.put($scope.htAssessmentTable, $scope.htHeadings.response, fid, $scope.responses[fid]);
        };

        $scope.setScope = function(fid) {
            Assessment.put($scope.htAssessmentTable, $scope.htHeadings.scope, fid, $scope.scopes[fid]);
        };
    }];

    return {
    	restrict: 'A',
    	templateUrl: 'assets/javascripts/app/assessment/assessment_table/assessment_table.html',
    	replace: false,
        link: linker,
        controller: control,
    	scope: {
            htAssessmentTable: '@',
    		htRequirements: '=',
    		htFilter: '=',
            htHeadings: '=',
            htScopeOptions: '='
    	}
    };
  }]);

}(window.HT));