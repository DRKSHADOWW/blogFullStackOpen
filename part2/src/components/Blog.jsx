export const Blog = ({ blog, onDelete  }) => {
  return(
    <>
    <div>
    {blog.title} {blog.author}
    <button onClick={onDelete}>Deleted</button>

    </div>
    </> 
  )
   
}

