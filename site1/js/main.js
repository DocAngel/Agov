function showEl(el) {
    $(el).css({visibility:"visible"}).addClass('abyby');
    $(el).children().eq(0).removeClass('animated slideOutLeft').addClass('animated slideInLeft').animate({'left':'100px'},200);
    $(el).children().eq(1).removeClass('animated fadeOut').addClass('animated slideInRight');
}
function goLeft(arr){
    for(var i=0;i<arr.size();i++){
        if($(arr[i]).hasClass('abyby')){
            $(arr[i]).children().eq(0).removeClass('animated slideInLeft').addClass('animated slideOutLeft').animate({'left':'-100px'},200);
            $(arr[i]).children().eq(1).removeClass('animated slideInRight').addClass('animated fadeOut');
            $(arr[i]).removeClass('abyby');
            if(i!=0){
                setTimeout(function(){showEl(arr[i-1])}, 500);
            }
            if(i==0){
                setTimeout(function(){ showEl(arr[arr.size()-1])}, 500);
            }
            break;
        }
    }
}
function goRight(arr){
    for(var i=0;i<arr.size();i++){
        if($(arr[i]).hasClass('abyby')){
            $(arr[i]).children().eq(0).removeClass('animated slideInLeft').addClass('animated slideOutLeft').animate({'left':'-100px'},200);
            $(arr[i]).children().eq(1).removeClass('animated slideInRight').addClass('animated fadeOut');
            $(arr[i]).removeClass('abyby');
            if(i!=arr.size()-1){
                setTimeout(function(){showEl(arr[i+1])}, 500);
            }
            if(i==arr.size()-1){
                setTimeout(function(){ showEl(arr[0])}, 500);
            }
            break;
        }
    }
}
function replaceBig(scr){
    $('.relbl>img').attr('scr',scr);
}
$(function() {
    var arr=$('.sliderCont .item');
    $('.left').click(function (){
        goLeft(arr);
    });
    $('.right').click(function (){
        goRight(arr);
    });
    $('.smallImgS>img').click(function (){
        $('.relbl>img').attr('src',$(this).attr('alt'));
        $('.smallImgS>img').removeClass('active');
        $(this).addClass('active');
    });
    $('a.minus').click(function (e){
        e.preventDefault();
        var str = parseInt($('.qty #res').text());
        if(str!=1)
            $('.qty #res').text(str-1);
    });
    $('a.plus').click(function (e){
        e.preventDefault();
        var str = parseInt($('.qty #res').text());
        $('.qty #res').text(str+1);
    });
});