

app.config(function ($routeProvider,$httpProvider) {
    $routeProvider.when('/Account', { templateUrl: 'Account.html', controller: 'AccountController' })
                  .when('/Site', { templateUrl: 'Sites.html', controller: 'SiteController' })
                  .when('/System', { templateUrl: 'Systems.html', controller: 'SystemsController' })
                  .when('/Device', { templateUrl: 'Devices.html', controller: 'DevicesController' })
                  .when('/Config', { templateUrl: 'Config.html', controller: 'ConfigController' })
                  .when('/Firmware', { templateUrl: 'Systems.html', controller: 'FirmwareController' })
                  .otherwise({ redirectTo: '/Home' })
}
);

