(function(global) {

  angular.module('ht-loading', [])
  .directive('htLoadingIcon', [function() {
    var linker = function(scope, element, attrs) {
      /*
      scope.$on('EVENT', function() { 
        element.removeClass('hidden');
      });

      scope.$on('EVENT', function() { 
        element.addClass('hidden');
      });
      */
    }

    return {
     restrict: 'AC',
     link: linker,
   };
  }]);

}(window));