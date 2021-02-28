(function ($){

	var image = $('.slider-image'),
		gallery = $('#gallery-list'),
		next = $('#gallery').find('.next');

	next.on('click',function(event){
		gallery.find('li:nth-child(5)').prependTo(gallery);
		console.log(gallery.find('li:nth-child(5)'));
	});
})(jQuery);

(function ($){

	var navElement = $('#menu li a');
	var overlay = $('#overlay');

	navElement.on('click', function (event){
		event.preventDefault();

		overlay.hide();

		var scrollDestination = $(this).attr('href');
		scrollDestination = $('body').find(scrollDestination);
		var scrollOffset  = null;

		if(scrollDestination.attr('id') == 'gallery') {
			scrollOffset = $(scrollDestination).offset().top - 100;
		}
		else if(scrollDestination.attr('id') == 'referencie'){
			scrollOffset = $(scrollDestination).offset().top + 50;
		}
		else{
			scrollOffset = $(scrollDestination).offset().top;
		}
		console.log(scrollOffset);
		$([document.documentElement, document.body]).animate({
			scrollTop: scrollOffset
		}, 2000);
	});

})(jQuery);

(function ($){

	var menuBars = $('header').find('#menu-bars');
	var overlay = $(document.body).find('#overlay');
	var exit = $('header').find('#menu-exit');
	var menu = $('header').find('#menu');

	menuBars.on('click', function (event){
		event.preventDefault();

		overlay.show();
		exit.show();

		exit.appendTo(overlay);
		menu.appendTo(overlay);
	});

	exit.on('click', function (event){
		exit.hide();
		overlay.hide();
	});

})(jQuery);
