import { render, screen } from '@testing-library/react'
import user from '@testing-library/user-event'
import UserForm from './UserForm'

test('it shows two inputs and one button', () => {
  // Arrange + Act
  // render the component
  render(<UserForm />)
  // Manipulate the component or find an element in it
  const inputs = screen.getAllByRole('textbox')
  // const submitButton = screen.getByRole('button', { name: /submit/i })
  const button = screen.getByRole('button')
  
  // Assertion - make sure the component is doing what we expect
  expect(inputs).toHaveLength(2)
  expect(button).toBeInTheDocument()
})

// Entering a name + email then submitting the form causes the 'onUserAdd' callback to be called


