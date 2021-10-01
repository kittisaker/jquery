$(document).ready(function(){
    $('#flip').click(function(){
        $('#panel').slideDown(5000).slideUp();
    });

    $('#stop').click(function(){
        $('#panel').stop();
    });
});