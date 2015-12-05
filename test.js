var tinyevt = require('./lib/tinyevt');

console.log('hi, this is a test');

var evt = tinyevt({});

var pepeEvt = evt.$on('hello', function(p) {
	console.log('hello %s!',p);
});

console.info('-calling event "pepe" ');
evt.$emit('hello','pepe');


console.info('-detaching event "pepe"');
pepeEvt();

console.info('-calling event "pepe" (is detached now) ');
var pepeEvt = evt.$emit('hello','pepe (again)');
console.log('(noting happens, so works great)');


 //Convert a custom object into a evt manager.
var myCustomObject = {};
tinyevt(myCustomObject);

//$on: create an event (an register)
myCustomObject.$on('pikachu',function(){
    console.log('Pica pica pica chu!');
});


//register the number you like at any moment
myCustomObject.$on('pikachu',function(p){
    console.log(p.who + ': Pica pica pica chu (again)!');
});


//$emit: fire the event
myCustomObject.$emit('pikachu',{who:'pikachu'});


//Creates and event 'hello', fire it one time and detach all listeners
myCustomObject.$on('hello',function(p){
	console.log(p+': Hello.');
});
myCustomObject.$emit('hello','Pepe',true);
myCustomObject.$emit('hello','Foo');
