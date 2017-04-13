angular.module('AngularModule', ['ngRoute']).
config(['$routeprovider', function ($routeProvider) {
    $routeProvider.when('/Accounts', { templateUrl: 'Account.html', controller: 'AccountController' })
                  .when('/Sites', { templateUrl: 'Sites.html', controller: 'SiteController' })
                  .when('/Systems', { templateUrl: 'Systems.html', controller: 'SystemsController' })
                  .when('/Devices', { templateUrl: 'Devices.html', controller: 'DevicesController' })
                  .when('/Config', { templateUrl: 'Config.html', controller: 'ConfigController' })
                  .when('/Firmware', { templateUrl: 'Systems.html', controller: 'FirmwareController' })
                  .otherwise({ redirectTo: '/Home' })
}
]);

