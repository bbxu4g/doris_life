$(function () {
    var j = $(".small-pic>img").length;
    var showImage = $('#show-img');
    $('.small-pic img').click(function () {
        var i = $(this).attr("id").substr(0);

        showImage.attr('src', "./" + i + ".JPG");
    })
    console.log($(".small-pic>img").length);

    $.ajax({
        url: "./test.json",  //要讀取的檔案路徑
        data:{},
        type: "GET", //讀取方式的類型，GET POST
        async:true, 
        dataType: "json", //資料類型
        success: function (data) { //成功後執行
           for (var i = 0; i < data.first.length; i++) {
                $(".row").append("<div class='pictext'>" +
                    "<img class='pic' src='" + data.first[i].pic + "'>" +
                    "<h4 class='text'>" + data.first[i].h4 + "</h4>" +
                    "<p class='text'>" + data.first[i].p + "</p>");
                    console.log(data.first.length);
            }
           
               
            

        },
        error: function () { //錯誤的時候執行
            alert("ERROR!!!");
        }
    });


});

function back() {
    j = $(".small-pic>img").length;
    var showImage = $('#show-img');
    var i = $('#show-img').attr("src").substr(2, 1);
    if (i == 1) { i = j; showImage.attr('src', "./" + i + ".JPG"); }
    else { i--; showImage.attr('src', "./" + i + ".JPG"); }
    //  console.log(showImage.attr("src").substr(2,1));

}
function next() {
    j = $(".small-pic>img").length;
    var showImage = $('#show-img');
    var i = $('#show-img').attr("src").substr(2, 1);
    if (i == j) { i = 1; showImage.attr('src', "./" + i + ".JPG"); }
    else { i++; showImage.attr('src', "./" + i + ".JPG"); }

}
// $.getJSON('json.json', function (data) {
//     var html = '';
//     $.each(data, function (i, item) {
//         html = '<TR><TD>'+ item['name'] +'</TD>'+
//         '<TD>'+ item['sex'] +'</TD>'+
//         '<TD>'+item.address +'</TD>'+
//         '<TD>'+ item['home']+ '</TD></TR>';
//     });
//     $('#title').after(html);
// });