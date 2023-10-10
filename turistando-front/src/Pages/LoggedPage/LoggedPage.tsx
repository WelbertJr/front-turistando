import * as S from "./styles";
import { useForm, Controller } from "react-hook-form";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Image } from "../../micros/Imagem/Image";
import { Select } from "../../micros/Select/Select";
import { Button } from "../../micros/Buttons/Buttons";
import { Footer } from "../../components/Footer/Footer";
import imageResult from "../../assets/imgs/img-result-example.png";
import { LoggedPageProps } from "./types";
import { useContext, useEffect, useState } from "react";
import { FaTimes } from "react-icons/fa";
import { GiSave } from "react-icons/gi";
import theme from "../../styles/theme";
import { AuthenticationContext } from "../../utils/contexts/isAuthenticated";
import { Navigate } from "react-router-dom";
import { Carrossel } from "./Carrosel/Carrossel";
import { FormValues, ResultListProps, example } from "../HomePage/types";

export const LoggedPage = ({
  list = example,
}: LoggedPageProps): JSX.Element => {
  const [showResults, setShowResults] = useState(false);
  const [itensArray, setItensArray] = useState<ResultListProps[]>([]);
  const [contador, setContador] = useState(0);
  const adicionarItemAoArray = () => {
    if (contador < 10) {
      const novoItem: ResultListProps = {
        imgResult: imageResult,
        cityName: "Plymouth - Massachusetts" + contador,
        attractionsResults:
          " 1. Plymouth Rock: O local onde os Peregrinos desembarcaram em 1620. É um marco histórico importante. 2. Plymouth Plantation: Um museu ao ar livre que recria uma vila colonial do século XVII, proporcionando uma visão detalhada da vida na época dos Peregrinos. 3. Mayflower II: Uma réplica do navio Mayflower, que trouxe os Peregrinos à América. Você pode explorar o interior do navio e aprender mais sobre a jornada histórica. 4. Plimoth Patuxet Museums: Além da Plantation e da Mayflower II, esse complexo inclui o Museu Plimoth Patuxet, que oferece exposições interativas sobre a história dos Peregrinos. 5. Plymouth Harbor: Uma área encantadora para passear, com lojas, restaurantes e vistas panorâmicas do oceano.",
        climateResult:
          "Em outubro, o clima em Plymouth, Massachusetts, é agradável, com temperaturas médias diurnas variando de 13°C a 20°C. As noites podem ser mais frias, com temperaturas entre 4°C e 11°C. Geralmente, é um mês de outono com folhagem colorida. Leve roupas de outono e um casaco leve para as noites mais frias.",
        costsResult:
          "Os custos de hospedagem podem variar dependendo do tipo de acomodação que você escolher. Hotéis, pousadas e Airbnb são opções disponíveis. Aqui estão algumas estimativas em reais (BRL) por noite: Hotel 3 estrelas: A partir de R$ 400 a R$ 600 por noite. Hotel 4 estrelas: A partir de R$ 600 a R$ 800 por noite. Airbnb: Os preços podem variar, mas em média, você pode encontrar opções a partir de R$ 300 por noite.",
      };
      setItensArray([...itensArray, novoItem]);
      setContador(contador + 1);
      localStorage.setItem(
        "itensArray",
        JSON.stringify([...itensArray, novoItem])
      );
    }
  };
  useEffect(() => {
    const storedItems = localStorage.getItem("itensArray");
    if (storedItems) {
      setItensArray(JSON.parse(storedItems));
    }
  }, []);

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
  const saveSearch = () => {
    adicionarItemAoArray();
  };
  const RedirectToError401 = ({ from }: { from: string }) => {
    return <Navigate to={`/error401?from=${from}`} replace />;
  };
  const authContext = useContext(AuthenticationContext);
  if (!authContext || !authContext.user) {
    return <RedirectToError401 from={location.pathname} />;
  }
  return (
    <>
      <Header
        headerLinkInicio={null}
        headerLinkAdmin={null}
        headerLinkRegister={null}
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
          <p>Olá, {authContext.user.email}!</p>
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
              <S.ContainerCardIcons>
                <S.SaveIcon>
                  <GiSave
                    onClick={saveSearch}
                    color={theme.colors.turistandoBlue}
                    size="100%"
                  />
                </S.SaveIcon>
                <FaTimes
                  onClick={closeCardResult}
                  color={theme.colors.turistandoBlue}
                  size="100%"
                />
              </S.ContainerCardIcons>
              <S.ContainerCardContent>
                <Image
                  src={item.imgResult!}
                  alt="Image Example"
                  id="ImageResult"
                />
                <S.ContainerResults>
                  <h1>{item.cityName}</h1>
                  <p>{item.attractionsResults}</p>
                  <p>{item.climateResult}</p>
                  <p>{item.costsResult}</p>
                </S.ContainerResults>
              </S.ContainerCardContent>
            </S.Card>
          ))}
      </S.Main>
      {itensArray.length > 0 && (
        <Carrossel
          list={itensArray}
          setItensArray={setItensArray}
          itensArray={itensArray}
        />
      )}
      <Footer />
    </>
  );
};
