import * as S from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Image } from "../../micros/Imagem/Image";
import { Select } from "../../micros/Select/Select";
import { Button } from "../../micros/Buttons/Buttons";
import { Footer } from "../../components/Footer/Footer";
import { FormValues, HomePageProps, example } from "./types";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import theme from "../../styles/theme";

export const HomePage = ({ list = example }: HomePageProps) => {
  const [showResults, setShowResults] = useState(false);

  const { handleSubmit, control, setValue } = useForm<FormValues>({
    defaultValues: {
      search: "",
      check_in: "",
      check_out: "",
      select_peoples: "",
    },
    mode: "onTouched",
  });
  const onSubmit = async (data: FormValues) => {
    //const payload ={}
    setShowResults(true);
    console.log("Valores enviados:", data);
  };
  const closeCardResult = () => {
    setShowResults!(false);
  };

  return (
    <>
      <Header
        headerLinkInicio={null}
        headerLinkAdmin="Administrativo"
        boxShadow="0 0 20rem 3rem"
      />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#003867",
          padding: "10rem 0",
        }}
      >
        <S.Form onSubmit={handleSubmit(onSubmit)}>
          <Controller
            control={control}
            name="search"
            rules={{}}
            render={({ field: { name, onChange, onBlur, value } }) => (
              <Input
                type="text"
                textPlaceholder="Para onde você vai?"
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="check_in"
            rules={{}}
            render={({ field: { name, onChange, onBlur, value } }) => (
              <Input
                type="date"
                id="Qual a data da viagem?"
                color="turistandoYellow"
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="check_out"
            rules={{}}
            render={({ field: { name, onChange, onBlur, value } }) => (
              <Input
                type="date"
                id="Qual a data de retorno da viagem?"
                color="turistandoYellow"
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
              />
            )}
          />
          <Controller
            control={control}
            name="select_peoples"
            rules={{}}
            render={() => (
              <Select
                onClick={(e) => {
                  setValue("select_peoples", e);
                }}
              />
            )}
          />
          <Button type="submit" placeholder="Buscar" mb="5rem" />
        </S.Form>
      </section>
      <S.Main>
        {showResults &&
          list.map((item, index) => (
            <S.Card key={index}>
              <Image
                src={item.imgResult!}
                alt="Image Example"
                id="ImageResult"
              />
              <S.ContainerResults>
                <h1>{item.cityName}</h1>
                <p>{item.attractionsResults}</p>
                <p>{item.costsResult}</p>
              </S.ContainerResults>
              <S.ContainerCloseIcon>
                <FaTimes
                  onClick={closeCardResult}
                  color={theme.colors.turistandoBlue}
                />
              </S.ContainerCloseIcon>
            </S.Card>
          ))}
      </S.Main>
      <Footer />
    </>
  );
};
