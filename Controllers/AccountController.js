'use strict';

var AccountController = function (uriFactory, $scope, $location, $cookieStore, apiDispatcher, loginService) {
    $scope.post = false;
    $scope.update = false;
    $scope.delete = false;
    $scope.list = false;
    $scope.getAllAccounts = function () {
        $scope.Sites = {};
        alert('hi');
        console.log(uriFactory.getToken);
        console.log('inside getAllAccounts');
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
                    //console.log($scope.RetrievedData[0].Site_ID);
                });
            }, function () {

            });
        }, function () {
            $location.path('/Home');
        });
    }

    $scope.postClicked = function () {
        $scope.post = true;
        $scope.RetrievedSites = [];

        apiDispatcher.getAll(uriFactory.getAllSites).then(function (response) {
            angular.forEach(response.data, function (value, key) {
                //if(value.account_ID == $cookieStore.get('AccountId')){
                $scope.RetrievedSites.push({
                    siteId: value.id,
                    isChecked: false
                });
                //}
                //else {
                //    $scope.RetrievedSites.push({
                //        siteId: value.id,
                //        isChecked: false
                //    });
                //}
            });

        }, function () { });
        console.log($scope.RetrievedSites);
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

	$scope.showAccount = function(index){
		//$location.path('/Accounts');
	    $cookieStore.put('AccountId', $scope.RetrievedData[index].id);
	    console.log($scope.RetrievedData[index]);
        
	    $scope.RetrievedAccount = $scope.RetrievedData[index];
	    $scope.id = $scope.RetrievedAccount.id;
	    $scope.Corporate_Name = $scope.RetrievedAccount.Corporate_Name,
	    $scope.Corporate_ShortName = $scope.RetrievedAccount.Corporate_ShortName,
	    $scope.Corporate_TradeName = $scope.RetrievedAccount.Corporate_TradeName,
	    $scope.Corporate_Address_Street = $scope.RetrievedAccount.Corporate_Address_Street,
	    $scope.Corporate_Address_City = $scope.RetrievedAccount.Corporate_Address_City,
	    $scope.Corporate_Address_State = $scope.RetrievedAccount.Corporate_Address_State,
	    $scope.Corporate_Address_Zip = $scope.RetrievedAccount.Corporate_Address_Zip,
	    $scope.Corporate_Address_Country = $scope.RetrievedAccount.Corporate_Address_Country,
	    $scope.Corporate_Phone_1 = $scope.RetrievedAccount.Corporate_Phone_1,
	    $scope.Corporate_Phone_2 = $scope.RetrievedAccount.Corporate_Phone_2,
	    $scope.Corporate_Phone_3 = $scope.RetrievedAccount.Corporate_Phone_3,
	    $scope.Corporate_Logo = $scope.RetrievedAccount.Corporate_Logo,
	    $scope.Corporate_ID = $scope.RetrievedAccount.Corporate_ID,
        $scope.Site_ID = $scope.RetrievedAccount.Site_ID
	    //$scope.getAccountById();
	}	

	$scope.getAccountById = function(){
		$scope.RetrievedAccount = [];
		apiDispatcher.getById(uriFactory.getAccountById + $cookieStore.get('AccountId')).then(function (res) {
		    console.log('inside getAccount');
            console.log(res);
		    console.log(uriFactory.getAccountById + $cookieStore.get('AccountId'));
		    console.log(res);
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
			
		},function(){

		});
		
		console.log($scope.RetrievedAccount);
	}

	$scope.reset = function () { }

	$scope.createAccount = function () {
	    console.log($scope.RetrievedSites);
	    var selected_Sites = [];
	    angular.forEach($scope.RetrievedSites, function (value, key) {
	        if (value.isChecked){
	            selected_Sites.push(value.siteId);
	        }
	    })
	    console.log(selected_Sites);
	    console.log($scope.Site_ID);
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
		apiDispatcher.postData(uriFactory.createAccount,data).then(function(res){

		},function(){

		});
	}

	$scope.updateAccount = function(){
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
				  Site_ID: $scope.Site_ID
				};
		apiDispatcher.update(uriFactory.updateAccount,data).then(function(res){

		},function(){

		});
	}

	$scope.deleteAccount = function(){
		apiDispatcher.deleteById(uriFactory.deleteAccount + $cookieStore.get('AccountId')).then(function(res){

		},function(res){

		});
	}

	$scope.getAccountInfo = function(){
		apiDispatcher.getAll(uriFactory.getAccountInfo).then(function(res){

		},function(){

		});
	}
}

app.controller('AccountController', ['uriFactory', '$scope', '$location', '$cookieStore', 'apiDispatcher', 'loginService', AccountController]);