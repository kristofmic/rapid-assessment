(function(hitrust){
  
  hitrust.inputs.directive('htMultiSelect', [function(){
    var getSelectedLabel = function(selected, sortByProperty, labelProperty) {
      return _.pluck(_.sortBy(selected, sortByProperty), labelProperty).join(', ');
    };

    var linker = function(scope, elem, attrs) {
      scope.label = scope.label || 'label';
      scope.value = scope.value || 'value';
      scope.selected = [];
      scope.selectedValues = {};
      scope.selectedLabel = getSelectedLabel(scope.selected, scope.value, scope.label);
    };

    var control = ['$scope', function($scope) {
      $scope.select = function(option) {
        if ($scope.selectedValues[option[$scope.value]]) {
          _.remove($scope.selected, function(select) { return select[$scope.value] === option[$scope.value]; });
          $scope.selectedValues[option[$scope.value]] = false;
          $scope.onSelect({value: null, option: option});
        } else {
          $scope.selected.push(option);
          $scope.selectedValues[option[$scope.value]] = true;
          $scope.onSelect({value: option[$scope.value], option: option});
        }
        $scope.selectedLabel = getSelectedLabel($scope.selected, $scope.value, $scope.label);
      };
    }];

    return {
      restrict: 'A',
      templateUrl: 'assets/javascripts/app/inputs/multiselect.html',
      replace: false,
      link: linker,
      controller: control,
      scope: {
        options: '=htSelectOptions',
        label: '@htSelectOptionLabelProp',
        value: '@htSelectOptionValueProp',
        onSelect: '&htOnSelect'
      }
    };
  }]);

}(window.HT));