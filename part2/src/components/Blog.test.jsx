import { render, screen } from '@testing-library/react'
import Blog from './Blog'
import userEvent from '@testing-library/user-event'

test('renders content', () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'maquiavelo',
    url:  'https://www.example.com'

  }

  render(<Blog blog={ blog } />)
  
  const element = screen.getByText('Component testing is done with react-testing-library')
  screen.debug(element)
  expect(element).toBeDefined()
})

test('clicking the button calls event handler once', async () => {
  const blog = {
    title: 'Component testing is done with react-testing-library',
    author: 'maquiavelo',
    url:  'https://www.example.com'
  }

  const mockHandler = vi.fn()

  render(
    <Blog blog={blog} toggleImportance={mockHandler} />
  )

  const user = userEvent.setup()
  screen.debug()
  const button = screen.getByText('make not important')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)
})