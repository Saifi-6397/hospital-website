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
                items: 1,
            },
            600: {
                items: 2,
                margin: 30,
            },
            900: {
                items: 3,
                margin: 60,
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

//form validation

var user_name = document.getElementById("name");
var user_phone = document.getElementById("phone");
var user_email = document.getElementById("email");
var user_dropdown = document.getElementById("dropdown");
var return_val = 1;

function Validation() {
    if (user_name.value == "") {
        document.getElementById("name_error").innerHTML = "Please Enter Your Name";
        return_val = 0;
    } else {
        document.getElementById("name_error").innerHTML = "";
        return_val = 1;
    }

    if (user_phone.value == "") {
        document.getElementById("phone_error").innerHTML = "Please Enter Your Phone No";
        return_val = 0;
    } else {
        document.getElementById("phone_error").innerHTML = "";
        return_val = 1;
    }

    if (user_email.value == "") {
        document.getElementById("email_error").innerHTML = "Please Enter Your Email";
        return_val = 0;
    } else {
        document.getElementById("email_error").innerHTML = "";
        return_val = 1;
    }
    if (user_dropdown.value == "") {
        document.getElementById("dropdown_error").innerHTML = "Please Enter Your Time";
        return_val = 0;
    } else {
        document.getElementById("dropdown_error").innerHTML = "";
        return_val = 1;
    }
    if (return_val) {
        return true;
    } else {
        return false;
    }
}