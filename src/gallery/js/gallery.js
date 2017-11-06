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
			var self = this;
			var scrollPx = 0;
			var lastScrollTop = 0;
			$(window).on('scroll',function(){
				var c;
				var wScroll = $(window).scrollTop();
				window.requestAnimationFrame(function(){
					if(lastScrollTop<$(window).scrollTop()){
						c = 1;
					}
					else{
						c= 0;
					}	
					if(wScroll>self.top){
						if(c){
							scrollPx+=5;
						}
						else{
							scrollPx-=5;
						}
						self.$cover.css({'background-attachment': 'fixed'});
						if(wScroll<self.bottom){
							self.$h.css({
								transition: '0s',
								transform : 'translate(0, ' + scrollPx +'px)'
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
					lastScrollTop = $(window).scrollTop();
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