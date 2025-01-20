import { render, screen, fireEvent } from '@testing-library/react'
import Input from './Input'

describe('Componente Input', () => {
  it(' campo de entrada com label', () => {
    render(<Input label="Nome" />)
    expect(screen.getByText('Nome')).toBeInTheDocument()
    const input = screen.getByRole('textbox')
    expect(input).toBeInTheDocument()
  })

  it('associar o label corretamente ao campo de entrada', () => {
    render(<Input label="Email" />)
    const input = screen.getByLabelText('Email')
    expect(input).toBeInTheDocument()
  })

  it('mostra o texto de erro quando fornecido', () => {
    render(<Input label="Senha" ErrorText="A senha é obrigatória" />)
    expect(screen.getByText('A senha é obrigatória')).toBeInTheDocument()
  })

  it('não deve mostrar o texto de erro quando não fornecido', () => {
    render(<Input label="Senha" />)
    const erro = screen.queryByText('A senha é obrigatória')
    expect(erro).not.toBeInTheDocument()
  })

  it('deve disparar a função de onChange corretamente', () => {
    const handleChange = jest.fn()
    render(<Input label="Nome" onChange={handleChange} />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'João' } })
    expect(handleChange).toHaveBeenCalled()
  })

  it('permitir auteração no input', () => {
    render(<Input label="Nome" />)
    const input = screen.getByRole('textbox')
    fireEvent.change(input, { target: { value: 'Maria' } })
    expect(input).toHaveValue('Maria')
  })
})
