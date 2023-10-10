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
  headerLinkLogin = "Entrar",
  headerLinkAdmin = "Administrativo",
  headerLinkRegister = "Cadastre-se",
  boxShadow,
}: HeaderProps) => {
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);

  const showSiderbar = () => setSidebar(!sidebar);
  const authContext = useContext(AuthenticationContext);

  const handleLogout = () => {
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("password");
    if (authContext) {
      authContext.setUser(null);
    }
    navigate("/");
  };
  const hasSessionData =
    sessionStorage.getItem("email") && sessionStorage.getItem("password");
  return (
    <S.Container boxShadow={boxShadow}>
      <FaBars onClick={showSiderbar} />
      {sidebar && <Sidebar active={setSidebar} />}
      <S.Nav>
        {hasSessionData ? (
          <a href="/loggedPage">
            <Image
              src="src/assets/imgs/turistando-logo.png"
              alt="Logo Turistando"
              id="ImageLogo"
            />
          </a>
        ) : (
          <a href="/">
            <Image
              src="src/assets/imgs/turistando-logo.png"
              alt="Logo Turistando"
              id="ImageLogo"
            />
          </a>
        )}
        <S.Ul>
          {hasSessionData ? null : (
            <li>
              <a href="/register">{headerLinkRegister}</a>
            </li>
          )}
          {hasSessionData ? (
            <li>
              <a href="/adminPage">{headerLinkAdmin}</a>
            </li>
          ) : (
            headerLinkAdmin !== null && (
              <li>
                <a href="/adminLogin">{headerLinkAdmin}</a>
              </li>
            )
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
              <p>Sair</p>
              <a onClick={handleLogout}>{<GiExitDoor />}</a>
            </li>
          )}
        </S.Ul>
      </S.Nav>
    </S.Container>
  );
};
