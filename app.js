function main(){
    $('.blob2').hide();
    $('.blob3').hide();
    $('.blob4').hide();
    $('.label').hide();
    var w = $(window).width;
    var h = $(window).height;
    $('#me').width = 0.25*w;
    $('#me').height = 0.25*w;
    $('.blob').width = 0.2*w;
    $('.blob').height = 0.2*w;
    $('.blob').hover(function(){
        $(this).toggleClass('highlighted');
    });
    $('.blob2').hover(function(){
        $(this).toggleClass('highlighted');
    });
    $('.blob3').hover(function(){
        $(this).toggleClass('highlighted');
    });
    $('.blob4').hover(function(){
        $(this).toggleClass('highlighted');
    });
    $('.social').hover(function(){
        $(this).toggleClass('highlighted');
    });
    $('#outreach').click(function(){
        $('.blob3').hide();
        $('.blob4').hide();
        $('.blob2').toggle();
    });
    $('#code').click(function(){
        $('.blob2').hide();
        $('.blob4').hide();
        $('.blob3').toggle();
    });
    $('#gz').click(function(){
        $('.blob3').hide();
        $('.blob2').hide();
        $('.blob4').toggle();
    });
};


$(document).ready(main);
