import { ReactNode, useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../contexts/isAuthenticated";
import { Navigate, useLocation } from "react-router-dom";

const RedirectToError401 = ({ from }: { from: string }) => {
  return <Navigate to={`/error401?from=${from}`} replace />;
};

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const authContext = useContext(AuthenticationContext);
  const storedEmail = sessionStorage.getItem("email");
  const storedPassword = sessionStorage.getItem("password_1");
  const location = useLocation();
  const [redirectToError, setRedirectToError] = useState(false);

  useEffect(() => {
    if (
      (!authContext || !authContext.user) &&
      (!storedEmail || !storedPassword)
    ) {
      setRedirectToError(true);
    }
  }, [authContext, storedEmail, storedPassword]);

  if (redirectToError) {
    return <RedirectToError401 from={location.pathname} />;
  }

  console.log("Usuário autenticado, permitindo acesso.");
  return children;
};
