var app = angular.module('AngularModule',[]);
app.factory('uploadService',['apiDispatcher',function(apiDispatcher){
	getAll: function(uri,file){
		apiDispatcher.onApiCall(uri,file).then(function(res){
			return res;
		},function(err){
			return err;
		});
	}

}])