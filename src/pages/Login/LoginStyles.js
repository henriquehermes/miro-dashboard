import styled, { css } from 'styled-components';

const defaultFont = css`
  color: ${props => props.theme.secondary};
  font-weight: bold;
`;

export const Container = styled.div`
  display: flex;
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
  height: 350px;
  width: 450px;
  align-items: center;
  justify-content: center;

  @media (max-width: 767px) {
    margin: 0 20px;
  }
`;

export const Title = styled.h1`
  color: ${props => props.theme.secondary};
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 80%;

  & > label {
    ${defaultFont}
  }
`;

export const Footer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
