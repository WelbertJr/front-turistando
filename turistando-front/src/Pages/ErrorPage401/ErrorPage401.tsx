import * as S from "./styles";
import { Image } from "../../micros/Imagem/Image";
import { Button } from "../../micros/Buttons/Buttons";
import { useNavigate } from "react-router-dom";

export const ErrorPage401 = () => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const currentSearch = window.location.search;

    if (currentSearch.includes("from=/loggedPage")) {
      navigate("/login");
    } else {
      navigate("/adminLogin");
    }
  };
  return (
    <S.Container>
      <Image
        src="src/assets/imgs/ops-401-page.png"
        alt="Imagem erro 401"
        id="ImageError401"
      />
      <div style={{ minWidth: "30%" }}>
        <Button
          type="button"
          placeholder="Fazer login"
          onClick={handleNavigation}
        />
      </div>
    </S.Container>
  );
};
