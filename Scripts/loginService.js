

app.factory('loginService', ['$cookieStore', '$cookies', '$rootScope', 'apiDispatcher', '$http', '$q', function ($cookieStore, $cookies, $rootScope, apiDispatcher, $http, $q) {
	
    var login = function (uri) {
        var deferred = $q.defer();
			var data = "&grant_type=password" + "&username=demo@ecolab.com" + "&password=ecolab123" + "&client_id=EcoIceCloud" + "&client_secret=ramendra";
			$http({
				method: 'POST',
				url: uri,
				data: data,
				headers: {'content-type':'application/x-www-form-urlencoded'}
			}).then(function (res) {
			    console.log('login successful');
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

}])