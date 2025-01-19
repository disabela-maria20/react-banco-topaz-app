import { useQuery } from "@tanstack/react-query";
import React, { createContext, useEffect, useState } from "react";
import { getUsuaurio } from "../../resquest";
import { useAuth } from "../../../hook/useAuth";

export const UserContext = createContext<UsuariosContextData>({
  user: [{
    name: '',
    userId: 0,
    balance: 0
  }],
  error: null,
  isPending: false,
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<any[]>([]);

  const { getUser } = useAuth();
  const id = getUser();

  const { isPending, error, data } = useQuery({
    queryKey: ['data', id],
    queryFn: () => getUsuaurio(id),
    enabled: !!id,
  });

  useEffect(() => {
    if (data) {
      setUser(data); 
    }
  }, [data]);

  return (
    <UserContext.Provider value={{ user, error, isPending }}>
      {children}
    </UserContext.Provider>
  );
};

