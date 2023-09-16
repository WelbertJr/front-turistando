import * as S from "./styles";
import { FaBars } from "react-icons/fa";
import { Sidebar } from "./Sidebar/Sidebar";
import { useContext, useState } from "react";
import { Image } from "../../micros/Imagem/Image";
import { Link, useNavigate } from "react-router-dom";
import { HeaderProps } from "./types";
import { GiExitDoor } from "react-icons/gi";
import { AuthenticationContext } from "../../utils/contexts/isAuthenticated";

export const Header = ({
  headerLinkInicio = "Início",
  headerLinkLogin = "Login",
  headerLinkAdmin = "Administrativo",
}: HeaderProps) => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);
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
  const hasSessionData =
    sessionStorage.getItem("email") && sessionStorage.getItem("password");
  return (
    <S.Container>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <S.Nav>
        <a href="/">
          <Image
            src="src/assets/imgs/turistando-logo.png"
            alt="Logo Turistando"
            id="ImageLogo"
          />
        </a>
        <S.Ul>
          {headerLinkAdmin !== null && (
            <li>
              <a href="/adminLogin">{headerLinkAdmin}</a>
            </li>
          )}
          {headerLinkInicio !== null && (
            <li>
              <a href="/">{headerLinkInicio}</a>
            </li>
          )}
          {hasSessionData ? (
            headerLinkLogin == null
          ) : (
            <li>
              <Link to="/login">{headerLinkLogin}</Link>
            </li>
          )}
          {hasSessionData && (
            <li>
              <a onClick={handleLogout}>{<GiExitDoor />}</a>
            </li>
          )}
        </S.Ul>
      </S.Nav>
    </S.Container>
  );
};
