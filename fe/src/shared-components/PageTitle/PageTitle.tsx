import { S } from "./styled";

type Props = {
  title: string;
};

export const PageTitle = (props: Props) => {
  return <S.Entry>{props.title}</S.Entry>;
};

PageTitle.S = S;
