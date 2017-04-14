var app = angular.module('AngularModule', ['ngCookies','ngRoute']);

var AccountController = function(uriFactory,$scope,$location,$cookieStore,apiDispatcher,loginService){
    $scope.getAllAccounts = function () {
        loginService.doLogin(uriFactory.uri.getToken);
        $scope.RetrievedData = [];
        apiDispatcher.getAll(uriFactory.uri.getAllAccounts).then(function (res) {
            angular.forEach(res.data, function (value, key) {
                $scope.RetrievedData.push({
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

            });
        }, function () {

        });
    }

	$scope.showAccount = function(index){
		$location.path('/Accounts');
		$cookieStore.put('AccountId',$scope.RetrievedData[index].id);
	}	

	$scope.getAccountById = function(){
		$scope.RetrievedAccount = [];
		apiDispatcher.getById(uriFactory.uri.getAccountById).then(function(res){
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
	}

	$scope.createAccount = function(){
		var data = {
				  id: $scope.id,
				  Corporate_Name: $scope.Corporate_Name,
				  Corporate_ShortName: $scope.Corporate_ShortName,
				  Corporate_TradeName: $scope.Corporate_TradeName,
				  Corporate_Address_Street: $scope.Corporate_Address_Street,
				  Corporate_Address_City: $scope.Corporate_Address_City,
				  Corporate_Address_State: $scope.Corporate_Address_State,
				  Corporate_Address_Zip: $scope.Corporate_Address_Zip,
				  Corporate_Address_Country: $scope.Corporate_Address_Country,
				  Corporate_Phone_1: $scope.Corporate_Phone_1,
				  Corporate_Phone_2: $scope.Corporate_Phone_2,
				  Corporate_Phone_3: $scope.Corporate_Phone_3,
				  Corporate_Logo: $scope.Corporate_Logo,
				  Corporate_ID: $scope.Corporate_ID,
				  Site_ID: $scope.Site_ID
		};
		apiDispatcher.postData(uriFactory.uri.createAccount,data).then(function(res){

		},function(){

		});
	}

	$scope.updateAccount = function(){
		var data = {
			 id: $scope.id,
				  Corporate_Name: $scope.Corporate_Name,
				  Corporate_ShortName: $scope.Corporate_ShortName,
				  Corporate_TradeName: $scope.Corporate_TradeName,
				  Corporate_Address_Street: $scope.Corporate_Address_Street,
				  Corporate_Address_City: $scope.Corporate_Address_City,
				  Corporate_Address_State: $scope.Corporate_Address_State,
				  Corporate_Address_Zip: $scope.Corporate_Address_Zip,
				  Corporate_Address_Country: $scope.Corporate_Address_Country,
				  Corporate_Phone_1: $scope.Corporate_Phone_1,
				  Corporate_Phone_2: $scope.Corporate_Phone_2,
				  Corporate_Phone_3: $scope.Corporate_Phone_3,
				  Corporate_Logo: $scope.Corporate_Logo,
				  Corporate_ID: $scope.Corporate_ID,
				  Site_ID: $scope.Site_ID
				};
		apiDispatcher.update(uriFactory.uri.updateAccount).then(function(res){

		},function(){

		});
	}

	$scope.deleteAccount = function(){
		apiDispatcher.deleteById(uriFactory.uri.deleteAccount).then(function(res){

		},function(res){

		});
	}

	$scope.getAccountInfo = function(){
		apiDispatcher.getAll(uriFactory.uri.getAccountInfo).then(function(res){

		},function(){

		});
	}
}

app.controller('AccountController',AccountController);