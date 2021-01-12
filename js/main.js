$(document).ready(function(){

    $(window).scroll(function(){
        let scrollAmount = $(window).scrollTop();

        if (scrollAmount > 600){
            $('header').addClass('fixed')
        }
        else{
            
            $('header').removeClass('fixed')
        }
    });
  
    $(window).scroll(function(){
        let scrollAmount = $(window).scrollTop();

        if (scrollAmount < 600){
            $('.top-btn').hide();
        }
        else{
            
            $('.top-btn').show();
        }
    });

    $(".top-btn").click(function(){
        $('body').animate({scrollTop: 0}, 'slow');
    })

});