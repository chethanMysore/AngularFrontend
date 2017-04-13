var app = angular.module('AngularModule',[]);
app.factory('postService',['apiDispatcher',function(apiDispatcher){
	postData: function(uri,data){
		apiDispatcher.onApiCall(uri,'POST',data).then(function(res){
			return res;
		},function(err){
			return err;
		});
	}

}])