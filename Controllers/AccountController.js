'use strict';

var AccountController = function (uriFactory, $scope, $location, $cookieStore, apiDispatcher, loginService,ngToast) {
    $scope.post = false;
    $scope.update = false;
    $scope.delete = false;
    $scope.list = false;
    $scope.getAllAccounts = function () {
      
       
        
        loginService.doLogin(uriFactory.getToken).then(function (res) {
            $scope.RetrievedData = [];

            apiDispatcher.getAll(uriFactory.getAllAccounts).then(function (res) {
              
                angular.forEach(res.data, function (value, key) {
                    $scope.RetrievedData.push({
                        id: value.id,
                        Corporate_Name: value.corporate_Name,
                        Corporate_ShortName: value.corporate_ShortName,
                        Corporate_TradeName: value.corporate_TradeName,
                        Corporate_Address_Street: value.corporate_Address_Street,
                        Corporate_Address_City: value.corporate_Address_City,
                        Corporate_Address_State: value.corporate_Address_State,
                        Corporate_Address_Zip: value.corporate_Address_Zip,
                        Corporate_Address_Country: value.corporate_Address_Country,
                        Corporate_Phone_1: value.corporate_Phone_1,
                        Corporate_Phone_2: value.corporate_Phone_2,
                        Corporate_Phone_3: value.corporate_Phone_3,
                        Corporate_Logo: value.corporate_Logo,
                        Corporate_ID: value.corporate_ID,
                        Site_ID: value.site_ID
                    });
                  
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
        $scope.RetrievedSites = [];
        
       
        $scope.id = "";
        $scope.Corporate_Name = "";
        $scope.Corporate_ShortName = "";
        $scope.Corporate_TradeName = "";
        $scope.Corporate_Address_Street = "";
        $scope.Corporate_Address_City = "";
        $scope.Corporate_Address_State = "";
        $scope.Corporate_Address_Zip = "";
        $scope.Corporate_Address_Country = "";
        $scope.Corporate_Phone_1 = "";
        $scope.Corporate_Phone_2 = "";
        $scope.Corporate_Phone_3 = "";
        $scope.Corporate_Logo = "";
        $scope.Corporate_ID = "";
        $scope.Site_ID = "";

        apiDispatcher.getAll(uriFactory.getAllSites).then(function (response) {
            angular.forEach(response.data, function (value, key) {
                
                $scope.RetrievedSites.push({
                    siteId: value.id,
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

    $scope.findSite = function (sites) {
        for(var i=0;i<sites.length;i++){

        
        for(var j=0;j<$scope.RetrievedAccount.Site_ID.length;j++) {
            var value = $scope.RetrievedAccount.Site_ID[j];
               
               
                if (value == sites[i].id) {
                    $scope.RetrievedSites.push({
                        siteId: value,
                        isChecked: true
                    });
                    
                }
               
                  
                
               
        }
        $scope.RetrievedSites.push({
            siteId: sites[i].id,
            isChecked: false
        });
        }
        console.log(  $scope.RetrievedSites);
     
    }

    $scope.updateClicked = function () {
        $scope.update = true;
        for (var i = 1; i < 13; i++) {
            document.getElementById("rem" + i).removeAttribute("disabled");
            
        }

        $scope.RetrievedSites = [];
        apiDispatcher.getAll(uriFactory.getAllSites).then(function (response) {
            
            $scope.findSite(response.data);
               
            
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
        //alert('hi');
        $scope.list = !$scope.list;

    }

    $scope.showAccount = function (index) {
       
        $cookieStore.put('AccountId', $scope.RetrievedData[index].id);
   

        $scope.RetrievedAccount = $scope.RetrievedData[index];
        $scope.id = $scope.RetrievedAccount.id;
        $scope.Corporate_Name = $scope.RetrievedAccount.Corporate_Name;
        $scope.Corporate_ShortName = $scope.RetrievedAccount.Corporate_ShortName;
        $scope.Corporate_TradeName = $scope.RetrievedAccount.Corporate_TradeName;
        $scope.Corporate_Address_Street = $scope.RetrievedAccount.Corporate_Address_Street;
        $scope.Corporate_Address_City = $scope.RetrievedAccount.Corporate_Address_City;
        $scope.Corporate_Address_State = $scope.RetrievedAccount.Corporate_Address_State;
        $scope.Corporate_Address_Zip = $scope.RetrievedAccount.Corporate_Address_Zip;
        $scope.Corporate_Address_Country = $scope.RetrievedAccount.Corporate_Address_Country;
        $scope.Corporate_Phone_1 = $scope.RetrievedAccount.Corporate_Phone_1;
        $scope.Corporate_Phone_2 = $scope.RetrievedAccount.Corporate_Phone_2;
	    $scope.Corporate_Phone_3 = $scope.RetrievedAccount.Corporate_Phone_3;
	    $scope.Corporate_Logo = $scope.RetrievedAccount.Corporate_Logo;
	    $scope.Corporate_ID = $scope.RetrievedAccount.Corporate_ID;
	    $scope.Site_ID = $scope.RetrievedAccount.Site_ID;
	    $scope.selectedSite = $scope.RetrievedAccount.Site_ID[0];
	    console.log($scope.RetrievedAccount.Site_ID[0]);
        //$scope.getAccountById();
    }

    $scope.getAccountById = function () {
        $scope.RetrievedAccount = [];
        apiDispatcher.getById(uriFactory.getAccountById + $cookieStore.get('AccountId')).then(function (res) {
            
            var value = res.data;
            $scope.RetrievedAccount.push({
                id: value.id,
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
        $scope.RetrievedAccount = [];
    }

    $scope.createAccount = function () {
       
        var selected_Sites = [];
        angular.forEach($scope.RetrievedSites, function (value, key) {
            if (value.isChecked) {
                selected_Sites.push(value.siteId);
            }
        })
       
        var data = {
            id: $scope.id,
            corporate_Name: $scope.Corporate_Name,
            corporate_ShortName: $scope.Corporate_ShortName,
            corporate_TradeName: $scope.Corporate_TradeName,
            corporate_Address_Street: $scope.Corporate_Address_Street,
            corporate_Address_City: $scope.Corporate_Address_City,
            corporate_Address_State: $scope.Corporate_Address_State,
            corporate_Address_Zip: $scope.Corporate_Address_Zip,
            corporate_Address_Country: $scope.Corporate_Address_Country,
            corporate_Phone_1: $scope.Corporate_Phone_1,
            corporate_Phone_2: $scope.Corporate_Phone_2,
            corporate_Phone_3: $scope.Corporate_Phone_3,
            corporate_Logo: $scope.Corporate_Logo,
            corporate_ID: $scope.Corporate_ID,
            Site_ID: selected_Sites
        };
        apiDispatcher.postData(uriFactory.createAccount, data).then(function (res) {
            ngToast.create({
                className: 'success',
                content: '<p>Account Added Successfully</p>',
                dismissOnTimeout: true,
                timeout: 2000,
                dismissOnClick: true
            });
        }, function () {
            ngToast.create({
                className: 'warning',
                content: '<p>Account Adding Failed! Please try again later</p>',
                dismissOnTimeout: true,
                timeout: 2000,
                dismissOnClick: true
            });
        });
    }

    $scope.updateAccount = function () {
        var selected_Sites = [];
        angular.forEach($scope.RetrievedSites, function (value, key) {
            if (value.isChecked) {
                selected_Sites.push(value.siteId);
            }
        })
        var data = {
            id: $scope.id,
            corporate_Name: $scope.Corporate_Name,
            corporate_ShortName: $scope.Corporate_ShortName,
            corporate_TradeName: $scope.Corporate_TradeName,
            corporate_Address_Street: $scope.Corporate_Address_Street,
            corporate_Address_City: $scope.Corporate_Address_City,
            corporate_Address_State: $scope.Corporate_Address_State,
            corporate_Address_Zip: $scope.Corporate_Address_Zip,
            corporate_Address_Country: $scope.Corporate_Address_Country,
            corporate_Phone_1: $scope.Corporate_Phone_1,
            corporate_Phone_2: $scope.Corporate_Phone_2,
            corporate_Phone_3: $scope.Corporate_Phone_3,
            corporate_Logo: $scope.Corporate_Logo,
            corporate_ID: $scope.Corporate_ID,
            Site_ID: selected_Sites
        };
        apiDispatcher.update(uriFactory.updateAccount, data).then(function (res) {
            ngToast.create({
                className: 'success',
                content: '<p>Account Updated Successfully</p>',
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

    $scope.deleteAccount = function () {
        apiDispatcher.deleteById(uriFactory.deleteAccount + $cookieStore.get('AccountId')).then(function (res) {
            ngToast.create({
                className: 'success',
                content: '<p>Account Deleted Successfully</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        }, function (res) {
            ngToast.create({
                className: 'danger',
                content: '<p>Oops!!! Account cannot be deleted</p>',
                dismissOnTimeout: true,
                timeout: 4000,
                dismissOnClick: true
            });
        });
    }

    $scope.getAccountInfo = function () {
        apiDispatcher.getAll(uriFactory.getAccountInfo).then(function (res) {
            
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
}

app.controller('AccountController', ['uriFactory', '$scope', '$location', '$cookieStore', 'apiDispatcher', 'loginService', 'ngToast', AccountController]);