import styled from "styled-components";
import { DashboardSideBar } from "./componenets/DashboardSideBar/DashboardSideBar";

export namespace S {
  export const Entry = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  `;

  export const LayoutContent = styled.div`
    display: flex;
    flex-grow: 2;

    ${DashboardSideBar.S.Entry} {
      width: 200px;
    }
  `;

  export const PageContent = styled.div`
    padding: 30px 15px;
    flex-grow: 2;
  `;
}
