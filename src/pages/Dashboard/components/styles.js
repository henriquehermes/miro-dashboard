import styled, { css } from 'styled-components';

const defaultFont = css`
  color: #282a36;
  font-weight: bold;
`;

const defaultBox = css`
  border-radius: 6px;
  border-color: #fff;
  border-style: solid;
  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);
`;

export const Form = styled.div`
  margin-top: 15px;
  display: flex;
  width: 300px;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & > input {
    height: 40px;
    width: 100%;
    margin: 10px 0;
    padding: 0 10px;
    ${defaultFont}
    ${defaultBox}
  }

  & > button {
    cursor: pointer;
    height: 40px;
    width: 80px;
    ${defaultFont}
    ${defaultBox}
    margin-top: 10px;
    background: #fff;
  }
`;
