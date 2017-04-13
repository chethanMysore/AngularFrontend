var app = angular.module('AngularModule',[]);

app.factory('updateServiceUsingPut',['apiDispatcher',function(apiDispatcher){
	update : function(uri){
		return apiDispatcher.onApiCall(uri,'PUT');
			
	}
}]);