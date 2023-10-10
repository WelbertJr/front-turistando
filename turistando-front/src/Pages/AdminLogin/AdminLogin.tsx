import * as S from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Image } from "../../micros/Imagem/Image";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Button } from "../../micros/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../../utils/contexts/isAuthenticated";
import { FormAdminLogin } from "./types";

export const AdminLogin = () => {
  const navigate = useNavigate();
  const authContext = useContext(AuthenticationContext);

  const { handleSubmit, control, getValues } = useForm<FormAdminLogin>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onTouched",
  });

  const handleLogin = (data: FormAdminLogin) => {
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
        navigate("/adminPage");
      }
    } else {
      console.error("Por favor, preencha ambos email e senha.");
    }
  };

  const onSubmit = async (data: FormAdminLogin) => {
    //const payload ={}
    handleLogin(data);
    console.log("Valores enviados:", data);
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
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Login de administradores</h1>
            <p>Não é um administrador?</p>
            <a href="/login">Clique aqui para logar</a>
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
            <Button type="submit" placeholder="Entrar" mb="0" />
          </S.Form>
        </S.Container>
      </div>
    </>
  );
};
