var app = angular.module('AngularModule',[]);

app.factory('DeviceConfigurationUriFactory',function(){
	
	var uri = {};
	uri.getAllConfigurations = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceConfigurationList';
	uri.getCongigurationById = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceConfiguration?DeviceId';//Device id to be passed as parameter.
	uri.getCongigurationByFolderName = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceConfiguration?Folder=';//Folder Name to be passed as parameter.
	uri.createConfiguration = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceConfiguration';
	uri.UpdateConfiguration = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentity';// using PUT method.
	
	return uri;
	
});