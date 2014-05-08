/*
    Directiven sollten sparsam verwendet werden. `ng-controller`
    sind auch directiven, welche aber von AngularJS direkt schon zur
    Verfügung gestellt werden.

 */
angular.module('myApp')

    // "helloworld" entspricht dem HTML tag.
    .directive('helloWorld', function(){
        return {
            restrict: 'E', //E=Element, A=attribute, C=css class or combined EAC
            //template: '<p>..</p>',
            templateUrl: 'helloWorldPartial.html'
        }
    });