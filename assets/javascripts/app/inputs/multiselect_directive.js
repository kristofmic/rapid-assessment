(function(hitrust){
  
  hitrust.inputs.directive('htMultiSelect', [function(){
    var getSelectedLabel = function(selected, sortByProperty, labelProperty) {
      if (selected.length > 2) {
        return selected.length + " items selected";
      } else {
        return _.pluck(_.sortBy(selected, sortByProperty), labelProperty).join(', ');
      }
    };

    var linker = function(scope, elem, attrs) {
      scope.label = scope.label;
      scope.value = scope.value;
      scope.selected = scope.selected;
      scope.selectedValues = {};
      scope.selectedLabel = getSelectedLabel(scope.selected, scope.value, scope.label);

      scope.$watchCollection('selected', function(newVal, oldVal) {
        if (angular.isArray(newVal)){
          scope.selectedValues = {};
          _.each(newVal, function(val) {
            scope.selectedValues[val[scope.value]] = true;
          });
          scope.selectedLabel = getSelectedLabel(newVal, scope.value, scope.label);
        }
      });
    };

    var control = ['$scope', function($scope) {
      $scope.select = function($event, option) {
        $event.preventDefault();
        $event.stopPropagation();

        if ($scope.selectedValues[option[$scope.value]]) {
          _.remove($scope.selected, function(select) { return select[$scope.value] === option[$scope.value]; });
          $scope.selectedValues[option[$scope.value]] = false;
        } else {
          $scope.selected.push(option);
          $scope.selectedValues[option[$scope.value]] = true;
        }
        $scope.onSelect()({
          value: $scope.selectedValues[option[$scope.value]], 
          option: option
        });
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
        onSelect: '&htOnSelect',
        selected: '=htSelected'
      }
    };
  }]);

}(window.HT));