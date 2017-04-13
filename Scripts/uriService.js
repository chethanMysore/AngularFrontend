var app = angular.module('AngularModule',[]);

app.factory('uriFactory',function(){
	var uri = {};
	uri.getAllAccounts = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account";
	uri.getAccountById = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account?accountId=";
	uri.createAccount = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account";
	uri.updateAccount = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account";
	uri.deleteAccount = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account?accountId=";
	uri.getAccountInfo = "http://ice-test-coreservicesapi.azurewebsites.net/api/Account/GetByAccountId?id=";
	uri.getAllSites = "http://ice-test-coreservicesapi.azurewebsites.net/api/Site";
	uri.getSiteById = "http://ice-test-coreservicesapi.azurewebsites.net/api/Site?siteId=";
	uri.createSite = "http://ice-test-coreservicesapi.azurewebsites.net/api/Site";
	uri.updateSite = "http://ice-test-coreservicesapi.azurewebsites.net/api/Site";
	uri.deleteSite = "http://ice-test-coreservicesapi.azurewebsites.net/api/Site?siteId=";
	uri.getAllSystems = "http://ice-test-coreservicesapi.azurewebsites.net/api/System";
	uri.getSystemById = "http://ice-test-coreservicesapi.azurewebsites.net/api/System?systemId=";
	uri.createSystem = "http://ice-test-coreservicesapi.azurewebsites.net/api/System";
	uri.updateSystem = "http://ice-test-coreservicesapi.azurewebsites.net/api/System";
	uri.deleteSystem = "http://ice-test-coreservicesapi.azurewebsites.net/api/System?systemId=";
	uri.getAllDevices = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentity';
	uri.getDeviceById = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentity?serialNumber=';//have to pass the Serial Number as parameter.
	uri.createDevice = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentityIOT';
	uri.createDeviceDirectory = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentityIOT';
	uri.updateDevice ='http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentity';//using POST method
	uri.getAllConfigurations = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceConfigurationList';
	uri.getCongigurationById = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceConfiguration?DeviceId';//Device id to be passed as parameter.
	uri.getCongigurationByFolderName = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceConfiguration?Folder=';//Folder Name to be passed as parameter.
	uri.createConfiguration = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceConfiguration';
	uri.updateConfiguration = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceIdentity';// using PUT method.
	uri.getAllFirmwares = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceFirmware';
	uri.getFirmwareById = 'http://ice-test-coreservicesapi.azurewebsites.net/api/DeviceFirmware?';//Device Id to be passed as parameter.

	return uri;
});