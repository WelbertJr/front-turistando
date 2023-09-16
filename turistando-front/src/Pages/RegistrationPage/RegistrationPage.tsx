import * as S from "./styles";
import { Image } from "../../micros/Imagem/Image";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Button } from "../../micros/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
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
          src="src/assets/imgs/turistando-banner-cadastro.png"
          alt="Imagem Admin"
          id="ImageAdmin"
        />
        <S.Container>
          <S.Form>
            <h1>Olá, seja bem-vindo(a)!</h1>
            <p>Cadastre-se abaixo, para conseguir salvar seus itinerários:</p>
            <Input
              type="email"
              textPlaceholder="Ex: turistando@mail.com"
              id="E-mail"
            />
            <Input type="password" textPlaceholder="usuario1" id="Senha" />
            <Input
              type="password"
              textPlaceholder="usuario1"
              id="Confirme a senha"
            />
            <Button
              type="submit"
              placeholder="Cadastrar"
              onClick={handleNavigate}
            />
          </S.Form>
        </S.Container>
      </div>
    </>
  );
};
