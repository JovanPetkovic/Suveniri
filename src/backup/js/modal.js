var $ = require('jquery');
$(function(){
	class Modal {
		constructor(sectionObj){
			this.$section = $(sectionObj);
			this.$modal = $('.modalbox');
		}
		init(){
			this.cacheDom();
			this.clickEvent();
		}
		cacheDom(){
			this.$gallery = this.$section.find('.gallery');
			this.button = this.$gallery.find('button');
			this.id = this.$section.attr('id');
			this.$button = this.$modal.find('button');
		}
		clickEvent(){
			var self = this;
			for(var i=0;i<this.button.length;i++){
				console.log($(this.button[i]));
				$(this.button[i]).on('click',function(){
					var btn = $(this);
					self.$modal.show(function(){
						self.$modal.find('#' + btn.attr('data-id')).fadeIn(500);
						$('body').css({overflow : 'hidden'})
						self.$button.on('click',function(){
							self.$modal.find('#' + btn.attr('data-id')).fadeOut(500,function(){
								self.$modal.hide();
								$('body').css({overflow : 'initial'})
							})
						})
					});
				})
			}
		}

	}
	var sections = $('.section');
	var sectionsObj = new Array();
	for(var i=0;i<sections.length;i++){
		sectionsObj.push(new Modal(sections[i]));
		sectionsObj[i].init();
	}
})