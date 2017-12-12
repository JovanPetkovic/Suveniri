var $ = require('jquery');
$(function(){
	var $nav = $('.nav');
	var $img = $nav.find('img');
	var $links = $nav.find('.links');
	var $button = $nav.find('.dropdown');
	$button.on('click',function(){
		openMenu()
	})
	closeMenu();
	function closeMenu(){
		elementShow($img);
		elementHide($links);
		$button.css({"background-image": "url(images/menu.png)"})
		$button.unbind('click');
		$button.on('click',function(){
			openMenu();
		})	
	}
	function openMenu(){
		elementHide($img);
		elementShow($links);
		$button.css({"background-image": "url(images/close.png)"})
		$button.unbind('click');
		$button.on('click',function(){
			closeMenu();
		})
	}
	function elementShow(element){
		element.css({visibility: "visible"});
		element.addClass("animation-show");
		setTimeout(function(){
			element.css({opacity: 1});
			element.removeClass("animation-show");
		},500);
	}
	function elementHide(element){
		element.addClass("animation-hide");
		setTimeout(function(){
			element.css({opacity: 0})
			element.removeClass("animation-hide");
			element.css({visibility: "hidden"});
		},500);
	}
})