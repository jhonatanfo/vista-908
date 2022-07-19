$(document).on('ready', function() {

    var o = $(".princial-banner");
    $(document).ready(function() {
        o.slick({
            arrows: false,
            dots: true,
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            fade: true,
            customPaging: function(slider, i) {
                var thumb = jQuery(slider.$slides[i]).data();
                return '<a>0' + (i + 1) + '</a>';
            },
            cssEase: 'linear'
        }), o.slickAnimation()
    });

    $('.slick-ultimas-noticias').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: false,
        fade: true,
    });

    $('.slick-depoimentos').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
    });



});

$(document).ready(function() {

    $(".navbar-nav li a").click(function() {
        $(".navbar-collapse.collapse").removeClass("in");
    });

    $('.nav li a[href^="#"],.seta-top[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 105
        }, 800);
    });




});

$(document).on("scroll", function() {
    if ($(document).scrollTop() > 105) { //QUANDO O SCROLL PASSAR DOS 100px DO TOPO

        $(".navbar").removeClass("large").addClass("small"); //TROCA P CLASSE MENOR
    } else {


        $(".navbar").removeClass("small").addClass("large"); //VOLTA P MENU GRANDE ORIGINAL
    }
});