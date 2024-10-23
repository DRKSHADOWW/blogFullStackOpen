import { useState } from "react"

// eslint-disable-next-line react/prop-types
export const BlogForm = ({handleLogout, createNote}) => {
  const [title, setTitle] = useState('')
  const [author, setAuthor] = useState('')
  const [url, setUrl] = useState('')

  const handleTitle = (e) =>{
    setTitle(e.target.value)  
  }

  const handleAuthor = (e) =>{
    setAuthor(e.target.value)
  }

  const handleUrl = (e) =>{
    setUrl(e.target.value)
  }


   const handleSubmit = (e) =>{
    e.preventDefault()

    const newBlog = {
    title: title,
    author: author,
    url: url
    }

    createNote(newBlog)
    setTitle('')
    setAuthor('')
    setUrl('')
   }

    
  
  
  return (
      <>

      <button onClick={handleLogout}>log out</button>

      <form onSubmit={handleSubmit}>
        <h2>add new Blog desde Login</h2>
        <label >title: </label>
        <input
          value={title}
          onChange={handleTitle}
        />

        <label >Author: </label>
        <input
          value={author}
          onChange={handleAuthor}
        />

        <label >Url: </label>
        <input
          value={url}
          onChange={handleUrl}
        />
        <button type="submit">save</button>
      </form> 
    </>
    ) 
  
}

