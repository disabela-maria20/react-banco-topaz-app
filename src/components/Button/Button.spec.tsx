import { render, screen } from '@testing-library/react'
import Button from './Button'
import '@testing-library/jest-dom'

describe('Name of the group', () => {
  it('should ', () => {
    expect(1).toBe(1)
  })

  it('ui do elemento na tela ', () => {
    render(<Button />)
    expect(screen.getByText('Buttom')).toBeInTheDocument()
    // screen.debug()
  })
})
