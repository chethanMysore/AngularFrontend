'use strict';

var SitesController = function (uriFactory, $scope, $location, $cookieStore, apiDispatcher, loginService, ngToast) {
    $scope.post = false;
    $scope.update = false;
    $scope.delete = false;
    $scope.list = false;
    $scope.getAllSites = function () {
        $scope.Systems = {};
       
        console.log(uriFactory.getToken);
        console.log('inside getAllSites');
        loginService.doLogin(uriFactory.getToken).then(function (res) {
            $scope.RetrievedData = [];
            apiDispatcher.getAll(uriFactory.getAllSites).then(function (res) {
                angular.forEach(res.data, function (value, key) {
                    $scope.RetrievedData.push({
                        id: value.id,
                        Site_Name: value.site_Name,
                        Site_ShortName: value.site_ShortName,
                        Site_TradeName: value.site_TradeName,
                        Site_Address_Street: value.site_Address_Street,
                        Site_Address_City: value.site_Address_City,
                        Site_Address_State: value.site_Address_State,
                        Site_Address_Zip: value.site_Address_Zip,
                        Site_Address_Country: value.site_Address_Country,
                        Site_Phone_1: value.site_Phone_1,
                        Site_Phone_2: value.site_Phone_2,
                        Site_Phone_3: value.site_Phone_3,
                        Site_Image: value.site_Image,
                        Account_ID: value.account_ID,
                        Account_Name: value.account_Name,
                        Site_LatLng: value.site_LatLng,
                        Systems: value.systems
                    });
                   
                });
            }, function () {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                ngToast.create({
                    className: 'success',
                    content: '<p>Login Successful</p>',
                    dismissOnTimeout: true,
                    timeout: 4000,
                    dismissOnClick: true
                });
            });
        }, function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            ngToast.create({
                className: 'warning',
                content: '<p>Oops!!! Something went wrong! please try again after sometime</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });
    }

    $scope.findSystem = function (systems) {
        console.log(systems);
        for (var i = 0; i < systems.length; i++) {

            var boolVal = false;
            for (var j = 0; j < $scope.RetrievedSite.Systems.length; j++) {
                var value = $scope.RetrievedSite.Systems;
                console.log(value.length);
                if (j == 1 || (j - 1) % 3 == 0) {
                    if (value[j] == systems[i].id) {
                        $scope.RetrievedSystems.push({
                            systemId: value[j],
                            isChecked: true
                        });
                        boolVal = false;
                        break;
                    }
                }
                
                boolVal = true;
            }
            if (boolVal) {
                $scope.RetrievedSystems.push({
                    systemId: systems[i].id,
                    isChecked: false
                });
            }
        }
        console.log($scope.RetrievedSystems);

    }

    $scope.postClicked = function () {
        $scope.post = true;
        $scope.RetrievedSystems = [];
        $scope.RetrievedAccounts = [];

        $scope.id = "";
        $scope.Site_Name = "";
        $scope.Site_ShortName = "";
        $scope.Site_TradeName = "";
        $scope.Site_Address_Street = "";
        $scope.Site_Address_City = "";
        $scope.Site_Address_State = "";
        $scope.Site_Address_Zip = "";
        $scope.Site_Address_Country = "";
        $scope.Site_Phone_1 = "";
        $scope.Site_Phone_2 = "";
        $scope.Site_Phone_3 = "";
        $scope.Site_Image = "";
        $scope.Account_ID = "";
        $scope.Account_Name = "";
        $scope.Site_LatLng = "";
        $scope.Systems = [];
        for (var i = 0; i < $scope.RetrievedSite.Systems.length; i++) {
            if (i == 1) {
                $scope.Systems.push($scope.RetrievedSite.Systems[i]);
            }
            else if ((i - 1) % 3 == 0) {
                $scope.Systems.push($scope.RetrievedSite.Systems[i]);
            }

        }


        apiDispatcher.getAll(uriFactory.getAllAccounts).then(function (response) {
            angular.forEach(response.data, function (value, key) {
                
                $scope.RetrievedAccounts.push({
                    accountId: value.id,
                   
                    isChecked: false
                });
           
            });

        }, function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            ngToast.create({
                className: 'warning',
                content: '<p>Oops!!! Something went wrong! please try again after sometime</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });
       
        
        apiDispatcher.getAll(uriFactory.getAllSystems).then(function (response) {
            angular.forEach(response.data, function (value, key) {
               
                $scope.RetrievedSystems.push({
                    systemName: value.system_Name,
                    systemId: value.id,
                    devices: value.device_Identity,
                    isChecked: false
                });
            
            });

        }, function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
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

        $scope.RetrievedSystems = [];
        apiDispatcher.getAll(uriFactory.getAllSystems).then(function (response) {
            $scope.findSystem(response.data);
        }, function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
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
        //alert('hi');
        $scope.list = !$scope.list;

    }

    $scope.showSite = function (index) {
        //$location.path('/Accounts');
        $cookieStore.put('SiteId', $scope.RetrievedData[index].id);
        

        $scope.RetrievedSite = $scope.RetrievedData[index];
        $scope.id = $scope.RetrievedSite.id;
        $scope.Site_Name = $scope.RetrievedSite.Site_Name;
        $scope.Site_ShortName = $scope.RetrievedSite.Site_ShortName;
        $scope.Site_TradeName = $scope.RetrievedSite.Site_TradeName;
        $scope.Site_Address_Street = $scope.RetrievedSite.Site_Address_Street;
        $scope.Site_Address_City = $scope.RetrievedSite.Site_Address_City;
        $scope.Site_Address_State = $scope.RetrievedSite.Site_Address_State;
        $scope.Site_Address_Zip = $scope.RetrievedSite.Site_Address_Zip;
        $scope.Site_Address_Country = $scope.RetrievedSite.Site_Address_Country;
        $scope.Site_Phone_1 = $scope.RetrievedSite.Site_Phone_1;
        $scope.Site_Phone_2 = $scope.RetrievedSite.Site_Phone_2;
        $scope.Site_Phone_3 = $scope.RetrievedSite.Site_Phone_3;
        $scope.Site_Image = $scope.RetrievedSite.Site_Image;
        $scope.Account_ID = $scope.RetrievedSite.Account_ID;
        $scope.Account_Name = $scope.RetrievedSite.Account_Name;
        $scope.Site_LatLng = $scope.RetrievedSite.Site_LatLng;
        $scope.Systems = [];
        for (var i = 0; i < $scope.RetrievedSite.Systems.length; i++) {
            if(i == 1){
                $scope.Systems.push($scope.RetrievedSite.Systems[i]);
            }
            else if((i-1) % 3 == 0){
                $scope.Systems.push($scope.RetrievedSite.Systems[i]);
            }

        }
        console.log($scope.Systems);

        
        $scope.selectedSystem = $scope.Systems[0];
    }

    $scope.getSitetById = function () {
        $scope.RetrievedSite = [];
        apiDispatcher.getById(uriFactory.getSiteById + $cookieStore.get('SiteId')).then(function (res) {
           
            
            var value = res.data;
            $scope.RetrievedSite.push({
                id: value.id,
                Site_Name: value.Site_Name,
                Site_ShortName: value.Site_ShortName,
                Site_TradeName: value.Site_TradeName,
                Site_Address_Street: value.Site_Address_Street,
                Site_Address_City: value.Site_Address_City,
                Site_Address_State: value.Site_Address_State,
                Site_Address_Zip: value.Site_Address_Zip,
                Site_Address_Country: value.Site_Address_Country,
                Site_Phone_1: value.Site_Phone_1,
                Site_Phone_2: value.Site_Phone_2,
                Site_Phone_3: value.Site_Phone_3,
                Site_Image: value.Site_Image,
                Account_ID: value.Account_ID,
                Account_Name: value.Account_Name
            });

        }, function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
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
        $scope.RetrievedSite = [];
    }

    $scope.createSite = function () {
        console.log($scope.RetrievedSystems);
       
        var selected_Systems = [];
        angular.forEach($scope.RetrievedSystems, function (value, key) {
            if (value.isChecked) {
                selected_Systems.push(value.systemName);
                selected_Systems.push(value.systemId);
                selected_Systems.push(value.devices);
                
            }

        })
       
        var data = {
            id: $scope.id,
            site_Name: $scope.Site_Name,
            site_ShortName: $scope.Site_ShortName,
            site_TradeName: $scope.Site_TradeName,
            site_Address_Street: $scope.Site_Address_Street,
            site_Address_City: $scope.Site_Address_City,
            site_Address_State: $scope.Site_Address_State,
            site_Address_Zip: $scope.Site_Address_Zip,
            site_Address_Country: $scope.Site_Address_Country,
            site_Phone_1: $scope.Site_Phone_1,
            site_Phone_2: $scope.Site_Phone_2,
            site_Phone_3: $scope.Site_Phone_3,
            site_Image: $scope.Site_Image,
            account_ID: $scope.Account_ID.accountId,
            account_Name: $scope.Account_Name,
            site_LatLng: $scope.Site_LatLng,
            systems: selected_Systems
        };
        apiDispatcher.postData(uriFactory.createSite, data).then(function (res) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            ngToast.create({
                className: 'success',
                content: '<p>Site Added Successfully</p>',
                dismissOnTimeout: true,
                timeout: 2000,
                dismissOnClick: true
            });
        }, function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            ngToast.create({
                className: 'warning',
                content: '<p>Site Adding Failed! Please try again later</p>',
                dismissOnTimeout: true,
                timeout: 2000,
                dismissOnClick: true
            });
        });
    }

    $scope.updateSite = function () {
        var selected_Systems = [];
        angular.forEach($scope.RetrievedSystems, function (value, key) {
            if (value.isChecked) {
                selected_Systems.push({ systemId: value.systemId, devices: value.devices });

            }

        })
        var data = {
            id: $scope.id,
            site_Name: $scope.Site_Name,
            site_ShortName: $scope.Site_ShortName,
            site_TradeName: $scope.Site_TradeName,
            site_Address_Street: $scope.Site_Address_Street,
            site_Address_City: $scope.Site_Address_City,
            site_Address_State: $scope.Site_Address_State,
            site_Address_Zip: $scope.Site_Address_Zip,
            site_Address_Country: $scope.Site_Address_Country,
            site_Phone_1: $scope.Site_Phone_1,
            site_Phone_2: $scope.Site_Phone_2,
            site_Phone_3: $scope.Site_Phone_3,
            site_Image: $scope.Site_Image,
            account_ID: $scope.Account_ID,
            account_Name: $scope.Account_Name,
            site_LatLng: $scope.Site_LatLng,
            systems: selected_Systems
        };
        apiDispatcher.update(uriFactory.updateSite, data).then(function (res) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            ngToast.create({
                className: 'success',
                content: '<p>Site Updated Successfully</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        }, function () {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            ngToast.create({
                className: 'danger',
                content: '<p>Oops!!! Update Failed! Change a few things and try again</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });
    }

    $scope.deleteSite = function () {
        document.body.scrollTop = document.documentElement.scrollTop = 0;
        apiDispatcher.deleteById(uriFactory.deleteSite + $cookieStore.get('SiteId')).then(function (res) {
            ngToast.create({
                className: 'success',
                content: '<p>Site Deleted Successfully</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        }, function (res) {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
            ngToast.create({
                className: 'danger',
                content: '<p>Oops!!! Site cannot be deleted</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });
    }

    $scope.getSiteInfo = function () {
        apiDispatcher.getAll(uriFactory.getSiteInfo).then(function (res) {

        }, function () {

        });
    }
}

app.controller('SitesController', ['uriFactory', '$scope', '$location', '$cookieStore', 'apiDispatcher', 'loginService', 'ngToast', SitesController]);