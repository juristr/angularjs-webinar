angular.module('calculator')

    // Angular provided dependencies should be prefixed by `$`
    .controller('CalculatorController', [ '$scope', '$log', 'calculator' /* give me reference of service (DI) */, function($scope, $log, calculator){
        $log.info('Calculator service started'); //wraps console.log initially

        $scope.articles = [
            { title: 'Red Bull', price: 2.5},
            { title: 'Monster', price: 3.5},
            { title: 'Tea', price: 2}
        ];

        // initial values.
        $scope.first = 0;
        $scope.second = 0;
        $scope.sum = 0;

        // event handler attached to the button (see index.html)
        $scope.add = function(a,b){
            // invoke the calculator service and add the result to
            // $scope.sum which will display it on the site through
            // the live-binding mechanism.
            $scope.sum = calculator.add(a,b);
        };
    }]);
