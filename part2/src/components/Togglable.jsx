/* eslint-disable react/display-name */
import PropTypes from 'prop-types'
import {Bcancel} from '../i18n/buttton-cancel'


import { useState, forwardRef, useImperativeHandle } from 'react'


// eslint-disable-next-line react/prop-types
const Togglable = forwardRef(({children, buttonLabel}, ref) => {
  const [visible, setVisible] = useState(false)

  const hiddenVisible = {display: visible ? 'none': ''}
  const showVisible = {display: visible ? '': 'none'}

  const toggleVisibility = () => setVisible(!visible)

  useImperativeHandle(ref, () =>{
    return{
      toggleVisibility
    }
    })

    const cancel = Bcancel.TOGGLABLE.CANCEL_BUTTON

  return (

    <>

      <div style={hiddenVisible}>
        <button onClick={toggleVisibility}>{buttonLabel}</button>
      </div>

      <div style={showVisible}>
        {children}
        <button onClick={toggleVisibility}>{cancel}</button>
      </div>
    </>

  )

})

Togglable.displayName = 'Togglable'

Togglable.propTypes = {
  buttonLabel: PropTypes.string.isRequired
}

export default  Togglable;
