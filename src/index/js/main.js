var $ = require("jquery");
$(function(){
    var $down = $('.landing').find('button');
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
    })
    $down.on('click',function(){
        console.log('hey');
        $('body').animate({scrollTop : window.innerHeight -$nav.height()}, 1000);
    })
    var $contactBtn = $($('.links').find('button')[0]);
    var $contact = $('.links').find('.contact');
    var $contactExit = $('.contact').find('button');
    console.log($contactBtn);
    $contact.css({
            display: 'flex'
        }).hide();
    $contactBtn.on('click', function(){
        $contact.slideDown(500);
        $contactExit.on('click', function(){
            $contact.slideUp(500);
        })
    })
})
