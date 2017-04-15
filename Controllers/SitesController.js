'use strict';

var SitesController = function (uriFactory, $scope, $location, $cookieStore, apiDispatcher, loginService) {
    $scope.post = false;
    $scope.update = false;
    $scope.delete = false;
    $scope.getAllSites = function () {
        $scope.Sites = {};
        $scope.Site_LatLng = {};
        $scope.Systems = {};
        alert('hi');
        console.log(uriFactory.getToken);
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
                        Account_Name:value.account_Name,
                        Site_LatLng:value.site_LatLng,
                        Systems: value.systems,            
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

    $scope.showSite = function (index) {
        //$location.path('/Accounts');
       $cookieStore.put('SiteId', $scope.RetrievedData[index].id);
        console.log($scope.RetrievedData[index]);
        $scope.RetrievedSite = $scope.RetrievedData[index];
        $scope.id = $scope.RetrievedSite.id;
        $scope.Site_Name = $scope.RetrievedSite.Site_Name,
	     $scope.Site_ShortName = $scope.RetrievedSite.Site_ShortName,
	      $scope.Site_TradeName = $scope.RetrievedSite.Site_TradeName,
	     $scope.Site_Address_Street = $scope.RetrievedSite.Site_Address_Street,
	     $scope.Site_Address_City = $scope.RetrievedSite.Site_Address_City,
	    $scope.Site_Address_State = $scope.RetrievedSite.Site_Address_State,
	   $scope.Site_Address_Zip = $scope.RetrievedSite.Site_Address_Zip,
	    $scope.Site_Address_Country = $scope.RetrievedSite.Site_Address_Country,
	     $scope.Site_Phone_1 = $scope.RetrievedSite.Site_Phone_1,
	    $scope.Site_Phone_2 = $scope.RetrievedSite.Site_Phone_2,
	     $scope.Site_Phone_3 = $scope.RetrievedSite.Site_Phone_3,
	     $scope.Site_Image = $scope.RetrievedSite.Site_Image,
	    $scope.Account_ID = $scope.RetrievedSite.Account_ID,
        $scope.Account_Name = $scope.RetrievedSite.Account_Name,
        $scope.Site_LatLng = $scope.RetrievedSite.Site_LatLng,
        $scope.Systems = $scope.RetrievedSite.Systems
        //$scope.getAccountById();
    }

    $scope.getSiteById = function () {
        $scope.RetrievedSite = [];
        apiDispatcher.getById(uriFactory.getSiteById + $cookieStore.get('SiteId')).then(function (res) {
            console.log('inside getSite');
            console.log(res);
            console.log(uriFactory.getSiteById + $cookieStore.get('SiteId'));
            console.log(res);
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
                Account_Name: value.Account_Name,
                Site_LatLng: value.Site_LatLng,
                Systems: value.Systems
            });

        }, function () {

        });

        console.log($scope.RetrievedSite);
    }

    $scope.reset = function () { }

    $scope.createSite = function () {
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
            site_LatLng:$scope.Site_LatLng,
            systems:$scope.Systems
        };
        apiDispatcher.postData(uriFactory.createSite, data).then(function (res) {

        }, function () {

        });
    }

    $scope.updateSite = function () {
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
            systems: $scope.Systems
        };
        apiDispatcher.update(uriFactory.updateSite, data).then(function (res) {

        }, function () {

        });
    }

    $scope.deleteSite = function () {
        apiDispatcher.deleteById(uriFactory.deleteSite + $cookieStore.get('SiteId')).then(function (res) {

        }, function (res) {

        });0
    }

  
}

app.controller('SitesController', ['uriFactory', '$scope', '$location', '$cookieStore', 'apiDispatcher', 'loginService', SitesController]);