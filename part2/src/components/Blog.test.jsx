import { render, screen, fireEvent } from '@testing-library/react'
import Blog from './Blog'
import userEvent from '@testing-library/user-event'
// import userEvent from '@testing-library/user-event'

describe('Blog', () =>{
  test('renders content', () => {
    const blog = {
      title: 'Component testing',
      author: 'maquiavelo',
      url:  null,
      likes: null
  
    }
  
      render(<Blog blog={ blog } />)
  
      const button = screen.getByText('+')
      fireEvent.click(button)
    
      const titleElement = screen.getByText('Component testing')
      const authorElement = screen.getByText('maquiavelo')
      
      expect(titleElement).toBeDefined()
      expect(authorElement).toBeDefined()
  
      const urlElement = screen.queryByText('https://www.example.com')
      const likesElement = screen.queryByText('7')
  
      expect(urlElement).toBeNull()
      expect(likesElement).toBeNull()
      
  })
  
  test('click button, likes and URL', () =>{
    const blog = {
      url: 'www.example.com',
      likes: 7
    }
  
    render(<Blog blog={ blog }/>)
  
    const button = screen.getByText('+')
      fireEvent.click(button)
  
    const likes = screen.getByText('7')
    const url = screen.getByText('www.example.com')
  
    expect(likes).toBeDefined()
    expect(url).toBeDefined()
  })
  
  test('clicking the like button twice calls event handler twice', () => {
    const blog = {
      title: 'Component testing',
      author: 'maquiavelo',
      url: 'www.example.com',
      likes: 7
    }
  
    const mockHandler = vi.fn()
  
    render(<Blog blog={blog} addBlogLike={ mockHandler } />)
  
    const buttonA = screen.getByText('+')
    fireEvent.click(buttonA)
    
    const buttonB = screen.getByText('Like')   
    fireEvent.click(buttonB) 
    fireEvent.click(buttonB) 
  
    expect(mockHandler.mock.calls).toHaveLength(2)
  })
  
  
  
})
