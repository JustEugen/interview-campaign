import styled from "styled-components";

export namespace S {
  export const InputElement = styled.input`
    outline: none;
    width: 100%;
    height: 54px;
    border: 1px solid #352b42;
    border-radius: 6px;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #f4f3ee;
    background: none;
    padding-left: 20px;

    &::placeholder {
      color: #7f86ad;
    }
  `;

  export const Description = styled.label`
    display: block;
    margin-bottom: 12px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 28px;
    color: #7f86ad;
  `;

  export const Title = styled.label`
    display: block;
    margin-bottom: 8px;
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    color: #6096ff;
  `;

  export const Entry = styled.div`
    width: 100%;
  `;
}
