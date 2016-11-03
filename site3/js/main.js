$(function() {
    var h = $(window).height();
    $('.forS2 .bgText').addClass('animated fadeOutLeft');
    $('.forS1 .kyb').removeClass('animated fadeOut').addClass('animated fadeIn');
    $('.forS1 .bgText').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
    $('body').css({'background':'#f8f8f8'});
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= $(".forS2").offset().top-300) {
            console.log($(this).scrollTop());
            $('.forS1 .kyb').addClass('animated fadeOutRight');
            $('.forS1 .bgText').addClass('animated fadeOutLeft');
            $('.forS2 .bgText').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
            $('body').css({'background':'url(\'img/bgS2.png\') center top repeat, #00bad9'});
        }
        if ($(this).scrollTop()<=$(".forS1").offset().top+$(".forS1").height()-300) {
            console.log($(this).scrollTop()+" "+$(".forS2").offset().top+$(".forS2").height);
            $('.forS2 .bgText').addClass('animated fadeOutLeft');
            $('.forS1 .kyb').removeClass('animated fadeOutRight').addClass('animated fadeIn');
            $('.forS1 .bgText').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
            $('body').css({'background':'#f8f8f8'});
        }
    });
});