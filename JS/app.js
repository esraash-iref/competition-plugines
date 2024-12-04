
$(document).ready( function(){
// wow 
new WOW().init();
// purecounter
new PureCounter();
// owl carousel
$('.owl-carousel').owlCarousel({
    animateOut: 'fadeOut',
    animateIn: 'flipInX',
    items:1,
    margin:30,
    stagePadding:30,
    smartSpeed:450,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true,
    loop:true
});

// fitText
$("#responsive_headline").fitText(1, { minFontSize: '17px', maxFontSize: '60px' });

// funnyText
$('.mySelector').funnyText();
$('.funny').funnyText();
$('.fun').funnyText();

// AutoTyping
const typing1 = new AutoTyping('.selector1', [
    ' eum voluptatem eum maiores eaque id optio',
    'ullam occaecati odio est possimus vel reprehenderit'
]);
typing1.start();

const typing2 = new AutoTyping('.selector2', [
    'bout Us'  
]);
typing2.start();

const ser = new AutoTyping('.selector3', [
    'all To Action'
]);
ser.start();

});