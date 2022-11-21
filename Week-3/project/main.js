$(document).ready(()=>{

    // what we do section
    
    $('#design').click(() =>{
        $('#design-showing').toggle();
        $('.hide-design-image').toggle();
    });
     
    $('#development').click(() =>{
        $('#development-showing').toggle();
        $('.hide-development-image').toggle();
    });
           
    $('#product-management').click(() =>{
        $('#product-showing').toggle();
        $('.hide-product-image').toggle();
    });

    
     //hover for each portfolio item.          

    $(".Hover").hover(()=> {
        $('.Hover').css('opacity', '1' );

    }, () =>{

        $('.Hover').css('opacity', '0');

    });

    $(".Hover1").hover(()=> {
        $('.Hover1').css('opacity', '1' );

    }, () =>{

        $('.Hover1').css('opacity', '0');

    });

    $(".Hover2").hover(()=> {
        $('.Hover2').css('opacity', '1' );

    }, () =>{

        $('.Hover2').css('opacity', '0');

    });

    $(".Hover3").hover(()=> {
        $('.Hover3').css('opacity', '1' );

    }, () =>{

        $('.Hover3').css('opacity', '0');

    });

    $(".Hover4").hover(()=> {
        
        $('.Hover4').css('opacity', '1' );

    }, () =>{

        $('.Hover4').css('opacity', '0');

    });
    
    $(".Hover5").hover(()=> {
        $('.Hover5').css('opacity', '1' );

    }, () =>{

        $('.Hover5').css('opacity', '0');

    });

    $(".Hover6").hover(()=> {
        $('.Hover6').css('opacity', '1' );

    }, () =>{

        $('.Hover6').css('opacity', '0');

    });

    $(".Hover7").hover(()=> {
        $('.Hover7').css('opacity', '1' );

    }, () =>{

        $('.Hover7').css('opacity', '0');

    });
   

    // submit function

    $('#submit').click(()=>{

    var nameValue = $('#name').val();
    var emailValue = $('#email').val();
    var textValue = $('#textarea').val();

        if( nameValue == '' || emailValue == '' || textValue == ''){
        alert('Please enter name, email or a short message');
    } else {
        alert('Congratulations, we have received your details');
    }
    });

});