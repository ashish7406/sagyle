


$(document).ready(function () {

	

	var num = $(this).scrollTop() !== 0; /*$('header').offset().top;*/
	/*************** Index start ***************/
	$(window).scroll(function () {
		var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
		//Active menu
		if (windowPos >= 100) {
			$('section.move-down').each(function (i) {
				if ($(this).position().top <= windowPos - 0) {
					$('.sticky-left-nav li.nav-active').removeClass('nav-active select');
					$('.sticky-left-nav li').eq(i).addClass('nav-active select');
				}
			});
		} else {
			$('.stick-left-nav-ul li.nav-active-menu').removeClass('nav-active-menu');
		}
		
		
	});
	
	
	if ($(window).scrollTop() > 100) {
		var txx = $(window).scrollTop() + 1;
		window.scrollTo(0, txx);
	}
	
	
	$("nav.sticky-left-nav a").click(function (evn) {
		evn.preventDefault();
		$(this).parent().addClass("nav-active");
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top + 10
		}, 500);
	});

	
	$(document).on('mouseenter', '.sticky-left-nav li', function () {
		if (!$(this).hasClass('select')) {
			$(this).addClass('nav-active');
		}
	});
	$(document).on('mouseleave', '.sticky-left-nav li', function () {
		if (!$(this).hasClass('select')) {
			$(this).removeClass('nav-active');
		}
	});
	
});














	


































