// $(window).load(function(){
// 	$('.loader-section').hide();
// });
// window.onload = function(){
// 	$(".loader-section").hide(); 
// }
$('body').append('<div class="loader-section"><img class="loader" src="obj/plain-logo1.svg"></div>');
$(window).on('load', function(){
    setTimeout(function(){
        $('.sub-containers').css({display:'block'})
    },2700)
    // alert('bing bong');
setTimeout(removeLoader, 800); //wait for page load PLUS two seconds.
});
function removeLoader(){
    $( '.loader-section').fadeOut(500, function() {
    // fadeOut complete. Remove the loading div
    $( '.loader-section' ).remove(); //makes page more lightweight 
});  
}
$(function(){
    setTimeout(function(){
        $('.logo-container').animate({opacity:1});
        $('.layer').animate({
            bottom:'0px'
            // '-webkit-transform':'translate(0,-100%)'
        },1200,'easeOutQuad');
    },1000)
    // setTimeout(function(){
    //     $('.tagline').css({opacity:1});
    //     $('.date-container').css({opacity:1});
    // },2200);
});
$(".know-more").click(function(){
    $(".cross").removeClass('rotate')
    // $('.tail').css({display:'inline-block'}).promise().done(function(){
    // 	$('.tail').addClass('animated-tail');
    // })
    // $('.arrow').animate({top:'59px'},'linear',function(){
    //     setTimeout(function(){
            $('.logo-container').animate({
                top:'-23%',
                opacity:0
            },400,'easeInQuart');

            $('.date-container').animate({
                // left:'0%',
                opacity:0
            },400,'easeInQuart');

            $('.ggsipu-container').animate({
                // left:'0%',
                opacity:0
            },400,'easeInQuart');

            $('.tagline-container').animate({
                // left:'100%',
                opacity:0
            },400,'easeInQuart');

            $('.sub-containers').css({display:'none'});

            $('.layer').animate({
                bottom:'-500px'
                // transform:'translate(0,100%)'
            },400,'easeInQuart',function(){
                $('.know-block').animate({
                    top:'0'
                },function(){

                })
            })
    //     },200);
    // })
});
$(".cross").click(function(){
    $(".cross").addClass('rotate')
    setTimeout(function(){
        $('.sub-containers').css({display:'block'})
        $('.arrow').animate({top:'26px'},200,'easeInQuart')
        $('.tail').css({display:'none'})
        $('.logo-container').animate({
            top:'23%',
            opacity:1
        },600,'easeInQuart');

        $('.date-container').animate({
            // left:'50%',
            opacity:1
        },600,'easeInQuart');

        $('.ggsipu-container').animate({
            // left:'50%',
            opacity:1
        },600,'easeInQuart');

        $('.tagline-container').animate({
            // left:'50%',
            opacity:1
        },600,'easeInQuart');
        $('.know-block').animate({
            top:'-100%'
        },400,'easeOutQuart',function(){
            $('.layer').animate({
                bottom:'0'
            },function(){

            })
        })
    },200);
});