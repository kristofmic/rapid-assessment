(function(hitrust){
  
  hitrust.inputs.directive('htSelectFactory', ['$compile', function($compile){

    var selectFactory = function(selected) {
      var template = "<span ";

      if (angular.isArray(selected)) {
        template += "ht-multi-select " +
                    "ht-select-option-partial-prop='{{htSelectOptionPartialProp}}'";
      } else {
        template += "ht-select ";
      }

      template += "ht-select-options='htSelectOptions' " +
                  "ht-select-option-label-prop='{{htSelectOptionLabelProp}}' " +
                  "ht-select-option-value-prop='{{htSelectOptionValueProp}}' " +
                  "ht-selected='htSelected' " +
                  "ht-on-select='htOnSelect'></span>";
      return template;
    };

    var linker = function(scope, element, attrs) {
      element.html(
        selectFactory(scope.htSelected)
      );
      $compile(element.contents())(scope);
    };

    return {
      restrict: 'A',
      replace: true,
      link: linker,
      scope: {
        htSelectOptions: '=',
        htSelectOptionLabelProp: '@',
        htSelectOptionValueProp: '@',
        htSelectOptionPartialProp: '@',
        htSelected: '=',
        htOnSelect: '&'
      }
    };
  }]);

}(window.HT));