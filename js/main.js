


(function ($) {

    document.addEventListener('DOMContentLoaded', function () {

        // Get all "navbar-burger" elements
        var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

        // Check if there are any navbar burgers
        if ($navbarBurgers.length > 0) {

            // Add a click event on each of them
            $navbarBurgers.forEach(function ($el) {
                $el.addEventListener('click', function () {

                    // Get the target from the "data-target" attribute
                    var target = $el.dataset.target;
                    var $target = document.getElementById(target);

                    // Toggle the class on both the "navbar-burger" and the "navbar-menu"
                    $el.classList.toggle('is-active');
                    $target.classList.toggle('is-active');

                });
            });
        }

    });

    // $('#timer').countdown( 
    //     {until: $.countdown.UTCDate(-8,  new Date(2017,10,06,16,00))});
    // $('#timer').countdown({until: new Date(2017,10,7,16,00), timezone: +9});
    // var limit_date = new Date(2017,10,7,16,00);
    // var now_date = new Date();
    // var campaign_banner = '<a target="_blank" href="/campaign/twitter201711/"><img src="images/banner1.jpg" class="" /></a>'
    
    // // 結果はb is bigger than a
    // if (limit_date > now_date) {
    //     console.log('a is bigger than b');
    //     $('#campaign').countdown({
    //         until: limit_date,
    //         timezone: +9,
    //         layout:
    //         '<div class="time"><div class="time_label">DAYS</div><img src="images/time_bg.jpg" class="time_bg"/><div class="time_count">{dn}</div></div>'
    //         + '<div class="sep">:</div>'
    //         + '<div class="time"><div class="time_label">HOURS</div><img src="images/time_bg.jpg" class="time_bg"/><div class="time_count">{hn}</div></div>'
    //         + '<div class="sep">:</div>'
    //         + '<div class="time"><div class="time_label">MINUTES</div><img src="images/time_bg.jpg" class="time_bg"/><div class="time_count">{mn}</div></div>'
    //         + '<div class="sep">:</div>'
    //         + '<div class="time"><div class="time_label">SECONDS</div><img src="images/time_bg.jpg" class="time_bg"/><div class="time_count">{sn}</div></div>',
    //         onExpiry: liftOff
    //     });
    // }
    // else {
    //     $('#campaign').html(campaign_banner);
    //     $('.campaign_title').remove();

    // }

    // function liftOff() {
    //     $('#campaign').html(campaign_banner);
    //     $('.campaign_title').remove();
        
    // }

    // $('#imageLayout').countdown({until: liftoffTime, compact: true, 
    //     layout: $('#imageLayout').html()});
    // $('#timer').yycountdown({endDateTime:'2017/11/06 16:00:00'});

    $('.navbar-item').on('click', function () {
        var tagrget = $(this).attr('href');
        $("html,body").animate({ scrollTop: $(tagrget).offset().top - 55 });
        return false;
    })
    // $('#pageTop').on('click', function () {
    //     var tagrget = $(this).attr('href');
    //     $("html,body").animate({ scrollTop: $(tagrget).offset().top-55 });
    //     return false;
    // })
    var topBtn = $('#pageTop');
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            topBtn.fadeIn();
        }
        //  else {
        //     topBtn.fadeOut();
        // }
    });
    topBtn.click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 1000);
        return false;
    });
    function changeTwitterWidgetDesign() {
        var $twitter_widget = $('iframe.twitter-timeline');
        var $twitter_widget_contents = $twitter_widget.contents();

        if ($twitter_widget.length > 0 && $twitter_widget[0].contentWindow.document.body.innerHTML !== "") {
            $twitter_widget_contents.find('head').append('<link href="css/tw_style.css" rel="stylesheet" type="text/css">');
        }
        else {
            setTimeout(function () {
                changeTwitterWidgetDesign();
            }, 350);
        }
    }

    changeTwitterWidgetDesign();
})(jQuery);

