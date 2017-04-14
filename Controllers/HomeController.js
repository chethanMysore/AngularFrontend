var app = angular.module('AngularModule', ['ngCookies', 'ngRoute']);

var HomeController = function ($scope, $location) {
    $scope.AccountPage = function () {
        alert('hi');
        $location.path('/Account');
    }

    $scope.SitePage = function () {
        $location.path('/Site');
    }

    $scope.SystemPage = function () {
        $location.path('/System');
    }

    $scope.DevicePage = function () {
        $location.path('/Device');
    }

    $scope.ConfigPage = function () {
        $location.path('/Config');
    }

    $scope.FirmwarePage = function () {
        $location.path('/Firmware');
    }
};