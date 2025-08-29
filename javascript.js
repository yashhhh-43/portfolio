const navLinks = document.querySelectorAll('.navbar a');
const sections = document.querySelectorAll('.section');

function showSection(id) {
  sections.forEach(section => {
    section.classList.remove('active');
    if (section.id === id) {
      section.classList.add('active');
    }
  });
}

navLinks.forEach(link => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const targetId = link.getAttribute('href').substring(1);

    navLinks.forEach(l => l.classList.remove('active'));
    link.classList.add('active');

    showSection(targetId);
  });
});

showSection('home');