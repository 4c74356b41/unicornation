blurredImages = $( '.blur-me' );
blurredImages.on( "mouseenter", function () {
    $(this).addClass("blurred");
    $(this).next().addClass("onHover");
    $(this).next().removeClass("hidden");
})
blurredImages.on( "mouseleave", function () {
    $(this).removeClass("blurred");
    $(this).next().removeClass("onHover");
    $(this).next().addClass("hidden");
})


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