(function(hitrust){
  
  hitrust.ra.directive('htAssessmentTable', [function(){
    

    return {
    	restrict: 'A',
    	templateUrl: 'assets/javascripts/app/assessment/assessment_table.html',
    	replace: false,
    	scope: {
    		htRequirements: '=',
    		htFilter: '='
    	}
    };
  }]);

}(window.HT));