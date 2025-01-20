import React, { createContext, useContext, useState } from "react";
import { AuthContextData } from "../../model";
export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("id")
  );

  const login = (id: number) => {
    localStorage.setItem("id", id.toString());
    setIsAuthenticated(true);
  };

  const logout = () => {
    localStorage.removeItem("id");
    setIsAuthenticated(false);
  };
  const getUser = () => {
    return localStorage.getItem('id')
  }
  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, getUser }}>
      {children}
    </AuthContext.Provider>
  );
};


export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};

