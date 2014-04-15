(function(hitrust){
  
  hitrust.inputs.directive('htSelect', [function(){

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