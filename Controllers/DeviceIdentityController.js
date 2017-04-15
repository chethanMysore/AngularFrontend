'use strict';

var DeviceIdentityController = function (uriFactory, $scope, $location, $cookieStore, apiDispatcher, loginService) {
    $scope.post = false;
    $scope.update = false;
    $scope.delete = false;
    $scope.getAllDevices = function () {       
        alert('hi');
        console.log(uriFactory.getToken);
        loginService.doLogin(uriFactory.getToken).then(function (res) {
            $scope.RetrievedData = [];
            apiDispatcher.getAll(uriFactory.getAllDevices).then(function (res) {
                angular.forEach(res.data, function (value, key) {
                    $scope.RetrievedData.push({
                        id: value.id,
                        DeviceId: value.deviceId,
                        DeviceKey: value.deviceKey,
                        IOTHubEndpoint: value.iotHubEndpoint,
                        SerialNumber: value.serialNumber,
                        MACAddress: value.macAddress,
                        BLEUUID: value.bleuuid,
                        AccountID: value.accountID,
                        SystemID: value.systemID,
                        ConfigurationStoreURL: value.configurationStoreUrl,
                        Lastupdatedconfiguration: value.lastupdatedconfiguration,
                        DeviceFirmwareVersion: value.deviceFirmwareVersion,
                        psk: value.psk
                    });

                });
            }, function () {

            });
        }, function () {
            $location.path('/Home');
        });
    }

    $scope.postClicked = function () {
        $scope.post = true;
    }

    $scope.updateClicked = function () {
        $scope.update = true;
    }

    $scope.deleteClicked = function () {
        $scope.delete = true;
    }

    $scope.showDevice = function (index) {
        //$location.path('/Accounts');
        $cookieStore.put('DeviceId', $scope.RetrievedData[index].id);
        console.log($scope.RetrievedData[index]);
        $scope.RetrievedDevice = $scope.RetrievedData[index];
        $scope.id = $scope.RetrievedDevice.id;
        $scope.DeviceId = $scope.RetrievedDevice.DeviceId,
	     $scope.DeviceKey = $scope.RetrievedDevice.DeviceKey,
	      $scope.IOTHubEndpoint = $scope.RetrievedDevice.IOTHubEndpoint,
	     $scope.SerialNumber = $scope.RetrievedDevice.SerialNumber,
	     $scope.MACAddress = $scope.RetrievedDevice.MACAddress,
	    $scope.BLEUUID = $scope.RetrievedDevice.BLEUUID,
	   $scope.AccountID = $scope.RetrievedDevice.AccountID,
	    $scope.SystemID = $scope.RetrievedDevice.SystemID,
	     $scope.ConfigurationStoreURL = $scope.RetrievedDevice.ConfigurationStoreURL,
	    $scope.Lastupdatedconfiguration = $scope.RetrievedDevice.Lastupdatedconfiguration,
	     $scope.DeviceFirmwareVersion = $scope.RetrievedDevice.DeviceFirmwareVersion,
        $scope.psk = $scope.RetrievedDevice.psk
        //$scope.getAccountById();
    }

    $scope.getDeviceById = function () {
        $scope.RetrievedDevice = [];
        apiDispatcher.getById(uriFactory.getDeviceById + $cookieStore.get('DeviceId')).then(function (res) {
            console.log('inside getDevice');
            console.log(res);
            console.log(uriFactory.getDeviceById + $cookieStore.get('DeviceId'));
            console.log(res);
            var value = res.data;
            $scope.RetrievedDevice.push({
                id: value.id,
                DeviceId: value.DeviceId,
                DeviceKey: value.DeviceKey,
                IOTHubEndpoint: value.IOTHubEndpoint,
                serialNumber: value.SerialNumber,
                macAddress: value.MACAddress,
                bleuuid: value.BLEUUID,
                accountID: value.AccountID,
                systemID: value.SystemID,
                configurationStoreUrl: value.ConfigurationStoreURL,
                lastupdatedconfiguration: value.Lastupdatedconfiguration,
                deviceFirmwareVersion: value.DeviceFirmwareVersion,
               psk:value.psk
            });

        }, function () {

        });

        console.log($scope.RetrievedDevice);
    }

    $scope.reset = function () { }

    $scope.createDevice = function () {
        var data = {
            deviceId: $scope.DeviceId,
            deviceKey: $scope.DeviceKey,
            iotHubEndpoint: $scope.IOTHubEndpoint,
            serialNumber: $scope.SerialNumber,
            macAddress: $scope.MACAddress,
            bleuuid: $scope.BLEUUID,
            accountID: $scope.AccountID,
            systemID: $scope.SystemID,
            configurationStoreUrl: $scope.ConfigurationStoreURL,
            lastupdatedconfiguration: $scope.Lastupdatedconfiguration,
            deviceFirmwareVersion: $scope.DeviceFirmwareVersion,
            psk: $scope.psk

        };
        apiDispatcher.postData(uriFactory.createDevice, data).then(function (res) {

        }, function () {

        });
    }

    $scope.updateDevice = function () {
        var data = {
            id: $scope.id,
            deviceId: $scope.DeviceId,
            deviceKey: $scope.DeviceKey,
            iotHubEndpoint: $scope.IOTHubEndpoint,
            serialNumber: $scope.SerialNumber,
            macAddress: $scope.MACAddress,
            bleuuid: $scope.BLEUUID,
            accountID: $scope.AccountID,
            systemID: $scope.SystemID,
            configurationStoreUrl: $scope.ConfigurationStoreURL,
            lastupdatedconfiguration: $scope.Lastupdatedconfiguration,
            deviceFirmwareVersion: $scope.DeviceFirmwareVersion,
            psk: $scope.psk

        };
        apiDispatcher.postData(uriFactory.updateDevice, data).then(function (res) {

        }, function () {

        });
    }




}

app.controller('DeviceIdentityController', ['uriFactory', '$scope', '$location', '$cookieStore', 'apiDispatcher', 'loginService', DeviceIdentityController]);