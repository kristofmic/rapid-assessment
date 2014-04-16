(function(hitrust){
  
  hitrust.inputs.directive('htSelect', [function(){

    var linker = function(scope, elem, attrs) {
      scope.label = scope.label || 'label';
      scope.value = scope.value || 'value';
    };

    var control = ['$scope', function($scope) {
      $scope.select = function(option) {
        $scope.selected = option[$scope.label];
        $scope.onSelect({value: option[$scope.value], option: option});
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