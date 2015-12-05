# evtman
tinyevt con asteroides. Implements tinyevt library and add support for dom events.

## Usage

``` jss
    var evt = require('evtman');
    
    
    
    //define event
    var def = evt.on('pikachu',function(){
        console.log('Pica pica pica chu!');
    });
    
    //fire event
    obj('picachu',{who:'pikachu'});

    //detach
    def();

    //define dom evt
    var def = obj(documchent.body,'click',function(){
        console.log('Pica pica pica chu! (click)');
        //detach
        def();
    });

    //fire event
    (click the screen)
    
    



```


