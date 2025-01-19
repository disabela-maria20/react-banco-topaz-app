import { fireEvent, render, screen } from '@testing-library/react'
import Button from './Button'
import '@testing-library/jest-dom'

describe('Componente botão', () => {
  it('Verifica se está aparecendo o texto e está recebendo ações', () => {
    render(<Button>click</Button>);
    expect(screen.getByText('click')).toBeInTheDocument(); 
  });

  it('Verifica se está passando props', () => {
    render(<Button disabled>click</Button>);
    const button = screen.getByRole('button');
    expect(button).toBeDisabled(); 
  });

  it('Verificação de eventos click e recebe chamadas', () => {
    const handleClick = jest.fn();
    render(<Button onClick={handleClick}>Click Me</Button>);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1); 
  });
});
