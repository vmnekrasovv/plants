(function($){

	/*$(window).on('load resize', function(){
		
		let wW = this.innerWidth;
		let toolbar = $('.toolbar'); 
		let wrapperMenu = $('.wrapper-menu');

		if(wW <= 990){
			toolbar.appendTo(wrapperMenu);
		}
	});*/

	$(document).ready(function(){ 

		$('.slider').slick({
			speed: 2500,
			slidesToShow: 1,
			slidesToScroll: 1,
			swipeToSlide: true,
			autoplay: true,
			autoplaySpeed: 5000,
			arrows: false,
			dots: true,
			dotsClass: "pagination",
			responsive: [
				
				{
				  breakpoint: 768,
				  settings: {
				  	speed: 500,
				  	autoplaySpeed: 5000,
				  	swipeToSlide: false
				  }
				}
			]
		});


		$(".range").slider({
	        animate: "slow",
	        range: true,   
	        min: 39,
	        max: 1650,
	        values: [ 39, 1230],
	       	slide : function(event, ui) {    
	            $(".range-result .value").text( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );        
	        }
	    });

	    $(".range-result .value").text("$" + $(".range").slider("values", 0) + " - $" + $(".range").slider("values", 1));

		

	    $('.sidebar-label').on('click', function(){
	    	$(this).parent().toggleClass('sidebar-active');
	    });


		/*$('.scroll-down').on('click', function(){
			$('html, body').animate({
				scrollTop: $('.navbar').offset().top
			}, 500, function(){ 
				//console.log('callback function'); 
			});
		});

		$(window).on('scroll load', function(e){
			if(pageYOffset > $('.header').outerHeight(true)){
				$('.navbar').addClass('fixed');
				$('body').addClass('navbar-fixed');
			} else {
				$('.navbar').removeClass('fixed');
				$('body').removeClass('navbar-fixed');
			}
		});


		$('.header').parallax({
			imageSrc: 'images/dest/header_bg.jpg',
			speed: .7,
		});*/
		
	});
})(jQuery);