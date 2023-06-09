import styled from "styled-components";

export namespace S {
  export const List = styled.div`
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  `;

  export const Loader = styled.div<{ $visible: boolean }>`
    display: ${({ $visible }) => ($visible ? "block" : "none")};
  `;

  export const Entry = styled.div``;
}
