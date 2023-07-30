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


$(document).on('scroll',function(){
    $('.SwivelTopImage').css("left", Math.max(10 - 0.20*window.scrollY)
        + "px");
})

$(document).on('scroll',function(){
    $('.SwivelDownImage').css("margin-left", Math.max(-260 + 0.20*window.scrollY)
        + "px");
})

$(document).on('scroll',function(){
    $('.SwivelTopImagePortfolio').css("left", Math.max(10 - 0.20*window.scrollY)
        + "px");
})

$(document).on('scroll',function(){
    $('.SwivelDownImagePortfolio').css("margin-left", Math.max(-290 + 0.20*window.scrollY)
        + "px");
})



const container = document.querySelector('.BeforeAndAfterSliderContainer');

document.querySelector('.slider').addEventListener('input', (e) => {
container.style.setProperty('--position', `${e.target.value}%`);
})


// const sections = document.querySelectorAll('section');
// const navLi = document.querySelectorAll('nav .container ul li');

// window.addEventListener('scroll', ()=> {
//   let current = '';
//   sections.forEach(section => {
//     const sectionTop = section.offsetTop;
//     const sectionHeight = section.clientHeight;
//     if (pageYOffset >= (sectionTop)) {
//       current = section.getAttribute('id'); 
//     }
//   })

//   navLi.forEach(li => {
//     li.classList.remove('active');
//     if(li.classList.contains(current)) {
//       li.classList.add('active')
//     }
//   })
// })
