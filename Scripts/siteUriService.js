var app = angular.module('AngularModule',[]);

app.factory('sitesFactory',function(){
	var uri = {};
	uri.getAllSites = "http://ice-test-coreservicesapi.azurewebsites.net/api/Site";
	uri.getSiteById = "http://ice-test-coreservicesapi.azurewebsites.net/api/Site?siteId=";
	uri.createSite = "http://ice-test-coreservicesapi.azurewebsites.net/api/Site";
	uri.updateSite = "http://ice-test-coreservicesapi.azurewebsites.net/api/Site";
	uri.deleteSite = "http://ice-test-coreservicesapi.azurewebsites.net/api/Site?siteId=";
	
	return uri;
});