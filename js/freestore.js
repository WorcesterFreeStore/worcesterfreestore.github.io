(function() {
	var done = false;
	var index = 0;
	var items = [65, 78, 65, 82, 67, 72, 89];
	window.onkeyup = function(e) {
	   if (done) return;
	   var key = e.keyCode ? e.keyCode : e.which;
	   if (items[index] === key || items[index] === key - 32) {
	   		index++;
	   		if (index === items.length) {
	   			done = true;
	   			document.body.style.color = "#FF0000";
	   			document.body.style.backgroundColor = "#000000";
	   			document.getElementsByClassName('active')[0].children[0].style.color = "#FF0000";
	   			document.title = "Ⓐ❤️woo free store❤️️Ⓐ"
	   		}
	   }
	   else index = 0;
}})();