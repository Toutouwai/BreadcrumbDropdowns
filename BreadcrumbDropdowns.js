$(function() {
	$(document).on('click', function(event) {
		const $dropdowns = $('.uk-breadcrumb .breadcrumb-dropdown');
		const $toggle = $(event.target).closest('.dropdown-toggle');
		if($toggle.length) {
			const $related_dropdown = $toggle.siblings('.breadcrumb-dropdown');
			$related_dropdown.toggleClass('visible');
			$dropdowns.not($related_dropdown).removeClass('visible');
			// For Konkat theme, calculate max-height dynamically to allow for variable offset top
			if($('body').hasClass('AdminThemeUikitDefault')) {
				const offset = $related_dropdown.offset().top + 10;
				$related_dropdown.css('max-height', `calc(100vh - ${offset}px)`);
			}
		} else {
			$dropdowns.removeClass('visible');
		}
	});
});
