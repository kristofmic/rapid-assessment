(function(global) {

  angular.module('ht-loading', [])
  .directive('htLoadingIcon', [function() {
    
    var linker = function(scope, element, attrs) {
      scope.$on('$stateChangeStart', function() { 
        element.removeClass('hidden');
      });

      scope.$on('savingAnswerStart', function() { 
        element.removeClass('hidden');
      });

      scope.$on('$stateChangeSuccess', function() { 
        element.addClass('hidden');
      });

      scope.$on('savingAnswerComplete', function() { 
        element.addClass('hidden');
      });
    };

    return {
     restrict: 'AC',
     link: linker,
   };
  }]);

}(window));