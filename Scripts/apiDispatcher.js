

app.factory('apiDispatcher', ['$q', '$http', 'Upload', '$cookieStore', function ($q, $http, Upload, $cookieStore) {

    var onDataApiCall = function (uri, method, data) {
        var defered = $q.defer();
        console.log('inside apicall');
        console.log(data);
        $http({
            method: method,
            url: uri,
            data: data,
            headers: { 'authorization': 'bearer ' + $cookieStore.get('access_token'), 'Content-Type': 'application/json' }
        }).then(function (res) {
            defered.resolve(res);
            //return $q.resolve(res);
        }, function () {
            defered.reject();
        });
        return defered.promise;
    }

    var onApiCall = function (uri, method) {
        var defered = $q.defer();
        $http({
            method: method,
            url: uri,
            headers: { 'authorization': 'bearer ' + $cookieStore.get('access_token') }
        }).then(function (res) {
            console.log('inside apiCall, Response: ' + res)
            console.log(res);
            defered.resolve(res);
            //return $q.resolve(res);
        }, function () {
            defered.reject();
        });
        return defered.promise;
    }

    var onUpload = function (uri, file) {
        var defered = $q.defer();
        Upload.upload({
            url: uri,
            file: file,
            headers: { 'authorization': 'bearer ' + $cookieStore.get('access_token') }
        }).then(function (res) {
            defered.resolve(res);
        }, function () {
            defered.reject();
        });
        return defered.promise;
    }
    return {
        getAll: function (uri) {
            return onApiCall(uri, 'GET');
        },
        getById: function (uri) {
            console.log(uri);
            return onApiCall(uri, 'GET');


        },
        postData: function (uri, data) {
            console.log('still calling');
            console.log(data);
            return onDataApiCall(uri, 'POST', data);
        },
        deleteById: function (uri) {
            return onApiCall(uri, 'DELETE');


        },
        uploadFile: function (uri, file) {
            return onApiCall(uri, file);
        },
        update: function (uri, data) {
            console.log('inside update');
            console.log(data);
            return onDataApiCall(uri, 'PUT', data);

        }
    }
}]);