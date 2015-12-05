function eventable(o){
	var events = {};
	var each = function(n,fn){
		Object.keys(events[n]).forEach(function(k){
			fn(events[n][k],k);
		});
	};
	o.$on   = function(n,fn){
		events[n] = events[n] || {};
		var id = new Date().getTime() + Object.keys(events[n]).length+1;
		events[n][id] = fn;
		return function(){
			delete events[n][id];
		};
	};
	o.$emit = function(n,p,cancelAfterEmit){
		each(n,function(fn,id){
			fn(p);
			if(cancelAfterEmit){
				delete events[n][id];
			}
		});
	};
	return o;
}
module.exports = eventable;
