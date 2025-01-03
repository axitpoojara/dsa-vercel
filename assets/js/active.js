// Index of jQuery Active Code

// :: 1.0 PRELOADER ACTIVE CODE
// :: 2.0 NAVIGATION MENU ACTIVE CODE
// :: 3.0 STICKY HEADER ACTIVE CODE
// :: 4.0 SCROLL TO TOP ACTIVE CODE
// :: 5.0 SCROLL LINK ACTIVE CODE
// :: 6.0 SMOOTH SCROLLING ACTIVE CODE
// :: 7.0 AOS ACTIVE CODE
// :: 8.0 WOW ACTIVE CODE
// :: 9.0 PREVENT DEFAULT ACTIVE CODE
// :: 10.0 COUNTERUP ACTIVE CODE
// :: 11.0 FANCYBOX VIDEO POPUP ACTIVE CODE
// :: 12.0 CIRCLE ANIMATION ACTIVE CODE
// :: 13.0 REVIEWS ACTIVE CODE
// :: 14.0 PORTFOLIO ACTIVE CODE
// :: 15.0 CONTACT FORM ACTIVE CODE

(function ($) {
    'use strict';

    var $window = $(window);
    var zero = 0;

    // :: 1.0 PRELOADER ACTIVE CODE
    $(window).on("load", function () {
        $("#digimax-preloader").addClass("loaded");

        if ($("#digimax-preloader").hasClass("loaded")) {
            $("#preloader").delay(900).queue(function () {
                $(this).remove();
            });
        }
    });

    // :: 2.0 NAVIGATION MENU ACTIVE CODE
    jQuery(function ($) {
        'use strict';

        // RESPONSIVE NAVIGATION
        function navResponsive() {

            let navbar = $('.navbar .items');
            let menu = $('#menu .items');

            menu.html('');
            navbar.clone().appendTo(menu);

            $('.menu .fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');
        }

        navResponsive();

        $(window).on('resize', function () {
            navResponsive();
        })

        // PREVENT DROPDOWN
        $('.menu .dropdown-menu').each(function () {
            var children = $(this).children('.dropdown').length;
            $(this).addClass('children-' + children);
        })

        $('.menu .nav-item.dropdown').each(function () {
            var children = $(this).children('.nav-link');
            children.addClass('prevent');
        })

        $(document).on('click', '#menu .nav-item .nav-link', function (e) {

            if ($(this).hasClass('prevent')) {
                e.preventDefault();
            }

            var nav_link = $(this);

            nav_link.next().toggleClass('show');

            if (nav_link.hasClass('smooth-anchor')) {
                $('#menu').modal('hide');
            }
        })
    });

    // :: 3.0 STICKY HEADER ACTIVE CODE
    $window.on('scroll', function () {
        if ($(window).scrollTop() > 100) {
            $('.navbar').addClass('navbar-sticky');
            $('.navbar .navbar-nav.action .btn').addClass('btn-bordered');
            $('.navbar .navbar-nav.action .btn').removeClass('btn-bordered-white');
        } else {
            $('.navbar').removeClass('navbar-sticky');
            $('.navbar .navbar-nav.action .btn').removeClass('btn-bordered');
            $('.navbar .navbar-nav.action .btn').addClass('btn-bordered-white');
        }
    });

    // $window.on('scroll', function () {
    //     $('.navbar-sticky').toggleClass('hide', $(window).scrollTop() > zero);
    //     zero = $(window).scrollTop();
    // });

    // :: 4.0 SCROLL TO TOP ACTIVE CODE
    var offset = 300;
    var duration = 500;

    $window.on('scroll', function () {
        if ($(this).scrollTop() > offset) {
            $("#scrollUp").fadeIn(duration);
        } else {
            $("#scrollUp").fadeOut(duration);
        }
    });

    $("#scrollUp").on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, duration);
    });

    // :: 5.0 SCROLL LINK ACTIVE CODE
    var scrollLink = $('.scroll');

    // :: 6.0 SMOOTH SCROLLING ACTIVE CODE
    scrollLink.on('click', function (e) {
        e.preventDefault();
        $('body,html').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // :: 7.0 AOS ACTIVE CODE
    AOS.init();

    // :: 8.0 WOW ACTIVE CODE
    new WOW().init();

    // :: 9.0 PREVENT DEFAULT ACTIVE CODE
    $("a[href='#']").on('click', function ($) {
        $.preventDefault();
    });

    // :: 10.0 COUNTERUP ACTIVE CODE
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // :: 11.0 FANCYBOX VIDEO POPUP ACTIVE CODE
    $(".play-btn").fancybox({
        animationEffect: "zoom-in-out",
        transitionEffect: "circular",
        maxWidth: 800,
        maxHeight: 600,
        youtube: {
            controls: 0
        }
    });

    // :: 12.0 CIRCLE ANIMATION ACTIVE CODE
    $(window).on("load", function () {
        $('.profile-circle-wrapper').addClass('circle-animation');
        $('.profile-icon').fadeIn();
    });

    // :: 13.0 REVIEWS ACTIVE CODE
    $('.client-reviews.owl-carousel').owlCarousel({
        loop: true,
        center: true,
        margin: 40,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
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
            992: {
                items: 3
            }
        }
    });

    $('.our-expertise.owl-carousel').owlCarousel({
        loop: true,
        // center: true,
        nav: false,
        dots: false,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 4
            },
            992: {
                items: 8
            }
        }
    });

    // :: 14.0 PORTFOLIO ACTIVE CODE
    $('.portfolio-area').each(function(index) {

        var count = index + 1;

        $(this).find('.portfolio-items').removeClass('portfolio-items').addClass('portfolio-items-'+count);
        $(this).find('.portfolio-item').removeClass('portfolio-item').addClass('portfolio-item-'+count);
        $(this).find('.portfolio-btn').removeClass('portfolio-btn').addClass('portfolio-btn-'+count);
        
        var Shuffle = window.Shuffle;
        var Filter  = new Shuffle(document.querySelector('.portfolio-items-'+count), {
            itemSelector: '.portfolio-item-'+count,
            buffer: 1,
        })
    
        $('.portfolio-btn-'+count).on('change', function (e) {
    
            var input = e.currentTarget;
            
            if (input.checked) {
                Filter.filter(input.value);
            }
        })
    });    

}(jQuery));

function openCalendly() {
    window.open('https://calendly.com/dsadvisor-in/30min?month=2024-12', '_blank');
}

function toggleDiv() {
    const myDiv = document.getElementById('float_text');
    // Toggle the display property
    if (myDiv.style.display === 'none' || myDiv.style.display === '') {
      myDiv.style.display = 'block';
    } else {
      myDiv.style.display = 'none';
    }
}

function getYear() {
    const currentYear = new Date().getFullYear();
    const yearElement = document.getElementById("current-year");
    if (yearElement) {
        yearElement.textContent = currentYear;
        console.log(`Current Year Updated: ${currentYear}`);
    } else {
        console.error("Element with ID 'current-year' not found.");
    }
}

window.onload = function () {
    window.scrollTo(0, 0);
};