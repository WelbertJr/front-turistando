import * as S from "./styles";
import { FaTimes, FaHome, FaUserAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { SidebarItem } from "../SidebarItem/SidebarItem";
import { SidebarProps } from "./types";
import theme from "../../../styles/theme";
import { AuthenticationContext } from "../../../utils/contexts/isAuthenticated";
import { GiExitDoor } from "react-icons/gi";
import { IoIosBuild } from "react-icons/io";
import { RiNewspaperLine } from "react-icons/ri";
import { useContext } from "react";

export const Sidebar = ({ active }: SidebarProps) => {
  const closeSidebar = () => {
    active!(false);
  };
  const navigate = useNavigate();
  const authContext = useContext(AuthenticationContext);

  const handleLogout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    if (authContext) {
      authContext.setUser(null);
    }
    navigate("/");
  };
  const handleLogin = () => {
    navigate("/login");
  };
  const hasSessionData =
    sessionStorage.getItem("email") && sessionStorage.getItem("password");

  return (
    <S.Container>
      <FaTimes onClick={closeSidebar} color={theme.colors.turistandoYellow} />
      <S.Content>
        {hasSessionData ? null : (
          <SidebarItem
            Icon={FaHome}
            text="Home"
            onClick={() => navigate("/")}
          />
        )}
        {hasSessionData ? (
          <SidebarItem Icon={GiExitDoor} text="Sair" onClick={handleLogout} />
        ) : (
          <SidebarItem Icon={FaUserAlt} text="Entrar" onClick={handleLogin} />
        )}
        {hasSessionData ? null : (
          <SidebarItem
            Icon={IoIosBuild}
            text="Administrativo"
            onClick={() => navigate("/adminLogin")}
          />
        )}
        {hasSessionData ? null : (
          <SidebarItem
            Icon={RiNewspaperLine}
            text="Cadastre-se"
            onClick={() => navigate("/register")}
          />
        )}
      </S.Content>
    </S.Container>
  );
};
