(function($) {

	$(function(){
		$(document).click(function(event) {
			var $dropdowns = $('.uk-breadcrumb .breadcrumb-dropdown');
			var $toggle = $(event.target).closest('.dropdown-toggle');
			if($toggle.length) {
				var $related_dropdown = $toggle.siblings('.breadcrumb-dropdown');
				$related_dropdown.toggleClass('visible');
				$dropdowns.not($related_dropdown).removeClass('visible');
			} else {
				$dropdowns.removeClass('visible');
			}
		});
	});

}(jQuery));
