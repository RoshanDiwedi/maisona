// $(window).scroll(function(){;
//     var w = Math.floor( $(window).scrollTop()+$(window).outerHeight()/6 );  
//     console.log(w);
//     if(w<=$('#intro-1').offset().top){
//          $('#intro-1').css( 'opacity', '1' );  
//         $('#intro-2').css( 'opacity', '0.25' ); 
//     }else if(w<=$('#intro-2').offset().top){
//         $('#intro-1').css( 'opacity', '0.25' ); 
//         $('#intro-2').css( 'opacity', '1' ); 
//         $('#intro-3').css( 'opacity', '0.25' );  
//     }else if(w<=$('#intro-3').offset().top){
//         $('#intro-2').css( 'opacity', '0.25' );
//         $('#intro-3').css( 'opacity', '1' );
//         $('#intro-4').css( 'opacity', '0.25' );
//     }else if(w<=$('#intro-4').offset().top){
//         $('#intro-3').css( 'opacity', '0.25' );
//         $('#intro-4').css( 'opacity', '1' );
//         $('#intro-5').css( 'opacity', '0.25' );
//     }else if(w<=$('#intro-5').offset().top){
//         $('#intro-4').css( 'opacity', '0.25' );
//         $('#intro-5').css( 'opacity', '1' );
//     }
//     else if(w<=$('.animation-text-next').offset().top){
//         $('.main-container .intro-text').css('opacity','1');
//         $('.watch, .event').css('opacity','1');
//     }

// }); 


$(window).scroll(function(){;
    w = Math.floor( $(window).scrollTop() + $(window).outerHeight()/6 );
   $('.remove').css( 'opacity', '' );
    if(w<=$('#intro-1').offset().top){
         $('#intro-1').css( 'opacity', '1' );
    }else if(w<=$('#intro-2').offset().top){
         $('#intro-2').css( 'opacity', '1' );
    }else if(w<=$('#intro-3').offset().top){
         $('#intro-3').css( 'opacity', '1' );
    }else if(w<=$('#intro-4').offset().top){
         $('#intro-4').css( 'opacity', '1' );
    }else if(w<=$('#intro-5').offset().top){
         $('#intro-5').css( 'opacity', '1' );
    }else{
         $('#intro-6').css( 'opacity', '1' );
    }
});