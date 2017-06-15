(function(angular){
'use strict';
angular.module('search')
  .component('searchInput', {
      templateUrl: './../../search/search.html',
      bindings: {
       onSearch: '&',
       myClient: '='
     },
    controller: function(){       
    },
    controllerAs: 'sctrl'
  });


})(angular);