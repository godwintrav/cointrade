//jQuery to collapse the navbar on scroll
    $(window).scroll(function() {
        if ($("#navigation").offset().top > 160) {
            $(".fixed-top").addClass("header-collapse");
        } else {
            $(".fixed-top").removeClass("header-collapse");
        }
    });