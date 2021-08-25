const hamburger = document.querySelector('.hamburger');
const navlinks = document.querySelector('nav ul');
const links = document.querySelectorAll('nav li');

hamburger.addEventListener('click',() =>{
    navlinks.classList.toggle("open");
})



var lastScrollTop = 0;
navbar = document.getElementById("navbar");
window.addEventListener("scroll",function(){
    var scrollTop =window.pageYOffset || document.documentElement.scrollTop;

    if(scrollTop > lastScrollTop){
        navbar.style.top = "-10vh";
    }
    else{
        navbar.style.top="0";
    }
    lastScrollTop = scrollTop;
})



//typing animation 
var typed = new Typed(".typing1",{
    strings: ["Programmer","Web Designer","Web Developer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});
var typed = new Typed(".typing2",{
    strings: ["Programmer","Web Designer","Web Developer","Freelancer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});