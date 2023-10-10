import imageResult from "../../assets/imgs/img-result-example.png";
export interface HomePageProps {
  list?: ResultListProps[];
}

export interface ResultListProps {
  cityName?: string;
  imgResult?: string;
  attractionsResults?: string;
  climateResult?: string;
  costsResult?: string;
}

export const example = [
  {
    cityName: "Plymouth - Massachusetts",
    imgResult: imageResult,
    attractionsResults:
      " 1. Plymouth Rock: O local onde os Peregrinos desembarcaram em 1620. É um marco histórico importante. 2. Plymouth Plantation: Um museu ao ar livre que recria uma vila colonial do século XVII, proporcionando uma visão detalhada da vida na época dos Peregrinos. 3. Mayflower II: Uma réplica do navio Mayflower, que trouxe os Peregrinos à América. Você pode explorar o interior do navio e aprender mais sobre a jornada histórica. 4. Plimoth Patuxet Museums: Além da Plantation e da Mayflower II, esse complexo inclui o Museu Plimoth Patuxet, que oferece exposições interativas sobre a história dos Peregrinos. 5. Plymouth Harbor: Uma área encantadora para passear, com lojas, restaurantes e vistas panorâmicas do oceano.",
    costsResult:
      "Os custos de hospedagem podem variar dependendo do tipo de acomodação que você escolher. Hotéis, pousadas e Airbnb são opções disponíveis. Aqui estão algumas estimativas em reais (BRL) por noite: Hotel 3 estrelas: A partir de R$ 400 a R$ 600 por noite. Hotel 4 estrelas: A partir de R$ 600 a R$ 800 por noite. Airbnb: Os preços podem variar, mas em média, você pode encontrar opções a partir de R$ 300 por noite.",
  },
];

export interface FormValues {
  search?: string;
  check_in?: string;
  check_out?: string;
  select_peoples?: string;
}
