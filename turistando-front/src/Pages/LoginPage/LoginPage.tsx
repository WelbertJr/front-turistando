import * as S from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Image } from "../../micros/Imagem/Image";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Button } from "../../micros/Buttons/Buttons";
import { AuthenticationContext } from "../../utils/contexts/isAuthenticated";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FormLoginValues } from "./types";

export const LoginPage = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthenticationContext);

  const { handleSubmit, control, getValues } = useForm<FormLoginValues>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const handleLogin = (data: FormLoginValues) => {
    if (
      data.email &&
      data.password &&
      data.email.trim() !== "" &&
      data.password.trim() !== ""
    ) {
      sessionStorage.setItem("email", data.email);
      sessionStorage.setItem("password", data.password);

      if (authContext) {
        const email = getValues("email");
        const password = getValues("password");
        authContext.setUser({ email, password });
        navigate("/loggedPage");
      }
    } else {
      console.error("Por favor, preencha ambos email e senha.");
    }
  };

  const onSubmit = async (data: FormLoginValues) => {
    //const payload ={}
    handleLogin(data);
    console.log("Valores enviados:", data);
  };

  return (
    <>
      <Header
        headerLinkInicio="Início"
        headerLinkLogin={null}
        headerLinkAdmin="Administrativo"
        headerLinkRegister={null}
      />
      <div style={{ display: "flex", height: "90vh" }}>
        <Image
          src="src/assets/imgs/turistando-img-login.png"
          alt="Imagem Login"
          id="ImageLogin"
        />
        <S.Container>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <p>Bem vindo(a) de volta</p>
            <h1>Faça login na sua conta</h1>
            <Controller
              control={control}
              name="email"
              rules={{}}
              render={({ field: { name, onChange, onBlur, value } }) => (
                <Input
                  type="email"
                  textPlaceholder="Ex: turistando@mail.com"
                  id="E-mail"
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Controller
              control={control}
              name="password"
              rules={{}}
              render={({ field: { name, onChange, onBlur, value } }) => (
                <Input
                  type="password"
                  textPlaceholder="usuario1"
                  id="Senha"
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Button type="submit" placeholder="Entrar" mb="10vh" />
          </S.Form>
          <S.ContainerRegistration>
            <span>Não tem uma conta?</span>
            <a href="/register">Cadastre-se</a>
          </S.ContainerRegistration>
        </S.Container>
      </div>
    </>
  );
};
