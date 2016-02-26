blurredImages = $( '.blur-me' );
blurredImages.on( "mouseenter", function () {
    $(this).addClass("blurred");
    $(this).children().addClass("onHover");
    $(this).children().removeClass("hidden");
})
blurredImages.on( "mouseleave", function () {
    $(this).removeClass("blurred");
    $(this).children().removeClass("onHover");
    $(this).children().addClass("hidden");
})