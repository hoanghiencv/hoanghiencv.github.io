 $(function(){
 $('.toggle-normal').click(function(event) {
 	//console.log("ok");
 	 $(this).parent().prev().parent().toggleClass('menu-open')
 });
 $('#menu-options ul li:nth-child(1) a').on('click',function(event) {

		event.preventDefault();
		
		/* Act on the event */
		$('html, body').animate({ scrollTop: $('#home').offset().top }, 1400);
	});
 $('#menu-options ul li:nth-child(2) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({ scrollTop: $('#about').offset().top }, 1400);
	});
 $('#menu-options ul li:nth-child(3) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({ scrollTop: $('#education').offset().top }, 1400);
	});
 $('#menu-options ul li:nth-child(4) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({ scrollTop: $('#skills').offset().top }, 1400);
	});
 $('#menu-options ul li:nth-child(5) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({ scrollTop: $('#experience').offset().top }, 1400);
	});
 $('#menu-options ul li:nth-child(6) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({ scrollTop: $('#portfolios').offset().top }, 1400);
	});
 
 $('#menu-options ul li:nth-child(7) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({ scrollTop: $('#interest').offset().top }, 1400);
	});
 $('#menu-options ul li:nth-child(8) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({ scrollTop: $('#testimonials').offset().top }, 1400);
	});
 $('#menu-options ul li:nth-child(9) a').on('click',function(event) {
		event.preventDefault();
		/* Act on the event */
		$('html, body').animate({ scrollTop: $('#contact').offset().top }, 1400);
	});
 $('#about-btn .about-btn a').on('click', function(event){
 	event.preventDefault();
 	$('html, body').animate({ scrollTop: $('#contact').offset().top }, 1400);
 });
 wow = new WOW(
                      {
                      boxClass:     'wow',      // default
                      animateClass: 'animated', // default
                      offset:       0,          // default
                      mobile:       true,       // default
                      live:         true        // default
                    }
                    )
 
  new WOW().init();

})  
 