$(document).ready(function(){
	
	/* smooth scrolling */
	$('a[href^="#"]').on('click',function (e) {
	    e.preventDefault();

	    var target = this.hash;
	    var $target = $(target);

	    $('html, body').stop().animate({
	        'scrollTop': $target.offset().top
	    }, 900, 'swing', function () {
	        window.location.hash = target;
	    });
	});
	
	
	/* background video autoplay */
	
	(function() {
  /**
   * Video element
   * @type {HTMLElement}
   */
		var video = document.getElementById("my-video");
  /**
   * Check if video can play, and play it
   */
		video.addEventListener( "canplay", function() {
			video.play();
		});
	})();
	
	
});