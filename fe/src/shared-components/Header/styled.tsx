import styled from "styled-components";

export namespace S {
  export const Entry = styled.div`
    display: flex;
    align-items: center;
    padding: 20px 15px;
    border-bottom: 1px solid;
  `;

  export const Logo = styled.div``;

  export const RightSideMover = styled.div`
    margin-right: auto;
  `;

  export const Organization = styled.div`
    margin-right: 20px;
    display: flex;
    align-items: center;
    column-gap: 10px;
    padding: 5px 8px;
    border: 1px solid;
  `;

  export const OrganizationAvatar = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;

  export const OrganizationName = styled.div``;

  export const UserAvatar = styled.div`
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;

    & > img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `;
}
