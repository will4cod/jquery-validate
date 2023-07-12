$(document).ready(function() {
    $('.switch-sign-up').click(function(){
        $('.switch-login').css({"color": "gray", "border": "none"})
        $('.switch-sign-up').css({"color": "white", "border-bottom": "2px solid white"})
        $('.sign-up-form').css({"transform":"translateX(0px)"})
        $('.login-form').css({"transform":"translateX(-260px)"})
    });
    $('.switch-login').click(function(){
        $('.switch-sign-up').css({"color": "gray", "border": "none"})
        $('.switch-login').css({"color": "white", "border-bottom": "2px solid white"})
        $('.sign-up-form').css({"transform":"translateX(260px)"})
        $('.login-form').css({"transform":"translateX(0px)"})
    });
});