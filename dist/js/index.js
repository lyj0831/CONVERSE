"use strict";$("#right_box a:first").click(function(){$("#mark").animate({top:80},500)}),$("nav #nav ul li a").each(function(s,o){$(this).hover(function(){$(".nav_marks".concat(s+1)).css("display","block").css("opacity",1)},function(){$(".nav_marks".concat(s+1)).css("display","none"),$(".nav_marks".concat(s+1)).hover(function(){$(this).css("display","block").css("opacity",1)},function(){$(this).css("display","none")})})}),$(window).scroll(function(){var s=$(this).scrollTop();console.log(s),120<=s?($("nav").css({position:"fixed",top:80,left:0,zIndex:1111111}),$(".header").css({margin:"0 auto",position:"fixed",top:0,left:0,zIndex:1111111}),$("body").css("padding-top","0")):s<120&&($("nav").css({position:"absolute",top:80,left:0,zIndex:1111111}),$(".header").css({margin:"0 auto",position:"absolute",top:0,left:0,zIndex:1111111}),$("body").css("padding-top","120px"))}),$("#login_butn").click(function(){$("#mark_white").animate({opacity:1},600).css("display","block"),$("#mark_registor").animate({opacity:0},600).css("display","none")}),$("#registor_butn").click(function(){$("#mark_registor").animate({opacity:1},600).css("display","block"),$("#mark_white").animate({opacity:0},600).css("display","none")});