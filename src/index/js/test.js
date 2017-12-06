class Button {
	constructor(jqueryObj){
		this.$Obj = jqueryObj;
	}
	init(){
		this.cacheDom();
		this.clicked();
	}
	cacheDom(){
		this.$Img = $('.'+ this.$Obj.attr('data-class')).find('.imgbox');
		for(var i=0;i<this.$Img.length;i++){
			this.$Img[i] = $(this.$Img[i]);
		}
		this.$ImgBox = $('.' + this.$Obj.attr('data-class'));
	}
	showImg(i){
		this.$Img[i].addClass('animation-show');
		var myVar = this.$img[i]; //Napravio sam novu promeljivu
		setTimeout(function(){  // jer se i menja
			myVar.removeClass('animation-hide');
			myVar.css({opacity : 1});
			myVar.removeClass('animation-show');
		},1000)
		i++;
		if (i<8){
			setTimeout(function(){
				this.showImg(i);
			},250);
		}
	}
	hideImg(i){
		this.$Img[i].addClass('animation-hide');
		var myVar = this.$Img[i];
		setTimeout(function(){
			myVar.removeClass('animation-show');
			myVar.css({opacity: 0});
			myVar.removeClass('animation-hide');
		},500)
		i++;
		if (i<8){
			setTimeout(function(){
				this.hideImg(this.$Img,i);
			},250);
		}
	}
	hideImgBox(){
		setTimeout(function(){
			this.$ImgBox.css({
				visibility: 'hidden'
			})
		},1750)
	}
	showImgBox(){
		this.$ImgBox.css({
			visibility: 'visible'
		})
	}
	clicked(){
		if(this.$Obj.hasClass('clicked')){
			this.clickedValue = 1;
		}
		else{
			this.clickedValue = 0;
		}
	}
}

	var buttons = $('.buttons').find('button');
	var buttonObjArr = new Array();
	var clicked = new Object;
	console.log(ObjX.clickedValue);
	for(var i=0;i<buttons.length;i++){
		buttonObjArr.push(new Button($(buttons[i])));
		buttonObjArr[i].init();
		if(buttonObjArr[i].clicked()){
			clicked = buttonObjArr[i];
		}
	}
	for(var i=0;i<buttonObjArr.length;i++){
		buttonObjArr[i].on('click',function(){
			var self = buttonObjArr[i];
			var p = 0;
			var q = 0;
			clicked.hideImg(p);
			setTimeout(function(){
				self.showImg(q);
			},1000);
		})
	}



