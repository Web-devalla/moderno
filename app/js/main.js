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

$('.header__btn-menu').on('click', function(){ 
    $('.header__box').toggleClass('active');
});

$('.menu__btn').on('click', function(){  /* клик по меню хэдера */
    $('.menu__list').slideToggle();
});


$('.product-one__tabs .tab').on('click', function(event) {
    var id = $(this).attr('data-id');
        $('.product-one__tabs').find('.tab-item').removeClass('active-tab').hide();
        $('.product-one__tabs .tabs').find('.tab').removeClass('active');
        $(this).addClass('active');
        $('#'+id).addClass('active-tab').fadeIn();
        return false;
    });

var mixer = mixitup('.products__inner-box');

});