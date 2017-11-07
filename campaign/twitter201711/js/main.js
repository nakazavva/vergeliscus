
(function ($) {

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
        }, 500);
        return false;
    });

    $('.pull_xvg').on('click',function(){
        var array = ["よこせ","くれ","ください","ちょうだい",];
        console.log(array[Math.floor(Math.random() * array.length)]);
        var random_text = array[Math.floor(Math.random() * array.length)];
        window.open("https://twitter.com/intent/tweet?text=@vergeliscus%20XVG"+random_text + "  $XVG #VERGE ",'_blank');
        return false;
    });
})(jQuery);

