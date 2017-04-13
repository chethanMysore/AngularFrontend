var app = angular.module('AngularModule',[]);

app.factory('deleteService',['apiDispatcher',function(apiDispatcher){
	deleteById : function(uri){
		apiDispatcher.onApiCall(uri,'DELETE')
			.then(function(response){
				return response;
			},function(error){
				return error; 
			});
			
	}
}]);