$(function() {
    $(".toggle-btn").click(function() {
        $('header nav ul').slideToggle()
    });
    //fix navigation on scroll top
    $(window).on("scroll", function() {
        if ($(window).scrollTop()) {
            $('header').addClass('scroll');
        } else {
            $('header').removeClass('scroll');
        }
    });
    //magnific popup gallery
    $('.facility').magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled: true
        }
    })


    //owl crousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 2000,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            900: {
                items: 3
            },
            1400: {
                items: 5
            }
        }
    })

    //aos animation
    AOS.init({
        duration: 1000,
        delay: 400,
    });
})