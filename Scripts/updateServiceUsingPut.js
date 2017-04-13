var app = angular.module('AngularModule',[]);

app.factory('updateServiceUsingPut',['apiDispatcher',function(apiDispatcher){
	update : function(uri){
		apiDispatcher.onApiCall(uri,'PUT')
			.then(function(response){
				return response;
			},function(error){
				return error; 
			});
			
	}
}]);