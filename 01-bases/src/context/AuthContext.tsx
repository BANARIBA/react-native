import { createContext, PropsWithChildren, useContext, useEffect, useState } from "react";

interface AuthState {
  status: AuthStatus;
  token: string;
  user: User;
  isChecking: boolean;
  isAuthenticated: boolean;
  loginwithemailpassword: (email: string, password: string) => void;
  logout: () => void;
}

interface User {
  name: string;
  email: string;
}

enum AuthStatus {
  CHECKING = 'CHECKING',
  AUTHENTICATED = 'AUTHENTICATED',
  NOT_AUTHENTICATED = 'NOT_AUTHENTICATED',
};

export const AuthContext = createContext({} as AuthState);

export const useAuthContext = () => useContext(AuthContext);

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState(AuthStatus.CHECKING);
  const [user, setUser] = useState<User>({
    email: '',
    name: '',
  });

  useEffect(() => {

    setTimeout(() => {
      setStatus(AuthStatus.NOT_AUTHENTICATED);
    }, 1500);

  }, []);

  const loginwithemailpassword= (email: string, password: string) => {
    setUser({
      name: 'gohan',
      email: email,
    });
    setStatus(AuthStatus.AUTHENTICATED);
  }

  const logout = () => {
    setUser({
      email: '',
      name: '',
    });
    setStatus(AuthStatus.NOT_AUTHENTICATED);
  }

  return (
    <AuthContext.Provider value={{
      status: status,
      token: '',
      user: user,
      isChecking: status === AuthStatus.CHECKING,
      isAuthenticated: status === AuthStatus.AUTHENTICATED,
      loginwithemailpassword: loginwithemailpassword,
      logout: logout,
    }}>
      {children}
    </AuthContext.Provider>
  );
}