$(function() {
    var icons = {
        header: "ui-icon-circle-arrow-e",
        headerSelected: "ui-icon-circle-arrow-s"
    };
    $( "#accordion" ).accordion({
        icons: icons,
        collapsible: true
    });
    $( "#toggle" ).button().toggle(function() {
        $( "#accordion" ).accordion( "option", "icons", false );
    }, function() {
        $( "#accordion" ).accordion( "option", "icons", icons );
    });
});