
var SystemsController = function (uriFactory, $scope, $location, $cookieStore, apiDispatcher, loginService) {
    $scope.post = false;
    $scope.update = false;
    $scope.delete = false;
    $scope.list = false;
    $scope.getAllSystems = function () {
        $scope.Devices = {};
        alert('hi');
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

            });
        }, function () {
            $location.path('/Home');
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
    }

    $scope.updateClicked = function () {
        $scope.update = true;
    }

    $scope.deleteClicked = function () {
        $scope.delete = true;
    }

    $scope.showCheckboxes = function () {
        //alert('hi');
        $scope.list = !$scope.list;

    }

    $scope.showSystem = function (index) {
        //$location.path('/Accounts');
        $cookieStore.put('SystemId', $scope.RetrievedData1[index].Sysid);
        console.log($scope.RetrievedData1[index]);

        $scope.RetrievedSystem = $scope.RetrievedData1[index];
        $scope.System_id = $scope.RetrievedSystem.Sysid;
        $scope.System_Name = $scope.RetrievedSystem.System_Name,
	     $scope.System_Location = $scope.RetrievedSystem.System_Location,
	      $scope.Site_Id = $scope.RetrievedSystem.Site_Id,
	     $scope.Account_Id = $scope.RetrievedSystem.Account_Id,
	     $scope.Device_Identity = $scope.RetrievedSystem.Device_Identity
        //$scope.getAccountById();
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

        });

        console.log($scope.RetrievedAccount);
    }

    $scope.reset = function () { }

    $scope.createSystem = function () {
        var data = {
            id: $scope.id,
            system_Name: $scope.System_Name,
            system_Location: $scope.System_Location,
            site_Id: $scope.Site_Id,
            account_Id: $scope.Account_Id
        };
        apiDispatcher.postData(uriFactory.createSystem, data).then(function (res) {

        }, function () {

        });
    }

    $scope.updateSystem = function () {
        var data = {
            id: $scope.System_id,
            system_Name: $scope.System_Name,
            system_Location: $scope.System_Location,
            site_Id: $scope.Site_Id,
            account_Id: $scope.Account_Id
        };
        apiDispatcher.update(uriFactory.updateSystem, data).then(function (res) {

        }, function () {

        });
    }

    $scope.deleteSystem = function () {
        apiDispatcher.deleteById(uriFactory.deleteSystem + $cookieStore.get('SystemId')).then(function (res) {

        }, function (res) {

        });
    }

    $scope.getAccountInfo = function () {
        apiDispatcher.getAll(uriFactory.getAccountInfo).then(function (res) {

        }, function () {

        });
    }
}



app.controller('SystemsController', ['uriFactory', '$scope', '$location', '$cookieStore', 'apiDispatcher', 'loginService', SystemsController]);