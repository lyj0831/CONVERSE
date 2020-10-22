//验证码
//登录页  验证码
$(function () {
    // init();		//初始化
    change();	//验证码
});
//验证码
function change() {
    
    var code=$("#code");
    // 验证码组成库
    var arrays = new Array(
            '1','2','3','4','5','6','7','8','9','0',
            'a','b','c','d','e','f','g','h','i','j',
            'k','l','m','n','o','p','q','r','s','t',
            'u','v','w','x','y','z',
            'A','B','C','D','E','F','G','H','I','J',
            'K','L','M','N','O','P','Q','R','S','T',
            'U','V','W','X','Y','Z'
    );
    var codes='';// 重新初始化验证码
    for(var i = 0; i<4; i++){
        // 随机获取一个数组的下标
        var r = parseInt(Math.random()*arrays.length);
        codes += arrays[r];
    }
    // 验证码添加到input里
    code.val(codes);
}
//
// $("#chosen").$(selector).before(content);
// $("#chosen").before(content).css("background","");
$("#chosen").addClass("change");
$("#rem_user").addClass("changerem");