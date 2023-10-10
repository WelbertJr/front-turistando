import * as S from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Image } from "../../micros/Imagem/Image";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Button } from "../../micros/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../utils/contexts/isAuthenticated";
import { useContext } from "react";
import { FormRegistrationValues } from "./types";

export const RegistrationPage = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthenticationContext);

  const { handleSubmit, control, getValues } = useForm<FormRegistrationValues>({
    defaultValues: {
      email: "",
      user_name: "",
      password: "",
      password_2: "",
    },
    mode: "onTouched",
  });

  const handleLogin = (data: FormRegistrationValues) => {
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

  const onSubmit = async (data: FormRegistrationValues) => {
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
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Olá, seja bem-vindo(a)!</h1>
            <p>Cadastre-se abaixo, para conseguir salvar seus itinerários:</p>
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
              name="user_name"
              rules={{}}
              render={({ field: { name, onChange, onBlur, value } }) => (
                <Input
                  type="text"
                  textPlaceholder="Digite seu nome"
                  id="Nome"
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
            <Controller
              control={control}
              name="password_2"
              rules={{}}
              render={({ field: { name, onChange, onBlur, value } }) => (
                <Input
                  type="password"
                  textPlaceholder="usuario1"
                  id="Confirme a senha"
                  name={name}
                  value={value}
                  onChange={onChange}
                  onBlur={onBlur}
                />
              )}
            />
            <Button type="submit" placeholder="Cadastrar" mb="0" />
          </S.Form>
        </S.Container>
      </div>
    </>
  );
};
