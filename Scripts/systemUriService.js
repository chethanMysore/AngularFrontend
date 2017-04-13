var app = angular.module('AngularModule',[]);

app.factory('sitesFactory',function(){
	var uri = {};
	uri.getAllSystems = "http://ice-test-coreservicesapi.azurewebsites.net/api/System";
	uri.getSystemById = "http://ice-test-coreservicesapi.azurewebsites.net/api/System?systemId=";
	uri.createSystem = "http://ice-test-coreservicesapi.azurewebsites.net/api/System";
	uri.updateSystem = "http://ice-test-coreservicesapi.azurewebsites.net/api/System";
	uri.deleteSystem = "http://ice-test-coreservicesapi.azurewebsites.net/api/System?systemId=";
	
	return uri;
});