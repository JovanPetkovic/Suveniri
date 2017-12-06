var $ = require('jquery');
$(function(){
	var $nav = $('.nav');
    $(window).on('scroll',function(){
        var wScroll = $(window).scrollTop();
        window.requestAnimationFrame(function(){
            if(wScroll>0){
                $nav.addClass('nav-scroll');
            }
            else{
                $nav.removeClass('nav-scroll');
            }
        });
    });
    var $contactBtn = $($('.links').find('button')[0]);
    var $contact = $('.links').find('.contact');
    var $contactExit = $('.contact').find('button');
    $contact.css({
            display: 'flex'
        }).hide().css({
            visibility: 'visible'
        });
    $contactBtn.on('click', function(){
        $contact.slideDown(500);
        $contactExit.on('click', function(){
            $contact.slideUp(500);
        })
    });
})