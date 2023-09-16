import { Image } from "../../micros/Imagem/Image";
import * as S from "./styles";

export const Footer = () => {
  return (
    <S.Container>
      <a
        href="https://github.com/ICEI-PUC-Minas-PMV-SI/Turistando"
        target="_blank"
      >
        Quem somos nós
      </a>
      <Image
        src="src/assets/imgs/turistando-icon-footer.png"
        alt="Turistando Icon"
      />
      <p>@ 2023 Turistando All Rights Reserved.</p>
    </S.Container>
  );
};
