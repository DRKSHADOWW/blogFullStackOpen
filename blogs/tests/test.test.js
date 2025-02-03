
const assert = require('node:assert')
const mongoose = require('mongoose')
const {server} = require('../index')
const {api, getAllBlogs, favoriteBlog, totalLikes, dummy }  = require('../utils/list_helper')
const Blog = require('../models/blog')

const initialBlogs = [
  {
    title:"Blog Title",
    author:"Blog Author",
    url:"https://example.com",
    likes:10
  },
  {
    title:"Blog Title2",
    author:"Blog Author2",
    url:"https://example.com",
    likes:12
  }
]
beforeEach(async () => {
  await Blog.deleteMany({})

  for(const blog of initialBlogs){
    const blogObject = new Blog(blog)
    await blogObject.save()
  }
})


test('dummy returns one', () => {
  const blogs = []

const result = dummy(blogs)
assert.strictEqual(result, 1)
})

describe('totalLikes', () => {
    test('when list is empty, returns 0', () => {
      const blogs = []
      const result = totalLikes(blogs)
      assert.strictEqual(result, 0)
    })
  
    test('when list has one blog, returns the likes of that blog', () => {
      const blogs = [{
        _id: "5a422a851b54a676234d17f7",
        title: "React patterns",
        author: "Michael Chan",
        url: "https://reactpatterns.com/",
        likes: 7,
        __v: 0
      },
      {
        _id: "5a422aa71b54a676234d17f8",
        title: "Go To Statement Considered Harmful",
        author: "Edsger W. Dijkstra",
        url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
        likes: 5,
        __v: 0
      }]
      const result = totalLikes(blogs)
      assert.strictEqual(result, 12)
    })
  
    test('when list has multiple blogs, returns the sum of their likes', () => {
        const blogs = [
            {
              
              title: "React patterns",
              author: "Michael Chan",
              url: "https://reactpatterns.com/",
              likes: 7,
             
            },
            {
              
              title: "Go To Statement Considered Harmful",
              author: "Edsger W. Dijkstra",
              url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
              likes: 5,
              
            },
            {
              
              title: "Canonical string reduction",
              author: "Edsger W. Dijkstra",
              url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
              likes: 12,
              
            }
          ]
      const result = totalLikes(blogs)
      assert.strictEqual(result, 24)
    })
})

describe('favoriteBlog', () => {
    test('when list is empty, returns null', () => {
      const blogs = []
      const result = favoriteBlog(blogs)
      assert.strictEqual(result, null)
    })
  
    test('when list has one blog, returns that blog', () => {
      const blogs = [{
        
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7
        
      }]
      const result = favoriteBlog(blogs)
      assert.deepStrictEqual(result, {
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7
      })
    })
  
    test('when list has multiple blogs, returns the blog with most likes', () => {
      const blogs = [
        {
        
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
            
          },
          {
            
            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,
            
          },
          {
            
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
            
          }
      ]
      const result = favoriteBlog(blogs)
      assert.deepStrictEqual({ title: result.title, likes: result.likes }, { title: "Canonical string reduction", likes: 12 })
    })
  
    test('when list has multiple blogs with same max likes, returns one of them', () => {
      const blogs = [
        {
            title: "React patterns",
            author: "Michael Chan",
            url: "https://reactpatterns.com/",
            likes: 7,
 
          },
          {

            title: "Go To Statement Considered Harmful",
            author: "Edsger W. Dijkstra",
            url: "http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html",
            likes: 5,

          },
          {
            title: "Canonical string reduction",
            author: "Edsger W. Dijkstra",
            url: "http://www.cs.utexas.edu/~EWD/transcriptions/EWD08xx/EWD808.html",
            likes: 12,
          }
      ]
      const result = favoriteBlog(blogs)
      assert.ok(result.likes === 12)
    })
  })

  describe('GET /api/persons', ()=>{
    test('return the correct number of blog posts in JSON format', async () =>{
      await api 
      .get('/api/blogs')
      .expect(200)
      .expect('Content-Type', /application\/json/)
    })

    test('blog posts have id property instead of _id', async () => {
      const {response} = await getAllBlogs()
      const blogs = response.body
      blogs.forEach(blog => {
        assert.ok(blog.id)
        assert.ok(!blog._id)
      })
    })
  })


  describe('POST /api/blogs', () => {
    test('missing title or url returns 400 Bad Request', async () => {
      const newBlogWithoutTitle = {
        author: 'John Doe',
        url: 'https://example.com/new-blog-post'
      };
  
      const newBlogWithoutUrl = {
        title: 'New Blog Post',
        author: 'John Doe'
      };
  
      await api
        .post('/api/blogs')
        .send(newBlogWithoutTitle)
        .expect(400);
  
      await api
        .post('/api/blogs')
        .send(newBlogWithoutUrl)
        .expect(400);
    })

    test('if likes property is missing, it defaults to 0', async () => {
      const newBlog = {
        title: 'New Blog Post',
        author: 'John Doe',
        url: 'https://example.com/new-blog-post'
      };
    
      const response = await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/);
    
      expect(response.body.likes).toBe(0);
    })

    test('a new blog post is created correctly', async () => {
      const newBlog = {
        title: 'Title of the new  blog',
        author: 'Autor of the  new blog',
        url: 'https://example.com/new-blog',
        likes: 0
      };
    
      await api
        .post('/api/blogs')
        .send(newBlog)
        .expect(201)
        .expect('Content-Type', /application\/json/)
  
        const {response, content} = await getAllBlogs()
        expect(response.body.length).toBe(initialBlogs.length + 1)      
        assert(content.includes('Title of the new  blog'))
  
    })
  })

  describe('DELETE /api/blogs/:id', ()=>{
    test('a blog can be deleted', async ()=>{

      const {response } = await getAllBlogs()
      const blogId =  response.body[0]

      await api.delete(`/api/blogs/${blogId.id}`)
      .expect(204)

    })

    
  })

  describe('UPDATE /api/blogs/:id', ()=>{
    test('a blog can be updated', async ()=> {
      const newLikes = 56
      const { response } = await getAllBlogs()
      const blogId = response.body[1].id
      
      const updateResponse = await api
        .put(`/api/blogs/${blogId}`)
        .send({ likes: newLikes })
      
      expect(updateResponse.status).toBe(200)
      expect(updateResponse.body.likes).toBe(newLikes)
    })

    test('returns 404 if blog is not found', async () => {
      const nonExistingId = '66fdc4e53d4fee4109f2c123';
      const updateResponse = await api
        .put(`/api/blogs/${nonExistingId}`)
        .send({ likes: 56 });

      expect(updateResponse.status).toBe(404)
    })

    test('returns 500 if _id < 24', async ()=>{
      const nonExistingId = '66fdc4e53d4f';
        const updateResponse = await api
          .put(`/api/blogs/${nonExistingId}`)
          .send({ likes: 56 });
  
        expect(updateResponse.status).toBe(500)
    })
  })

 

  afterAll(() => {
    mongoose.connection.close()
    server.close()
  })

  
 