export type AuthenticationStatus = 
  | "checking"
  | "authenticated"
  | "not-authenticated";

export interface User {
  name: string;
  email: string;
}

export interface AuthState {
  status: AuthenticationStatus;
  isChecking: boolean;
  isAuthenticated: boolean;
  user: User | null;
  handleLogin: (email: string, password: string) => void;
  handleLogout: () => void;
}
