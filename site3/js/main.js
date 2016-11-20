function showEl(el) {
    $(el).css({visibility:"visible"}).addClass('abyby');
    $(el).children().eq(0).removeClass('animated slideOutLeft').addClass('animated slideInLeft').animate({'left':'100px'},200);
    $(el).children().eq(1).removeClass('animated fadeOut').addClass('animated slideInRight');
}
function moveActiveDots(index1,index2,step){
    if(step==1) step=-20;
    $(".dots").css({
        'transform':'translate('+step+'px,0)'
    });
    $(".dots").children().eq(index1).removeClass('active');
    $(".dots").children().eq(index2).addClass('active');
}
function goRight(arr){
    for(var i=0;i<arr.size();i++){
        if($(arr[i]).hasClass('abyby')){
            $(arr[i]).children().eq(0).removeClass('animated slideInLeft').addClass('animated slideOutLeft').animate({'left':'-100px'},200);
            $(arr[i]).children().eq(1).removeClass('animated slideInRight').addClass('animated fadeOut');
            $(arr[i]).removeClass('abyby');
            if(i!=arr.size()-1){
                setTimeout(function(){showEl(arr[i+1])}, 500);
                moveActiveDots(i,i+1,-20-30*(i+1));
            }
            if(i==arr.size()-1){
                setTimeout(function(){ showEl(arr[0])}, 500);
                moveActiveDots(i,0,1);
            }
            break;
        }
    }
}

$(function() {
    var arr=$('.sliderCont .item');
    for(var i=0;i<arr.size();i++)
    {
        $(".dots").append("<span class=\"dot\"></span>");
    }
    var dotsArr=$(".dots .dot");
    var activeDotHeight=$(".dots").children().eq(0).height();
    $(".dots").css({
        'transform':'translate(-20px,0)'
    });
    $(".dots").children().eq(0).addClass('active');
    $('.navRight').click(function (){
        goRight(arr);
    });

    var h = $(window).height();
    $('.forS2 .bgText').addClass('animated fadeOutLeft');
    $('.forS1 .kyb').removeClass('animated fadeOut').addClass('animated fadeIn');
    $('.forS1 .bgText').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
    $('body').css({'background':'#f8f8f8'});
    $(window).scroll(function(){
        if ( $(this).scrollTop() >= $(".forS2").offset().top-300) {
            $('.forS1 .kyb').addClass('animated fadeOutRight');
            $('.forS1 .bgText').addClass('animated fadeOutLeft');
            $('.forS2 .bgText').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
            $('body').css({'background':'url(\'img/bgS2.png\') center top repeat, #00bad9'});
        }
        if ($(this).scrollTop()<=$(".forS1").offset().top+$(".forS1").height()-300) {
            $('.forS2 .bgText').addClass('animated fadeOutLeft');
            $('.forS1 .kyb').removeClass('animated fadeOutRight').addClass('animated fadeIn');
            $('.forS1 .bgText').removeClass('animated fadeOutLeft').addClass('animated fadeInLeft');
            $('body').css({'background':'#f8f8f8'});
        }
    });
});