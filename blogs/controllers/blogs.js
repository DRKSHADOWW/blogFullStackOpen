const blogsRouter = require("express").Router()
const Blog = require("../models/blog")
const User = require("../models/users")
const {tokenExtractor} = require('../utils/middleware')

blogsRouter.get('/', async (request, response) => {
  const  blogs = await Blog
  .find({})
  .populate('user',  { username: 1, name: 1 })
  response.json(blogs)
    
})

blogsRouter.post('/',tokenExtractor, async (request, response) => {
  const { title, author, url} = request.body;
  
  if (!title || !author || !url) {
    return response.status(400).json({ error: 'title, author, and url are required' });
  }

  const {userId} = request
  const user = await User.findById(userId)

  const newBlog = new Blog({
    title,
    author,
    url,
    user:  user._id

  })

  const result = await newBlog.save()
  user.blogs = user.blogs.concat(result._id)
  await user.save()
  response.status(201).json(result);
})


blogsRouter.delete('/:id',tokenExtractor,  async(req, res)=>{
  const id = req.params.id
  const blog = await  Blog.findByIdAndDelete(id)
  if(blog){
    res.status(204).send(blog)
  }
   res.status(404).send({error: 'blog not found'})
  

})

blogsRouter.put('/:id',tokenExtractor,  async(req, res)=>{
  const id = req.params.id;

const blog = await Blog.findByIdAndUpdate(id, { likes: req.body.likes }, { new: true });

if (!blog) {
  return res.status(404).json({ error: 'Blog not found' });
}

res.status(200).json(blog);

})


module.exports = blogsRouter;

