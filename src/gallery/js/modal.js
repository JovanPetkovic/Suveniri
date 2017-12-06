var $ = require('jquery');
$(function(){
	var nav = $('.nav')[0];
	var $img = $('.imgbox');
	for(var i=0;i<$img.length;i++){
		$($img[i]).hover(	
			function(){
				var self = $(this);
				var $btn = $(this).find('button')
				self.addClass('hover');
				$btn.bind('click',function(){
					var src = self.find('img').attr('src');
					var $img = $('.imgshow');
					var $modal = $('.modal')
					$img.attr('src',src);
					$modal.show().addClass('animation-show');
					setTimeout(function(){
						$modal.removeClass('animation-show');
						$modal.css('opacity',1);
					},500)
					$modal.on('click',function(){
						$modal.addClass('animation-hide');
						setTimeout(function(){
							$modal.hide();
							$modal.removeClass('animation-hide');
						},500)
					})
				})
			},
			function(){$(this).removeClass('hover')}
		)
	}
})