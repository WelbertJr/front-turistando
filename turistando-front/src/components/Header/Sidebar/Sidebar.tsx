import * as S from "./styles";
import { FaTimes, FaHome, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { SidebarProps } from "./types";
import theme from "../../../styles/theme";
import { AuthenticationContext } from "../../../utils/contexts/isAuthenticated";
import { GiExitDoor } from "react-icons/gi";
import { useContext } from "react";

export const Sidebar = ({ active }: SidebarProps) => {
  const closeSidebar = () => {
    active!(false);
  };
  const navigate = useNavigate();
  const authContext = useContext(AuthenticationContext);

  const handleLogout = () => {
    // Remova os dados da sessionStorage
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    if (authContext) {
      // Remova os dados do contexto de autenticação
      authContext.setUser(null);
    }
    // Redirecione o usuário para a página inicial
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const hasSessionData =
    sessionStorage.getItem("email") && sessionStorage.getItem("password");

  return (
    <S.Container>
      <FaTimes onClick={closeSidebar} color={theme.colors.tuistandoYellow} />
      <S.Content>
        <SidebarItem Icon={FaHome} text="Home" onClick={() => navigate("/")} />
        {hasSessionData ? (
          <SidebarItem Icon={GiExitDoor} text="Logout" onClick={handleLogout} />
        ) : (
          <SidebarItem Icon={FaUserAlt} text="Login" onClick={handleLogin} />
        )}
      </S.Content>
    </S.Container>
  );
};
