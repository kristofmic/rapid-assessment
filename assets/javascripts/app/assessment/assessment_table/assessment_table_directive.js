(function(assessment){
  
  assessment.directive('htAssessmentTable', [function(){

    var linker = function(scope, elem, attrs) {
        scope.responses = {};
        scope.scopes = {};
        scope.defaultOrder = ["Domain", "Control"];
        scope.htFilter = {};
    };

    var control = ['$scope', 'htEvents', 'AssessmentSvc', function($scope, events, assessment) {
        var saveToolbarAnswer = function(value, option, req) {
            if (option.answerType === 'scope' && angular.isArray(req[option.answerType])) {
                if (value) {
                    req[option.answerType].push(option);
                }
                else {
                    _.remove(req[option.answerType], function(opt) { return opt.attId === option.attId});
                }
            } 
            else {
                req[option.answerType] = option;
            }

            $scope.saveAnswer(value, option, req);
        };

        $scope.saveAnswer = function(value, option, req) {
            assessment.saveFinding(req.fID, option.attId, option.attTypeId, !!value);
        };

        $scope.setSelected = function(value, req) {
            events.raise('requirementSelect', {value: value, req: req} );
        }

        $scope.$on('toolbarSelect', function(e, args) {
            _.each($scope.htfRequirements, function(req) {
                req.select = args.value;
            });
        });

        $scope.$on('toolbarAnswer', function(e, args) {
            _.each($scope.htfRequirements, function(req) {
                if (req.select) {
                    saveToolbarAnswer(args.value, args.option, req); // NEED TO HANDLE THIS SO IT UPDATES SELECTS
                }
            });
        });

        $scope.$on('toolbarClear', function(e) {
            _.each($scope.htfRequirements, function(req) {
                if (req.select) {
                    if (!_.isEmpty(req.response)) {
                        $scope.saveAnswer(false, req.response, req);
                        req.response = {};
                    }
                    
                    if (angular.isArray(req.scope)) {
                        _.each(req.scope, function(select) {
                            $scope.saveAnswer(false, select, req);
                        });
                        req.scope = [];
                    }
                    else if (!_.isEmpty(req.scope)) {
                        $scope.saveAnswer(false, req.scope, req);
                        req.scope = {};
                    }
                }
            });
        });

        $scope.$on('toolbarStarred', function(e, args) {
            _.each($scope.htfRequirements, function(req) {
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
            htfRequirements: '=?',
            htHeadings: '=',
            htScopeOptions: '=',
            htResponseOptions: '=',
            htSearch: '='
    	}
    };
  }]);

}(window.HT.assessment));