(function(assessment) {

  assessment.filter('htToolbarFilters', [function() {

    var filterFunction = function(input, filters) {
      if (!filters || !filters.length) {
        return input;
      }
      else {
        var filteredResult = _.filter(input, function(el) {
          var keep = true;
          _.each(filters, function(f) {
            if (el[f.key] !== f.value) {
              keep = false;
              return false; // break
            }
          });
          return keep;
        });

        return filteredResult;
      }
    };

    return filterFunction;
  }]);

}(window.HT.assessment));