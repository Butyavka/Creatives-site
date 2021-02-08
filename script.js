$(document).ready(function(){
    $('.header__burger').click(function(event){
        $('.header__burger,.header__list').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(window).on("scroll", function () {
    var scrolled = $(this).scrollTop();
    if( scrolled > 115 ) {
        $('.header').addClass('scrolled');
        $('.header__link').addClass('scrolled__link')
    }   
    if( scrolled <= 107 ) {     
        $('.header').removeClass('scrolled');
        $('.header__link').removeClass('scrolled__link')
    }
});