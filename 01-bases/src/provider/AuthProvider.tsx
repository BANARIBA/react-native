import { useEffect, useState, type PropsWithChildren } from "react";
import { AuthContext } from "../context/AuthContext";
import type { AuthenticationStatus, User } from "../interfaces/auth.interfaces";

export const AuthProvider = ({ children }: PropsWithChildren) => {
  const [status, setStatus] = useState<AuthenticationStatus>("checking");
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setStatus("not-authenticated");
    }, 1500);
    return () => clearTimeout(timeout);
  }, []);

  const handleLogin = (email: string, password: string) => {
    if (email.trim().length === 0 || password.trim().length === 0) return;
    setUser({
      email: email,
      name: 'User Logged',
    });
    setStatus('authenticated');
  };

  const handleLogout = () => {
    setUser(null);
    setStatus('not-authenticated');
  }

  return (
    <AuthContext.Provider
      value={{
        status: status,
        isChecking: status === "checking",
        isAuthenticated: status === "authenticated",
        user: user,
        handleLogin: handleLogin,
        handleLogout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
