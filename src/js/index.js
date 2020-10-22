//遮罩层点击事件
$("#right_box a:first").click(function(){
    $("#mark").animate({
        top : 80
    },500)
})
$("#mark").click(function(evt){
    $(this).animate({
        top : "-100%"
    },500)
    stopBubble(evt);
});
$("#mark_white").bind("click",(
    function(){
        return false;
    }
))

$("#mark_registor").bind("click",(
    function(){
        return false;
    }
))
$("#right_box a").eq(1).click(function(){
    $("#mark").animate({
        top : 80
    },500);
    $("#mark_white").css("display" ,"none");
    $("#mark_registor").css("display" , "block")
})


//阻止事件冒泡
function stopBubble(evt){
    let e = evt || window.event;
    return e.stopPropagation? e.stopPropagation() : e.cancelBubble = true;
}
// stopBubble(evt);
// 导航栏划过i效果
$("nav #nav ul li a").each(function(i,value){          
    $(this).hover(function(){
        $(`.nav_marks${i + 1}`).css("display","block").css("opacity",1); 
    },function(){
        $(`.nav_marks${i + 1}`).css("display","none");
        $(`.nav_marks${i + 1}`).hover(function(){
            $(this).css("display","block").css("opacity",1);
        },function(){
            $(this).css("display","none")
        })
    })
})
//滚动事件

$(window).scroll(function(){
    var a = $(this).scrollTop(); 
    if(a >= 120){
        $("nav").css({
            position : "fixed",
            top : 80,
            left : 0,
            zIndex : 1111111
        });
        $(".header").css({
            margin : "0 auto",
            position : "fixed",
            top : 0,
            left : 0,
            zIndex : 1111111  
        })
        $("body").css("padding-top","0");
    }else if(a < 120){
    //    $(window).off("scroll");
        $("nav").css({
            position : "absolute",
            top : 80,
            left : 0,
            zIndex : 1111111
        });
        $(".header").css({
            margin : "0 auto",
            position : "absolute",
            top : 0,
            left : 0,
            zIndex : 1111111  
        })
        $("body").css("padding-top","120px");
    }
});
//注册登录页切换
$("#login_butn").click(function(){
    $("#mark_white").animate({opacity : 1},600).css("display","block");
    $("#mark_registor").animate({opacity : 0},600).css("display","none");
})
$("#registor_butn").click(function(){
    $("#mark_registor").animate({opacity : 1},600).css("display","block");
    $("#mark_white").animate({opacity : 0},600).css("display","none");
})



