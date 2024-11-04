import { useState} from "react"
// import Togglable  from "./Togglable"

// eslint-disable-next-line react/prop-types
export const BlogForm = ({ addBlog}) => {
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
      {/* </Togglable> */}
    </>
    ) 
  
}

