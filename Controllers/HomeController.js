

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
    }
    app.controller('HomeController', HomeController);

    app.config(function ($routeProvider, $httpProvider) {
        $routeProvider.when('/Account', { templateUrl: 'Account.html', controller: 'AccountController' })
                      .when('/Site', { templateUrl: 'Sites.html', controller: 'SiteController' })
                      .when('/System', { templateUrl: 'Systems.html', controller: 'SystemsController' })
                      .when('/Device', { templateUrl: 'Devices.html', controller: 'DevicesController' })
                      .when('/Config', { templateUrl: 'Config.html', controller: 'ConfigController' })
                      .when('/Firmware', { templateUrl: 'Systems.html', controller: 'FirmwareController' })
                      .otherwise({ redirectTo: '/Home' })
    }
);

