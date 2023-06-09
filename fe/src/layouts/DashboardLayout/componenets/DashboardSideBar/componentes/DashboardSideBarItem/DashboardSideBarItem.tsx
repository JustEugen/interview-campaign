import { S } from "./styled";

type Props = {
  name: string;
  url: string;
};

export const DashboardSideBarItem = (props: Props) => {
  return <S.Entry to={props.url}>{props.name}</S.Entry>;
};

DashboardSideBarItem.S = S;
