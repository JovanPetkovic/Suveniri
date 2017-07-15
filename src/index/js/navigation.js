var $ = require("jquery");
$(function(){
    var navigation = {
        init: function(){
            this.cacheDom();
            this.buttonInit();
            this.distInit();
            this.buttonClick();
            this.navPosition();
            this.buttonSwitch();
            this.$dist[2].hide();
        },
        cacheDom: function() {
            this.$nav = $('.navigation');
            this.btn = this.$nav.find('button');
            this.topPosition = this.$nav.offset().top;
        },
        buttonInit: function(){
            this.$btn = new Array();
            this.$dist = new Array();
            for(var i=0;i<this.btn.length;i++){
                this.$btn.push($(this.btn[i]))
                this.$dist.push($('#' + this.$btn[i].html()));
            }
        },
        distInit: function(){
            this.offsetTop = new Array;
            this.distHeight = new Array;
            this.distTop =  new Array;
            this.distBottom = new Array;
            for(var i=0;i<this.$dist.length;i++){
                this.distHeight[i] = this.$dist[i].height();
                this.offsetTop[i] = this.$dist[i].offset().top - 50;
                this.distTop[i] = this.offsetTop[i] - this.distHeight[i]/5;
                this.distBottom[i] = this.distTop[i] + this.distHeight[i];
            }
        },
        buttonClick: function(){
            var self = this;
            this.$btn.forEach(function(element,index){
                element.on('click', function(){
                    btnClick.call(element,index);
                })
            })
            function btnClick(index){
                $(window).unbind('scroll');
                self.$btn.forEach(function(element){
                    element.removeClass('clicked');
                })
                this.addClass('clicked');
                self.navPosition();
                $('html,body').animate({scrollTop:self.offsetTop[index]}, 1000, function(){
                    if(index===2){
                        self.$dist[2].slideDown(1000,function(){
                            $(window).scroll(function(){
                                $(window).unbind('scroll');
                                self.buttonSwitch();
                                self.navPosition();
                            });
                            var interval = setInterval(function(){
                                if(self.$btn[2].attr('class')!='clicked'){
                                    self.$dist[2].slideUp(1000);
                                    clearInterval(interval);
                                }
                            },100)
                        });
                    }
                    else{
                        self.buttonSwitch();
                    }
                });
            }
        },
        navPosition: function() {
            $(window).on('scroll',function(){
                var wScroll = $(window).scrollTop();
                window.requestAnimationFrame(function(){
                    if(this.topPosition<wScroll){
                        this.$nav.css({
                            position:'fixed',
                            top: '0'
                        });
                    }
                    else {
                        this.$nav.css({
                            position:'absolute',
                            top: '100%'
                        });
                    }
                }.bind(this))
            }.bind(this))
        },
        buttonSwitch: function(){
            var self = this;
            $(window).on('scroll', function(){
                var wScroll = $(window).scrollTop();
                window.requestAnimationFrame(function(){
                    for(var i=0;i<self.$dist.length-1;i++){
                        if((wScroll<self.distBottom[i])&&(wScroll>self.distTop[i])){
                            self.$btn.forEach(function(element){
                                element.removeClass('clicked');
                            })
                            self.$btn[i].addClass('clicked');
                        }
                    }
                })
            })
        }
    }
    navigation.init();

})
