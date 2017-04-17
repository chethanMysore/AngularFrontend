'use strict';

var FirmwareController = function (uriFactory, $scope, $location, $cookieStore, apiDispatcher, loginService, ngToast) {
    $scope.post = false;
    $scope.update = false;
    $scope.delete = false;

    $scope.getAllFirmwares = function () {



        loginService.doLogin(uriFactory.getToken).then(function (res) {
            $scope.RetrievedData = [];
            apiDispatcher.getAll(uriFactory.getAllFirmwares).then(function (res) {
                angular.forEach(res.data, function (value, key) {
                    $scope.RetrievedData.push({
                        
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

    $scope.showFirmware = function (index) {
        $cookieStore.put('ConfigId', $scope.RetrievedData[index].id);
        console.log($scope.RetrievedData[index]);

        $scope.RetrievedFirmware = $scope.RetrievedData[index];
        //Populate models with RetrievedAccount data here


    }

    $scope.getFirmwareById = function () {
        $scope.RetrievedFirmware = [];
        apiDispatcher.getById(uriFactory.getAccountById + $cookieStore.get('AccountId')).then(function (res) {

            var value = res.data;
            $scope.RetrievedFirmware.push({
                //Add response data here
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

    }

    $scope.createFirmware = function () {
        var data = {
            //Add json data here
        };
        apiDispatcher.postData(uriFactory.createAccount, data).then(function (res) {
            ngToast.create({
                className: 'success',
                content: '<p>Config Added Successfully</p>',
                dismissOnTimeout: true,
                timeout: 2000,
                dismissOnClick: true
            });
        }, function () {
            ngToast.create({
                className: 'warning',
                content: '<p>Config Adding Failed! Please try again later</p>',
                dismissOnTimeout: true,
                timeout: 2000,
                dismissOnClick: true
            });
        });
    }

    $scope.updateFirmware = function () {
        var data = {
            //Add updation data here
        };
        apiDispatcher.update(uriFactory.updateAccount + $cookieStore.get('ConfigId'), data).then(function (res) {
            ngToast.create({
                className: 'success',
                content: '<p>Config Updated Successfully</p>',
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
}

app.controller('FirmwareController', ['uriFactory', '$scope', '$location', '$cookieStore', 'apiDispatcher', 'loginService', 'ngToast', FirmwareController]);