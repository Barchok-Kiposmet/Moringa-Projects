
// instead of repeating jQuery we substitute this to the $ sign for all

$(document).ready(() => {

    $(window).resize(function(){
        alert("This window has been resized");
    });

    $("#btn-one").click(function(){
        alert("Do Something");
    });

    $("#btn-two").click( function(){
        $(this).text("This is the new Jquery text");
    });

    $("#btn-four").click( function(){
        alert("Ah, there you are!");
    });

    $("#btn-five").click( function(){
        $(this).text("Updated");
    });

    $("#btn-six").click(() => {
        console.log('This has been changed with new code')
    });

    $('#btn-six').click(() => {
        alert ('DO NOT DO THAT!!');
    });

});



// $(selector).userAction(callBack);
