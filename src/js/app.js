$(document).ready(function() {

	var _width = $(window).width();

	$('.navbar a, footer a[href="#myPage"]').on('click', function(event) {
		if (this.hash !== '') {

			event.preventDefault();

			var hash = this.hash;

			$('html, body').animate({
				scrollTop: $(hash).offset().top
			}, 900, function() {
				window.location.hash = hash;
			});
		}
	});

	$(window).scroll(function() {
		$('.slideanim').each(function() {
			var pos = $(this).offset().top;

			var winTop = $(window).scrollTop();
			if (pos < winTop + 600) {
				$(this).addClass('slide');
			}
		});
	});
	if (_width > 1366) {
		var _height = $('.timeline .timeline-img').height();
		$('.timeline .timeline-text').css({
			'margin-top': _height / 3
		})
	}
})