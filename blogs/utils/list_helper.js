const {app} = require('../index')
const supertest = require('supertest')
const api = supertest(app)

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  return blogs.reduce((acc, blog) => acc + blog.likes, 0);
}

const favoriteBlog = (blogs) => {
  if (blogs.length === 0) {
    return null;
  }

  const maxLikes = Math.max(...blogs.map(blog => blog.likes));
  const favorite = blogs.find(blog => blog.likes === maxLikes);

  
  return favorite

}

const getAllBlogs = async () =>{
  const response = await api.get('/api/blogs')

  return {
    response,
    content: response.body.map(blog => blog.title)
  }
}


module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  getAllBlogs,
  api
 
}