var $ = require("jquery");
$(function(){
    var contact = {
        init: function(){
            contact.cacheDom();
            contact.buttonClick();
        },
        cacheDom: function(){
            this.$btn = $('.nav button:nth-of-type(3)');
            this.$contact = $('.contactus');
            this.$contactButton = this.$contact.find('button');
        },
        buttonClick(){
            var self = this;
            this.$btn.on('click',function(){
                self.$contact.slideDown();
                self.$contactButton.click(function(){
                    self.$contact.slideUp();
                })
            })
        }
    }
    contact.init();
})
