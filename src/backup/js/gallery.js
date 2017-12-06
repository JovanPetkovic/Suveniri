var $ = require('jquery');
$(function(){
	class cover{
		constructor(domElement){
			this.$cover = $(domElement);
		}
		cacheDom(){
			this.top = this.$cover.offset().top;
			this.bottom = this.top + this.$cover.height();
			this.$h = this.$cover.find('h1');
		}
		scrollEvent(){
			var nav = $('.nav')[0];
			var self = this;
			var scrollPx = 0;
			console.log(self.top + 400);
			$(window).on('scroll',function(){
				var wScroll = $(window).scrollTop();
				window.requestAnimationFrame(function(){
					if((wScroll+50>=self.top)&&(wScroll<=self.bottom)){
						nav.id = 'modal';
						if((wScroll<self.top)||(wScroll+50>self.bottom)){
							nav.id = 'x';
						}
					}
					if((wScroll>=self.top)&&(wScroll<=self.bottom)){
						self.$cover.css({'background-attachment': 'fixed'});
						if(wScroll<self.bottom){
							self.$h.css({
								transform : 'translate(0, ' + (wScroll-self.top)/4 +'%)',
								transition: '0s all'
							});
						}
					}
					else{
						self.$cover.css({'background-attachment': 'scroll'});
						self.$h.css({
							transform : 'translate(0,0)',
							transition: '1s'
						})
						scrollPx = 0;
					}
				})
			})
		}
	}
	var arr = document.getElementsByClassName('cover');
	var objArr = new Array();
	for(var i=0;i<arr.length;i++){
		objArr[i] = new cover(arr[i]);
		objArr[i].cacheDom();
		objArr[i].scrollEvent()
	}
})