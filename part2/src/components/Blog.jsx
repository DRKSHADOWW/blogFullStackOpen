import {useState} from 'react'

// eslint-disable-next-line react/prop-types
export const Blog = ({ blog, onDelete, updateLikes, toggleImportance }) => {
  const [showDetails, setShowDetails] = useState(false);
  const handleToggleDetails = () => {
    setShowDetails(!showDetails)
  }

  const label = blog.important
  ? 'make not important'
  : 'make important'

  const blogStyle = {
    paddingTop: 10,
    paddingLeft: 2,
    border: 'solid',
    borderWidth: 1,
    marginBottom: 5
  }

  const detailsStyle = {
    color: 'blue', // Cambia el color a lo que desees
    fontWeight: 'bold' // Opcional: para hacer el texto más destacado
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
            {/* Aquí puedes agregar los detalles del blog */}
            <p style={detailsStyle}>Details of blog:</p>
            <p>{blog.author}</p>
            <p>{blog.url}</p>   
            <p>Likes: {blog.likes} <button onClick={updateLikes}>Like</button></p>
            <li className='blog'>
            <button onClick={toggleImportance}>{label}</button>
            </li> <br />
            <button onClick={onDelete}>Deleted</button>

          </div>
          
        )}

      </div>
    </>
  )
}