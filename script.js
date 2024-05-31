const hamburgerBtn = document.querySelector('.hamburger-btn');
const mobileMenu = document.querySelector('.nav-mobile');


hamburgerBtn.addEventListener('click', ()=>{
    hamburgerBtn.classList.toggle('active');
    mobileMenu.classList.toggle('active');
})



