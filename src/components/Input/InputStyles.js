import styled, { css } from 'styled-components';

const defaultFont = css`
  color: ${props => props.theme.secondary};
  font-weight: bold;
`;

const defaultBox = css`
  border-radius: 6px;
  border-color: #fff;
  border-style: solid;
  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  height: 40px;
  width: 100%;
  margin: 10px 0;
  padding: 0 10px;
  border: none;
  background: #fff;
  ${props => (props.hasBox ? `${defaultBox}` : '')};
  ${defaultFont}
`;

export default Input;
