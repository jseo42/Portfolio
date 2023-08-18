function createBlog(){
  const blogPage = document.createElement('div');
  blogPage.classList.add('section');
  blogPage.setAttribute('id', 'blog');
  blogPage.textContent = 'Blog Page'
  return blogPage;
};

export default createBlog;