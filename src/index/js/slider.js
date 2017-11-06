var $ = require("jquery");
$(function(){
    var slider = {
        init: function(){
            this.cacheDom();
            this.startSlider();
        },
        cacheDom: function(){
            this.$slider = $('.slider');
            this.$ul = this.$slider.find('ul');
            this.$li =this.$ul.children();
            for(var i=0;i<this.$li.length;i++){
                this.$li[i] = $(this.$li[i]);
            }
        },
        startSlider: function(){
            for(var i=1; i<this.$li.length;i++){
                this.$li[i].hide();
            }
            var i = 0;
            var speed = 2000;
            var pause = 8000;
            var length = this.$li.length;
            setInterval(function(){
                this.$li[i%length].fadeOut(speed);
                this.$li[(i+1)%length].fadeIn(speed);
                i++;
            }.bind(this),pause,function(){

            });
        }
    }
    var arrow = {
        init: function(){
            this.cacheDom();
            this.arrowClick();
        },
        cacheDom: function(){
            this.$btn = $('.godown').find('button');
        },
        arrowClick: function(){
            this.$btn.click(function(){
                $('html,body').animate({scrollTop:$(window).height()},1000);
            })
        }
    }
    slider.init();
    arrow.init();
})
