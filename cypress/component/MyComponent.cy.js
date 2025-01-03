import React from 'react'
import Stepper from './Stepper.js'

describe('<Stepper />', () => {
  it('mounts', () => {
    // see: https://on.cypress.io/mounting-react
    cy.mount(<Stepper />)
  })
})