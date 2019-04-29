$(function(){
    //发送ajax请求，请求header.html中的<header>片段
    $.ajax({
        url:"header.html",
        type:"get",
        success:function(header){
            //将片段替换到当前所在页面的<header>元素上,创建新的<header>,查找旧的<header>
           $(header).replaceAll("header");
               //动态创建<link href="css/header.css">,自动添加到当前页面的<head>元素内
            $(`<link rel="stylesheet" href="../CSS/header.css"/>`).appendTo("head")
        }
    })
})
