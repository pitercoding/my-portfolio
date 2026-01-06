const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('header nav');

// Menu mobile toggle
menuIcon.addEventListener('click', () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
});

// Function to activate page sections
const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => link.classList.remove('active'));

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => section.classList.remove('active'));

    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// Navigation links click
navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();
            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

// Logo click
logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();
        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

// Resume buttons functionality
const reumeBtns = document.querySelectorAll('.resume-btn');
reumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        reumeBtns.forEach(btn => btn.classList.remove('active'));
        btn.classList.add('active');

        resumeDetails.forEach(detail => detail.classList.remove('active'));
        resumeDetails[idx].classList.add('active');
    });
});

// Portfolio carousel
const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');
const portfolioDetails = document.querySelectorAll('.portfolio-detail');
const imgSlide = document.querySelector('.portfolio-carousel .img-slide');

let index = 0;

// Function to update portfolio
const activePortfolio = () => {
    // Slide images
    imgSlide.style.transform = `translateX(${index * -100}%)`;

    // Activate portfolio details
    portfolioDetails.forEach(detail => detail.classList.remove('active'));
    portfolioDetails[index].classList.add('active');
};

// Arrow right click
arrowRight.addEventListener('click', () => {
    index = (index + 1) % portfolioDetails.length; // Loop infinito para frente
    activePortfolio();
});

// Arrow left click
arrowLeft.addEventListener('click', () => {
    index = (index - 1 + portfolioDetails.length) % portfolioDetails.length; // Loop infinito para trás
    activePortfolio();
});

// Initialize portfolio
activePortfolio();

// Navegação pelo teclado
document.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight') {
        index = (index + 1) % portfolioDetails.length;
        activePortfolio();
    } else if (event.key === 'ArrowLeft') {
        index = (index - 1 + portfolioDetails.length) % portfolioDetails.length;
    activePortfolio();
    }
})