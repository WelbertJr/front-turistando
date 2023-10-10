import * as S from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Image } from "../../micros/Imagem/Image";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Button } from "../../micros/Buttons/Buttons";
import { Navigate, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthenticationContext } from "../../utils/contexts/isAuthenticated";
import { FormNewAdminValues } from "./types";

export const AdminPage = () => {
  const navigate = useNavigate();

  const { handleSubmit, control } = useForm<FormNewAdminValues>({
    defaultValues: {
      email: "",
      password: "",
      password_2: "",
    },
    mode: "onTouched",
  });

  const authContext = useContext(AuthenticationContext);
  if (!authContext || !authContext.user) {
    return <Navigate to="/error401" replace />;
  }

  const handleRegisterNavigation = () => {
    navigate("/loggedPage");
  };

  const onSubmit = async (data: FormNewAdminValues) => {
    //const payload ={}
    handleRegisterNavigation();
    console.log("Valores enviados:", data);
  };

  return (
    <>
      <Header
        headerLinkInicio="Início"
        headerLinkLogin={null}
        headerLinkAdmin={null}
        boxShadow="0 0 20rem 3rem"
      />
      <div
        style={{
          display: "flex",
          height: "100vh",
        }}
      >
        <Image
          src="src/assets/imgs/turistando-logo-yellow.png"
          alt="Imagem Admin"
          id="ImageAdmin"
        />
        <S.Container>
          <S.Form onSubmit={handleSubmit(onSubmit)}>
            <h1>Olá, {authContext.user.email}!</h1>
            <p>Adicione um novo administrador abaixo:</p>
            <Controller
              control={control}
              name="email"
              rules={{}}
              render={({ field: { name, onChange, onBlur, value } }) => (
                <Input
                  type="email"
                  textPlaceholder="Ex: turistando@mail.com"
                  id="E-mail"
                  color="turistandoWhite"
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
                  color="turistandoWhite"
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
                  color="turistandoWhite"
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
