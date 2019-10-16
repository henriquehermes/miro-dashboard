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

export const Container = styled.div`
  display: flex;
  background: #282a36;
  flex: 1;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

export const Box = styled.div`
  background: #f6f6f6;
  padding: 20px 16px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  height: 300px;
  width: 500px;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  color: #282a36;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 70%;

  & > label {
    ${defaultFont}
  }

  & > input {
    height: 40px;
    width: 100%;
    margin: 10px 0;
    padding: 0 10px;
    ${defaultFont}
    ${defaultBox}
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

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
