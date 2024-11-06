import {useState} from 'react'

// eslint-disable-next-line react/prop-types
const Blog = ({ blog, handleDelete, addBlogLike}) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleToggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const detailsStyle = {
    color: 'blue', 
    fontWeight: 'bold' 
  }

  return (
    <>
      <div style={blogStyle}>
        {blog.title}
        
        <button onClick={handleToggleDetails}>
          {showDetails ? '-' : '+'}
        </button>
        {showDetails && (
          <div>
            <p style={detailsStyle}>Details of blog:</p>
            <p>{blog.author}</p>
            <p>{blog.url}</p>   
            <p><span>likes: </span>{blog.likes} <button onClick={addBlogLike}>Like</button></p>
            <div className='blog'>
            </div> <br />
            <button onClick={handleDelete}>Deleted</button>

          </div>
          
        )}

      </div>
    </>
  )
}

export default Blog