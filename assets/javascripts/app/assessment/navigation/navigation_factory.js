(function(assessment) {

  assessment.factory('htNav', [function() {

	    var navs = [
	      {
	        label: 'Policy',
	        sref: 'assessment.policy',
	        active: false
	      },
	      {
	        label: 'Procedure',
	        sref: 'assessment.procedure',
	        active: false
	      },
	      {
	        label: 'Implemented',
	        sref: 'assessment.implemented',
	        active: false
	      },
	      {
	        label: 'Measured',
	        sref: 'assessment.measured',
	        active: false
	      },
	      {
	        label: 'Managed',
	        sref: 'assessment.managed',
	        active: false
	      }
	    ];

	    var get = function() {
	      return navs;
	    };

	    var set = function(index) {
	      angular.forEach(navs, function(val, i) {
	        (i === index) ? val.active = true : val.active = false;
	      });
	    };

	    return {
	      get: get,
	      set: set
	    };
	  }]);

}(window.HT.assessment));