import { createContext, ReactNode, useMemo, useState, useContext } from "react";
import { STORAGE } from "@/services";

interface AuthContextValue {
  token: string | null;
  handleToken: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthContext = createContext({} as AuthContextValue);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [token, setToken] = useState<string | null>(null);

  const handleToken = () => {
    setToken(STORAGE.getToken());
  };

  const authContextValue = useMemo(() => ({ token, handleToken }), [token]);

  return (
    <AuthContext.Provider value={authContextValue}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
