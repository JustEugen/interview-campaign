import { S } from "./styled";
import { InputHTMLAttributes, useId } from "react";

type Props = { title?: string; description?: string } & InputHTMLAttributes<any>;

export const Input = ({ title, description, ...inputProps }: Props) => {
  const id = useId();

  return (
    <S.Entry>
      {title && <S.Title htmlFor={id}>{title}</S.Title>}
      {description && <S.Description htmlFor={id}>{description}</S.Description>}
      <S.InputElement id={id} {...inputProps} />
    </S.Entry>
  );
};

Input.S = S;
