(function() {
	var done = false;
	var index = 0;
	var items = [65, 78, 65, 82, 67, 72, 89];
	var texts = ['"The ultimate end of all revolutionary social change is to establish the sanctity of human life, the dignity of man, the right of every human being to liberty and well-being." ~ Emma Goldman'];
	window.onkeyup = function(e) {
	   if (done) return;
	   var key = e.keyCode ? e.keyCode : e.which;
	   if (items[index] === key || items[index] === key - 32) {
	   		index++;
	   		if (index === items.length) {
	   			done = true;
	   			document.body.style.color = "#FF0000";
	   			document.body.style.backgroundColor = "#000000";
	   			$('.active')[0].children[0].style.color = "#FF0000";
	   			document.title = "Ⓐ❤️woo free store❤️️Ⓐ"
	   			var marquee = $("<marquee>");
	   			marquee.attr("behavior", "alternating");
	   			marquee.text(texts[Math.floor(texts.length * Math.random())]);
	   			$($('.row')[0]).prepend(marquee);
	   		}
	   }
	   else index = 0;
}})();