import theme from "../../../styles/theme";
export type Colors = keyof typeof theme.colors;
export interface SidebarItemProps {
  text: string;
  Icon: React.ElementType;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
