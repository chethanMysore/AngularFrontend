var app = angular.module('AngularModule',[]);

app.factory('apiDispatcher',[$q,$http,'Upload',function($q,$http,Upload){
	var defered = $q.defer();
	onApiCall: function(uri,method,data){
		$http({
			method: method,
			url: uri,
			data: data,
			headers: {'authorization':''}
		}).then(function(res){
			defered.resolve(res);
		},function(){
			defered.reject();
		});
		return defered.promise;
	}
	
	onApiCall: function(uri,method){
		$http({
			method: method,
			url: uri,
			headers: {'authorization':''}
		}).then(function(res){
			defered.resolve(res);
		},function(){
			defered.reject();
		});
		return defered.promise;
	}
	
	onUpload: function(uri,file){
		Upload.upload({		
			url: uri,
			file: file,
			headers: {'authorization':''}
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