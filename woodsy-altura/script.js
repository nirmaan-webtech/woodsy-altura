const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
toggle?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle?.setAttribute('aria-expanded', 'false');
}));
document.getElementById('year').textContent = new Date().getFullYear();

const form = document.getElementById('lead-form');
form?.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const data = new FormData(form);
  const subject = encodeURIComponent(`Website enquiry — ${data.get('projectType')}`);
  const body = encodeURIComponent([
    `Name: ${data.get('name')}`,
    `Phone: ${data.get('phone')}`,
    `Email: ${data.get('email') || 'Not provided'}`,
    `Project type: ${data.get('projectType')}`,
    `City / locality: ${data.get('location') || 'Not provided'}`,
    `Details: ${data.get('details') || 'Not provided'}`
  ].join('\n'));
  document.getElementById('form-status').textContent = 'Opening your email app with the enquiry details. This mockup does not store submissions.';
  window.location.href = `mailto:info@woodsyaltura.com?subject=${subject}&body=${body}`;
});