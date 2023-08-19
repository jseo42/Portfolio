import createHome from "./home";
import createAbout from "./about";
import createProjects from "./project";
import createBlog from "./blog"



function createHeader() {
  const header = document.createElement('header')
  const headerName = document.createElement('a');
  headerName.href = '#landing'
  headerName.classList.add('logo');
  headerName.textContent = 'J.S.';
  header.appendChild(headerName);
  header.appendChild(createNav());

  window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0);
  });

  return header;

}

function createNav() {
  const nav = document.createElement('nav');
  const listLink = document.createElement('ul');
  listLink.classList.add('nav-list');

  const home = document.createElement('li');
  const homeLink = document.createElement('a');
  homeLink.href = '#landing';
  homeLink.classList.add('nav-link');
  homeLink.textContent = 'HOME'
  home.appendChild(homeLink);
  
  const about = document.createElement('li');
  const aboutLink = document.createElement('a');
  aboutLink.href = '#about';
  aboutLink.classList.add('nav-link');
  aboutLink.textContent = 'ABOUT'
  about.appendChild(aboutLink);

  const project = document.createElement('li');
  const projectLink = document.createElement('a');
  projectLink.href = '#project';
  projectLink.classList.add('nav-link');
  projectLink.textContent = 'PROJECTS'
  project.appendChild(projectLink);

  const blog = document.createElement('li');
  const blogLink = document.createElement('a');
  blogLink.href = '#blog';
  blogLink.classList.add('nav-link');
  blogLink.textContent = 'BLOG';
  blog.appendChild(blogLink);

  listLink.appendChild(home);
  listLink.appendChild(about);
  listLink.appendChild(project);
  listLink.appendChild(blog);

  nav.appendChild(listLink);

  
  return nav

}





function createSite() {
  const content = document.getElementById('content');
  content.appendChild(createHeader());
  content.appendChild(createHome());
  content.appendChild(createAbout());
  content.appendChild(createProjects());
  content.appendChild(createBlog());
}


export default createSite;