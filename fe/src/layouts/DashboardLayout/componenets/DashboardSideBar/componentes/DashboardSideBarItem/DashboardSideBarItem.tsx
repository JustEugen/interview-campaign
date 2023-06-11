import { S } from "./styled";
import { ReactElement } from "react";

type Props = {
  name: string;
  url: string;
  icon: ReactElement;
  transitionProp?: "fill" | "stroke";
};

export const DashboardSideBarItem = (props: Props) => {
  return (
    <S.Entry to={props.url} $transitionProp={props.transitionProp || "stroke"}>
      <S.IconWrapper>{props.icon}</S.IconWrapper>
      <S.Text>{props.name}</S.Text>
    </S.Entry>
  );
};

DashboardSideBarItem.S = S;
