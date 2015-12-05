# tinyevt
Convert any object in a tiny (868bytes) custom event manager.

## Usage

``` jss
    var tinyevt = require('tinyevt');
    
    //Convert a custom object 
    var obj = {};
    tinyevt(obj);
    
    //define event
    var def = obj.on('pikachu',function(){
        console.log('Pica pica pica chu!');
    });
    
    //fire event
    obj('picachu',{who:'pikachu'});

    //detach
    def();

    //define event
    var def = obj.on('pikachu',function(){
        console.log('Pica pica pica chu!');
    });

    //fire event and detach all
    obj('picachu',{who:'pikachu'},true);
    
    obj('picachu',{who:'pikachu'}); //nothing happens



```


