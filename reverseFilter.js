/*
    Angular hat viele vorgefertigte Filter:
    https://docs.angularjs.org/api/ng/filter/currency
 */


angular.module('myApp')

    // factory function
    .filter('reverse', function (){
        // in diesem Fall wird nicht ein Objekt sondern
        // direkt eine Funktion zurückgegeben
        return function(text){
            text = '' + text;

            // execute reversing
            return text.split('').reverse().join('');
        }
    });