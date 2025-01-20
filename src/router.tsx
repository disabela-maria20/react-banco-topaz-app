import { Routes, Route, Navigate } from 'react-router-dom';
import { Erro, Extrato, Home, Login, Transfer } from './pages';
import { useAuth } from './hook/useAuth';
import { Suspense } from 'react';

const Router = () => {
  const { isAuthenticated } = useAuth();

  return (
    <Suspense fallback={<p>Carregando...</p>}>
      <Routes>
        <Route
          path="/"
          element={isAuthenticated ? <Navigate to="/home" replace /> : <Login />}
        />

        <Route path="*" element={<Erro/>} />

        {isAuthenticated && (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/transferir" element={<Transfer />} />
            <Route path="/extrato" element={<Extrato />} />
          </>
        )}

        {!isAuthenticated && (
          <>
            <Route path="/home" element={<Navigate to="/" replace />} />
            <Route path="/transferir" element={<Navigate to="/" replace />} />
            <Route path="/extrato" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </Suspense>
  );
};

export default Router;
