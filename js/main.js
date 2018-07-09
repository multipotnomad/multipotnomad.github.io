function navOpen() {
		$(".js-navopen, .js-navclose").click(function(e){
			e.preventDefault();
			if($(".menu-icon").hasClass("is-open")){
				$(".menu-icon").removeClass("is-open");
				$(".menu-icon_overlay").addClass("menu-icon_overlay-hide");
			}else{
				$(".menu-icon").addClass("is-open");
				$(".menu-icon_overlay").removeClass("menu-icon_overlay-hide");
			}
		});
		$(".menu-icon_list li").each(function(i, elem) {
			var $btn = $(this).find("a");
			$btn.click(function(){
				$(".menu-icon").removeClass("is-open");
				$(".menu-icon_overlay").addClass("menu-icon_overlay-hide");
			});
		});
		$(".menu-icon_item_contact a").click(function(e){
			e.preventDefault();
			gtag('event', ' click', {'event_category': 'click_contact','event_label': 'header_contact_sp'});
			$(".menu-icon").removeClass("is-open");
			$(".menu-icon_overlay").addClass("menu-icon_overlay-hide");
		});
	}
