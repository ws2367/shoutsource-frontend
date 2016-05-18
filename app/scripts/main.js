// jshint devel:true
console.log('\'Allo \'Allo!');

$(document).ready(function(){
	$(".button, .scroll").click(function(e) {
		e.preventDefault();
		var link = $(this).parent().attr('href');
	    $('html, body').animate({
	        scrollTop: $(link).offset().top
	    }, 1000, 'easeInOutQuart');
	});

	var h = 60 + $('.image').height()/2-35;
	console.log(h);
	$(".swiper-button-white").css({
		"bottom":h+"px",
	});
})

$(window).resize(function(){
	var h = 60 + $('.image').height()/2-35;
	console.log(h);
	$(".swiper-button-white").css({
		"bottom":h+"px",
	});
});