$(document).ready(function(){
  
$('.slider-active').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    smartSpeed:1000,
    autoplayHoverPause:true,
    items:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});

$('.testmoni-active').owlCarousel({
    loop:true,
    nav:true,
    autoplay:true,
    smartSpeed:1000,
    autoplayHoverPause:true,
    items:1,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
});



});