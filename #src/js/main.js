var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };

@@include('forms.js');

$(document).ready(function() {
	@@include('burger.js');

// === Проверка, поддержка браузером формата webp ==================================================================

	function testWebP(callback) {

	var webP = new Image();
	webP.onload = webP.onerror = function () {
	callback(webP.height == 2);
	};
	webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
	}

	testWebP(function (support) {

	if (support == true) {
	document.querySelector('body').classList.add('webp');
	}else{
	document.querySelector('body').classList.add('no-webp');
	}
	});

// === // Проверка, поддержка браузером формата webp ==================================================================



// === submenu form btn ==================================================================
{
	let btn = document.querySelector('.submenu__apply-btn');
	if(btn) {
		btn.addEventListener('click', () => {
			$(".submenu__column_2").slideToggle(300);
			$(".submenu__apply-btn").toggleClass('active');
		})
	}
}
// === // submenu form btn ==================================================================

// === stars handler ================================================================================
	let rating = document.querySelectorAll('.stars');
	if(rating.length) {
		for(let listStars of rating) {
			for(let star = 0; star < listStars.dataset.amountstars; star++) {
				listStars.children[star].lastChild.className = 'icon-star-full';
			}
		}
	}
// === // stars handler ================================================================================

// === slider-testimonials ==================================================================
if($('.slider-testimonials').length>0) {
	$('.slider-testimonials').slick({
		slidesToScroll: 1,
		arrows: false,
		touchThreshold: 10,
		variableWidth: true,
		//draggable: false,
		responsive: [
		  {
		    breakpoint: 768,
		    settings: {
		      centerMode: true,
		    }
		  },
		]
	})

	$('.testimonials__slider-btn').on('click', function() {
		$('.slider-testimonials').slick('slickNext');
	});
}
// === // slider-testimonials ==================================================================



// === history sliders ==================================================================
if($('.top-slider-history').length>0) {
	$('.top-slider-history').slick({
		slidesToScroll: 1,
		slidesToShow: 10,
		arrows: false,
		touchThreshold: 10,
		//variableWidth: true,
		infinite: false,
		asNavFor: '.center-history-slider',
		focusOnSelect: true,

		responsive: [
		  {
		    breakpoint: 768,
		    settings: {
		      //variableWidth: true,
		      slidesToShow: 5,
		      infinite: true,
		      centerMode: true,
		    }
		  },
		  {
		    breakpoint: 480,
		    settings: {
		      //variableWidth: true,
		      slidesToShow: 3,
		      centerMode: true,
		      infinite: true,
		    }
		  },
		]
	})

	$('.center-history-slider').slick({
		  slidesToShow: 1,
		  slidesToScroll: 1,
		  arrows: false,
		   fade: true,
		   asNavFor: '.top-slider-history',
		   autoplay: true,
		   autoplaySpeed: 8000,
		   responsive: [
		     {
		       breakpoint: 768,
		       settings: {
		         autoplay: false,
		       }
		     },
		   ]
	})
}

// === // history sliders ==================================================================



// === team card handler ==================================================================
{
	if($('.list-team__cord-wrap').length>0) {
		$('.list-team__cord-wrap').click(function(e){
			if(document.documentElement.clientWidth <= 1264) {
				$(this).find('.card-team__hover-box').slideToggle(300);
			}
			
		})
	}
}
// === // team card handler ==================================================================



// === top-blog-list__menu preventDefault ==================================================================
{
	let blogMenu = document.querySelector('.top-blog-list__menu');

	if(blogMenu) {
		blogMenu.addEventListener('click', (e) => {
			e.preventDefault();
		})
	}
}
// === // top-blog-list__menu preventDefault ==================================================================


// === blog-list__load-more-btn preventDefault ==================================================================
{
	let btn = document.querySelector('.blog-list__load-more-btn');

	if(btn) {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
		})
	}
}
// === // blog-list__load-more-btn preventDefault ==================================================================


// === links-blog-detail__load-more-btn preventDefault ==================================================================
{
	let btn = document.querySelector('.links-blog-detail__load-more-btn');

	if(btn) {
		btn.addEventListener('click', (e) => {
			e.preventDefault();
		})
	}
}
// === // links-blog-detail__load-more-btn preventDefault ==================================================================

// ==== accordion =======================================================
if ($('.accordion').length>0) {
	$.each($('.spoller.active'), function (index, val) {
		$(this).next().show();
	});
	$('body').on('click', '.spoller', function (event) {
		if ($(this).hasClass('mob') && !isMobile.any()) {
			return false;
		}

		if ($(this).parents('.one').length > 0) {
			$(this).parents('.one').find('.spoller').not($(this)).removeClass('active').next().slideUp(300);
			$(this).parents('.one').find('.spoller').not($(this)).parent().removeClass('active');
		}

		if ($(this).hasClass('closeall') && !$(this).hasClass('active')) {
			$.each($(this).closest('.spollers').find('.spoller'), function (index, val) {
				$(this).removeClass('active');
				$(this).next().slideUp(300);
			});
		}
		$(this).toggleClass('active').next().slideToggle(300, function (index, val) {
			if ($(this).parent().find('.slick-slider').length > 0) {
				$(this).parent().find('.slick-slider').slick('setPosition');
			}
		});
		return false;
	});
}

// ==== // accordion =======================================================

});