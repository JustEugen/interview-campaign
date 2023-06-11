import { S } from "./styled";
import { ButtonHTMLAttributes, PropsWithChildren, ReactElement } from "react";
import { Link, LinkProps } from "react-router-dom";

export type ButtonType = "primary" | "outlined";

type Props = ButtonHTMLAttributes<any> & {
  variant?: ButtonType;
  icon?: ReactElement;
  asLink?: LinkProps;
};

export const Button = ({ children, ...props }: PropsWithChildren<Props>) => {
  const simple = (
    <S.Entry {...props} $type={props.variant || "primary"}>
      <S.Text>{children}</S.Text>
      {props.icon && <S.Icon>{props.icon}</S.Icon>}
    </S.Entry>
  );

  if (props.asLink) {
    return (
      <Link style={{ display: "block", textDecoration: "none" }} {...props.asLink}>
        {simple}
      </Link>
    );
  }

  return simple;
};

Button.S = S;
