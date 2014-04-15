(function(assessment){
  
  assessment.directive('htAssessmentTable', ['AssessmentSvc', 'htEvents', function(Assessment, events){

    var linker = function(scope, elem, attrs) {
        scope.responses = {};
        scope.scopes = {};
    };

    var control = ['$scope', function($scope) {
        $scope.setAnswer = function(model, prop, index) {
            Assessment.put($scope.htAssessmentTable, $scope.htHeadings[prop], model.fID, model[prop]);
        };

        $scope.setSelected = function(value) {
            events.raise('requirementSelect', value);
        }

        $scope.$on('toolbarSelect', function(e, args) {
            _.each($scope.fhtRequirements, function(req) {
                req.select = args.value;
            });
        });

        $scope.$on('toolbarAnswer', function(e, args) {
            _.each($scope.htRequirements, function(req) {
                if (req.select) {
                    req[args.type] = args.answer;
                    $scope.setAnswer(req, args.type, args.answer);
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

        $scope.$on('toolbarStarred', function(e, args) {
            _.each($scope.htRequirements, function(req) {
              if (req.select) {
                req.starred = args.value;
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

}(window.HT.assessment));