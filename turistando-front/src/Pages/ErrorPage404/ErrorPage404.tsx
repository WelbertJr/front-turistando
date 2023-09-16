import * as S from "./styles";
import { Image } from "../../micros/Imagem/Image";
import { Button } from "../../micros/Buttons/Buttons";
import { useNavigate } from "react-router-dom";
export const ErrorPage404 = () => {
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/");
  };
  return (
    <S.Container>
      <Image
        src="src/assets/imgs/ops-404-page.png"
        alt="Imagem erro 404"
        id="ImageError404"
      />
      <div style={{ minWidth: "30%" }}>
        <Button
          type="button"
          placeholder="Voltar para página inicial"
          onClick={handleNavigate}
        />
      </div>
    </S.Container>
  );
};
