import * as S from "./styles";
import { Image } from "../../micros/Imagem/Image";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Button } from "../../micros/Buttons/Buttons";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../../utils/contexts/isAuthenticated";

export const AdminPage = () => {
  const navigate = useNavigate();
  const handleRegisterNavigation = () => {
    navigate("/cadastro");
  };
  const authContext = useContext(AuthenticationContext);
  if (!authContext || !authContext.user) {
    return <Navigate to="/error401" replace />;
  }
  return (
    <>
      <Header
        headerLinkInicio="Início"
        headerLinkLogin={null}
        headerLinkAdmin={null}
      />
      <div
        style={{
          display: "flex",
          height: "90vh",
        }}
      >
        <Image
          src="src/assets/imgs/turistando-logo-yellow.png"
          alt="Imagem Admin"
          id="ImageAdmin"
        />
        <S.Container>
          <S.Form>
            <h1>Olá, {authContext.user.email}!</h1>
            <p>Adicione um novo administrador abaixo:</p>
            <Input
              type="email"
              textPlaceholder="Ex: turistando@mail.com"
              id="E-mail"
              color="turistandoWhite"
            />
            <Input
              type="password"
              textPlaceholder="usuario1"
              id="Senha"
              color="turistandoWhite"
            />
            <Input
              type="password"
              textPlaceholder="usuario1"
              id="Confirme a senha"
              color="turistandoWhite"
            />
            <Button
              type="submit"
              placeholder="Cadastrar"
              onClick={handleRegisterNavigation}
            />
          </S.Form>
        </S.Container>
      </div>
    </>
  );
};
