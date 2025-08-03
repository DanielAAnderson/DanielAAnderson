const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

// Set accessibility support
feedback.setAttribute('aria-live', 'polite');

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  // Basic validation
  if (!name || !email || !message) {
    feedback.textContent = 'Please fill in all fields: name, email, and message.';
    feedback.style.color = 'red';
    return;
  }

  // Success feedback
  feedback.textContent = `Thanks, ${name}! We'll be in touch soon.`;
  feedback.style.color = 'green';

  // Reset form after short delay
  setTimeout(() => {
    form.reset();
  }, 500);
});
