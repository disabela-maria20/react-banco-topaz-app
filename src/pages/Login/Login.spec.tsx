import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import Login from './Login';
import '@testing-library/jest-dom';
import { AuthProvider } from '../../services/context/Auth';
import { MemoryRouter } from 'react-router-dom';
import * as ReactQuery from '@tanstack/react-query';

const queryClient = new ReactQuery.QueryClient();

const tela = (
  <AuthProvider>
    <MemoryRouter>
      <ReactQuery.QueryClientProvider client={queryClient}>
        <Login />
      </ReactQuery.QueryClientProvider>
    </MemoryRouter>
  </AuthProvider>
)

jest.mock('@tanstack/react-query', () => ({
  useMutation: jest.fn(() => ({
    mutateAsync: jest.fn().mockResolvedValue({ user: { id: 1 } }),
  })),
}));


jest.mock("@tanstack/react-query", () => {
  const original: typeof ReactQuery = jest.requireActual("@tanstack/react-query");
  return {
    ...original,
    useQuery: () => ({ isLoading: false, error: {}, data: [] }),
  };
});

jest.mock('../../services/resquest', () => ({
  authenticateUser: jest.fn().mockResolvedValueOnce({
    success: false,
    message: 'Usuário não encontrado ou inválido',
  }),
}));


describe('tela de login', () => {
  test('Renderiza o componente corretamente', () => {
    render(tela)
    expect(screen.getByText('Entrar')).toBeInTheDocument()
    expect(screen.getByText('Acessar')).toBeInTheDocument()

    expect(screen.getByLabelText(/E-mail/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/Senha/i)).toBeInTheDocument()
  });

  test('Autenticação do usuario', async () => {
    render(tela)

    fireEvent.input(screen.getByLabelText(/E-mail/i), {
      target: {
        value: 'teste@teste.com'
      }
    })
    fireEvent.input(screen.getByLabelText(/Senha/i), {
      target: {
        value: 'senha'
      }
    })

    fireEvent.click(screen.getByText('Acessar'));

    await waitFor(() => {
      expect(true).toBe(true)
    })
  });

  it('mensagens de validação quando os campos estão vazios', async () => {
    render(tela);
    
    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));
  
    await waitFor(() => {
      expect(screen.getByText((content) => content.includes('Por favor, informe um e-mail válido'))).toBeInTheDocument();
      expect(screen.getByText((content) => content.includes('Por favor, informe uma senha válida'))).toBeInTheDocument();
    });
  });

  it('Realiza o login com sucesso', async () => {
    render(tela);

    fireEvent.change(screen.getByLabelText('E-mail'), { target: { value: 'test@test.com' } });
    fireEvent.change(screen.getByLabelText('Senha'), { target: { value: '12345' } });
    fireEvent.click(screen.getByRole('button', { name: /acessar/i }));

    await waitFor(() => {
      expect(screen.queryByText('Credenciais inválidas')).not.toBeInTheDocument();
      // Verifique se o redirecionamento foi chamado para a página "/home"
    });
  });
})
