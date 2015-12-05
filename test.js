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

