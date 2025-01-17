import QueryProvider from './QueryProvider'

const Context = ({ children }: { children: React.ReactNode }) => {
  return <QueryProvider>{children}</QueryProvider>
}

export default Context
