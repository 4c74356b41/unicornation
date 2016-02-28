/*

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

$( "#testid" ).on("click", function () {
    console.log($(this).text());
    console.log($(this));
    $(this).css("background-image", 'url(Img/twilight_sparkle.jpg)');
})

*/

$("[name='my-checkbox']").bootstrapSwitch();
$("[name='my-checkbox']").bootstrapSwitch('onText', 'Goodies');
$("[name='my-checkbox']").bootstrapSwitch('offText', 'Baddies');
$("[name='my-checkbox']").bootstrapSwitch('onColor', 'success');
$("[name='my-checkbox']").bootstrapSwitch('offColor', 'danger');
$("[name='my-checkbox']").parent().parent().css({ "position": "absolute", "right": "100px" });

$('input[name="my-checkbox"]').on('switchChange.bootstrapSwitch', function (event, state) {
    if (state) {
        $("[id='rarity']").addClass("rarity");
        $("[id='rarity']").removeClass("chrysalis");
    } else {
        $("[id='rarity']").removeClass("rarity");
        $("[id='rarity']").addClass("chrysalis");
    }
});