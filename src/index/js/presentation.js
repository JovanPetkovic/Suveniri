var $ = require("jquery");
$(function(){
	


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
	var buttons = $('.buttons').find('button');
	for(var i=0;i<buttons.length;i++){
		$(buttons[i]).on('click',function(){
			disableButtons();
			var clicked = $('.clicked');
			var clickedImg = $('.'+clicked.attr('data-class')).find('.imgbox');
			clicked.removeClass('clicked');
			var self = $(this);
			self.addClass('clicked');
			clicked = $('.clicked');
			var img = $('.'+self.attr('data-class')).find('.imgbox');
			$(img[0]).parent().css({visibility: 'visible'});
			setTimeout(function(){
				enableButtons();
				self.attr('disabled','disabled');
			},3000);
			setTimeout(function(){
				$(clickedImg[0]).parent().css({visibility : 'hidden'})
			},1750);
			var j=0;
			var k=0;
			function showImg(){
				$(img[k]).addClass('animation-show');
				var myVar = $(img[k]);
				setTimeout(function(){
					myVar.removeClass('animation-hide');
					myVar.css({opacity : 1});
					myVar.removeClass('animation-show');
				},1000)
				k++;
				if (k<8){
					setTimeout(showImg,250);
				}
			}
			function hideImg(){
				$(clickedImg[j]).addClass('animation-hide');
				var myVar = $(clickedImg[j]);
				setTimeout(function(){
					myVar.removeClass('animation-show');
					myVar.css({opacity: 0});
					myVar.removeClass('animation-hide');
				},500)
				j++;
				if (j<8){
					setTimeout(hideImg,250);
				}
				/*Ovde sam morao rekurziju jer nisam 
				znao kako da prenesem argument j
				u setTimeout funkciju*/
			}
			hideImg();
			setTimeout(showImg,1000);
		})
	function disableButtons(){
		for(var i=0;i<buttons.length;i++){
			$(buttons[i]).attr('disabled','disabled');
		}
	}
	function enableButtons(){
		for(var i=0;i<buttons.length;i++){
			$(buttons[i]).removeAttr('disabled');
		}
	}
	}



	
})
