function hideme(){$(".hideme").each(function(){var a=$(this).offset().top+150,b=$(window).scrollTop()+$(window).height(),c=$(this);b>a&&(c.animate({opacity:"1","margin-top":"0px"},500),setTimeout(function(){c.find(".title").addClass("scrolled")},100))})}function swiperbuttonPosition(){var a=60+$(".swiper-slide .image").height()/2-35;console.log(a),$(".swiper-button-white").css({bottom:a+"px"})}console.log("'Allo 'Allo!"),$(document).ready(function(){$("body").css("opacity",1),$(".scroll").click(function(a){a.preventDefault();var b=$(this).parent().attr("href");return $("html, body").animate({scrollTop:$(b).offset().top},1e3,"easeInOutQuart"),!1}),swiperbuttonPosition(),hideme()}),$(window).resize(function(){swiperbuttonPosition()}),$(window).scroll(function(){hideme()});