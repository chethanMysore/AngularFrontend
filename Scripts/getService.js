var app = angular.module('AngularModule',[]);
app.factory('getService',['apiDispatcher',function(apiDispatcher){
	getAll: function(uri){
		apiDispatcher.onApiCall(uri,'GET').then(function(res){
			return res;
		},function(err){
			return err;
		});
	}

}])