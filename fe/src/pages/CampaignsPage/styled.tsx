import styled from "styled-components";
import { Input } from "../../shared-components/Input/Input";

export namespace S {
  export const List = styled.div`
    margin-top: 28px;
    display: flex;
    flex-direction: column;
    row-gap: 20px;
  `;

  export const DataFilteringWrapper = styled.div`
    margin-left: auto;
    flex-grow: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    column-gap: 16px;

    ${Input.S.Entry} {
      max-width: 505px;
    }
  `;

  export const Header = styled.div`
    display: flex;
    align-items: center;
  `;

  export const Entry = styled.div``;
}
