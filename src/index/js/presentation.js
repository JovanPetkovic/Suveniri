var $ = require("jquery");
$(function(){
    class Presentation{
        constructor(domObject){
            this.$presentation= $(domObject);
        }
        init(){
            this.cacheDom();
            this.varBtn();
            this.buttonEvent();
        }
        varBtn(){
            this.btn = this.$presentation.find('button');
            this.$btn = new Array();
            for(var i=0;i<this.btn.length;i++){
                this.$btn.push($(this.btn[i]));
            }
        }
        cacheDom(){
            this.$ul = this.$presentation.find('ul');
            this.$notHidden = $(this.$ul.find('li').first()); // shown picture
        }
        buttonClick(domButton){
            var speed = 500
            var self= this;
            var button = $(domButton); //button that is clicked
            var cover = self.$presentation.find('#'+button.attr('data-id')); //picture that matches the button
            this.$notHidden.fadeOut(speed);
            cover.fadeIn(speed);
            this.$notHidden = cover;
        }
        buttonEvent(){
            var self = this;
            for(var i=0;i<this.$btn.length;i++){
                this.$btn[i].on('click', function(){
                    self.buttonClick($(this));
                })
            }
        }
    }
    var present = $('.presentation');
    var presentObjectArray = new Array();
    for(var i=0;i<present.length;i++){
        presentObjectArray.push(new Presentation(present[i]));
        presentObjectArray[i].init();
    }
})
