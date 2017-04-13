var app = angular.module('AngularModule',[]);

app.factory('deviceIndentityUriFactory',function(){
	var uri = {};
	uri.getAllDevices = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentity';
	uri.getDeviceById = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentity?serialNumber';//have to pass the Serial Number as parameter.
	uri.createDevice = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentityIOT';
	uri.createDeviceDirectory = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentityIOT';
	uri.updateDevice ='http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentity';//using POST method
	
	return uri;
});