(function(global) {

  global.angular.module('ht-events', [])
    .factory('htEvents', ['$rootScope', function($rootScope){
      var raise = function(eventName, args) {
        $rootScope.$broadcast(eventName, args);
      };

      return {
        raise: raise
      };
    }]);

}(window));