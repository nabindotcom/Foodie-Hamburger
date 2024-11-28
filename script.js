let hamburgerIcon = document.querySelector('.hamburger-icon');
let closeIcon = document.querySelector('.close-icon');
let header = document.querySelector('.header-content')
let nav = document.querySelector('nav')
hamburgerIcon.addEventListener('click', (e) =>{
    e.stopPropagation();
    header.classList.add("menu-open");
})
closeIcon.addEventListener('click', ()=>{
    header.classList.remove("menu-open");
})
nav.addEventListener('click', (e) =>{
    e.stopPropagation();
})
window.addEventListener('click', ()=>{
    header.classList.remove("menu-open");

})

// solve goto top 
document.querySelector('.goToTop').addEventListener('click',()=>{
    document.querySelector('.top').scrollTo(0,0);
})
{

}