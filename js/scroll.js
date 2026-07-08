// Efecto de scroll suave y mejora de navegación interna
const links = document.querySelectorAll('a[href^="#"]');

links.forEach((link) => {
  link.addEventListener('click', (event) => {
    const targetId = link.getAttribute('href');
    if (!targetId || targetId === '#') return;

    const target = document.querySelector(targetId);
    if (!target) return;

    event.preventDefault();
    const offsetTop = target.getBoundingClientRect().top + window.scrollY - 70;

    window.scrollTo({
      top: offsetTop,
      behavior: 'smooth'
    });
  });
});
