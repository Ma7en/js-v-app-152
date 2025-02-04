jQuery(function($) {
    'use strict';
    $(window).on('scroll', function() {
        if ($(this).scrollTop() > 120) {
            $('.navbar-area').addClass("is-sticky");
        } else {
            $('.navbar-area').removeClass("is-sticky");
        }
    });
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "1199"
    });
    $(".others-option-for-responsive .dot-menu").on("click", function() {
        $(".others-option-for-responsive .container .container").toggleClass("active");
    });
    $(".burger-menu").on('click', function() {
        $('.sidebar-modal').toggleClass('active');
    });
    $(".sidebar-modal-close-btn").on('click', function() {
        $('.sidebar-modal').removeClass('active');
    });
    $('select').niceSelect();
    $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    $('.home-slides').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        autoplayHoverPause: true,
        items: 1,
        smartSpeed: 100,
        autoplay: false,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
    });
    $(".home-slides").on("translate.owl.carousel", function() {
        $(".main-slider-content h1").removeClass("animated fadeInUp").css("opacity", "0");
        $(".main-slider-content p").removeClass("animated fadeInUp").css("opacity", "0");
        $(".main-slider-content a").removeClass("animated fadeInUp").css("opacity", "0");
    });
    $(".home-slides").on("translated.owl.carousel", function() {
        $(".main-slider-content h1").addClass("animated fadeInUp").css("opacity", "1");
        $(".main-slider-content p").addClass("animated fadeInUp").css("opacity", "1");
        $(".main-slider-content a").addClass("animated fadeInUp").css("opacity", "1");
    });
    $('.services-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 200,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });
    $('.Loop-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 200,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        navText: ["<i class='bx bx-chevron-left'></i>", "<i class='bx bx-chevron-right'></i>"],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 2
            },
            1024: {
                items: 3
            },
            1200: {
                items: 3
            }
        }
    });
    $('.credit-card-image-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 200,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        items: 1,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
    });
    $('.customer-slider').owlCarousel({
        loop: true,
        nav: true,
        dots: false,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        navText: ["<i class='flaticon-left-arrow'></i>", "<i class='flaticon-right-arrow'></i>"],
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
    });
    $('.partner-slider').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        smartSpeed: 500,
        margin: 30,
        autoplayHoverPause: true,
        autoplay: true,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1024: {
                items: 4
            },
            1200: {
                items: 5
            }
        }
    });
    $('.popup-youtube').magnificPopup({
        disableOn: 320,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
    $(function() {
        $('.accordion').find('.accordion-title').on('click', function() {
            $(this).toggleClass('active');
            $(this).next().slideToggle('fast');
            $('.accordion-content').not($(this).next()).slideUp('fast');
            $('.accordion-title').not($(this)).removeClass('active');
        });
    });
    $(".newsletter-form").validator().on("submit", function(event) {
        if (event.isDefaultPrevented()) {
            formErrorSub();
            submitMSGSub(false, "Please enter your email correctly.");
        } else {
            event.preventDefault();
        }
    });

    function callbackFunction(resp) {
        if (resp.result === "success") {
            formSuccessSub();
        } else {
            formErrorSub();
        }
    }

    function formSuccessSub() {
        $(".newsletter-form")[0].reset();
        submitMSGSub(true, "Thank you for subscribing!");
        setTimeout(function() {
            $("#validator-newsletter").addClass('hide');
        }, 4000)
    }

    function formErrorSub() {
        $(".newsletter-form").addClass("animated shake");
        setTimeout(function() {
            $(".newsletter-form").removeClass("animated shake");
        }, 1000)
    }

    function submitMSGSub(valid, msg) {
        if (valid) {
            var msgClasses = "validation-success";
        } else {
            var msgClasses = "validation-danger";
        }
        $("#validator-newsletter").removeClass().addClass(msgClasses).text(msg);
    }
    $(".newsletter-form").ajaxChimp({
        url: "https://envytheme.us20.list-manage.com/subscribe/post?u=60e1ffe2e8a68ce1204cd39a5&amp;id=42d6d188d9",
        callback: callbackFunction
    });
    (function($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function(g) {
            var tab = $(this).closest('.tab'),
                index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);
    jQuery(window).on('load', function() {
        jQuery(".preloader").fadeOut(500);
    });
    $(function() {
        $(window).on('scroll', function() {
            var scrolled = $(window).scrollTop();
            if (scrolled > 600) $('.go-top').addClass('active');
            if (scrolled < 600) $('.go-top').removeClass('active');
        });
        $('.go-top').on('click', function() {
            $("html, body").animate({
                scrollTop: "0"
            }, 500);
        });
    });
}(jQuery));