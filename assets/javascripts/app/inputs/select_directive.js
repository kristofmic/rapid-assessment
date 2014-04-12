(function(hitrust){
  
  hitrust.ra.directive('htSelect', [function(){

    var linker = function(scope, elem, attrs) {
    };

    var control = ['$scope', function($scope) {

      $scope.select = function($index) {
        $scope.htSelectModel[$scope.htSelectProperty] = $index;
        $scope.htSelectChange($scope.htSelectModel, $scope.htSelectProperty, $index);
      };
    }];

    return {
      restrict: 'A',
      templateUrl: 'assets/javascripts/app/inputs/select.html',
      replace: false,
      link: linker,
      controller: control,
      scope: {
        htSelectOptions: '=',
        htSelectChange: '=',
        htSelectModel: '=',
        htSelectProperty: '@',
      }
    };
  }]);

}(window.HT));