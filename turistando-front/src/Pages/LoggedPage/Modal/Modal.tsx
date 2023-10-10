import { ModalProps } from "./types";
import * as S from "./styles";
import { FaTimes } from "react-icons/fa";
import { BsFillTrashFill } from "react-icons/bs";
import theme from "../../../styles/theme";

export const Modal = ({
  active,
  item,
  setItensArray,
  itensArray,
  index,
}: ModalProps) => {
  console.log("Modal is rendered");
  console.log(item);
  if (!item) {
    return null;
  }

  const closeModal = () => {
    if (active) {
      active(false);
    }
  };

  const deleteItem = () => {
    if (
      setItensArray &&
      typeof setItensArray === "function" &&
      active &&
      typeof active === "function"
    ) {
      const updatedItemsArray = [...itensArray!];
      updatedItemsArray.splice(index, 1);

      setItensArray(updatedItemsArray);

      localStorage.setItem("itensArray", JSON.stringify(updatedItemsArray));

      active(false);
    }
  };
  return (
    <S.Container>
      <S.ContainerIcons>
        <S.DeleteIcon>
          <BsFillTrashFill
            onClick={deleteItem}
            color={theme.colors.turistandoBlue}
            size="100%"
          />
        </S.DeleteIcon>
        <S.DeleteIcon>
          <FaTimes
            onClick={closeModal}
            color={theme.colors.turistandoBlue}
            size="100%"
          />
        </S.DeleteIcon>
      </S.ContainerIcons>
      <S.TitleModal>{item.cityName}</S.TitleModal>
      <S.ImageModal
        src={item.imgResult!}
        alt="Image Example"
        id="ImageResult"
      />
      <S.Details>
        <S.Summary>Pontos Turísticos</S.Summary>
        <div>
          <S.AttractionsResults>{item.attractionsResults}</S.AttractionsResults>
        </div>
      </S.Details>

      <S.Details>
        <S.Summary>Custos</S.Summary>
        <div>
          <S.AttractionsResults>{item.costsResult}</S.AttractionsResults>
        </div>
      </S.Details>
    </S.Container>
  );
};
