import styled from "styled-components";
import { Link } from "react-router-dom";

export namespace S {
  export const CloseIcon = styled.div`
    font-size: 0;
  `;

  export const CloseWrapper = styled(Link)`
    display: flex;
    align-items: center;
    column-gap: 20px;
    text-decoration: none;
  `;

  export const Text = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 1;
    display: flex;
    align-items: center;
    color: #6096ff;
  `;

  export const BackIcon = styled.div`
    font-size: 0;
  `;

  export const BackWrapper = styled(Link)`
    display: flex;
    align-items: center;
    column-gap: 20px;
    text-decoration: none;
  `;
  export const Entry = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
  `;
}
