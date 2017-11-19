// Start Document
(function($) {
    "use strict";

    /*--------------------------------------------------------------
     # Custom page title fade onscroll
     --------------------------------------------------------------*/
    function scrollBanner() {
        $(document).scroll(function(){

            // Text Opacity
            var scrollPos = $(this).scrollTop();
            $('.page-title, .breadcrumbs').css({
                'opacity' : 1-(scrollPos/300),
            });

            // Text Parallax Effect
            var transY = scrollPos / 2.4;
            $('.page-title, .breadcrumbs').css({
                'transform' : 'translateY(' + transY + 'px)'
            });
        });
    }

    // Only for devices over 1000px
    if ($(window).width() > 1000) {
        scrollBanner();
    }

    // Call when window resized
    $(window).resize(function() {
        if ($(window).width() > 1000) {
            scrollBanner();
        } else if($(window).width < 999) {
            // do nothing
        }
    });


    /*--------------------------------------------------------------
     # Magnific Popup Init
     --------------------------------------------------------------*/
    $('.popup-video').magnificPopup({
        //disableOn: 700,
        type: 'iframe',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false,
        zoom: {
            enabled:true
        }
    });


    /*--------------------------------------------------------------
     # Check if element is in viewport
     --------------------------------------------------------------*/
    $.fn.isOnScreen = function(){

        var win = $(window);

        var viewport = {
            top : win.scrollTop(),
            left : win.scrollLeft()
        };
        viewport.right = viewport.left + win.width();
        viewport.bottom = viewport.top + win.height();

        var bounds = this.offset();
        bounds.right = bounds.left + this.outerWidth();
        bounds.bottom = bounds.top + this.outerHeight();

        return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

    };



    /*--------------------------------------------------------------
     # Mobile Menu 1
     --------------------------------------------------------------*/

    // Open the menu.
    $('.hamburger-button').on('click', function() {
        $(this).toggleClass('hamburger-button-open');
        $('.mobile-menu-wrapper').toggleClass('mobile-menu-open');
    });

    // Add arrow to submenus.
    $('.mobile-menu-wrapper ul li ul').before($('<span class="mobile-submenu-arrow"><i class="fa fa-caret-right"></i></span>'));

    // Submenu slide up/down.
    $(".mobile-menu > li > span, .mobile-menu .sub-menu > li > span").click(function(event) {
        event.preventDefault();
        if (false == $(this).next().is(':visible')) {
            // If another submenu is open, slide this up.
            $(this).parent().siblings().find(".sub-menu").slideUp(300);
        }
        $(this).next().slideToggle(300);
        $(this).toggleClass("mobile-submenu-active");
    });



    /*--------------------------------------------------------------
     # Initialize Select 2
     --------------------------------------------------------------*/
    $("select").select2({
        width: '100%',
        minimumResultsForSearch: '-1'
    });


})(jQuery); // end document