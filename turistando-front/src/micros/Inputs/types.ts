import theme from "../../styles/theme";
export type Colors = keyof typeof theme.colors;

export interface InputsProps {
  textPlaceholder: string;
  type: string;
  id?: string;
  color?: Colors;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
