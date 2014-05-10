/*
    Directives allow to create re-usable components that augment the HTML
    code with new elements or augment existing ones with new attributes.

    Also `ng-controller` is a directive, just that it is provided by Angular
    itself.
 */
angular.module('myApp')

    // "hello-world" would be the corresponding tag (see index.html)
    .directive('helloWorld', function(){
        return {
            restrict: 'E', //E=Element, A=attribute, C=css class or combined EAC
            //template: '<p>..</p>',
            templateUrl: 'helloWorldPartial.html'
        }
    });
