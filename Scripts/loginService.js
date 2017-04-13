var app = angular.module('AngularModule',[]);

app.factory('loginService',function($cookieStore,$cookies,$rootScope,apiDispatcher,$http,$q){
	var deferred = $q.defer();
		login: function(uri){
			var data = "&grant_type=password" + "&username=demo@ecolab.com" + "&password=ecolab123" + "&client_id=EcoIceCloud" + "client_secret=ramendra";
			$http({
				method: 'POST',
				url: uri,
				headers: {'content-type':'application/x-www-form-urlencoded'}
			}).then(function(res){
				$cookieStore.put('access_token',res.data.access_token);
				deferred.resolve(res);
			},function(){
				deferred.reject();
			});
			return deferred.promise;
		}
		
	return {
		doLogin: function(uri){
			return login(uri);
		}
	}	

})