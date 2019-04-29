
$(function(){
//失去焦点验证
$("#emailphone").blur(function(){
    if($(this).val()==""){
        $("#errorTip").text("请输入手机号!");
    }
});
$("#password").blur(function(){
    if($(this).val()==""){
        $("#errorTip").text("请输入密码!");
    }
});
$("#code").blur(function(){
    if($(this).val()==""){
        $("#errorTip").text("请输入验证码!");
    }
});
//处理键盘的回车键登录
$(document).keydown(function(event){
    if(event.keyCode==13){
        $(".btn_login").click();
    }
});

//登录
$(".btn_login").click(function(){
    var flag=true;
    var yzmBoll=false;
    if (flag){
        flag=false;
        if($("#emailphone").val()==""){
            $("#errorTip").text("请输入手机号!");
            $("#emailphone").focus();
            return;
        }
        if($("#password").val()==""){
            $("#errorTip").text("请输入密码!");
            $("#password").focus();
            return;
        }
       if($("#code").val()==""||$("#code").val()=="验证码"){
            $("#errorTip").text("请输入验证码!");
            $("#code").focus();
        }
        else{
            $("#errorTip").text('');
            if($('#code').val()==$("#yzm").val()){
                yzmBoll=true;
            }
        }
        //  $("#btn_login").val("登录中...");
        }
         
             //发送ajax请求
            var param={};
            param["emailphone"]=$("#emailphone").val();
            param["password"]=$("#password").val();
            // param["code"]=$("#code").val();
            $.ajax({
                    url:"http://127.0.0.1:6600/user/login",
                    data:param,
                    type:"get",
                    //dataType:"json",
                    success:function(data){
                    
                    if(data.data.code==1&&yzmBoll){
                        $("#errorTip").text("登陆成功!").addClass("green");
                    }else{
                        $("#errorTip").text("登陆失败!")
                    }
                    }
                })
         })
    
        
       
    }
)   