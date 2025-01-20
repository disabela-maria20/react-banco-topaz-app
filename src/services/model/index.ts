export interface UsuariosProps {
  id?: number
  email: string
  senha: string,
  balance: number
  name: string
}
export interface AuthContextData {
  isAuthenticated: boolean
  login: (id: number) => void
  logout: () => void
  getUser: () => string | null
}

export interface UsuariosContextData {
  user: UsuariosProps
  error: Error | null
  isPending: boolean
  setTransfer: (n: number) => Promise<void>
}

export interface TransferProps {
  id: number
  transferValue: string;
  bank: string;
  agency: string;
  account: string;
  name: string;
  schedule?: string;
}