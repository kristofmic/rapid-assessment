(function(hitrust){
  
  hitrust.ra.directive('htAssessmentTable', ['AssessmentSvc', function(Assessment){

    var linker = function(scope, elem, attrs) {
        scope.responses = {};
        scope.scopes = {};
    };

    var control = ['$scope', function($scope) {
        $scope.setAnswer = function(type, req) {
            Assessment.put($scope.htAssessmentTable, $scope.htHeadings[type], req.fID, req[type]);
        };

        $scope.setSelected = function(value) {
            $scope.$emit('requirementSelect', value);
        }

        $scope.$on('toolbarSelect', function(e, select) {
            _.each($scope.fhtRequirements, function(req) {
                req.select = select;
            });
        });

        $scope.$on('toolbarAnswer', function(e, type, answer) {
            _.each($scope.htRequirements, function(req) {
                if (req.select) {
                    req[type] = answer;
                    $scope.setAnswer(type, req);
                }
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
            htResponseOptions: '=',
            htFilter: '='
    	}
    };
  }]);

}(window.HT));