$(document).ready(function() {
    $('.ui-view').load("views/main.html");
});

var Href = function(name){
	$('.ui-view').load('views/' + name + '.html');
}