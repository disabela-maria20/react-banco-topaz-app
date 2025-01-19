interface UsuariosProps {
  id?: number
  email: string
  senha: string
}

interface UsuariosFinancas{
  userId?: number
  balance?: number
  name?: string
}
interface AuthContextData {
  isAuthenticated: boolean
  login: (userId: number) => void
  logout: () => void
  getUser: () => string
}

interface UsuariosContextData {
  user: UsuariosFinancas[]
  error: Error | null
  isPending: boolean
}