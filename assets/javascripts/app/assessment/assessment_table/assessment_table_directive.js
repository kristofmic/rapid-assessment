(function(assessment){

  assessment.directive('htAssessmentTable', [function(){

    var linker = function(scope, elem, attrs) {
        scope.responses = {};
        scope.scopes = {};
        scope.htSortOrder = [];
        scope.htFilter = [];
    };

    var control = ['$scope', 'htEvents', 'AssessmentSvc', function($scope, events, assessment) {

        // $scope Functions
        $scope.saveAnswer = function(value, option, req) {
            assessment.saveFinding(req.fID, option.attId, option.attTypeId, !!value);
        };

        $scope.setSelected = function(value, req) {
            events.raise('requirementSelect', {value: value, req: req} );
        };

        /* CONVERT TO EVENT HANDLER */
        $scope.setOrder = function(column) {
          if (!_.contains($scope.htSortOrder, column)) {
            $scope.htSortOrder.push(column);
          } else {
            _.remove($scope.htSortOrder, function(sort) {
              return sort === column;
            });
          }
        };

        // Helper Functions
        var saveToolbarAnswer = function(value, option, req) {
            if (option.answerType === 'scope' && angular.isArray(req[option.answerType])) {
                if (value) {
                    if (!_.contains(req[option.answerType], option)) {
                        req[option.answerType].push(option);
                        $scope.saveAnswer(value, option, req);
                    }
                }
                else if (_.contains(req[option.answerType], option)) {
                    _.remove(req[option.answerType], function(opt) { return opt.attId === option.attId; });
                    $scope.saveAnswer(value, option, req);
                }
            }
            else if (!angular.equals(req[option.answerType], option)) {
                req[option.answerType] = option;
                $scope.saveAnswer(value, option, req);
            }
        };

        // Event Handlers
        $scope.$on('toolbarSelect', function(e, args) {
            _.each($scope.htfRequirements, function(req) {
                req.select = args.value;
            });
        });

        $scope.$on('toolbarAnswer', function(e, args) {
            events.raise('loadingStart');
            _.each($scope.htfRequirements, function(req) {
                if (req.select) {
                    saveToolbarAnswer(args.value, args.option, req);
                }
            });
            events.raise('loadingComplete');
        });

        $scope.$on('toolbarClear', function(e) {
            events.raise('loadingStart');
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
            events.raise('loadingComplete');
        });

        $scope.$on('toolbarStarred', function(e, args) {
            _.each($scope.htfRequirements, function(req) {
              if (req.select) {
                req.starred = args.value;
              }
            });
        });

        $scope.$on('toolbarSetFilter', function(e, args) {
          $scope.htFilter.push(args.filter);
        });

        $scope.$on('toolbarRemoveFilter', function(e, args) {
          _.remove($scope.htFilter, args.filter);
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