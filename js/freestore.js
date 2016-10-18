(function() {
	var done = false;
	var index = 0;
	var items = [65, 78, 65, 82, 67, 72, 89];
	window.onkeyup = function(e) {
	   if (done) return;
	   var key = e.keyCode ? e.keyCode : e.which;
	   if (items[index] === key || items[index] === key + 32) {
	   		index++;
	   		if (index === items.length) {
	   			done = true;
	   		}
	   }
	   else index = 0;
	}}
)();