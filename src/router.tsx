import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home, Login } from './pages'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/entrar" element={<Home />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router
