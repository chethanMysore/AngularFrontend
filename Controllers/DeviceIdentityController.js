var app = angular.module('AngularModule',[]);

var DeviceIdentityController = function ($scope, apiDispatcher, uriFactory, $location, $cookieStore) {

    $scope.getDevices = function () {
        $scope.devices = [];
        var url = uriFactory.uri.getAllDevices;
        apiDispatcher.getAll(url)
			.then(function (response) {
			    angular.forEach(response.data, function (value, key) {
			        $scope.devices.push({
			            id: value.id,
			            DeviceId: value.DeviceId,
			            DeviceKey: value.DeviceKey,
			            IOTHubEndpoint: value.IOTHubEndpoint,
			            SerialNumber: value.SerialNumber,
			            MACAddress: value.MACAddress,
			            BLEUUID: value.BLEUUID,
			            AccountID: value.AccountID,
			            SystemID: value.SystemID,
			            ConfigurationStoreURL: value.ConfigurationStoreURL,
			            Lastupdatedconfiguration: value.Lastupdatedconfiguration,
			            DeviceFirmwareVersion: value.DeviceFirmwareVersion

			        });
			    });
			}, function () { });
    }

    $scope.showDevice = function (index) {
        $location.path('/device');
        $cookieStore.put('deviceId', $scope.devices[index].SerialNumber);
    }

    $scope.getDeviceById = function () {

        var url = uriFactory.uri.getDeviceById + $cookieStore.get('deviceId');
        apiDispatcher.getById(url)
			.then(function (response) {
			    var value = response.data;
			    $scope.device.push({
			        id: value.id,
			        DeviceId: value.DeviceId,
			        DeviceKey: value.DeviceKey,
			        IOTHubEndpoint: value.IOTHubEndpoint,
			        SerialNumber: value.SerialNumber,
			        MACAddress: value.MACAddress,
			        BLEUUID: value.BLEUUID,
			        AccountID: value.AccountID,
			        SystemID: value.SystemID,
			        ConfigurationStoreURL: value.ConfigurationStoreURL,
			        Lastupdatedconfiguration: value.Lastupdatedconfiguration,
			        DeviceFirmwareVersion: value.DeviceFirmwareVersion
			    });
			}, function () {

			});
    }

    $scope.addDevice = function () {
        var url_deviceIdentity = uriFactory.uri.createDevice;
        var url_deviceIdentity = uriFactory.uri.createDeviceDirectory;
        var data = {
            id: value.id,
            DeviceId: value.DeviceId,
            DeviceKey: value.DeviceKey,
            IOTHubEndpoint: value.IOTHubEndpoint,
            SerialNumber: value.SerialNumber,
            MACAddress: value.MACAddress,
            BLEUUID: value.BLEUUID,
            AccountID: value.AccountID,
            SystemID: value.SystemID,
            ConfigurationStoreURL: value.ConfigurationStoreURL,
            Lastupdatedconfiguration: value.Lastupdatedconfiguration,
            DeviceFirmwareVersion: value.DeviceFirmwareVersion
        };
        apiDispatcher.postData(url_deviceIdentity, data)
			.then(function (response) {
			    apiDispatcher.postData(url_deviceIdentity, data)
					.then(function (res) {

					}, function () {

					});
			}, function () {

			});

    };

    $scope.updateDevice = function () {
        var url = uriFactory.uri.updateDevice;
        var data = {
            id: value.id,
            DeviceId: value.DeviceId,
            DeviceKey: value.DeviceKey,
            IOTHubEndpoint: value.IOTHubEndpoint,
            SerialNumber: value.SerialNumber,
            MACAddress: value.MACAddress,
            BLEUUID: value.BLEUUID,
            AccountID: value.AccountID,
            SystemID: value.SystemID,
            ConfigurationStoreURL: value.ConfigurationStoreURL,
            Lastupdatedconfiguration: value.Lastupdatedconfiguration,
            DeviceFirmwareVersion: value.DeviceFirmwareVersion
        };
        apiDispatcher.postData(url, data)
			.then(function (response) {

			}, function () {
			});
    };
}
app.controller('DeviceIdentityController',DeviceIdentityController);
