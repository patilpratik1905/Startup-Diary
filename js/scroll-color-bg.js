(function($) {
	jQuery(document).ready(function($){
		function getPageScroll() {
			return document.body.scrollTop || jQuery(window).scrollTop();
		}

		function SectionBgChanger(){
			var sections = [];
			//var header = jQuery('#header');
			//alert(sections);
			jQuery('.section-bg-row').each(function(){
				sections.push(jQuery(this));
				var sectionInterval = setInterval(function () {
					var WIN_HEIGHT_PERC = 0.60;
					var currentScroll = getPageScroll();
					var winHeight = jQuery(window).height();
					for(var i = 0; i < sections.length; i++){
						var secTop = sections[i].offset().top;				
						var secBottom = secTop + sections[i].outerHeight();
						sections[i].removeClass('div-'+sections[i].data('section-color'));
						if (currentScroll + (winHeight * WIN_HEIGHT_PERC) > secTop && 
							currentScroll + (winHeight * WIN_HEIGHT_PERC) < secBottom){
								var curClass = jQuery('main').attr('class');
								var sectionClass = sections[i].data('section-color');
								sections[i].addClass('div-'+sectionClass);
								if(curClass != sectionClass){
									jQuery('main').attr('class', sectionClass);

								}
							}
					}
				}, 100);
			});
				
		}

		function inits(){
			SectionBgChanger();
		}

		jQuery(function(){
			inits();
		});



	});
})(jQuery); 



