import React, { createContext, useState } from "react";
export const AuthContext = createContext<AuthContextData | undefined>(undefined);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    !!localStorage.getItem("id")
  );

  const login = (userId: number) => {
    localStorage.setItem("id", userId.toString());
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




