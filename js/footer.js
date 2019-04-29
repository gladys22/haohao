$(function(){
    $.ajax({
        url:"footer.html",
        type:"get",
        success:function(footer){
            $(footer).replaceAll("footer");
            $(`<link rel="stylesheet" href="../CSS/footer.css"/>`).appendTo("head")
        }
    })
})