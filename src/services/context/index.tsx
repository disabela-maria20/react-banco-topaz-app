import { AuthProvider } from './Auth'
import QueryProvider from './QueryProvider'
import { UserProvider } from './User'

const Context = ({ children }: { children: React.ReactNode }) => {
  return <>
    <QueryProvider>
      <AuthProvider>
        <UserProvider>
           {children}
        </UserProvider>
      </AuthProvider>
    </QueryProvider>
  </>
}

export default Context
