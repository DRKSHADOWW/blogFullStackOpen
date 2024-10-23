import { useState } from 'react'

// eslint-disable-next-line react/prop-types
export const Togglable = ({children, buttonLabel}) => {
  const [visible, setVisible] = useState(false)

  const butt

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  return (
    <div>
      <div style={hideWhenVisible}>
        <button onClick={() => setVisible(true)}>{buttonLabel}</button>
      </div>
      <div style={showWhenVisible}>
        {children}
        <button onClick={() => setVisible(false)}>{buttonLabel}</button>
      </div>
    </di