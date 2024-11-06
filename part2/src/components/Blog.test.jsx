import { render, screen, fireEvent } from '@testing-library/react'
import Blog from './Blog'
// import userEvent from '@testing-library/user-event'

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

// test('clicking the button calls event handler once', async () => {
//   const blog = {
//     title: 'Component testing is done with react-testing-library',
//     author: 'maquiavelo',
//     url:  'https://www.example.com'
//   }

//   const mockHandler = vi.fn()

//   render(
//     <Blog blog={blog} toggleImportance={mockHandler} />
//   )

//   const user = userEvent.setup()
//   screen.debug()
//   const button = screen.getByText('make not important')
//   await user.click(button)

//   expect(mockHandler.mock.calls).toHaveLength(1)
// })