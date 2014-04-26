(function(global) {

  angular.module('ht-loading', [])
  .directive('htLoadingIcon', [function() {

    var linker = function(scope, element, attrs) {
      var timing = {
        start: 0,
        end: 0,
        elapsed: function(start, end) {
          return (end - start) / 1000;
        }
      };

      scope.$on('$stateChangeStart', function() {
        logStart();
        element.removeClass('hidden');
      });

      scope.$on('loadingStart', function() {
        logStart();
        element.removeClass('hidden');
      });

      scope.$on('$stateChangeSuccess', function() {
        logComplete();
        element.addClass('hidden');
      });

      scope.$on('loadingComplete', function() {
        logComplete();
        element.addClass('hidden');
      });

      function logStart() {
        timing.start = Date.now();
        console.log('loading started: ' + timing.start);
      }

      function logComplete() {
        timing.end = Date.now();
        console.log('loading completed: ' + timing.end);
        console.log('elapsed time: ' + timing.elapsed(timing.start, timing.end));
      }
    };

    return {
     restrict: 'AC',
     link: linker,
   };
  }]);

}(window));