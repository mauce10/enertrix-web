// Gestión del navbar transparente con efecto al hacer scroll
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) {
    navbar?.classList.add('scrolled');
  } else {
    navbar?.classList.remove('scrolled');
  }
});

// Resaltado activo de la navegación según sección visible
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.navbar-nav .nav-link');

const setActiveLink = () => {
  let current = '';

  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 120;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
};

window.addEventListener('scroll', setActiveLink);
setActiveLink();
