angular.module('calculator')

    // Angular provided dependencies should be prefixed by `$`
    .controller('CalculatorController', [ '$scope', '$log', 'calculator' /* give me reference of service (DI) */, function($scope, $log, calculator){
        $log.info('Calculator service started'); //wraps console.log initially

        $scope.articles = [
            { title: 'Red Bull', price: 2.5},
            { title: 'Monster', price: 3.5},
            { title: 'Tea', price: 2}
        ];

        $scope.first = 0;
        $scope.second = 0;
        $scope.sum = 0;

        $scope.add = function(a,b){
            $scope.sum = calculator.add(a,b);
        };
    }]);
