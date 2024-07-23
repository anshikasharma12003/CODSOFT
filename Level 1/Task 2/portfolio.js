document.addEventListener('DOMContentLoaded', () => {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navbarToggler.addEventListener('click', () => {
        navbarCollapse.classList.toggle('show');
    });

    const navLinks = document.querySelectorAll('.nav-link');
    const navbarHeight = document.querySelector('.navbar').offsetHeight;

    navLinks.forEach((link) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            window.scrollTo({
                top: targetSection.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        });
    });

    // Update active link based on scroll position
    window.addEventListener('scroll', () => {
        let fromTop = window.scrollY + navbarHeight;

        navLinks.forEach(link => {
            const section = document.querySelector(link.getAttribute('href'));

            if (section.offsetTop <= fromTop && section.offsetTop + section.offsetHeight > fromTop) {
                link.classList.add('active');
            } else {
                link.classList.remove('active');
            }
        });
    });
});

