const sidebar = document.getElementById('sidebar');
const menu = document.getElementById('menu');

menu.addEventListener('click', () => sidebar.classList.toggle('open'));

document.querySelectorAll('.sidebar nav a').forEach((link) => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.sidebar nav a').forEach((item) => item.classList.remove('active'));
    link.classList.add('active');
    sidebar.classList.remove('open');
  });
});

document.getElementById('contactForm').addEventListener('submit', (event) => {
  event.preventDefault();
  const button = event.currentTarget.querySelector('button');
  button.textContent = 'Mensaje enviado';
  event.currentTarget.reset();
});
