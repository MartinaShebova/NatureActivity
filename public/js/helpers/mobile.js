// Initial resolution detection

let view = $(window).width();

if (view < 768) {
    $('body').addClass('small-devices');
}

if (view > 768 && view < 956) {
    
    $('body').addClass('medium-devices');
}

if(view > 992){
    
    $('body').removeClass();        
}

//Detect on resize

$(window).on('resize', function() {

    let view = $(window).width();

    if(view < 768) {
        $('body').removeClass();  
        $('body').addClass('small-devices');
    }

    if (view > 768 && view < 956) {
        $('body').removeClass();  
        $('body').addClass('medium-devices');
    }

    if(view > 992){
        $('body').removeClass();        
    }
});