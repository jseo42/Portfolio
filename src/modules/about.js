function createAbout() {
  const about = document.createElement('div');
  about.classList.add('section');
  about.setAttribute('id', 'about');
  about.textContent = 'About Page'
  return about
};

export default createAbout;
