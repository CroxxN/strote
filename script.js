// For intersection Observer

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.5
}

// Callback function to execute when the target is visible
const callback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            console.log('Element is in view');
            // observer.unobserve(entry.target); 
        } else {
            console.log('Element is out of view');
        }
    });
}


const observer = new IntersectionObserver(options, callback);


observer.observe(document.querySelector('<element>'));

let navbar = document.querySelector('.navbar');
let navbarLinks = document.querySelectorAll('.navbar a');
let navbarToggler = document.querySelector('.navbar-toggler');
let navbarTogglerIcon = document.querySelector('.navbar-toggler i');
let navbarCollapse = document.querySelector('.navbar-collapse');

// For toggling the navbar
navbarToggler.addEventListener('click', () => {
    navbarTogglerIcon.classList.toggle('fa-times');
    navbarTogglerIcon.classList.toggle('fa-bars');
    navbarCollapse.classList.toggle('show');
});

// For closing the navbar when a link is clicked
navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarTogglerIcon.classList.remove('fa-times');
        navbarTogglerIcon.classList.add('fa-bars');
        navbarCollapse.classList.remove('show');
    });
});

// For closing the navbar when clicked outside
document.addEventListener('click', (e) => {
    if (e.target.closest('.navbar')) {
        return;
    } else {
        navbarTogglerIcon.classList.remove('fa-times');
        navbarTogglerIcon.classList.add('fa-bars');
        navbarCollapse.classList.remove('show');
    }
});
