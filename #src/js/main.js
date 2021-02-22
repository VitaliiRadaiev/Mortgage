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


// === Конвертация svg картинки в svg код ==================================================================
$('img.img-svg').each(function(){
  var $img = $(this);
  var imgClass = $img.attr('class');
  var imgURL = $img.attr('src');
  $.get(imgURL, function(data) {
    var $svg = $(data).find('svg');
    if(typeof imgClass !== 'undefined') {
      $svg = $svg.attr('class', imgClass+' replaced-svg');
    }
    $svg = $svg.removeAttr('xmlns:a');
    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
      $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
    }
    $img.replaceWith($svg);
  }, 'xml');
});
// === // Конвертация svg картинки в svg код ==================================================================


// === Video banner ==================================================================
 {
 	let video = document.querySelector('.home-banner__bg video');
 	if(video) {
 		let btn = document.querySelector('.home-banner__body');

 		btn.addEventListener('click', (e) => {
 			if(e.target.closest('.top-home-banner__btn > a') || e.target.closest('.bottom-home-banner__item')) {

 			} else {
 				if(video.paused) {
 					video.play();

 				} else {
 					video.pause();
 				}
 			}
 		});
 	}
 }


function togglePlayPause(video,btn) {
	if(video.paused) {
		video.play();
		btn.firstElementChild.className = 'icon-pause2';
		btn.firstElementChild.style.marginLeft = '0px';

	} else {
		video.pause();
		btn.firstElementChild.className = 'icon-play3';
		btn.firstElementChild.style.marginLeft = '8px';
	}
}
// === // Video banner ==================================================================



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
			if(document.documentElement.clientWidth <= 1023) {
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



// ==== team correct height =======================================================

{
	let block = document.querySelector('.list-team');
	if(block) {

		function transferCardsForSmallWindow() {
			let arrElem = [];

			for(let item of block.children) {
				for(let i of item.children) {
					arrElem.push(i);
				}
			}

			let ul = document.createElement('ul');
			let li = document.createElement('li');

			ul.classList = 'team__list list-team';

			for(let i = 0; i < arrElem.length; i++) {
				li.append(arrElem[i]);
			}

			ul.append(li);

			block.replaceWith(ul);
		}

		function transferCardsForBigWindow() {
			let arrElem = [];

			for(let item of block.children) {
				if(item.children.length > 3) {
					for(let i = 3; i < item.children.length; i++ ) {
						arrElem.push(item.children[i]);
					}
				}
			}


			const transfer = () => {
				for(let item of block.children) {
					if(arrElem.length>0 && item.children.length < 3) {
						if(item.children.length == 0) {
							for(let i = 0; i < 3; i++) {
								if(arrElem[i]) {
									item.append(arrElem[i]);
								}
							}
							arrElem = arrElem.slice(3, arrElem.length);
						} else if(item.children.length == 1) {
							for(let i = 0; i < 2; i++) {
								if(arrElem[i]) {
									item.append(arrElem[i]);
								}
							}
							arrElem = arrElem.slice(2, arrElem.length);
						} else if (item.children.length == 2) {
							for(let i = 0; i < 1; i++) {
								if(arrElem[i]) {
									item.append(arrElem[i]);
								}
							}
							arrElem = arrElem.slice(1, arrElem.length);
						}
					}
				}
			}

			transfer();

			if(arrElem.length>0) {
				let count = arrElem.length / 3;

				for(let i = 0; i < count; i++) {
					let li = document.createElement('li');
					block.append(li);
				}
			}

			transfer();


			for(let item of block.children) {
				item.style.minHeight = item.getBoundingClientRect().height * 0.1 + 'rem';

				if(item.children.length == 1) {
					item.classList.add('_one');
				}

				if(item.children.length == 2) {
					item.classList.add('_two');
				}

				let arrHeight = [];

				for(let inItem of item.children) {
					let textBox = inItem.querySelector('.card-team__text-box');
					arrHeight.push(textBox.getBoundingClientRect().height);
				}

				let maxHeight = Math.max(...arrHeight);

				for(let inItem of item.children) {
					let textBox = inItem.querySelector('.card-team__text-box');
					textBox.style.minHeight = maxHeight * 0.1 + 'rem';
				}
			}
		}


		if(document.documentElement.clientWidth <= 1023) {
			transferCardsForSmallWindow();

		} else {
			transferCardsForBigWindow();
		}

		if(document.documentElement.clientWidth > 1023 && document.documentElement.clientWidth <= 1440) {
		 	document.querySelector('html').style.fontSize = '7.6px';
		}

		window.addEventListener('resize', () => {
			if(document.documentElement.clientWidth > 1023 && document.documentElement.clientWidth <= 1440) {
				document.querySelector('html').style.fontSize = '7.6px';
			} else if(document.documentElement.clientWidth > 1440) {
				document.querySelector('html').style.fontSize = '10px';
			} else if(document.documentElement.clientWidth < 1234) {
				document.querySelector('html').style.fontSize = '10px';
				transferCardsForSmallWindow();
			}
		})
	}
}
// ==== // team correct height =======================================================



// ==== our-loans =======================================================
{
	let ourLoans = document.querySelector('.our-loans');
	if(ourLoans) {
		document.querySelectorAll('.our-loans__tiggers').forEach((item) => {
			item.addEventListener('click', function(e) {
				e.preventDefault();
				const id = e.target.getAttribute('href').replace('#','');

				document.querySelectorAll('.our-loans__tiggers').forEach((child) => {
					child.classList.remove('active');
				});

				document.querySelectorAll('.our-loans__tabs-content').forEach((child) => {
					child.classList.remove('active');
				});

				item.classList.add('active');
				document.getElementById(id).classList.add('active');
			});
		});
	}
}
// ==== //our-loans =======================================================



// ==== process-subbanner-slider =======================================================
{
	let aboutUsCards = document.querySelector('.process-subbanner-slider');

	if(aboutUsCards) {

		if(document.documentElement.clientWidth <= 1280 ) {
			(async function() {
				await aboutUsCards.classList.add('process-subbanner-slider-mobile');
				await initialLastViewsSlider()
			})();
		}

		window.addEventListener('resize', function() {
			if(document.documentElement.clientWidth <= 1280 ) {
				(async function() {
					if(!aboutUsCards.classList.contains('process-subbanner-slider-mobile')) {
						await aboutUsCards.classList.add('process-subbanner-slider-mobile');
						await initialLastViewsSlider();
					}
				})();
			} 

			if(document.documentElement.clientWidth > 1280) {

				(async function() {
					await $('.process-subbanner-slider-mobile').slick('unslick')
					await aboutUsCards.classList.remove('process-subbanner-slider-mobile');
				})();
			}
		})
	}

	function initialLastViewsSlider() {

		$('.process-subbanner-slider-mobile').slick({
			slidesToScroll: 1,
			arrows: false,
			adaptiveHeight: true,
			infinite: false,
			variableWidth: true,
			touchThreshold: 10,
		})
	}
}
// ==== //process-subbanner-slider  =======================================================

let btn = document.querySelectorAll('.our-loans__tiggers').forEach((item) => {
	item.addEventListener('click', () => {
		let el = document.getElementById('loan-comparison-calculator');
		var iframeDoc = el.contentWindow.document;
	})
})


// ==== services-subbanner adaptive  =======================================================
{
	let services = document.querySelector('.services-subbanner-info__body'); 
		if(services) {
			let column_1 = services.querySelector('.services-subbanner-info__column_1');
			let column_2 = services.querySelector('.services-subbanner-info__column_2');
			let column_3 = services.querySelector('.services-subbanner-info__column_3');
			let column_4 = services.querySelector('.services-subbanner-info__column_4');

			if(!column_1) {
				services.classList.add('_disabled-column_1');
			}

			if(!column_2) {
				services.classList.add('_disabled-column_2');
			}

			if(!column_3) {
				services.classList.add('_disabled-column_3');
			}

			if(!column_4) {
				services.classList.add('_disabled-column_4');
			}
		}
	
}
// ==== //services-subbanner adaptive   =======================================================


// ==== calculator-cards handler   =======================================================
{
	let blockCards = document.querySelector('.calculator-cards');
	if(blockCards) {

		const correctHeight = () => {
			let cards = blockCards.querySelectorAll('.calculator-cards__item');

			let arrHeight = [];

			for(let item of cards) {
				let title = item.querySelector('.calculator-cards__title');
				arrHeight.push(title.getBoundingClientRect().height);
			}
			let maxHeight = Math.max(...arrHeight);


			for(let item of cards) {
				let title = item.querySelector('.calculator-cards__title');
				title.style.minHeight = (maxHeight / 20) + 'em';
			}
		}

		correctHeight();

		if(document.documentElement.clientWidth > 1023 && document.documentElement.clientWidth <= 1440) {
		 	blockCards.style.fontSize = '8px';
		}

		window.addEventListener('resize', () => {
			if(document.documentElement.clientWidth > 1023 && document.documentElement.clientWidth <= 1440) {
				blockCards.style.fontSize = '8px';
			} else if(document.documentElement.clientWidth > 1440) {
				blockCards.style.fontSize = '10px';
			} else if(document.documentElement.clientWidth < 1234) {
				blockCards.style.fontSize = '10px';
			}
		})

	}
}
// ====  calculator-cards handler =======================================================


// ====  header menu line correct =======================================================
{
	let list = document.querySelector('.main-menu__list');
	if(list) {
		for(let item of list.children) {
			let link = item.querySelector('a');
			let arrText = link.innerText.trim().split(' ');

			if(arrText.length == 3) {
				if(arrText[0].length > 6 && arrText[1].length > 4 && arrText[2].length > 6) {
					link.innerHTML = '';

					let span = document.createElement('span');
					span.innerHTML = `${arrText[0]}<br>${arrText[1]}<br>${arrText[2]}`;
					let spanHr = document.createElement('span');
					spanHr.className = 'hover-hr';
					link.append(span);
					//link.append(spanHr);
				}
			}

			if(arrText.length == 2) {
				if(arrText[0].length > 6 && arrText[1].length > 4) {
					link.innerHTML = '';

					let span = document.createElement('span');
					span.innerHTML = `${arrText[0]}<br>${arrText[1]}`;
					let spanHr = document.createElement('span');
					spanHr.className = 'hover-hr';
					link.append(span);
					//link.append(spanHr);
				}
			}

		}
	}
}
// ====  and header menu line correct =======================================================


// === resource block ==================================================================
if($('.resource__list').length>0) {
	$('.resource__list').slick({
		slidesToScroll: 1,
		slidesToShow: 3,
		prevArrow: '<div class="slick-arrow slick-prev"><span class=""><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><g><path d="M143.492,221.863L336.226,29.129c6.663-6.664,6.663-17.468,0-24.132c-6.665-6.662-17.468-6.662-24.132,0l-204.8,204.8c-6.662,6.664-6.662,17.468,0,24.132l204.8,204.8c6.78,6.548,17.584,6.36,24.132-0.42c6.387-6.614,6.387-17.099,0-23.712L143.492,221.863z"/></g></svg></span></div>',
		nextArrow: '<div class="slick-arrow slick-next"><span class=""><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 443.52 443.52" style="enable-background:new 0 0 443.52 443.52;" xml:space="preserve"><g><path d="M336.226,209.591l-204.8-204.8c-6.78-6.548-17.584-6.36-24.132,0.42c-6.388,6.614-6.388,17.099,0,23.712l192.734,192.734L107.294,414.391c-6.663,6.664-6.663,17.468,0,24.132c6.665,6.663,17.468,6.663,24.132,0l204.8-204.8C342.889,227.058,342.889,216.255,336.226,209.591z"/></g></svg></span></div>',
		
		touchThreshold: 10,
		//variableWidth: true,
		//draggable: false,
		// centerMode: true,
		dots: true,
		responsive: [
		  {
		    breakpoint: 992,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 768,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		  {
		    breakpoint: 576,
		    settings: {
		      slidesToShow: 1,
		      arrows: false,
		    }
		  },
		]
	})
}
// === // resource block ==================================================================



});

