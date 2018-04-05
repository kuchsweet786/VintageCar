//LOADER/SPINNER
$(window).bind("load", function() {

    "use strict";
    
    $(".spn_hol").fadeOut(1000);
});


//MENU APPEAR AND HIDE
$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        if ($(window).scrollTop() > 80) {
            $(".navbar").css({
                'margin-top': '0px',
                'opacity': '1'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '15px'
            });
            $(".navbar-brand img").css({
                'height': '35px'
            });
            $(".navbar-brand img").css({
                'padding-top': '0px'
            });
            $(".navbar-default").css({
                'background-color': 'rgba(59, 59, 59, 0.7)'
            });
        } else {
            $(".navbar").css({
                'margin-top': '-100px',
                'opacity': '0'
            })
            $(".navbar-nav>li>a").css({
                'padding-top': '45px'
            });
            $(".navbar-brand img").css({
                'height': '45px'
            });
            $(".navbar-brand img").css({
                'padding-top': '20px'
            });
            $(".navbar-default").css({
                'background-color': 'rgba(59, 59, 59, 0)'
            });
        }
    });
});




 // MENU SECTION ACTIVE
$(document).ready(function() {

    "use strict";
    
    $(".navbar-nav li a").click(function() {

        "use strict";
        
        $(".navbar-nav li a").parent().removeClass("active");
        $(this).parent().addClass("active");
    });
});



// Highlight MENU on SCROLl

$(document).ready(function() {

    "use strict";
    
    $(window).scroll(function() {

        "use strict";
        
        $(".page").each(function() {

            "use strict";
            
            var bb = $(this).attr("id");
            var hei = $(this).outerHeight();
            var grttop = $(this).offset().top - 70;
            if ($(window).scrollTop() > grttop - 1 && $(window).scrollTop() < grttop + hei - 1) {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().addClass("active");
            } else {
                var uu = $(".navbar-nav li a[href='#" + bb + "']").parent().removeClass("active");
            }
        });
    });
});



//SMOOTH MENU SCROOL


$(function() {
	
	"use strict";

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[year=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});



// FIX HOME SCREEN HEIGHT
$(document).ready(function() {

    "use strict";
    
    setInterval(function() {

        "use strict";
        
        var widnowHeight = $(window).height();
        var containerHeight = $(".home-container").height();
        var padTop = widnowHeight - containerHeight;
        $(".home-container").css({
            'padding-top': Math.round(padTop / 2) + 'px',
            'padding-bottom': Math.round(padTop /1) + 'px'
        });
    }, 10)
});



//PARALLAX
$(document).ready(function() {

    "use strict";
    
    $(window).bind('load', function() {
        "use strict";
        parallaxInit();
    });

    function parallaxInit() {
        "use strict";
        $('.home-parallax').parallax("30%", 0.1);
        $('.subscribe-parallax').parallax("30%", 0.1);
        $('.testimonial').parallax("10%", 1);
        /*add as necessary*/
    }
});

//WOW JS
$(document).ready(function() {

    "use strict";
 
    new WOW().init();
});

//RESPONSIVE VIDEO
$(document).ready(function() {

    "use strict";
    
    // Basic FitVids Test
    $(".video").fitVids();
});



//CONTACT FORM VALIDATION 

//(EXAMPLE YEAR, MAKE, AND MODEL - ALREADY REWORDED)//

$(document).ready(function() {

    "use strict";
    
    $(".form_submit").click(function() {

        "use strict";
        
        var year = $("#year").val();
        var make = $("#make").val();
        var model = $("#model").val();
        
        //var testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;//
        if (!year) {
            $(".form_error .year_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .year_error").addClass("hide").removeClass("show");
        }
        if (!make) {
            $(".form_error .make_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .make_error").addClass("hide").removeClass("show");
            if (testMake.test(make)) {
                $(".form_error .make_val_error").addClass("hide").removeClass("show");
            } else {
                $(".form_error .make_val_error").addClass("show").removeClass("hide");
                return false;
            }
        }
        if (!model) {
            $(".form_error .model_error").addClass("show").removeClass("hide");
            return false;
        } else {
            $(".form_error .model_error").addClass("hide").removeClass("show");
        }
        if (year && make && model) {
            $.ajax({
                url: 'contact.php',
                data: {
                    year: year,
                    make: make,
                    model: model
                },
                type: 'POST',
                success: function(data) {
                    $(".Sucess").show();
                    $(".Sucess").fadeIn(2000);
                    $(".Sucess").html("<i class='fa fa-check'></i> Dear <b>" + year + "</b> Thank you for your inquiry we will respond to you as soon as possible!");
                    $("#Year").val("");
                    $("#Make").val("");
                    $("#Model").val("");
                    $(".form_error .year_error, .form_error .make_error, .form_error .model_val_error").addClass("hide").removeClass("show");
                    $("#year").val("");
                    $("#make").val("");
                    $("#model").val("");
                }
            });
        }
        return false;
    });
});


 
/// SMOOTH SCROLL           

$(document).ready(function() {

    "use strict";
    
    var scrollAnimationTime = 1200,
        scrollAnimation = 'easeInOutExpo';
    $('a.scrollto').bind('click.smoothscroll', function(event) {
        event.preventDefault();
        var target = this.hash;
        $('html, body').stop().animate({
            'scrollTop': $(target).offset().top
        }, scrollAnimationTime, scrollAnimation, function() {
            window.location.hash = target;
        });
    });
    //COUNTER
    $('.counter_num').counterUp({
        delay: 10,
        time: 2000
    });
});



//VIDEO BACKGROUND
$(document).ready(function() {
  var videobackground = new $.backgroundVideo($('body'), {
    "align": "centerXY",
    "width": 1280,
    "height": 720,
    "path": "media/",
    "filename": "cloud",
    "types": ["mp4","ogg","webm"]
  });
});