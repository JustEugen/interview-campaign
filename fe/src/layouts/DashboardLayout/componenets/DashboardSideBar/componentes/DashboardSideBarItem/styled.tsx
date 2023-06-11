import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export namespace S {
  export const Text = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 1;
    color: #6096ff;
  `;

  export const IconWrapper = styled.div`
    font-size: 0;
    width: 23px;
  `;
  export const Entry = styled(Link)<{ $transitionProp: string }>`
    padding: 13px 31px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
    column-gap: 22px;
    text-decoration: none !important;

    transition: all 300ms;

    &:hover {
      background: #21212e;

      ${Text} {
        color: #f4f3ee;
      }

      svg * {
        transition: all 300ms;
        ${({ $transitionProp }) => {
          if ($transitionProp === "fill") {
            return css`
              fill: #f4f3ee;
            `;
          }

          return css`
            stroke: #f4f3ee;
          `;
        }}
      }
    }
  `;
}
