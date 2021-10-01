$(document).ready(function(){
   $("#btn1").click(function(){
    $("#demo1").text("Hello World!");
   });
   $("#btn2").click(function(){
    $("#demo2").html("<b>Hello World!</b>");
   });
   $("#btn3").click(function(){
    $("#demo3").val("Kittisak Hanheam");
   });
   $("#btn4").click(function(){
    $("#demo4").attr({
        "href": "https://youtube.com",
        "title": "Youtube"
    })
   });
});