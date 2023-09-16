import * as S from "./styles";
import { Image } from "../../micros/Imagem/Image";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Button } from "../../micros/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthenticationContext } from "../../utils/contexts/isAuthenticated";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthenticationContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newEmail = e.target.value;
    console.log(`Novo valor do email: ${newEmail}`);
    setEmail(newEmail); // Atualize o estado com o novo valor
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newPassword = e.target.value;
    console.log(`Nova senha: ${newPassword}`);
    setPassword(newPassword); // Atualize o estado com a nova senha
  };

  const handleLogin = () => {
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("password", password);

    if (authContext) {
      authContext.setUser({ email, password });
      navigate("/adminPage");
    }
  };
  return (
    <>
      <Header headerLinkInicio="Início" headerLinkAdmin={null} />
      <div style={{ display: "flex", height: "90vh" }}>
        <Image
          src="src/assets/imgs/turistando-img-admin.png"
          alt="Imagem Admin"
          id="ImageAdmin"
        />
        <S.Container>
          <S.Form onSubmit={handleLogin}>
            <h1>Login de administradores</h1>
            <p>Não é um administrador?</p>
            <a href="/login">Clique aqui para logar</a>
            <Input
              type="email"
              textPlaceholder="Ex: turistando@mail.com"
              id="E-mail"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              type="password"
              textPlaceholder="usuario1"
              id="Senha"
              value={password}
              onChange={handlePasswordChange}
            />
            <Button type="submit" placeholder="Entrar" />
          </S.Form>
        </S.Container>
      </div>
    </>
  );
};
