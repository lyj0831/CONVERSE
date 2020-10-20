//遮罩层点击事件
$("#right_box a:first").click(function(){
    $("#mark").animate({
        top : 80
    },500)
    // console.log($("#right_box a:first"));
})

// 导航栏划过i效果
console.log($("#right_box a:first"));
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
    console.log(a);
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