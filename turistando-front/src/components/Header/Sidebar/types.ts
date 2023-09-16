import theme from "../../../styles/theme";
export type Colors = keyof typeof theme.colors;
export interface SidebarProps {
  active?: (value: boolean) => void;
  sidebar?: (value: boolean) => void;
}
