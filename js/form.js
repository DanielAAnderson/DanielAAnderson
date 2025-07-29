const form = document.getElementById('contactForm');
const feedback = document.getElementById('formFeedback');

form.addEventListener('submit', e => {
  e.preventDefault();
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  if (!name || !email) {
    feedback.textContent = 'Please fill in both name and email.';
    feedback.style.color = 'red';
  } else {
    feedback.textContent = `Thanks, ${name}! We'll be in touch.`;
    feedback.style.color = 'green';
    form.reset();
  }
});