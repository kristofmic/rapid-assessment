(function(assessment){
  
  assessment.directive('htAssessmentTable', [function(){

    var linker = function(scope, elem, attrs) {
        scope.responses = {};
        scope.scopes = {};
        scope.defaultOrder = ["Domain", "Control"];
        scope.htFilter = {};
    };

    var control = ['$scope', 'htEvents', 'AssessmentSvc', function($scope, events, assessment) {
        $scope.saveAnswer = function(attrId, option, req) {
            console.log(req);
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

        $scope.$on('toolbarFilter', function(e, args) {
            $scope.htFilter[args.filter] = args.value;
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
            htSearch: '='
    	}
    };
  }]);

}(window.HT.assessment));