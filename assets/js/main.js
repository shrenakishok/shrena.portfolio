const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close')

/*Career Animation*/
var textElement = document.getElementById('text');

if (textElement) {
    var typed = new Typed('#text', {
        strings: ['Illustrator', 'Graphic Designer', 'Frontend Developer'],
        typeSpeed: 75,
        backSpeed: 75,
        backDelay: 1000,
        loop: true
    });
}


/*Show Menu*/
if(navToggle){
    navToggle.addEventListener('click', ()=>{
        navMenu.classList.add('show-menu')
    })
}

/*Hide Menu*/
if(navClose){
     navClose.addEventListener('click', ()=>{
        navMenu.classList.remove('show-menu')
    })
}

/*Remove Mobile Menu*/
const navLink = document.querySelectorAll('.nav_item')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*View Skills*/
const skillContent = document.getElementsByClassName('skill_content'),
    skillHeader = document.querySelectorAll('.skill_header')

function toggleSkill(){
    let itemClass = this.parentNode.className

    for(i=0; i < skillContent.length; i++){
        skillContent[i].className = 'skill_content skill_close'
    }
    if(itemClass === 'skill_content skill_close'){
        this.parentNode.className = 'skill_content skill_open'
    }
}

skillHeader.forEach((el) =>{
    el.addEventListener('click', toggleSkill)
})

/*Qualifications*/
const tabs = document.querySelectorAll('[data-target]');
const tabContents = document.querySelectorAll('[data-content]');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualification_active');
        });

        const target = document.querySelector(tab.dataset.target);
        target.classList.add('qualification_active');

        tabs.forEach(tab => {
            tab.classList.remove('qualification_active');
        });

        tab.classList.add('qualification_active');
    });
});


/*Services*/
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.services_modal-close')

let modal = function(modalClick){
    modalViews[modalClick].classList.add('active-modal')
}

modalBtns.forEach((modalBtn, i) =>{
    modalBtn.addEventListener('click', ()=> {
        modal(i)
    })
})

modalCloses.forEach((modalClose) =>{
    modalClose.addEventListener('click', () =>{
        modalViews.forEach((modalView)=>{
            modalView.classList.remove('active-modal')
        })
    })
})


/*Portfolio*/
const filterActive = document.querySelectorAll(".filter-button");

filterActive.forEach(button => {
  button.addEventListener("click", () => {
    // Remove the "active" class from all buttons
    filterActive.forEach(btn => btn.classList.remove("active"));

    // Add the "active" class to the clicked button
    button.classList.add("active");
  });
});


const filterButtons = document.querySelectorAll(".filter-button");
const projectCards = document.querySelectorAll(".project_card");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const filter = button.getAttribute("data-filter");

        projectCards.forEach(card => {
            const tags = card.getAttribute("data-tags").split(' ');

            if (filter === "all" || tags.includes(filter)) {
                card.style.display = "block";
            } else {
                  card.style.display = "none";
             }
          });
       });
});


/*Personal Blog*/
let swiperBlog = new Swiper('.blog_container',{
    cssMode: true,
    loop: true,

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

/*Testimonial*/
let swiperTestimonial = new Swiper('.testimonial_container',{
    loop: true,
    grabCursor: true,
    spaceBetween: 48,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },
    breakpoints:{
        568:{
          slidesPerView: 2,  
        }
    }
});

/*Active Link*/
const sections = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav__menu a');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id');

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            // Remove 'active-link' class from all links
            navLinks.forEach(link => link.classList.remove('active-link'));

            // Add 'active-link' class to the current link
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
        }
    });
}

window.addEventListener('scroll', scrollActive);


/*Background Header*/
function scrollHeader(){
    const nav = document.getElementById('header')
    // When the scroll is greater than 200 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) nav.classList.add('scroll-header'); else nav.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*Scroll Up*/
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 560) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*Dark Theme*/
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => themeButton.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

// We validate if the user previously chose a topic
if (selectedTheme) {
  document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
  themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    // Add or remove the dark / icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    // We save the theme and the current icon that the user chose
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})