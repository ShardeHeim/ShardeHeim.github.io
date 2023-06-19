window.onload = function () {

    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');

    menu_btn.addEventListener('click', function () {
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
}

$(document).on('scroll',function(){
    $('.h1AboutDark').css("left", Math.max(10 - 0.35*window.scrollY)
        + "px");
})

$(document).on('scroll',function(){
    $('.h1AboutLight').css("margin-left", Math.max(-500 + 0.35*window.scrollY)
        + "px");
})