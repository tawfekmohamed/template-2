$(document).ready(function() {
    $("html").niceScroll();

    //Adjust Slider Hight 

    var winH = $(window).height(),
        upperH = $('.upper-nav').innerHeight(),
        navH = $('.navbar').innerHeight();
    $('.slider , .carousel-item').height(winH - (upperH + navH));

    // shuffle image 

    $(".featured-work ul li").click(function() {
        $(this).addClass("active").siblings().removeClass("active");
        if ($(this).data("class") === "all") {
            $(".shuffle-image .col-sm-3").fadeIn(1000);
        } else {
            $(".shuffle-image .col-sm-3").hide();
            $($(this).data("class")).parent().fadeIn(1000);
        }
    });


});