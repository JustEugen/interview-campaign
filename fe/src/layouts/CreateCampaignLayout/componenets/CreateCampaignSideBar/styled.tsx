import styled, { css } from "styled-components";

export namespace S {
  export const Entry = styled.div`
    width: 426px;
    border: 1px solid #352b42;
    border-radius: 8px;
    align-self: flex-start;
  `;

  export const Text = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #7f86ad;
  `;

  export const ItemHeader = styled.div`
    height: 68px;
    display: flex;
    align-items: center;
    column-gap: 20px;
  `;

  export const Item = styled.div<{ $active: boolean }>`
    padding: 0 32px;

    &:not(:last-child) {
      border-bottom: 1px solid #352b42;
    }
    
    ${({ $active }) =>
      $active &&
      css`
        ${ItemHeader} > ${Text} {
          color: #f4f3ee;
        }
      `}}
  `;
}
