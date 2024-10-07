(function ($) {
	/*ready function start*/
	$(document).ready(function ($) {
		setTimeout(function () {
			$('.navmenu').css('display', 'flex');
		}, 100);

		/*wow animation start*/
		var wow = new WOW(
			{
				boxClass: 'wow',      // default
				animateClass: 'animated', // default
				offset: 200,          // default
				mobile: true,       // default
				live: false        // default
			}
		)
		wow.init();
		/*wow animation end*/

		/*header sticky function*/
		$(window).scroll(function () {
			if ($(window).scrollTop() >= 10) {
				$('.header').addClass('sticky');

			} else {
				$('.header').removeClass('sticky');

			}
		});
		/* Menu Toggle fucntion start */
		$('.menu-toggle').click(function (e) {
			e.preventDefault();
			$('body').toggleClass("menuopen");
			$('.menucol ul li.megamenu').removeClass("menuslide");
		});
		$('.menucol ul li.megamenu > a').click(function (e) {
			e.preventDefault();
			$('.menucol ul li.megamenu').addClass("menuslide");
		});
		$('a.backmenu').click(function (e) {
			e.preventDefault();
			$('.menucol ul li.megamenu').removeClass("menuslide");
		});

		
		/*Menu Toggle fucntion start*/

		/*experties menu start*/
		$('.exp-toggle').click(function (e) {
			e.preventDefault();
			$('.expertimenu').addClass("menuslide");
		});

		$('.exp-close').click(function (e) {
			e.preventDefault();
			$('.expertimenu').removeClass("menuslide");
		});

		if (window.outerWidth < 767) {
			$('.expertimenu > ul > li > ul > li > a').on("click", function (e) {
				e.preventDefault();
				$(this).toggleClass('subopen');
				$(this).siblings('ul').slideToggle();
				$(this).parent('li').siblings().children('ul').slideUp();
				$(this).parent('li').siblings().find('a').removeClass('subopen');

				$(this).parent('li').parent('ul').parent('li').siblings().children('ul').children('li').children('ul').slideUp();
				$(this).parent('li').parent('ul').parent('li').siblings().children('ul').children('li').children('a').removeClass('subopen');
			});
		}
		/*experties menu end*/


		$(".selecans input[type='radio']").on("click", function () {
			$(".red-circle-div").fadeIn();
		});
		/* Test page scorediv show start */

		/*counter js visible port*/
		$.fn.isInViewport = function () {

			var elementTop = ($(this).length) ? $(this).offset().top : 0;
			var elementBottom = elementTop + $(this).outerHeight();
			var viewportTop = $(window).scrollTop();
			var viewportBottom = viewportTop + $(window).height();
			return elementBottom > viewportTop && elementTop < viewportBottom;
		};

		/*header color changes dark section start*/
		if ($('.bwheader').length) {
			$(".bwheader").addClass("DarkMenu");
		}
		$(window).on('scroll load', function () {
			/*header color changes dark section start*/
			var isBlack = false;
			$(".darkheader").each(function (i, section) {
				var vpHeight = $(this).innerHeight();
				/*console.log(vpHeight);*/
				if (isBlack) {
					return;
				}

				var offset = $(section).offset().top - $(window).scrollTop();
				if (((offset + vpHeight) >= 0) && ((offset + vpHeight) <= vpHeight)) {

					// console.log(offset);
					isBlack = true;
					return;
				}
				else {
					isBlack = false;
					return;
				}
			});
			if (isBlack) {
				$(".bwheader").addClass("DarkMenu").removeClass("LightMenu");
			}
			else {
				$(".bwheader").removeClass("DarkMenu").addClass("LightMenu");
			}
			/*header color changes dark section End*/

			/*counter fuction*/
			if ($('.caserowblack').length) {
				if ($('#counteruprow').isInViewport()) {
					$('.counting').each(function () {
						var $this = $(this),
							countTo = $this.attr('data-count');

						$({ countNum: $this.text() }).animate({
							countNum: countTo
						},

							{
								duration: 1000,
								easing: 'linear',
								step: function () {
									$this.text(Math.floor(this.countNum));
								},
								complete: function () {
									$this.text(this.countNum);

								}

							});
					});
				}
			}
			/*counter fuction end*/

		});
		// header color changes dark section end

		/*Pageloader functio start*/
		if ($('.pageloader').length) {
			$('body').addClass('overH')
			setTimeout(function () {
				$('.topanimate').addClass('pageslide');
			}, 1);
			setTimeout(function () {
				$('.pageloader').addClass('rightslide');
				$('body').removeClass('overH');
			}, 2000);
			setTimeout(function () {
				$('.headtitleinner').addClass('animated');
				$('.fadefield').addClass('animated');
			}, 2400);
			setTimeout(function () {
				$('.pageloader').fadeOut();
			}, 2600);
		}
		//$('.pageloader').hide();
		// $('.headtitleinner').addClass('animated');
		// $('.fadefield').addClass('animated');

		setTimeout(function () {
			$('.headtitleanim').addClass('animated');
			$('.fadefieldblack').addClass('animated');
		}, 500);


		/* Test page scorediv show start */
		var testTop = 0;
		var testTop1 = 0;
		var getResult = $('.testformrow').height();
		if ($(".allquestionrow").length > 0) {
			var testTop = $(".allquestionrow").offset().top - 100;
		}
		if ($(".resultrow").length > 0) {
			var testTop1 = $(".testformrow").offset().top - getResult - 100;
		}
		$(window).on("scroll load", function () {
			var top = $(window).scrollTop();
			if (top <= testTop) {
				$(".red-circle-div").fadeOut();
			}
			if (top > testTop1) {
				$(".red-circle-div").fadeOut();
			}
		});
		/* Test page scorediv show End */

		/* dropdown value chagne placeholder Start*/
		$(".budchange").on("change", function () {
			var checkValue = $(this).val();
			if (checkValue != '') {
				$('.hidefield').css('display', 'inline-block');
				$('.hidefield input').attr('placeholder', checkValue + " *");
			}
			else {
				$('.hidefield').css('display', 'none');
				$('.hidefield input').attr('placeholder', '');
			}
		});
		$('.budgehide').hide();
		$('.submitClick input').click(function () {
			$('.budgehide').show();
			$('html, body').animate({
				scrollTop: $('.budgehide').offset().top - 200
			}, 10);
		});
		/* dropdown value chagne placeholder End */
	});
	/*ready funciton end*/

	/* sticky fucntion load */
	$(window).on("load resize", function () {
		// alert($(window).width());
		if ($(".column-sticky").length > 0) {
			if ($(window).width() > 767) {
				$(".column-sticky").stick_in_parent({
					offset_top: 150
				}).on("sticky_kit:stick", function (e) {
					// console.log("stick");
				}).on("sticky_kit:unstick", function (e) {
					// console.log("unstick");
				});
			}
			else {
				$(".column-sticky").trigger("sticky_kit:detach");
			}

		}
		if ($(".column-sticky-time").length > 0) {
			/* time line functio sticky */
			// if ($(window).width() > 1025) {
			$(".column-sticky-time").stick_in_parent({
				offset_top: 150
			}).on("sticky_kit:stick", function (e) {
				// console.log("stick");
			}).on("sticky_kit:unstick", function (e) {
				// console.log("unstick");
			});
		}
	});
})(jQuery);
