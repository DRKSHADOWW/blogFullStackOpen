import { fireEvent, getAllByText, render, screen } from '@testing-library/react'
import Togglable from './Togglable'
import {Bcancel} from '../i18n/buttton-cancel'


describe('<Togglable>', () =>{
    const buttonLabel = 'show login'
    let component

    beforeEach(()=>{
        component = render(
            <Togglable buttonLabel={buttonLabel}>
                <div className='testDiv'>test div content</div>
            </Togglable>
        )
    })

    test('renders its children', () =>{
        component.getByText('test div content')
    })

    test('renders its children', () =>{
        const element = component.getByText('test div content')
        expect(element.parentNode).toHaveStyle('display: none')
    })

    test('after clicking its children must be shown', () =>{
        const button = component.getByText(buttonLabel)
        fireEvent.click(button)

        const element = component.getByText('test div content')
        expect(element.parentNode).not.toHaveStyle('display: none')
    })

    test('toggled content can be closed', () =>{

        const button = component.getByText(buttonLabel)
        fireEvent.click(button)
        
        const element = component.getByText('test div content')
        expect(element.parentNode).not.toHaveStyle('display: none')
        
        const cancel = Bcancel.TOGGLABLE.CANCEL_BUTTON
        const cancelButton = component.getByText(cancel)
        fireEvent.click(cancelButton)

        expect(element.parentNode).toHaveStyle('display: none')
    })

 
})