import { ResultListProps } from "../../HomePage/types";

export interface ModalProps {
  active?: (value: boolean) => void;
  item?: ResultListProps;
  index: number;
  setItensArray?: React.Dispatch<React.SetStateAction<ResultListProps[]>>;
  itensArray?: ResultListProps[];
}
