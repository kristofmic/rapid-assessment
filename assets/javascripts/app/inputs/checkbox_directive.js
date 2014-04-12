(function(hitrust){
  
  hitrust.ra.directive('htCheckbox', [function(){

    var linker = function(scope, elem, attrs) {
    };

    var control = ['$scope', function($scope) {
      $scope.change = function() {
        $scope.htCheckboxChange($scope.htCheckboxModel);
      };
    }];

    return {
      restrict: 'A',
      templateUrl: 'assets/javascripts/app/inputs/checkbox.html',
      replace: false,
      link: linker,
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