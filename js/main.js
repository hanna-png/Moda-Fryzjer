(function($) {

	"use strict";

	// Tüm jQuery bağımlı kodları ve sayfa yüklendiğinde çalışması gereken diğer kodları
	// bu bloğun içine taşıyoruz.
	$(document).ready(function() {

		var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
				BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
				iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
				Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
				Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
				any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};


		$(window).stellar({
			responsive: true,
			parallaxBackgrounds: true,
			parallaxElements: true,
			horizontalScrolling: false,
			hideDistantElements: false,
			scrollProperty: 'scroll'
		});


		var fullHeight = function() {

			$('.js-fullheight').css('height', $(window).height());
			$(window).resize(function(){
				$('.js-fullheight').css('height', $(window).height());
			});

		};
		fullHeight();

		// loader
		var loader = function() {
			setTimeout(function() {
				if($('#ftco-loader').length > 0) {
					$('#ftco-loader').removeClass('show');
				}
			}, 1);
		};
		loader();

		// Scrollax
		$.Scrollax();

		var carousel = function() {
			$('.home-slider').owlCarousel({
				loop:true,
				autoplay: true,
				margin:0,
				animateOut: 'fadeOut',
				animateIn: 'fadeIn',
				nav:false,
				autoplayHoverPause: false,
				items: 1,
				navText : ["<span class='ion-md-arrow-back'></span>","<span class='ion-chevron-right'></span>"],
				responsive:{
					0:{
						items:1
					},
					600:{
						items:1
					},
					1000:{
						items:1
					}
				}
			});
			$('.carousel-testimony').owlCarousel({
				autoplay: true,
				autoHeight: true,
				center: true,
				loop: true,
				items:1,
				margin: 30,
				stagePadding: 0,
				nav: false,
				dots: true,
				navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
				responsive:{
					0:{
						items: 1
					},
					600:{
						items: 1
					},
					1000:{
						items: 1
					}
				}
			});
			$('.carousel-team').owlCarousel({
				autoplay: true,
				autoHeight: true,
				items:1,
				margin: 30,
				stagePadding: 0,
				nav: false,
				dots: true,
				navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
				responsive:{
					0:{
						items: 1
					},
					600:{
						items: 3
					},
					1000:{
						items: 4
					}
				}
			});
		};
		carousel();

		$('nav .dropdown').hover(function(){
			var $this = $(this);
			// 	 timer;
			// clearTimeout(timer);
			$this.addClass('show');
			$this.find('> a').attr('aria-expanded', true);
			// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
			$this.find('.dropdown-menu').addClass('show');
		}, function(){
			var $this = $(this);
				// timer;
			// timer = setTimeout(function(){
				$this.removeClass('show');
				$this.find('> a').attr('aria-expanded', false);
				// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
				$this.find('.dropdown-menu').removeClass('show');
			// }, 100);
		});


		$('#dropdown04').on('show.bs.dropdown', function () {
			console.log('show');
		});

		// scroll
		var scrollWindow = function() {
			$(window).scroll(function(){
				var $w = $(this),
						st = $w.scrollTop(),
						navbar = $('.ftco_navbar'),
						sd = $('.js-scroll-wrap');

				if (st > 150) {
					if ( !navbar.hasClass('scrolled') ) {
						navbar.addClass('scrolled');
					}
				}
				if (st < 150) {
					if ( navbar.hasClass('scrolled') ) {
						navbar.removeClass('scrolled sleep');
					}
				}
				if ( st > 350 ) {
					if ( !navbar.hasClass('awake') ) {
						navbar.addClass('awake');
					}

					if(sd.length > 0) {
						sd.addClass('sleep');
					}
				}
				if ( st < 350 ) {
					if ( navbar.hasClass('awake') ) {
						navbar.removeClass('awake');
						navbar.addClass('sleep');
					}
					if(sd.length > 0) {
						sd.removeClass('sleep');
					}
				}
			});
		};
		scrollWindow();

		// isMobile tanımı burada tekrar edilmiş, aslında bir kere tanımlamanız yeterliydi.
		// Ancak kodu bozmamak adına şimdilik bıraktım.
		var isMobile = {
			Android: function() {
				return navigator.userAgent.match(/Android/i);
			},
				BlackBerry: function() {
				return navigator.userAgent.match(/BlackBerry/i);
			},
				iOS: function() {
				return navigator.userAgent.match(/iPhone|iPad|iPod/i);
			},
				Opera: function() {
				return navigator.userAgent.match(/Opera Mini/i);
			},
				Windows: function() {
				return navigator.userAgent.match(/IEMobile/i);
			},
				any: function() {
				return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
			}
		};

		var counter = function() {

			$('#section-counter, .hero-wrap, .ftco-counter, .ftco-volunteer').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

					var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
					$('.number').each(function(){
						var $this = $(this),
							num = $this.data('number');
							console.log(num);
						$this.animateNumber(
							{
								number: num,
								numberStep: comma_separator_number_step
							}, 7000
						);
					});

				}

			} , { offset: '95%' } );

		}
		counter();


		var contentWayPoint = function() {
			var i = 0;
			$('.ftco-animate').waypoint( function( direction ) {

				if( direction === 'down' && !$(this.element).hasClass('ftco-animated') ) {

					i++;

					$(this.element).addClass('item-animate');
					setTimeout(function(){

						$('body .ftco-animate.item-animate').each(function(k){
							var el = $(this);
							setTimeout( function () {
								var effect = el.data('animate-effect');
								if ( effect === 'fadeIn') {
									el.addClass('fadeIn ftco-animated');
								} else if ( effect === 'fadeInLeft') {
									el.addClass('fadeInLeft ftco-animated');
								} else if ( effect === 'fadeInRight') {
									el.addClass('fadeInRight ftco-animated');
								} else {
									el.addClass('fadeInUp ftco-animated');
								}
								el.removeClass('item-animate');
							},  k * 50, 'easeInOutExpo' );
						});

					}, 100);

				}

			} , { offset: '95%' } );
		};
		contentWayPoint();


		// navigation
		var OnePageNav = function() {
			$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
				e.preventDefault();

				var hash = this.hash,
						navToggler = $('.navbar-toggler');
				$('html, body').animate({
					scrollTop: $(hash).offset().top
				}, 700, 'easeInOutExpo', function(){
					window.location.hash = hash;
				});


				if ( navToggler.is(':visible') ) {
					navToggler.click();
				}
			});
			$('body').on('activate.bs.scrollspy', function () {
				console.log('nice');
			})
		};
		OnePageNav();


		// magnific popup
		$('.image-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
			gallery: {
				enabled: true,
				navigateByImgClick: true,
				preload: [0,1] // Will preload 0 - before current, and 1 after the current image
			},
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 300 // don't foget to change the duration also in CSS
			}
		});

		$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
			disableOn: 700,
			type: 'iframe',
			mainClass: 'mfp-fade',
			removalDelay: 160,
			preloader: false,

			fixedContentPos: false
		});

		$('.appointment_date').datepicker({
			'format': 'm/d/yyyy',
			'autoclose': true
		});

		$('.appointment_time').timepicker();

	}); // $(document).ready() bloğunun sonu

})(jQuery);
