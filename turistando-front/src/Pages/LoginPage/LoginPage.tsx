import * as S from "./styles";
import { Image } from "../../micros/Imagem/Image";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Button } from "../../micros/Buttons/Buttons";

export const LoginPage = () => {
  return (
    <>
      <Header
        headerLinkInicio="Início"
        headerLinkLogin={null}
        headerLinkAdmin="Administrativo"
      />
      <div style={{ display: "flex", height: "90vh" }}>
        <Image
          src="src/assets/imgs/turistando-img-login.png"
          alt="Imagem Login"
          id="ImageLogin"
        />
        <S.Container>
          <S.Form>
            <p>Bem vindo(a) de volta</p>
            <h1>Faça login na sua conta</h1>
            <Input
              type="email"
              textPlaceholder="Ex: turistando@mail.com"
              id="E-mail"
            />
            <Input type="password" textPlaceholder="usuario1" id="Senha" />
            <Button type="submit" placeholder="Entrar" />
          </S.Form>
          <div style={{ display: "flex" }}>
            <span>Não tem uma conta?</span>
            <a href="/cadastro">Cadastre-se</a>
          </div>
        </S.Container>
      </div>
    </>
  );
};
