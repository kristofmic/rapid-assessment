(function(hitrust){
  
  hitrust.ra.directive('htAssessmentTable', ['AssessmentSvc', function(Assessment){

    var linker = function(scope, elem, attrs) {
        scope.responses = {};
        scope.scopes = {};
    };

    var control = ['$scope', function($scope) {
        $scope.setResponse = function(req) {
            Assessment.put($scope.htAssessmentTable, $scope.htHeadings.response, req.fID, req.response);
        };

        $scope.setScope = function(req) {
            Assessment.put($scope.htAssessmentTable, $scope.htHeadings.scope, req.fID, req.scope);
        };

        $scope.setSelected = function(req) {
            $scope.$emit('reqSelect', req);
        }

        $scope.$on('toolbarSelect', function(e, select) {
            _.each($scope.htRequirements, function(req){
                req.select = select;
            });
        });

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
            htHeadings: '=',
            htScopeOptions: '=',
            htToolbar: '='
    	}
    };
  }]);

}(window.HT));