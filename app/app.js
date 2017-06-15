(function(angular){
'use strict';
angular.module('search', [])

	.controller('ctrl', ['$scope', 'searchService', '$filter', function($scope, searchService, $filter) {

	   var vm = this;
	   vm.name="Bulkesh";
	   vm.myClients = [];
	   vm.searchKey = "";

		vm.onSearch = function(searchKey){
	 		 
	 		searchService.getClient(searchKey).then(function(clients) {
	          //$scope.myClients = $filter('dataFilter')(clients,newValue);
	          vm.myClients = clients;
	         
	  	 	});
	 	}
	 	
	}])

})(angular);



