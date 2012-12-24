(function() {
	var $container, $controllers, $img, Page;
	init();
	
	function init() {
		Page = 1;
		$img = $("<img class='slide-image' />");
		updateSlide();
		$controllers = $("<div class='slide-controllers' />");
		$controllers.append(
			$("<button type='button'>Prev</button>").on("click", prevPage)
		);
		$controllers.append(
			$("<button type='button'>Next</button>").on("click", nextPage)
		);
		$container = $("<div class='slide' />").append($img).append($controllers);
		$("body").empty().append($container);
	}
	
	function prevPage() {
		Page--;
		if (Page < 1) Page = 1;
		updateSlide();
	}
	
	function nextPage() {
		Page++;
		updateSlide();
	}
	
	function updateSlide() {
		$img.attr("src", getSlideFile(Page));
	}
	
	function getSlideFile(page) {
		return "slide" + ("00" + page).substr(-2) + ".jpg";
	}
})();
