var cool = require('cool-ascii-faces');
window.onload = function() {
	document.getElementById("cool").innerHTML = cool();
	document.getElementById("quote").innerHTML = getQuote();
}