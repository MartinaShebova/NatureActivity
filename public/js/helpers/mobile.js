(function () {

    let view = $(window).width();

    if (view < 768) {
        $('body').addClass('extra-small-device');
    }

    if (view > 768 && view < 992) {
        $('body').addClass('small-device');
    }

    if (view > 992 && view < 1200) {
        $('body').addClass('medium-device');
    }

    if(view > 1200){
        $('body').removeClass();        
    }

})();