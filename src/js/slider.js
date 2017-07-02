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
                this.$li[i%length].fadeOut(speed,function(){
                    this.$li[(i+1)%length].fadeIn(speed);
                    i++;
                }.bind(this));
            }.bind(this),pause,function(){

            });
        }
    }
    slider.init();
})
