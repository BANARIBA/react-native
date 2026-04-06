import { createContext, useContext } from "react";
import type { AuthState } from "../interfaces/auth.interfaces";

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);
