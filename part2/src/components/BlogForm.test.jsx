import {Bcreate} from '../i18n/button-create'
import { render, screen, fireEvent } from '@testing-library/react'
import { BlogForm } from './BlogForm'

describe('BlogForm', () =>{
    test('submitting the form calls createBlog with the right details', () => {
        const createBlogMock = vi.fn()
      
        render(<BlogForm addBlog={createBlogMock} />);
      
        fireEvent.change(screen.getByLabelText('title'), {
          target: { value: 'New Blog Title' }
        })
        fireEvent.change(screen.getByLabelText('author'), {
          target: { value: 'Author Name' }
        })
        fireEvent.change(screen.getByLabelText('url'), {
          target: { value: 'https://www.example.com' }
        })
      
        const create = Bcreate.CREATE.CREATE_BUTTON
      
        const button = screen.getByText(create)
        fireEvent.click(button)
        
        expect(createBlogMock).toHaveBeenCalledTimes(1) 
        expect(createBlogMock).toHaveBeenCalledWith({
      
          title: 'New Blog Title',
          author: 'Author Name',
          url: 'https://www.example.com'
      
        })
      })
})