/*
    Angular filter definition.

    Here are some predefined ones: https://docs.angularjs.org/api/ng/filter/currency
 */

angular.module('myApp')

    // factory function
    .filter('reverse', function (){
        // in this case a function is returned (rather than an object as in
        // the service example.
        return function(text){
            text = '' + text;

            // execute reversing
            return text.split('').reverse().join('');
        }
    });
