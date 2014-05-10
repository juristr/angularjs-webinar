// Services: https://docs.angularjs.org/api/ng/service

angular.module('calculator')

    // gibt 3 Wege, dies ist der "mittlere"
    // Dies ist eine Factory function welche den service
    // returned
    //
    // Ein service ist ein singleton und dementsprechend sollte kein
    // status im service gespeichert werden
    //
    // Der name 'calculator' ist der name mit welchem er referenziert wird
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
