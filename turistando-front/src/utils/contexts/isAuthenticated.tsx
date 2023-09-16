import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";
import { UserType } from "../../Pages/AdminPage/types";

type AuthContextType = {
  user: UserType | null;
  setUser: Dispatch<SetStateAction<UserType | null>>;
};
export const AuthenticationContext = createContext<AuthContextType | null>(
  null
);

export const AuthenticationProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const storedEmail = sessionStorage.getItem("email");
  const storedPassword = sessionStorage.getItem("password");

  const initialUser =
    storedEmail && storedPassword
      ? { email: storedEmail, password: storedPassword }
      : null;

  const [user, setUser] = useState<UserType | null>(initialUser);

  const contextValue = {
    user,
    setUser,
  };

  return (
    <AuthenticationContext.Provider value={contextValue}>
      {children}
    </AuthenticationContext.Provider>
  );
};
