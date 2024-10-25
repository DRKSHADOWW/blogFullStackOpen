import { render, screen } from '@testing-library/react'
import {Blog} from './Blog'
import userEvent from '@testing-library/user-event'

test('renders content', async() => {
  const blog = {
    title: 'Component library',
    author: 'Andrés',
    url: 'www.elcometa.com',
    likes: 10
  }

  const mockHandler = vi.fn()

//   const { container } = render(<Blog blog={blog} />)

//   const div = container.querySelector('.blog')
//   expect(div).toHaveTextContent('Component library')

render(
    <Blog blog={blog} toggleImportance={mockHandler} />
  )

  
  const user = userEvent.setup()
  const button = screen.getByText('make not important')
  await user.click(button)

  expect(mockHandler.mock.calls).toHaveLength(1)

  const element = screen.getByText('Component library')
  screen.debug(element)
  expect(element).toBeDefined()
})