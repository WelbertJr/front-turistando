import { ResultListProps } from "../HomePage/types";

export interface LoggedPageProps {
  list?: ResultListProps[];
  setItensArray?: React.Dispatch<React.SetStateAction<ResultListProps[]>>;
  itensArray?: ResultListProps[];
}
