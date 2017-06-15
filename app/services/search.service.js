angular.module('search')
  .factory('searchService', function($http, $filter) {
   return {
        getClient: function(input) {
             //return the promise directly.
             return $http.get('data.json')
                 .then(function(result) {
                      
                        return $filter('dataFilter')(result.data.clients,input);
                  });
        }
   }
});