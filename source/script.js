let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

// Update active link based on scroll position
window.onscroll = () => {
    let top = window.scrollY; // Get the current scroll position

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150; // Offset for the section
        let height = sec.offsetHeight; // Height of the section
        let id = sec.getAttribute('id'); // Get the section ID

        // Check if the current scroll position is within the section
        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active'); // Remove active class from all links
                // Add active class to the corresponding link
                if (link.getAttribute('href') === '#' + id) {
                    link.classList.add('active');
                }
            });
        }
    });
};

// Toggle mobile menu visibility
menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};

// Handle click events for smooth scrolling and active class update
navLinks.forEach(link => {
    link.addEventListener('click', function() {
        // Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // Add active class to the clicked link
        this.classList.add('active');

        // Smooth scroll to the section
        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        targetSection.scrollIntoView({ behavior: 'smooth' });

        // Close mobile menu if open
        if (navbar.classList.contains('active')) {
            menuIcon.classList.remove('fa-xmark');
            navbar.classList.remove('active');
        }
    });
});
