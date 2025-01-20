import { useContext } from "react";
import { AuthContext } from "../services/context/Auth";
import { AuthContextData } from "../services/model";

export const useAuth = (): AuthContextData => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth deve ser usado dentro de um AuthProvider");
  }
  return context;
};