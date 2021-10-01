$(document).ready(function(){
    $('button').click(function(){
        var div = $('div');
        div.animate({
            left: '250px',
            width: '150px',
            height: '150px'
        });
        div.animate({
            top: '150px'
        });
    });
});