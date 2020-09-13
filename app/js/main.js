$(function(){

    

$(".rate-star").rateYo({
    rating: 5,
    starWidth: "12px",
    readOnly: true,
});

$('.product-slider__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 4,
});



$(".js-range-slider").ionRangeSlider({
    type: "double",
    min: 0,
    max: 1000,
    from: 0,
    to: 600,
    prefix: '$',
});

$('.icon-th-list').on('click', function(){
    $('.product__item1').addClass('list');
    $('.icon-th-list').addClass('active');
    $('.icon-th').removeClass('active');
});

$('.icon-th').on('click', function(){
    $('.product__item1').removeClass('list');
    $('.icon-th').addClass('active');
    $('.icon-th-list').removeClass('active');
});

var mixer = mixitup('.products__inner-box');

});