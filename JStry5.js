$(function () {
    var j = $(".small-pic>img").length;
    var showImage = $('#show-img');
    $('.small-pic img').click(function () {
        var i = $(this).attr("id").substr(0);

        showImage.attr('src', "./" + i + ".JPG");
    })
    // console.log($(".small-pic>img").length);

    $.ajax({
        url: "./test.json",  //要讀取的檔案路徑
        data: {},
        type: "GET", //讀取方式的類型，GET POST
        async: true,
        dataType: "json", //資料類型
        success: function (data) { //成功後執行
            for (var i = 0; i < data.first.length; i++) {
                $(".row").append("<div class='pictext'>" +
                    "<div  class='p2'><img onmouseover='picmouseover(this)' onmouseout='picmouseout(this)' class='pic' src='" + data.first[i].pic + "'>" +
                    "<h4 class='text'>" + data.first[i].h4 + "</h4>" +
                    "<p class='text'>" + data.first[i].p + "</p></div><div class='p1' >" + data.first[i].date + "</div>");
                //       console.log(data.first.length);
            }
        },
        error: function () { //錯誤的時候執行
            alert("ERROR!!!");
        }
    });
    //ul滑過去會出現li底下的ul
    $(".list-ul>li").hover(function () { $(this).find("ul").css("display", "block"); },
        function () { $(this).find("ul").css("display", "none"); });
    //左右邊滑過去變黑
    $(".leftcontrol").hover(function () {
        $(".leftcontrol").addClass("backcolor-left");
        $(".leftcontrol").removeClass("backcolor-cancel"); console.log(this);
    }, function () {
        $(".leftcontrol").addClass("backcolor-cancel");
        $(".leftcontrol").removeClass("backcolor-left");
    });
    $(".rightcontrol").hover(function () {
        $("div.rightcontrol").addClass("backcolor-right").fadeIn(1000);
        $("div.rightcontrol").removeClass("backcolor-cancel"); console.log(this);
    }, function () {
        $("div.rightcontrol").addClass("backcolor-cancel").fadeIn(1000);
        $("div.rightcontrol").removeClass("backcolor-right");
    });
    //設定自動輪播
    setInterval(function(){ next() }, 5000);

  
});



function imgsmall(imgsmall) {
    var j = $(".w380h75").length;
    var showImage = $('#show-img');

    $('.w380h75').click(function () {
        var i = $(this).attr("id").substr(0);
        showImage.attr('src', "./top" + i + ".JPG");

        $(".w380h75").css("opacity", "0.3");
        $(this).css('opacity', "1");
    })
    // console.log($(".w380h75").length);
}


function picmouseover(pic) {
    var css = { "border": "solid", "border-color": "#010132", "opacity": "0.3", "object-fit": "none", "width": "212px", "height": "212px" }
    $(pic).css(css);
}
function picmouseout(pic) {
    var css = { "border": "none", "opacity": "1", "object-fit": "unset", "width": "220px", "height": "220px" }
    $(pic).css(css);
}



function back() {
    j = $(".w380h75").length;
    var showImage = $('#show-img');
    var i = $('#show-img').attr("src").substr(5, 1);
    // console.log(j);
    if (i == 1) { i = j; showImage.attr('src', "./top" + i + ".jpg"); $(".w380h75").css("opacity", "0.3"); $(this).css('opacity', "1"); }
    else { i--; showImage.attr('src', "./top" + i + ".jpg"); }
    //  console.log(showImage.attr("src").substr(2,1));
    $(".w380h75").css("opacity", "0.3");
    $(".w380h75").each(function () {
        if ($(this).attr("value") == i) { $(this).css('opacity', "1"); }
    });



}
function next() {
    j = $(".w380h75").length;
    var showImage = $('#show-img');
    var i = $('#show-img').attr("src").substr(5, 1);
    if (i == j) { i = 1; showImage.attr('src', "./top" + i + ".jpg"); }
    else { i++; showImage.attr('src', "./top" + i + ".jpg"); }
    $(".w380h75").css("opacity", "0.3");
    $(".w380h75").each(function () {
        if ($(this).attr("value") == i) { $(this).css('opacity', "1"); }
    });

}
