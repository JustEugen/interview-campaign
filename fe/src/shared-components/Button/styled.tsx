import styled, { css } from "styled-components";
import { ButtonType } from "./Button";

export namespace S {
  export const Icon = styled.div`
    font-size: 0;
  `;

  export const Text = styled.div`
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 1;
    color: #f4f3ee;
  `;

  export const Entry = styled.button<{ $type: ButtonType }>`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 20px;
    height: 52px;
    column-gap: 12px;
    cursor: pointer;
    flex-shrink: 0;
    text-decoration: none !important;

    ${({ $type }) => {
      if ($type === "outlined") {
        return css`
          border: 1px solid #352b42;
          background: none;
          
          ${Text} {
            color: #7f86ad;
          }
        `;
      }

      return css`
        background: #294bfc;
        border-radius: 6px;
        border: 1px solid #294bfc;
      `;
    }}
  `;
}
