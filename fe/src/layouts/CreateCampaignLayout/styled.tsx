import styled from "styled-components";

export namespace S {
  export const Entry = styled.div`
    width: 100%;
    max-width: 1462px;
    padding: 44px 15px 0;
    margin: 0 auto;
  `;

  export const LayoutContent = styled.div`
    display: flex;
    width: 100%;
    margin-top: 32px;
    column-gap: 44px;
  `;

  export const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 20px;
    border-bottom: 1px solid #352B42;
    margin-bottom: 30px;
  `;

  export const Content = styled.div`
    width: 100%;
  `;
}
