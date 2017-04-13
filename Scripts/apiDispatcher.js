var app = angular.module('AngularModule',[]);

app.factory('apiDispatcher',[$q,$http,function($q,$http){
	var defered = $q.defer();
	onApiCall: function(uri,data,method){
		$http({
			method: method,
			url: uri;
			data: data;
			headers: {'authorization':''}
		}).then(function(res){
			defered.resolve(res);
		},function(){
			defered.reject();
		});
		return defered.promise;
	}
}]);