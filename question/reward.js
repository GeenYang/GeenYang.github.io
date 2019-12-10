function autoScroll(obj){
    $(obj).find(".list").animate({
        marginTop : "-25px"
    },500,function(){
        $(this).css({marginTop : "0px"}).find("li:first").appendTo(this);
    })
}
$(function(){
    setInterval('autoScroll(".scroll")',3000)
})
$(function() {
    $.ajax({
        //url : '/wkweb/listGratuity',
        url : 'https://www.150s.cn/topic/getSubject',
        type : 'post',
        async: true,
        dataType : 'json',
        success : function(data) {//ajax调用成功后的回调方法
            var str = "";
            $.each(data,function(key,val){
                let split = val.createTime.split(" ");
                str += "<li><div><span style='float: left'>"+val.content+"</span><span style='float: right'>"+split[0]+"</span></div></li>";
            });
            $("#gratuity").html(str);
        },
        error : function(count) {//调用失败进入的方法
            layer.msg("Connection error");
        }
    });
})