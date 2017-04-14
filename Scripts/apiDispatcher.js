var app = angular.module('AngularModule', ['ngCookies', 'ngRoute']);

app.factory('apiDispatcher',['Upload',function($q,$http,Upload,$cookieStore){
	var defered = $q.defer();
	var onApiCall = function(uri,method,data){
		$http({
			method: method,
			url: uri,
			data: data,
			headers: {'authorization':'bearer ' + $cookieStore.get('access_token')}
		}).then(function(res){
			defered.resolve(res);
		},function(){
			defered.reject();
		});
		return defered.promise;
	}
	
	var onApiCall = function(uri,method){
		$http({
			method: method,
			url: uri,
			headers: {'authorization':'bearer ' + $cookieStore.get('access_token')}
		}).then(function(res){
			defered.resolve(res);
		},function(){
			defered.reject();
		});
		return defered.promise;
	}
	
	var onUpload = function(uri,file){
		Upload.upload({		
			url: uri,
			file: file,
			headers: {'authorization':'bearer ' + $cookieStore.get('access_token')}
		}).then(function(res){
			defered.resolve(res);
		},function(){
			defered.reject();
		});
		return defered.promise;
	}
return{
	getAll: function(uri){
		return onApiCall(uri,'GET');
	},
	getById : function(uri){
		return onApiCall(uri,'GET');
			
			
	},
	postData: function(uri,data){
		return onApiCall(uri,'POST',data);
	},
	deleteById : function(uri){
		return onApiCall(uri,'DELETE');
			
			
	},
	uploadFile: function(uri,file){
		return onApiCall(uri,file);
	},
	update : function(uri){
		return onApiCall(uri,'PUT');
			
	}
}
}]);