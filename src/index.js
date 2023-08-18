import createSite from './modules/index';
createSite();

document.addEventListener('DOMContentLoaded', function() {
  const sections = document.querySelectorAll('.section');
  
  sections.forEach(section => {
    section.addEventListener('click', scrollSection);
  });

  function scrollSection(e) {
    e.preventDefault();
    const targetId = e.currentTarget.getAttribute('id');
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior:'smooth'
      })
    }
  }
});