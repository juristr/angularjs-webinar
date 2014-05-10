// Services: https://docs.angularjs.org/api/ng/service

angular.module('calculator')

    // There are different ways of creating services. The factory
    // is one of them.
    //
    // A service is a **singleton**.
    //
    // `calculator` is the name that uniquely identifies the service
    // in the application. This name is used by the DI mechanism to inject
    // it into other components.
    .factory('calculator', [ '$http', '$log', function($http, $log){
        // $http is the backend service for loading json stuff
        // https://docs.angularjs.org/api/ng/service/$http
        $http.get('data.json')
            .success(function(data, status, headers, config){
                $log.info(data, status);
            })
            .error(function(data, status, headers, config) {
                $log.warn(data, status);
            });

        // similarly a post works like this
        //$http.post('data', { x: 'bar' });

        return {
            add: function (a,b){
                return (a-0) + (b-0);
            }
        }
    }]);
