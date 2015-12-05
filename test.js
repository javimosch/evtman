var tinyevt = require('./lib/tinyevt');

var gulp = require('gulp');
var jasmine = require('gulp-jasmine');

gulp.task('tests', function () {
    return gulp.src('tests/*.js')
        .pipe(jasmine());
});
gulp.start('tests');

/*
 //Convert a custom object into a evt manager.
var evt = tinyevt({});

var pepeEvt = evt.on('hello', function(p) {
	console.log('hello %s!',p);
});

console.info('-calling event "pepe" ');
evt.emit('hello','pepe');


console.info('-detaching event "pepe"');
pepeEvt();

console.info('-calling event "pepe" (is detached now) ');
var pepeEvt = evt.emit('hello','pepe (again)');
console.log('(noting happens, so works great)');



//on: create an event (an register)
evt.on('pikachu',function(){
    console.log('Pica pica pica chu!');
});


//register the number you like at any moment
evt.on('pikachu',function(p){
    console.log(p.who + ': Pica pica pica chu (again)!');
});


//emit: fire the event
evt.emit('pikachu',{who:'pikachu'});


//Creates and event 'hello', fire it one time and detach all listeners
evt.on('hello',function(p){
	console.log(p+': Hello.');
});
evt.emit('hello','Pepe',true);
evt.emit('hello','Foo');
*/