$(document).on('ready', function() {
    $('.slick-galeria-fotos').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        arrow: true,
        infinite: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });
});

$(document).ready(function() {
    $(".navbar-nav li a").click(function() {
        $(".navbar-collapse.collapse").removeClass("in");
    });

    $('.nav li a[href^="#"], .banner-principal-texto-left a[href^="#"]').on('click', function(e) {
        e.preventDefault();
        var id = $(this).attr('href'),
            targetOffset = $(id).offset().top;

        $('html, body').animate({
            scrollTop: targetOffset - 100
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