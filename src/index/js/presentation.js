var $ = require("jquery");
$(function(){
	var $img = $('.imgbox');
	console.log($img.length);
	for(var i=0;i<$img.length;i++){
		$($img[i]).hover(	
			function(){$(this).addClass('hover')},
			function(){$(this).removeClass('hover')}
		)
	}

})
