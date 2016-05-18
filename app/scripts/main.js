// jshint devel:true
console.log('\'Allo \'Allo!');

$(".button, .scroll").click(function(e) {
	e.preventDefault();
	var link = $(this).parent().attr('href');
    $('html, body').animate({
        scrollTop: $(link).offset().top
    }, 1000, 'easeInOutQuart');
});
