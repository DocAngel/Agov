var el = '.forS2 .blocks';
var curr = parseInt($(el).css('left'));
var step=-1;
var mouseover = false;
var arr= $(el).children();
var size=0;
function moveIt() {
    $(el).mouseenter(function(){
        mouseover = true;
        }).mouseleave(function(){
        mouseover = false;
    });
    if(!mouseover){
        $(el).css({'left':curr+'px'});
        curr+=step;
    }
    if(Math.abs(curr)>=size)
    {
        step=1;
        console.log(step);
    }
    if(curr>200)
    {
        step=-1;
        console.log(step);
    }
}
$(function() {
    for(var i=0;i<arr.size();i++){
        size+=$(arr[i]).width();
    }
    setInterval(moveIt,30);
});