angular.module('mainController',[])

.controller('MainController',function($rootScope,$state,$location,CommonDataFactory,$mdDialog, $mdMedia,SharedServiceFactory,callService)
           {
    
	 var vm=this;
	 var image=["tommer","stark","balon","stannis","renly","unknown","mance"];
	
	  vm.query = {};
    vm.name = 'name';
	 vm.results=callService.doServiceCall(callback);
	

	 function callback(data){
	 	//Callback called when we get the Main Data containing code and everything
	 	console.log("Data is "+data);
	 	CommonDataFactory.setActualData(data);
	 	vm.results=data;
	 	var arr_kings = Object.keys(data).map(function(k) { return k });
	 	var arr_king_properties=Object.keys(data).map(function(k) { return data[k] });

	 	for(var i=0;i<arr_kings.length;i++){

	 		arr_king_properties[i].name=arr_kings[i];
	 		arr_king_properties[i].image=image[i];
	 	}
	 	vm.arr_kings=arr_kings;
	 	vm.arr_king_properties=arr_king_properties;
	 	
	 	


	 	


	 }




  
  	
    
    
    
      
    

  
   
  
    
    
   
    
    
})

















