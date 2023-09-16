import * as S from "./styles";
import { Header } from "../../components/Header/Header";
import { Input } from "../../micros/Inputs/Inputs";
import { Image } from "../../micros/Imagem/Image";
import { Select } from "../../micros/Select/Select";
import { Button } from "../../micros/Buttons/Buttons";
import { Footer } from "../../components/Footer/Footer";
import imageResult from "../../assets/imgs/img-result-example.png";
import { HomePageProps } from "./types";
import { useState } from "react";
import { FaTimes } from "react-icons/fa";
import theme from "../../styles/theme";

const example = [
  {
    cityName: "Plymouth - Massachusetts",
    imgResult: imageResult,
    attractionsResults:
      " 1. Plymouth Rock: O local onde os Peregrinos desembarcaram em 1620. É um marco histórico importante. 2. Plymouth Plantation: Um museu ao ar livre que recria uma vila colonial do século XVII, proporcionando uma visão detalhada da vida na época dos Peregrinos. 3. Mayflower II: Uma réplica do navio Mayflower, que trouxe os Peregrinos à América. Você pode explorar o interior do navio e aprender mais sobre a jornada histórica. 4. Plimoth Patuxet Museums: Além da Plantation e da Mayflower II, esse complexo inclui o Museu Plimoth Patuxet, que oferece exposições interativas sobre a história dos Peregrinos. 5. Plymouth Harbor: Uma área encantadora para passear, com lojas, restaurantes e vistas panorâmicas do oceano.",
    climateResult:
      "Em outubro, o clima em Plymouth, Massachusetts, é agradável, com temperaturas médias diurnas variando de 13°C a 20°C. As noites podem ser mais frias, com temperaturas entre 4°C e 11°C. Geralmente, é um mês de outono com folhagem colorida. Leve roupas de outono e um casaco leve para as noites mais frias.",
    costsResult:
      "Os custos de hospedagem podem variar dependendo do tipo de acomodação que você escolher. Hotéis, pousadas e Airbnb são opções disponíveis. Aqui estão algumas estimativas em reais (BRL) por noite: Hotel 3 estrelas: A partir de R$ 400 a R$ 600 por noite. Hotel 4 estrelas: A partir de R$ 600 a R$ 800 por noite. Airbnb: Os preços podem variar, mas em média, você pode encontrar opções a partir de R$ 300 por noite.",
  },
];

export const HomePage = ({ list = example }: HomePageProps) => {
  const [showResults, setShowResults] = useState(false);
  const handleSearchClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setShowResults(true);
  };

  const closeCardResult = () => {
    setShowResults!(false);
  };

  return (
    <>
      <Header headerLinkInicio={null} headerLinkAdmin="Administrativo" />
      <section
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#003867",
          padding: "10rem 0",
        }}
      >
        <S.Form onSubmit={handleSearchClick}>
          <Input type="text" textPlaceholder="Para onde você vai?" />
          <Input type="date" textPlaceholder="Qual a data da viagem?" />
          <Select />
          <Button type="submit" placeholder="Buscar" mb="5rem" />
        </S.Form>
      </section>
      <S.Main>
        <Image
          src="src/assets/imgs/turistando-background-white.png"
          alt="Background Image"
          id="ImageBackgroundHome"
        />
        <Image
          src="src/assets/imgs/turistando-background-white.png"
          alt="Background Image"
          id="ImageBackgroundHome"
        />
        <Image
          src="src/assets/imgs/turistando-background-white.png"
          alt="Background Image"
          id="ImageBackgroundHome"
        />
        {showResults &&
          list.map((item, index) => (
            <S.Card key={index}>
              <FaTimes
                onClick={closeCardResult}
                color={theme.colors.turistandoBlue}
              />
              <Image
                src={item.imgResult}
                alt="Image Example"
                id="ImageResult"
              />
              <S.ContainerResults>
                <h1>{item.cityName}</h1>
                <p>{item.attractionsResults}</p>
                <p>{item.climateResult}</p>
                <p>{item.costsResult}</p>
              </S.ContainerResults>
            </S.Card>
          ))}
      </S.Main>
      <Footer />
    </>
  );
};
