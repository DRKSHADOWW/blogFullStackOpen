import axios from 'axios'
const baseUrl = 'http://localhost:3001/api/blogs'

let token = null

const setToken = newToken =>{
    token =  `Bearer ${newToken}`
}

const getAll = () => {
  const request = axios.get(baseUrl)
  return request.then(response => response.data)
}

const create = (newBlog ) => {
  const config = {
      headers:{
        authorization:  token 
      }}
  return axios.post(baseUrl, newBlog, config)
}

const blogDelete = (id) =>{
  const config = {
    headers:{
      authorization:  token 
    }}
 return axios.delete(`${baseUrl}/${id}`, config)
  
}

export default { getAll, create, blogDelete, setToken }