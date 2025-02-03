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

const create = async (newBlog ) => {
  const config = {
      headers:{
        authorization: token 
      }}
  return await axios.post(baseUrl, newBlog, config)
}

const blogDelete =  async (id) =>{
  const config = {
    headers: {
      authorization: token 
    }}
 const response = await axios.delete(`${baseUrl}/${id}`, config)
 return response.data
}

const update = (id, updatedBlog) => {
  const config = {
    headers: {
      authorization: token
    }}

    return axios.put(`${baseUrl}/${id}`, updatedBlog, config)

}


export default { getAll, create, blogDelete, setToken, update }