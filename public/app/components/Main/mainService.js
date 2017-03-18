angular.module('mainService',[])

.factory('callService',function($http,$q,SharedServiceFactory)
        {
   
    var authFactory={};

    authFactory.doServiceCall=function(callback){


        $http.get("/api/getData")
        .success(function(data){

                console.table("ohh "+data);
                callback(data);
                return data;

        })
        .error(function(data){
            console.log('Error in Calling Service'+data);
        })
    }



    
    
   
    
    
  
    
    
       
   
    
    return authFactory;
})





    










