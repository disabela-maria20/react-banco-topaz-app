import { useQuery } from "@tanstack/react-query";
import React, { createContext, useContext, useEffect, useState } from "react";

import { UsuariosContextData, UsuariosProps } from "../../model";
import { useAuth } from "../Auth";
import { getUserProfile, updateUserBalance } from "../../resquest";

export const UserContext = createContext<UsuariosContextData>({
  user: {
    name: '',
    id: 0,
    balance: 0,
    email: "",
    senha: ""
  },
  error: null,
  isPending: false,
  setTransfer: async () => { }
});

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<UsuariosProps>({
    name: '',
    id: 0,
    balance: 0,
    email: "",
    senha: ""
  });

  const { getUser } = useAuth();
  const id = getUser();

  const { isPending, error, data, refetch  } = useQuery({
    queryKey: ['data', id],
    queryFn: () => getUserProfile(id!),
    enabled: !!id,
  });
  
  useEffect(() => {
    if (data) {
      setUser(data);
    }
  }, [data])

  const setTransfer = async (n: number) => {
    if (user.balance === undefined || user.balance < n) return;
  
    const updatedBalance = user.balance - n;
  
    if (!user.id) return;
  
    const updatedUser = {
      ...user, 
      balance: updatedBalance, 
    };
    const res = await updateUserBalance(user.id, updatedUser)
    setUser(res)
    await refetch()
  };
  

  return (
    <UserContext.Provider value={{ user: data ?? user, error, isPending, setTransfer }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  return useContext(UserContext);

};

