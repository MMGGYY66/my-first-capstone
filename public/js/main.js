const hamburgerBtn = document.getElementById('hamburger-button');
const mobileMenu = document.getElementById('mobile-menu');

const close = document.querySelector('.close');

function toggleMenu() {
  mobileMenu.classList.toggle('hidden');
  hamburgerBtn.classList.toggle("hidden");
  document.body.classList.add('stop-scrolling');
}

hamburgerBtn.addEventListener('click', toggleMenu);
mobileMenu.addEventListener('click', toggleMenu);

close.addEventListener('click', () => {
  mobileMenu.classList.remove('hidden');
  document.body.classList.remove('stop-scrolling');
});

document.querySelectorAll(".nav-link").forEach(link => link.addEventListener("click", () => {
  mobileMenu.classList.remove('hidden');
}));
