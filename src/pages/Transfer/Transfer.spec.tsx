import { fireEvent, render, screen, waitFor, act } from '@testing-library/react'
import { useUser } from '../../services/context/User';

import '@testing-library/jest-dom';
import { AuthProvider } from '../../services/context/Auth/';
import { MemoryRouter } from 'react-router-dom';
import * as ReactQuery from '@tanstack/react-query';
import { Transfer } from '..';

const queryClient = new ReactQuery.QueryClient();

const tela = (
  <AuthProvider>
    <MemoryRouter>
      <ReactQuery.QueryClientProvider client={queryClient}>
        <Transfer />
      </ReactQuery.QueryClientProvider>
    </MemoryRouter>
  </AuthProvider>
)

jest.mock('../../services/context/User', () => ({
  useUser: jest.fn(),
}))

jest.mock('../../services/resquest', () => ({
  postTransfer: jest.fn(),
}))

jest.useFakeTimers(); 

const mockPostTransfer = require('../../services/resquest');


const user = useUser as jest.Mock
describe('Tela de Transferir', () => {

  beforeEach(() => {
    user.mockReturnValue({
      user: { id: 1, balance: 1000 },
      setTransfer: jest.fn(),
    })
  })

  test('Mostar campos', () => {
    render(tela)

    expect(screen.getByLabelText(/Valor da transferência/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Banco/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Agência/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Conta/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Nome/i)).toBeInTheDocument();
  });

  it('Erro caso o formulario não seja preenchidos', async () => {
    render(tela);

    fireEvent.click(screen.getByText(/Enviar/i));

    await waitFor(() => {
      expect(screen.getByText(/Insira um valor válido para a transferência/i)).toBeInTheDocument();
      expect(screen.getByText(/O código do banco deve ter 3 dígitos/i)).toBeInTheDocument();
    });
  });

  it('Dados enviados', async () => {
    mockPostTransfer.mockResolvedValue({ transferValue: 50 });
  
    render(tela);
  
    fireEvent.input(screen.getByLabelText(/Valor da transferência/i), {
      target: {
        value: '50'
      }
    });
    fireEvent.input(screen.getByLabelText(/Banco/i), {
      target: {
        value: '001'
      }
    });
    fireEvent.input(screen.getByLabelText(/Agência/i), {
      target: {
        value: '5052'
      }
    });
    fireEvent.input(screen.getByLabelText(/Conta/i), {
      target: {
        value: '9982552'
      }
    });
    fireEvent.input(screen.getByLabelText(/Nome/i), {
      target: {
        value: 'João Silva'
      }
    })
  
    const transferButton = screen.getByRole('button', { name: /Enviar/i });
    fireEvent.click(transferButton);
  })

  it('deve exibir erro se a transferência falhar', async () => {
    mockPostTransfer(new Error('Erro ao enviar transferência'));

    render(tela);

    fireEvent.input(screen.getByLabelText(/Valor da transferência/i), { target: { value: '100' } });
    fireEvent.input(screen.getByLabelText(/Banco/i), { target: { value: '001' } });
    fireEvent.input(screen.getByLabelText(/Agência/i), { target: { value: '1234' } });
    fireEvent.input(screen.getByLabelText(/Conta/i), { target: { value: '123456' } });
    fireEvent.input(screen.getByLabelText(/Nome/i), { target: { value: 'João Silva' } });
    
    fireEvent.click(screen.getByText(/Enviar/i));
  });
  
})


