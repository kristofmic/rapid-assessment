(function(hitrust){

  hitrust.inputs.directive('htSelect', [function(){

    var linker = function(scope, elem, attrs) {
      scope.label = scope.label || 'label';
      scope.value = scope.value || 'value';

      scope.selectedLabel = scope.selected[scope.label];

      scope.$watch('selected', function(newVal, oldVal) {
        if (angular.isObject(newVal)){
          scope.selected = newVal;
          scope.selectedLabel = scope.selected[scope.label];
        }
      });
    };

    var control = ['$scope', function($scope) {
      $scope.select = function(option) {
        $scope.selected = option;
        $scope.onSelect()({value: option[$scope.value], option: option});
      };
    }];

    return {
      restrict: 'A',
      templateUrl: 'assets/javascripts/app/inputs/select.html',
      replace: false,
      link: linker,
      controller: control,
      scope: {
        options: '=htSelectOptions',
        label: '@htSelectOptionLabelProp',
        value: '@htSelectOptionValueProp',
        selected: '=htSelected',
        onSelect: '&htOnSelect'
      }
    };
  }]);

}(window.HT));