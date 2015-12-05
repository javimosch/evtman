"use strict";

var tinyevt = require('../lib/tinyevt');
var evt = tinyevt({});

describe("#Inermediate 1", function() {
	it("binding with same name returns the last binding definition", function() {
		var rta = null;
		evt.on('one', function() {
			rta = 1;
		});
		evt.on('one', function() {
			rta = 2;
		});
		evt.emit('one');
		expect(rta).toBe(2);
	});
});


describe("#Inermediate 2", function() {
	it("intermediate-2", function() {
		var rta = 0;
		evt.on('two', function(p) {
			rta += p;
		});
		evt.on('two', function(p) {
			rta += p;
		});
		for (var x = 0; x < 500; x++) {
			if (x === 249) {
				evt.emit('two', 1, true);
			} else
				evt.emit('two', 1);
		}
		expect(rta).toBe(500);
	});
});