
var SystemsController = function (uriFactory, $scope, $location, $cookieStore, apiDispatcher, loginService,ngToast) {
    $scope.post = false;
    $scope.update = false;
    $scope.delete = false;
    $scope.list = false;
    $scope.getAllSystems = function () {
        $scope.Devices = {};
       
        console.log(uriFactory.getToken);
        console.log("inside getAllSystems");
        loginService.doLogin(uriFactory.getToken).then(function (res) {
            $scope.RetrievedData1 = [];
            
            apiDispatcher.getAll(uriFactory.getAllSystems).then(function (res) {
                angular.forEach(res.data, function (value, key) {
                    $scope.RetrievedData1.push({
                        Sysid: value.id,
                        System_Name : value.system_Name,
                        System_Location: value.system_Location,
                        Site_Id : value.site_Id,
                        Account_Id: value.account_Id,
                        Device_Identity : value.device_Identity,
                    })
                    console.log("System data is pushed inside RetrievedData1");
                });
            }, function () {
                ngToast.create({
                    className: 'success',
                    content: '<p>Login Successful</p>',
                    dismissOnTimeout: true,
                    timeout: 4000,
                    dismissOnClick: true
                });
            });
        }, function () {
            ngToast.create({
                className: 'warning',
                content: '<p>Oops!!! Something went wrong! please try again after sometime</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });
    }

    $scope.postClicked = function () {
        $scope.post = true;
        $scope.System_id = "";
        $scope.System_Name = "";
        $scope.System_Location = "";
        $scope.Site_Id = "";
        $scope.Account_Id = "";
        $scope.Device_Identity = "";
        apiDispatcher.getAll(uriFactory.getAllDevices).then(function (response) {
            angular.forEach(response.data, function (value, key) {

                $scope.RetrievedDevices.push({
                    deviceId: value.DeviceId,
                    isChecked: false
                });

            });

        }, function () {
            ngToast.create({
                className: 'warning',
                content: '<p>Oops!!! Something went wrong! please try again after sometime</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });
    }

    $scope.updateClicked = function () {
        

        $scope.update = true;
        
        for (var i = 1; i < 13; i++) {
            document.getElementById("rem" + i).removeAttribute("disabled");

        }

        $scope.RetrievedDevices = [];
        apiDispatcher.getAll(uriFactory.getAllDevices).then(function (response) {
            angular.forEach(response.data, function (value, key) {
                if (value.SystemID == $cookieStore.get('SystemId')) {
                    $scope.RetrievedDevices.push({
                        deviceId: value.DeviceId,
                        isChecked: true
                    });
                }
                else {
                    $scope.RetrievedDevices.push({
                        deviceId: value.DeviceId,
                        isChecked: false
                    });
                }
            });
        }, function () {
            ngToast.create({
                className: 'warning',
                content: '<p>Oops!!! Something went wrong! please try again after sometime</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });
    }

    $scope.deleteClicked = function () {
        $scope.delete = true;
    }

    $scope.showCheckboxes = function () {
        
        $scope.list = !$scope.list;

    }

    $scope.showSystem = function (index) {
       
        $cookieStore.put('SystemId', $scope.RetrievedData1[index].Sysid);
        console.log($scope.RetrievedData1[index]);

        $scope.RetrievedSystem = $scope.RetrievedData1[index];
        $scope.System_id = $scope.RetrievedSystem.Sysid;
        $scope.System_Name = $scope.RetrievedSystem.System_Name,
	     $scope.System_Location = $scope.RetrievedSystem.System_Location,
	      $scope.Site_Id = $scope.RetrievedSystem.Site_Id,
	     $scope.Account_Id = $scope.RetrievedSystem.Account_Id,
	     $scope.Device_Identity = $scope.RetrievedSystem.Device_Identity
       
    }

    $scope.getSystemById = function () {
        $scope.RetrievedSystem = [];
        apiDispatcher.getById(uriFactory.getAccountById + $cookieStore.get('SystemId')).then(function (res) {
            console.log('inside getSystem');
            console.log(res);
            console.log(uriFactory.getAccountById + $cookieStore.get('SystemId'));
            console.log(res);
            var value = res.data;
            $scope.RetrievedSystem.push({
                Sid: value.id,
                Corporate_Name: value.Corporate_Name,
                Corporate_ShortName: value.Corporate_ShortName,
                Corporate_TradeName: value.Corporate_TradeName,
                Corporate_Address_Street: value.Corporate_Address_Street,
                Corporate_Address_City: value.Corporate_Address_City,
                Corporate_Address_State: value.Corporate_Address_State,
                Corporate_Address_Zip: value.Corporate_Address_Zip,
                Corporate_Address_Country: value.Corporate_Address_Country,
                Corporate_Phone_1: value.Corporate_Phone_1,
                Corporate_Phone_2: value.Corporate_Phone_2,
                Corporate_Phone_3: value.Corporate_Phone_3,
                Corporate_Logo: value.Corporate_Logo,
                Corporate_ID: value.Corporate_ID,
                Site_ID: value.Site_ID
            });

        }, function () {
            ngToast.create({
                className: 'warning',
                content: '<p>Oops!!! Something went wrong! please try again after sometime</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });

       
    }

    $scope.reset = function () {
        $scope.post = false;
        $scope.update = false;
        $scope.delete = false;
        $scope.list = false;
        $scope.RetrievedSystem = [];
    }

    $scope.createSystem = function () {
        var selected_Devices = [];
        angular.forEach($scope.RetrievedDevices, function (value, key) {
            if (value.isChecked) {
                selected_Devices.push(value.deviceId);
            }
        })
        var data = {
            id: $scope.id,
            system_Name: $scope.System_Name,
            system_Location: $scope.System_Location,
            site_Id: $scope.Site_Id,
            account_Id: $scope.Account_Id,
            devices: selected_Devices
        };
        apiDispatcher.postData(uriFactory.createSystem, data).then(function (res) {
            ngToast.create({
                className: 'success',
                content: '<p>System Added Successfully</p>',
                dismissOnTimeout: true,
                timeout: 2000,
                dismissOnClick: true
            });
        }, function () {
            ngToast.create({
                className: 'warning',
                content: '<p>System Adding Failed! Please try again later</p>',
                dismissOnTimeout: true,
                timeout: 2000,
                dismissOnClick: true
            });
        });
    }

    $scope.updateSystem = function () {
        var selected_Devices = [];
        angular.forEach($scope.RetrievedDevices, function (value, key) {
            if (value.isChecked) {
                selected_Devices.push(value.deviceId);
            }
        })
        var data = {
            id: $scope.System_id,
            system_Name: $scope.System_Name,
            system_Location: $scope.System_Location,
            site_Id: $scope.Site_Id,
            account_Id: $scope.Account_Id,
            devices: selected_Devices
        };
        apiDispatcher.update(uriFactory.updateSystem, data).then(function (res) {
            ngToast.create({
                className: 'success',
                content: '<p>System Updated Successfully</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        }, function () {
            ngToast.create({
                className: 'danger',
                content: '<p>Oops!!! Update Failed! Change a few things and try again</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });
    }

    $scope.deleteSystem = function () {
        apiDispatcher.deleteById(uriFactory.deleteSystem + $cookieStore.get('SystemId')).then(function (res) {
            ngToast.create({
                className: 'success',
                content: '<p>System Deleted Successfully</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        }, function (res) {
            ngToast.create({
                className: 'danger',
                content: '<p>Oops!!! System cannot be deleted</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });
    }

   
}



app.controller('SystemsController', ['uriFactory', '$scope', '$location', '$cookieStore', 'apiDispatcher', 'loginService', 'ngToast', SystemsController]);