import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Extrato, Home, Login, Transfer } from './pages'
import { useAuth } from './hook/useAuth'
import { Suspense } from 'react'

const Router = () => {
  const { isAuthenticated } = useAuth()

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<p>Rota não encontarda</p>} />
        {isAuthenticated && <>
          <Route path="/home" element={<Home />} />
          <Route path="/transferir" element={<Transfer />} />
          <Route path="/extarto" element={<Extrato />} />
        </>}
      </Routes>
    </BrowserRouter>
    </Suspense>
    
  )
}

export default Router
