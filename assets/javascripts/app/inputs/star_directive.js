(function(hitrust){

  hitrust.inputs.directive('htStar', [function(){

    var linker = function(scope, elem, attrs) {
    };

    var control = ['$scope', function($scope) {
    }];

    return {
      restrict: 'A',
      templateUrl: 'assets/javascripts/app/inputs/star.html',
      replace: false,
      link: linker,
      controller: control,
      scope: {
        htStarModel: '=',
        htStarId: '@'
      }
    };
  }]);

}(window.HT));