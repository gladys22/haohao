var $li=$(".banner_bg>ul>li"); //轮播下的li
var $lih=$li.length;
var timer;   //定时�?
var i=0;
timer=setInterval(moveAuto,2000);
function moveAuto() {
    i++;
    if (i >= $lih) {
        i = 0;
    }
    $li.eq(i).animate({opacity: 1}, 1000).siblings().animate({opacity: 0}, 1000)
    $(".card>a").eq(i).addClass("active").siblings().removeClass("active");
}
$("div.container").mouseenter(function(){
    clearInterval(timer);
    timer=null;
}).mouseleave(function(){
    timer=setInterval(moveAuto,2000);
})
$(".banner_prev").click(function(){
    moveAuto();
})
$(".banner_next").click(function(){
    i--;
    if (i <=0 ) {
        i = $lih-1;
    }
    $li.eq(i).animate({opacity: 1}, 1000).siblings().animate({opacity: 0}, 1000)
})
$(".card").click(function(e){
   i= $(e.target).index();
    $li.eq(i).animate({opacity: 1}, 1000).siblings().animate({opacity: 0}, 1000)
    $(".card>a").eq(i).addClass("active").siblings().removeClass("active");
})

















