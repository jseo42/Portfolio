function createHome(){
  const landingPage = document.createElement('div');
  landingPage.classList.add('section');
  landingPage.setAttribute('id', 'landing')
  landingPage.textContent = 'Landing Page'
  return landingPage;
};

export default createHome;
