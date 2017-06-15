angular.module('search')
  .filter('dataFilter', function() {
    var clients = [];
  // In the return function, we must pass in a single parameter which will be the data we will work on.
  // We have the ability to support multiple other parameters that can be passed into the filter optionally
  return function(clientObj,input) {
    
    clients = [];
    // Do filter work here
    angular.forEach(clientObj, function(value, key) { 
      if(!input || input.length<1){
        clients = [];
      }else{
        input = input.toLowerCase();
       if (clientObj[key].name.toLowerCase().indexOf(input) != -1) {
            clients.push({name: clientObj[key].name, phonenumber:clientObj[key].phonenumber, eid:clientObj[key].eid, policynumber:clientObj[key].policynumber});
        }
        if (clientObj[key].policynumber.indexOf(input) != -1) {
           clients.push({name: clientObj[key].name, phonenumber:clientObj[key].phonenumber, eid:clientObj[key].eid, policynumber:clientObj[key].policynumber});
        } 
      }
    });
    return clients;

  }

});