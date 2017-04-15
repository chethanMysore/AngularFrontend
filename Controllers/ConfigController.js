'use strict';

var ConfigController = function (uriFactory, $scope, $location, $cookieStore, apiDispatcher, loginService) {
    $scope.post = false;
    $scope.update = false;
    $scope.delete = false;
  
    $scope.getAllConfigs = function () {
      
        alert('hi');
        console.log(uriFactory.getToken);
        loginService.doLogin(uriFactory.getToken).then(function (res) {
            $scope.RetrievedData = [];
            apiDispatcher.getAll(uriFactory.getAllConfigurations).then(function (res) {
                angular.forEach(res.data, function (value, key) {
                    $scope.RetrievedData.push({
                       //Add response data here
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

    $scope.showCheckboxes = function () {     
        $scope.list = !$scope.list;

    }

    $scope.showAccount = function (index) {      
        $cookieStore.put('ConfigId', $scope.RetrievedData[index].id);
        console.log($scope.RetrievedData[index]);

        $scope.RetrievedAccount = $scope.RetrievedData[index];
        //Populate models with RetrievedAccount data here
       
        
    }

    $scope.getConfigById = function () {
        $scope.RetrievedAccount = [];
        apiDispatcher.getById(uriFactory.getAccountById + $cookieStore.get('AccountId')).then(function (res) {
            
            var value = res.data;
            $scope.RetrievedAccount.push({
                //Add response data here
            });

        }, function () {

        });      
    }

    $scope.reset = function () { }

    $scope.createAccount = function () {
        var data = {
            //Add json data here
        };
        apiDispatcher.postData(uriFactory.createAccount, data).then(function (res) {

        }, function () {

        });
    }

    $scope.updateAccount = function () {
        var data = {
           //Add updation data here
        };
        apiDispatcher.update(uriFactory.updateAccount + $cookieStore.get('ConfigId'), data).then(function (res) {

        }, function () {

        });
    }
}

app.controller('ConfigController', ['uriFactory', '$scope', '$location', '$cookieStore', 'apiDispatcher', 'loginService', ConfigController]);