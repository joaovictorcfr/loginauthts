import { Navigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthProvider/useAuth";

export const Protected = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();
  
  if (!auth.email) {
    <Navigate to={"/login"}/>
  }

  return children;
};
