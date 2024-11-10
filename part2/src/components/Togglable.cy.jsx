import React from 'react'
import Togglable from './Togglable'

describe('<Togglable />', () => {
  it('renders', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Togglable />)
  })
})