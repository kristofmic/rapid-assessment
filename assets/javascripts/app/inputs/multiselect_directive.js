(function(hitrust){
  
  hitrust.inputs.directive('htMultiSelect', [function(){

    var linker = function(scope, elem, attrs) {
      scope.label = scope.label || 'label';
      scope.value = scope.value || 'value';
      scope.selected = attrs['ht-selected-label'];
    };

    var control = ['$scope', function($scope) {
      $scope.select = function(option) {
        $scope.selected = option[$scope.label];
        $scope.onSelect({value: option[$scope.value], option: option});
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