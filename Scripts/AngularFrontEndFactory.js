var app = angular.module('AngularModule',[]);
app.factory('crudService', function (apiFactory) {
    return {
        onPost: function(uri,data){
        	apiFactory.onApiCall(uri,data).then(function(res){
        		return res;
        	},function(err){
        		return err;
        	});      	
        }
    }
});