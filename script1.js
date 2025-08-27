document.addEventListener('DOMContentLoaded', function() {
    // Smooth scroll for navbar links
    document.querySelectorAll('.navbar-nav .nav-link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = 80; // Adjust this value to account for fixed header height
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });

            // Close the navbar collapse on mobile after clicking a link
            const navbarCollapse = document.getElementById('navbarNav');
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show'); // Manually remove 'show' class
            }
        });
    });

    // Smooth scroll for "Explore Our Art" and "See All Products" buttons
    document.querySelectorAll('a.btn[href^="#"]').forEach(button => {
        button.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            const headerOffset = 80; // Adjust this value
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        });
    });

    // Handle "Buy Now" button clicks to redirect to WhatsApp
    document.querySelectorAll('.buy-now-btn').forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.dataset.product;
            const phoneNumber = '+919175941477'; // Your mobile number
            const encodedProductName = encodeURIComponent(productName);
            const message = encodeURIComponent(`Hello, I'm interested in the ${productName} from Ekdanta Resin Art Creations.`);
            const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

            window.open(whatsappUrl, '_blank'); // Open in a new tab
        });
    });

    // Optional: Add a simple fade-in effect for sections as they come into view
    const sections = document.querySelectorAll('section:not(#home)');
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // Manually handle navbar toggler click
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.getElementById('navbarNav');

    if (navbarToggler) {
        navbarToggler.addEventListener('click', () => {
            navbarCollapse.classList.toggle('show');
        });
    }
});