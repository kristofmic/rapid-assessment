(function(hitrust){
  
  hitrust.ra.directive('htAssessmentTable', ['AssessmentSvc', function(Assessment){

    var linker = function(scope, elem, attrs) {
        scope.responses = {};
        scope.scopes = {};
    };

    var control = ['$scope', function($scope) {
        $scope.setAnswer = function(model, prop, index) {
            Assessment.put($scope.htAssessmentTable, $scope.htHeadings[prop], model.fID, model[prop]);
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
                    $scope.setAnswer(req, type, answer);
                }
            });
        });

        $scope.$on('toolbarClear', function(e) {
            _.each($scope.htRequirements, function(req) {
                if (req.select) {
                    req.response = null;
                    $scope.setAnswer(req, 'response', null);
                    req.scope = null;
                    $scope.setAnswer(req, 'scope', null);
                }
            });
        });

        $scope.$on('toolbarStarred', function(e, value) {
            _.each($scope.htRequirements, function(req) {
              if (req.select) {
                req.starred = value;
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