import { useState, useEffect, useRef } from 'react'
import Blog  from './components/Blog'
import blogService from './services/blogs'
import loginService from './services/login'
import { Notification } from './components/Notification'
import { BlogForm } from './components/BlogForm'
import { LoginForm } from './components/LoginForm'
import Togglable  from "./components/Togglable"

const App = () => {

  const [blogs, setBlogs] = useState([])
  const [username, setUsername] = useState('') 
  const [password, setPassword] = useState('')
  const [user, setUser] = useState(null) 
  const [errorMessage,  setErrorMessage] = useState(null)

  const eRef = useRef()

  useEffect(() => {
    blogService.getAll()
    .then(blogs =>
      setBlogs( blogs )
    )  
  }, [])

  useEffect(() => {
 
    const loggedUserJSON = window.localStorage.getItem('loggedBloggedAppUser');
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
        setUser(user)
        blogService.setToken(user.token);

    }
}, [])



  const handleLogin = async (event) => {
    event.preventDefault()
    
    try {
      const user = await loginService
      .login({
        username, 
        password
      })

      window.localStorage.setItem("loggedBloggedAppUser",  JSON.stringify(user))

      blogService.setToken(user.token)
      setUser(user)

      setErrorMessage('signed correctly')
      setTimeout(() => {setErrorMessage(null)}, 3000)

      setUsername('')
      setPassword('')

    } catch (e) {
      setErrorMessage(`Wrong credentials ${e.message}`)
      setTimeout(() => {setErrorMessage(null)}, 3000)
    }
  }

  const handleLogout = () => {
    try {
      if (user) { 
        setUser(null) 
        blogService.setToken(user.token)
        window.localStorage.removeItem('loggedBloggedAppUser')
        window.localStorage.clear('loggedBloggedAppUser')
      }
    } catch (error) {
      console.error(`Error at logout:`, error);
    }
  }

  const addBlog = async (newBlog) =>{
    if (!newBlog.title || !newBlog.author || !newBlog.url) {
      setErrorMessage('Please complete all fields')
      setTimeout(() => {setErrorMessage(null)}, 3000)
      return
    }
    
    try{
    const createBlogs = await blogService
    .create(newBlog)
      setBlogs(prevBlogs => [...prevBlogs, createBlogs])
      eRef.current.toggleVisibility()
      setErrorMessage(`blog added successfully!`)
      
      setTimeout(() => {setErrorMessage(null)}, 3000)

    }catch(e){
        setErrorMessage(`blog failed to add ${e.message}`)
        setTimeout(() => {setErrorMessage(null)}, 3000)
      }
  }

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("¿Are you sure you want to delete this blog?")
    
    if (confirmDelete) {
      blogService.setToken(user.token)
      try {
        await blogService.blogDelete(id);
        setBlogs(blogs.filter(blog => blog.id !== id));
        setErrorMessage(`Blog deleted successfully!`);
        setTimeout(() => { setErrorMessage(null); }, 3000);
    } catch (error) {
        setErrorMessage(`Error deleting blog: ${error.message}`);
        setTimeout(() => { setErrorMessage(null); }, 3000);
    }

  }
  }

  const addBlogLike = async id => {
    const blogToUpdate = blogs.find(blog => blog.id === id)
    if (!blogToUpdate) {
      console.error(`Blog with id ${id} not found`);
      return
    }
  
    const updatedBlog = { ...blogToUpdate, likes: blogToUpdate.likes + 1 }
    
    try {
      await blogService
      .update(id, updatedBlog)
      setBlogs(prevBlogs => prevBlogs.map(blog => blog.id === id ? updatedBlog : blog))
    } catch (error) {
      console.error('Error updating likes:', error);
      setErrorMessage('Error updating likes. Please try again.');
      setTimeout(() => {
        setErrorMessage(null);
      }, 3000);
    }
  }

  const blogForm = () => (
      <>
      <Togglable  buttonLabel='create new blog' ref={eRef}>
        <BlogForm addBlog={addBlog}/>
      </Togglable> 
      </>
      )   
  
  const loginForm = () => (
  <>
    <Togglable buttonLabel='Show Login' ref={eRef} visible='true'>
      <LoginForm 
      handleLogin={handleLogin}
      onChangeUsername={({ target }) => setUsername(target.value)}
      onChangePassword={({ target }) => setPassword(target.value)}
      username={username}
      password={password}
      />      
      </Togglable>
    </>
    )

  const blogList = () => {

    const sortedBlogs = blogs.sort((a, b) => (b.likes - a.likes))

    return (
      sortedBlogs.map(blog => (
        
        <Blog 
        key={blog.id}
        blog={blog}
        handleDelete={() => handleDelete(blog.id)}
        addBlogLike={()=> addBlogLike(blog.id)}
        
        />
      ))
    )

  }
  


  return (
    <>
      <Notification message={errorMessage}/>

      {user === null ?
      loginForm():
      <div>
        <p>{user.title}<button onClick={handleLogout}>log out</button></p>
        {blogForm()}
        <br />
        <h2>blogs</h2>
        {blogList()}
      </div>
      }
    </>
  )
}



export default App