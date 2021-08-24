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
