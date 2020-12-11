$(function () {

    $(document).on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

    $('#mobile-toggle-menu').click(function () {
        var status =$('#navbarNavDropdown').is(":visible");
        var $nav = $(".navbar");
        if (!status){
            $('body').addClass("fixed-position");
            $(".custom-link").addClass('custom-link-scrolled');
            $("#login-button").addClass('login-scrolled');
            $(".btn-turqoise").addClass('custom-link-scrolled');
            $nav.attr("style", "background-color: #ffffff !important");
            $(".mobile-logo").attr("src", "img/logo-dark.svg");
        }else{
            $('body').removeClass("fixed-position");
            if (!$(".navbar").hasClass('navbar-scrolled')){
                $(".mobile-logo").attr("src", "img/logo-light.svg");
            }
            $nav.attr('style', function(i, style){
                return style && style.replace(/background-color: #ffffff[^;]+;?/g, '');
            });
        }
    });
    $(document).scroll(function () {
        var $nav = $(".navbar");
            $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
            if ($(this).scrollTop() > $nav.height()) {
                $(".logo").attr("src", "img/logo-dark.svg");
                $(".mobile-logo").attr("src", "img/logo-dark.svg");
            }else{
                $(".logo").attr("src", "img/logo-light.svg");
                $(".mobile-logo").attr("src", "img/logo-light.svg");
            }
    });

});
