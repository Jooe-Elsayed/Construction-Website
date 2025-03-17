//? Show Menu
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

//? Menu hidden
if(navClose){
    navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

//? Remove Menu Mobile
const navLink = document.querySelectorAll('.nav--link');
const linkAction = () => {
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu');
}
navLink.forEach(n => n.addEventListener('click',linkAction));


//? Change Backgound Header
    const bgHeader = () => {
        const header = document.getElementById('header');
        this.scrollY >= 50 ? header.classList.add('bg-header')
                        : header.classList.remove('bg-header')
    }
    window.addEventListener('scroll', bgHeader);
    bgHeader()

//? Swiper Services 
const swiperServices = new Swiper('.services--swiper',{
    loop:true,
    grabCursor:true,
    spaceBetween:24,
    slidesPerView:'auto',

    navigation:{
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    }
})


//? Show Scroll Up
const scrollUp = () =>{
    const scrollUp = document.getElementById('scroll-up');
    this.screenY >= 350 ? scrollUp.classList.add('show-scroll')
                        : scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll',scrollUp)
scrollUp()


//? Scroll sections active link
const sections = document.querySelectorAll('section[id]');
const scrollActive = () => {
    const scrollDown = window.scrollY
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 58,
            sectionId = current.getAttribute('id'),
            sectionsClass = document.querySelector('.nav--menu a[href*=' + sectionId + ']')
            if(scrollDown > scrollUp && scrollDown <= sectionTop + sectionHeight){
                sectionsClass.classList.add('active-link')
            }else{
                sectionsClass.classList.remove('active-link')
            }
    })
}
window.addEventListener('scroll',scrollActive);


//? Scroll Revel Animation 
const sr = ScrollReveal({
    origin: 'top',
    distance: '100px',
    duration:2500,
    delay:400,
})

sr.reveal(`.home--content, .services--data, .services--swiper, .footer--container`)
sr.reveal(`.home--images`, {origin: 'bottom', delay:1000})
sr.reveal(`.about--images, .contact--img`, {origin: 'left'})
sr.reveal(`.about--data, .contact--data`, {origin: 'right'})
sr.reveal(`.projects--card`, {interval:100})