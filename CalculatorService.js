
angular.module('myApp')
    
    // gibt 3 Wege, dies ist der "mittlere"
    // Dies ist eine Factory function welche den service
    // returned
    // 
    // Ein service ist ein singleton und dementsprechend sollte kein
    // status im service gespeichert werden
    // 
    // Der name 'calculator' ist der name mit welchem er referenziert wird
    .factory('calculator', function(){
        return {
            add: function (a,b){
                return (a-0) + (b-0);
            }
        }
    });