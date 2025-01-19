import { useContext } from "react";
import { UserContext } from "../services/context/User";

export const useUser = () => {
  return useContext(UserContext);

};

