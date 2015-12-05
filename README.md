# tinyevt
Convert any object in a tiny (870bytes) custom event manager.

## Usage

``` jss
    var tinyevt = require('tinyevt');
    
    //Convert a custom object into a evt manager.
    var myObj = {};
    tinyevt(myObj);
    
    //$on: create an event (an register)
    myObj.$on('pikachu',function(){
        console.log('Pica pica pica chu!');
    });
    
    //register the number you like at any moment
    myObj.$on('pikachu',function(p){
        console.log(p.who + 'Pica pica pica chu (again)!');
    });
    
    //$emit: fire the event
    myObj('picachu',{who:'pikachu'});
    
    //Creates and event 'hello', fire it one time and detach all listeners
    myObj.$on('hello',function(p){
        console.log(p+': Hello.');
    });
    myObj.$emit('hello','Pepe',true);
    myObj.$emit('hello','Foo');

```


