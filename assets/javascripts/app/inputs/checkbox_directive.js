(function(hitrust){
  
  hitrust.inputs.directive('htCheckbox', [function(){

    var control = ['$scope', function($scope) {
      $scope.change = function() {
        $scope.htCheckboxChange($scope.htCheckboxModel);
      };
    }];

    return {
      restrict: 'A',
      templateUrl: 'assets/javascripts/app/inputs/checkbox.html',
      replace: false,
      controller: control,
      scope: {
        htCheckboxId: '@',
        htCheckboxChange: '=',
        htCheckboxModel: '=',
        htCheckboxPartial: '='
      }
    };
  }]);

}(window.HT));