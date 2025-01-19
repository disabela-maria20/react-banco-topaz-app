import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login, Transferir } from './pages'
import { useAuth } from './hook/useAuth'

const Router = () => {
  const { isAuthenticated } = useAuth()

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="*" element={<p>Rota não encontarda</p>} />
        {isAuthenticated && <>
          <Route path="/home" element={<Home />} />
          <Route path="/transferir" element={<Transferir />} />
          <Route path="/agendar" element={<Home />} />
          <Route path="/todas-transferencias" element={<Home />} />
        </>}

      </Routes>
    </BrowserRouter>
  )
}

export default Router
