var app = angular.module('AngularModule',[]);

app.factory('DeviceFirmwareUriFactory',function(){
	
	var uri ={};
	uri.getAllFirmwares = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceFirmware';
	uri.getFirmwareById = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceFirmware?';//Device Id to be passed as parameter.
	
	return uri;
	
});