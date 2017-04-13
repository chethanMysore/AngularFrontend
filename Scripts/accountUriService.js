var app = angular.module('AngularModule',[]);

app.factory('accountUriFactory',function(){
	var uri = {};
	uri.getAllAccounts = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account";
	uri.getAccountById = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account?accountId=";
	uri.createAccount = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account";
	uri.updateAccount = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account";
	uri.deleteAccount = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account?accountId=";
	uri.getAccountInfo = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account/GetByAccountId?id=";
	return uri;
});