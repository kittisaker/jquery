$(document).ready(function(){
    $('#flip').click(function(){
        $('#panel').slideDown(5000, function(){
            alert("Slidedown is finished");
        });
        // alert("Slidedown is finished");
    });

    $('#stop').click(function(){
        $('#panel').stop();
    });
});