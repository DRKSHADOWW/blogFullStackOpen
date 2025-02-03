import { useState} from "react"
import { Bcreate } from '../i18n/button-create'
// import Togglable  from "./Togglable"

// eslint-disable-next-line react/prop-types
export const BlogForm = ({addBlog}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const create = Bcreate.CREATE.CREATE_BUTTON

  const handleTitle = (e) =>{
    setTitle(e.target.value)  
  }

  const handleAuthor = (e) =>{
    setAuthor(e.target.value)
  }

  const handleUrl = (e) =>{
    setUrl(e.target.value)
  }


   const handleSubmit = async(e) =>{
    e.preventDefault()

    

    const newBlog = {
    title,
    author,
    url
    }

    try {
      await addBlog(newBlog);
      setTitle('');
      setAuthor('');
      setUrl('');
      
    } catch (error) {
      console.error('Error creating blog:', error);
      alert('Failed to create blog. Please try again.');
    }
   }



    
  
  
  return (
      <>

      {/* <button onClick={handleLogout}>log out</button> */}
      {/* <Togglable  buttonLabel='create new blog' ref={eRef}> */}

      <h2>Create new blog</h2>

      <form onSubmit={handleSubmit}>
        
        <label htmlFor="title">title</label>
        <input
          data-testid='title'
          id="title"
          value={title}
          onChange={handleTitle}
        />

        <label htmlFor="author">author</label>
        <input
          
          data-testid='author'
          id="author"
          value={author}
          onChange={handleAuthor}
        />

        <label htmlFor="url">url</label>
        <input
          data-testid='url'
          id="url"
          value={url}
          onChange={handleUrl}
        />

        <button id="submit-create">{create}</button>
      </form> 
      {/* </Togglable> */}
    </>
    ) 
  
}

