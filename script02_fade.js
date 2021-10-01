$(document).ready(function(){
    
    $('button').click(function(){
        // $('#div1').fadeIn();
        // $('#div2').fadeIn("show");
        // $('#div3').fadeIn(2000);

        // $('#div1').fadeOut();
        // $('#div2').fadeOut("show");
        // $('#div3').fadeOut(2000);

        $('#div1').fadeToggle();
        $('#div2').fadeToggle("show");
        $('#div3').fadeToggle(2000);
    });
});