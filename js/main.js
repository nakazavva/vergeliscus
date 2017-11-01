


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



    $('.navbar-item').on('click', function () {
        var tagrget = $(this).attr('href');
        $("html,body").animate({ scrollTop: $(tagrget).offset().top-55 });
        return false;
    })

    function changeTwitterWidgetDesign(){
        var $twitter_widget = $('iframe.twitter-timeline');
        var $twitter_widget_contents = $twitter_widget.contents();
        
        if ($twitter_widget.length > 0 && $twitter_widget[0].contentWindow.document.body.innerHTML !== ""){
          $twitter_widget_contents.find('head').append('<link href="css/tw_style.css" rel="stylesheet" type="text/css">');
        }
        else {
          setTimeout(function(){
            changeTwitterWidgetDesign();
          }, 350);
        }
      }
      
      changeTwitterWidgetDesign();
})(jQuery);

