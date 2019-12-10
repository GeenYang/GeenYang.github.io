$(function(){
    //示范一个公告层
    layer.open({
        type: 1
        ,title: false //不显示标题栏
        ,closeBtn: false
        ,area: '350px'
        ,shade: 0
        ,id: 'LAY_layuipro' //设定一个id，防止重复弹出
        ,offset:"t"
        ,resize: false
        ,btn: [ '已了解']
        ,btnAlign: 'c'
        ,moveType: 1 //拖拽模式，0或者1
        ,content: '<div style="padding: 30px; line-height: 22px; background-color: #393D49; color: #fff; font-weight: 300;">' +
                    '<div>' +
                        '<div style="padding: initial;border-bottom: 1px solid #e9ecef;text-align: center">\n' +
            '                <h4>站内公告</h4>\n' +
            '            </div>\n' +
            '            <div class="modal-body">\n' +
            '                <div>\n' +
            '                    <strong>\n' +
            '                        <font size="4">\n' +
            '                            近期一直被反社会份子攻击网站，并且向我索要费用才不实行打击，我直接拒绝了，' +
            '                            本来此网站就是免费的，无任何收入来源，只能靠查题的老板进行打赏小弟才能勉强续费服务器。\n' +
            '                        </font>\n' +
            '                    </strong>\n' +
            '                </div>\n' +
            '            </div>' +
            '            <div class="modal-body" align="center">\n' +
            '                <div>\n' +
            '                    <strong style="text-align: left">\n' +
            '                        <font size="4">\n' +
            '                            大家可以加一下网站维护QQ群，一旦被打击，会在群里通知开放时间。方便各位老板第一时间查题\n' +
            '                        </font>\n' +
            '                    </strong>\n' +
            '                    <br><img width="80%" src="images/qun.png">\n' +
            '                </div>\n' +
            '            </div>' +
                    '</div>' +
                  '</div>',
        success: function(layero){
        }
    });
});
function searchProblem() {
    var problem = $("#problem").val();
    if (problem != "") {
        $.ajax({
            url : 'https://www.150s.cn/topic/getSubject',
            type : 'post',
            async: true,
            data : {
                title : problem
            },
            dataType : 'json',
            beforeSend:function(data){
                //请求前的处理
                $("#loading").html("<img src='images/loading.gif' />");
                $("#send").attr("type","hidden");
            },
            success : function(data) {//ajax调用成功后的回调方法

                var str = "";
                str += "<div>" +
                    "<strong>" +
                    "<font color=\"red\">题目：</font>" +
                    "</strong>" +
                    "<span>" + data.title + "</span></div>" +
                    "<div>" +
                    "<strong>" +
                    "<font color=\"red\">答案：</font>" +
                    "</strong>" +
                    "<span>"+data.answer + "</span>" +
                    "</div>";

                $("#ti").html(str);
            },
            complete:function(data){
                //请求完成的处理
                $("#loading").empty();
                $("#send").attr("type","button");
            },
            error : function(count) {//调用失败进入的方法
            }
        });
    }
}