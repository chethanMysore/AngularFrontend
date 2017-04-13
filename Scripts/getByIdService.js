var app = angular.module('AngularModule',[]);

app.factory('getByIdService',['apiDispatcher',function(apiDispatcher){
	getById : function(uri){
		apiDispatcher.onApiCall(uri,'GET')
			.then(function(response){
				return response;
			},function(error){
				return error; 
			});
			
	}
}]);