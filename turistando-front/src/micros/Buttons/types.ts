//import theme from "../../../styles/theme";
//export type Colors = keyof typeof theme.colors;
export interface ButtonsProps {
  placeholder?: string;
  type?: "button" | "submit";
  mb?: string;
  onClick?: () => void;
}
