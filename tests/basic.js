"use strict";

var tinyevt = require('../lib/tinyevt');
var evt = tinyevt({});

describe("#Creating an event with 'on'", function() {
	it("returns a function to cancel the evt binding", function() {
		var rta = evt.on('one', function() {
			console.log('Event created and called :one');
		});
		evt.emit('one');
		expect(typeof rta).toBe('function');
	});
});

describe("#Canceling event binding", function() {
	it(": An incremental number in each call. The number just be assigned just one time because we cancel the event after.", function() {
		var rta = 0;
		var cancel = evt.on('two', function(p) {
			rta = p;
			console.log('Event called with value ' + rta);
		});
		evt.emit('two', rta + 1);
		cancel();
		evt.emit('two', rta + 1);
		expect(rta).toBe(1);
	});
});