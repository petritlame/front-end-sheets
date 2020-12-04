$(function () {
    $(document).scroll(function () {
        var $nav = $(".navbar");
        $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
        $(".custom-link").toggleClass('custom-link-scrolled', $(this).scrollTop() > $nav.height());
        $("#login-button").toggleClass('login-scrolled', $(this).scrollTop() > $nav.height());
        $(".btn-turqoise").toggleClass('custom-link-scrolled', $(this).scrollTop() > $nav.height());
        if ($(this).scrollTop() > $nav.height()){
            $(".logo").attr("src","img/logo-dark.svg");
            $(".mobile-logo").attr("src","img/logo-dark.svg");
        }else{
            $(".logo").attr("src","img/logo-light.svg");
            $(".mobile-logo").attr("src","img/logo-light.svg");
        }
    });
});
