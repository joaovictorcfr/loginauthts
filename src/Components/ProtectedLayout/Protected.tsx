import { useAuth } from "../../Context/AuthProvider/useAuth";

export const Protected = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <h1>Você não tem acesso!</h1>;
  }

  return children;
};
