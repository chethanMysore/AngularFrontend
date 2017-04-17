

    var HomeController = function ($scope, $location,ngToast) {
        $scope.AccountPage = function () {
           
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
    app.controller('HomeController',['$scope', '$location','ngToast', HomeController]);
    
    app.config(function ($routeProvider, $httpProvider) {
        $routeProvider.when('/Account', { templateUrl: '../Views/Account.html', controller: 'AccountController' })
                      .when('/Site', { templateUrl: '../Views/Site.html', controller: 'SitesController' })
                      .when('/System', { templateUrl: '../Views/Systems.html', controller: 'SystemsController' })
                      .when('/Device', { templateUrl: '../Views/Device.html', controller: 'DeviceIdentityController' })
                      .when('/Config', { templateUrl: '../Views/Config.html', controller: 'ConfigController' })
                      .when('/Firmware', { templateUrl: '../Views/Firmware.html', controller: 'FirmwareController' })
                      .otherwise({ redirectTo: '/Home' })
    }
);

