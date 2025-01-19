import axios, { AxiosError, AxiosRequestConfig } from 'axios'

const api = axios.create({
  baseURL: 'http://localhost:3001/',
  headers: {
    'Content-Type': 'application/json'
  }
})


// JSON Server não possui suporte nativo para autenticação, então, 
// decidi  fazer uma requisição GET com o parâmetro email, 
// para buscar os usuários registrados e validar a senha diretamente no frontend. 
export const validacaoUsuario = async (data: UsuariosProps) => {
  const config: AxiosRequestConfig = {
    method: 'GET',
    url: "users",
    params: {
      email: data.email
    }
  };

  try {
    const res = await api(config);
    const user: UsuariosProps = res.data.find((user: UsuariosProps) => user.email === data.email);
  
    if( user && user.senha === data.senha){
      return {
        user: user
      }
    } else {
      throw new Error('Usuário não encontrado ou inválido');
    }

  } catch (error) {
    const e = error as AxiosError
    throw new Error(e.message) 
  }
};

