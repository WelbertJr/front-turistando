import * as S from "./styles";
import { SidebarItemProps } from "./types";

export const SidebarItem = ({ Icon, text, onClick }: SidebarItemProps) => {
  return (
    <S.Container onClick={onClick}>
      <Icon />
      {text}
    </S.Container>
  );
};
