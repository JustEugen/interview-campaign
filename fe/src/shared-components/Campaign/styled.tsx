import styled from "styled-components";

export namespace S {
  export const ListItemText = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #7f86ad;
  `;

  export const ListItemIcon = styled.div`
    font-size: 0;
  `;

  export const ListItem = styled.div`
    display: flex;
    align-items: center;
    column-gap: 16px;
    height: 30px;
    
    &:not(:last-child) {
      margin-bottom: 15px;
    }
  `;

  export const ListHeader = styled.div`
    margin-bottom: 12px;
    
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 1;
    color: #6096ff;
  `;

  export const List = styled.div`
    display: flex;
    flex-direction: column;
  `;

  export const Content = styled.div`
    margin-top: 16px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  `;

  export const Date = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 1;
    color: #7f86ad;
  `;

  export const Description = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 28px;
    color: #7f86ad;
  `;

  export const DescriptionWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-top: 8px;
  `;

  export const Title = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 1;
    color: #f4f3ee;
  `;

  export const Entry = styled.div`
    background: #1a1a22;
    border-radius: 20px;
    padding: 32px 40px;
  `;
}
