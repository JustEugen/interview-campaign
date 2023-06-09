import { S } from "./styled";
import { ButtonHTMLAttributes, PropsWithChildren } from "react";

export const Button = ({ children, ...props }: PropsWithChildren & ButtonHTMLAttributes<any>) => {
  return <S.Entry {...props}>{children}</S.Entry>;
};

Button.S = S;
