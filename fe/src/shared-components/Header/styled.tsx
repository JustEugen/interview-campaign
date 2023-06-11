import styled from "styled-components";

export namespace S {
  export const Entry = styled.div`
    position: sticky;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 26px 40px;
    border-bottom: 1px solid #352B42;
    background: #131316;
  `;

  export const Logo = styled.div``;

  export const RightSideMover = styled.div`
    margin-right: auto;
  `;

  export const Organization = styled.div`
    display: flex;
    align-items: center;
    column-gap: 10px;

    margin-right: 20px;
    padding: 10px 16px;
    
    border: 1px solid #352b42;
    border-radius: 8px;
    
    box-sizing: content-box;
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

  export const OrganizationName = styled.div`
    font-weight: 400;
    font-size: 20px;
    line-height: 1;
    color: #6096FF;
  `;

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
