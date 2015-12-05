var tinyevt = require('tinyevt');

function domEvtOff(e, evt, fn) {
	if (e.removeEventListener) {
		e.removeEventListener(evt, fn);
	} else if (e.detachEvent) {
		e.detachEvent('on' + evt, fn);
	}
}
function domEvtOn(elem, event, fn) {
	function listenHandler(e) {
		var ret = fn.apply(this, arguments);
		if (ret === false) {
			e.stopPropagation();
			e.preventDefault();
		}
		return (ret);
	}

	function attachHandler() {
		var ret = fn.call(elem, window.event);
		if (ret === false) {
			window.event.returnValue = false;
			window.event.cancelBubble = true;
		}
		return (ret);
	}
	if (elem.addEventListener) {
		elem.addEventListener(event, listenHandler, false);
		return listenHandler;
	} else {
		elem.attachEvent("on" + event, attachHandler);
		return attachHandler;
	}
}

var evt = (function(){
	var dom = function(el,evt,fn){
		var evtFn = domEvtOn(el,evt,fn);
		return function(){
			domEvtOff(el,evt,evtFn);
		};
	};
	var fn = function(el,evt,fn){
		return dom(el,evt,fn);
	};
	tinyevt(fn);
	return fn;
})();

module.exports = evt;
