import createHome from "./home";
import createAbout from "./about";
import createProjects from "./project";
import createBlog from "./blog"

function createSite() {
  const content = document.getElementById('content');
  content.appendChild(createHome());
  content.appendChild(createAbout());
  content.appendChild(createProjects());
  content.appendChild(createBlog());
}


export default createSite;