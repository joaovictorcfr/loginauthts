import { createContext, useEffect, useState } from "react";
import { IAuthProvider, Icontext, Iuser } from "./Types";
import { LoginRequest, getUserLocalStorage, setUserLocalStorage } from "./Util";

// importar o tipos criados no arquivo "TYPES"
// Com o contexto criado é possivel dar e receber valores
export const AuthContext = createContext<Icontext>({} as Icontext);

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [user, setUser] = useState<Iuser | null>();

  useEffect(() => {
    const user = getUserLocalStorage();

    if (user) {
      setUser(user);
    }
  }, []);

  async function authenticate(email: string, password: string) {
    const response = await LoginRequest(email, password);

    const payload = { token: response.token, email };

    setUser(payload);
    setUserLocalStorage(payload);
  }

  function logout() {
    setUser(null);
    setUserLocalStorage(null);
  }

  return (
    <AuthContext.Provider value={{ ...user, authenticate, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
