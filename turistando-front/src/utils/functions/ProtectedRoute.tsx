import { ReactNode, useContext } from "react";
import { AuthenticationContext } from "../contexts/isAuthenticated";
import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const authContext = useContext(AuthenticationContext);
  const storedEmail = sessionStorage.getItem("email");
  const storedPassword = sessionStorage.getItem("password");

  if (
    (!authContext || !authContext.user) &&
    (!storedEmail || !storedPassword)
  ) {
    return <Navigate to="/error401" replace />;
  }
  console.log("Usuário autenticado, permitindo acesso.");
  return children;
};
