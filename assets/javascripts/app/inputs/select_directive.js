(function(hitrust){
  
  hitrust.ra.directive('htSelect', [function(){

    var linker = function(scope, elem, attrs) {
    };

    var control = ['$scope', function($scope) {
      $scope.selectedLabel = '-Select-';

      $scope.select = function($index) {
        $scope.htSelectModel = $index;
        $scope.selectedLabel = $scope.htSelectOptions[$index];
        $scope.htSelectChange($scope.htSelectType, $scope.htSelectModel);
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
        htSelectType: '@'
      }
    };
  }]);

}(window.HT));