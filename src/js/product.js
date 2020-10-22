//放大镜
$(function(){
	var ione = $(".one"),
		ithe = $(".the"),
		itwo = $(".two img"),
		tthe = $(".the img");
	var arr = ["../image/11.jpg","../image/22.jpg","../image/33.jpg","../image/44.jpg","../image/55.jpg","../image/66.jpg"];
	var oarr = ["../image/1.jpg","../image/2.jpg","../image/3.jpg","../image/4.jpg","../image/5.jpg","../image/6.jpg"];
	itwo.each(function(i){
		$(this).click(function(){
			$(".one img").attr("src",arr[i])
			tthe.attr("src",oarr[i])
			itwo.removeClass("active")
			$(this).addClass("active")
		})
		
		ione.mousemove(function(a){
			var evt = a || window.event
			ithe.css('display','block')
			var ot = evt.clientY-($(".one").offset().top- $(document).scrollTop())-107;
			var ol = evt.clientX-($(".one").offset().left- $(document).scrollLeft())-45;
			if(ol<=0){
				ol = 0;
			}
			if(ot<=0){
				ot = 0;
			}
			if(ol>=360){
				ol=360
			}
			if(ot>=236){
				ot=236
			}
			$("span").css({'left':ol,'top':ot})
			var ott = ot*3.5+114*3.5
			var oll = ol*3.5+40
			tthe.css({'left':-oll,'top':-ott})
		})
		ione.mouseout(function(){
			ithe.css('display','none')
		})
	})
})