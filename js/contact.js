// Manejo del formulario de contacto
const contactForm = document.getElementById('contactForm');
const formMessage = document.querySelector('.form-message');

if (contactForm) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim() || '';
    const email = document.getElementById('email')?.value.trim() || '';
    const message = document.getElementById('message')?.value.trim() || '';

    if (!name || !email || !message) {
      formMessage.textContent = 'Por favor complete todos los campos.';
      return;
    }

    formMessage.textContent = `Gracias ${name}, su mensaje fue recibido. Nos contactaremos pronto.`;
    contactForm.reset();
  });
}
