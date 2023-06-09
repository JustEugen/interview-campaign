import styled from "styled-components";

export namespace S {
  export const Actions = styled.div`
    margin-left: auto;
    padding: 20px 15px;
  `;

  export const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 20px 15px 15px;
  `;

  export const ImageWrapper = styled.div`
    width: 200px;
    height: 200px;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;
  export const Entry = styled.div`
    display: flex;
  `;
}
