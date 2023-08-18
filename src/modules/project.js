function createProjects() {
  const project = document.createElement('div');
  project.classList.add('section');
  project.setAttribute('id', 'project');
  project.textContent = 'Project Page'
  return project
};

export default createProjects;