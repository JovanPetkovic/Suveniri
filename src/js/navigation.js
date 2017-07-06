$(function(){
    var navigation = {
        init: function(){
            this.cacheDom();
            this.buttonInit();
            this.distInit();
            this.buttonClick();
            this.navPosition();
            this.buttonSwitch();
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
            this.distHeight = new Array;
            this.distTop =  new Array;
            this.distBottom = new Array;
            for(var i=0;i<this.$dist.length;i++){
                this.distHeight[i] = this.$dist[i].height();
                this.distTop[i] = this.$dist[i].offset().top - this.distHeight[i]/4;
                this.distBottom[i] = this.distTop[i] + this.distHeight[i];
                console.log(this.distHeight[i],this.distTop[i],this.distBottom[i]);
            }
        },
        buttonClick: function(){
            var self = this;
            function btnClick(index){
                self.$btn.forEach(function(element){
                    element.removeClass('clicked');
                })
                this.addClass('clicked');
                $(window).unbind('scroll');
                self.navPosition();
                $('html,body').animate({scrollTop:self.$dist[index].offset().top}, 1000, function(){
                    self.buttonSwitch();
                });
            }
            this.$btn.forEach(function(element,index){
                element.on('click', function(){
                    btnClick.call(element,index);
                })
            })
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
                        this.$nav.css({position:'static'});
                    }
                }.bind(this))
            }.bind(this))
        },
        buttonSwitch: function(){
            var self = this;
            $(window).on('scroll', function(){
                var wScroll = $(window).scrollTop();
                window.requestAnimationFrame(function(){
                    self.$dist.forEach(function(element,index){
                        if((wScroll<self.distBottom[index])&&(wScroll>self.distTop[index])){
                            self.$btn.forEach(function(element){
                                element.removeClass('clicked');
                            })
                            self.$btn[index].addClass('clicked');
                        }
                    })
                })
            })
        }
    }
    navigation.init();

})
