import styled, { css } from 'styled-components';

const defaultFont = css`
  color: ${props => props.theme.secondary};
  font-weight: bold;
`;

const marginHorizontal = css`
  margin: 0px 5px;
`;

const defaultBorder = css`
  border-radius: 6px;
  border-color: ${props => props.theme.primary};
  border-style: solid;
`;

const defaultBox = css`
  border-radius: 6px;
  border-color: #fff;
  border-style: solid;
  box-shadow: 0px 4px 18px 0px rgba(0, 0, 0, 0.1);
`;

const defaultActive = css`
  background: ${props => props.theme.primary};
  color: #fff;
`;

const Button = styled.button`
  cursor: pointer;
  height: 40px;
  width: 90px;
  ${defaultFont}
  background: #fff;
  ${props => (props.withBorder ? defaultBorder : defaultBox)};
  ${props => (props.marginHorizontal ? marginHorizontal : '')};
  ${props => (props.disabled ? 'opacity: 0.5' : 1)};
  ${props => (props.active ? defaultActive : '')};

  @media (max-width: 767px) {
    ${props => (props.marginVertical ? `margin-top: 10px; width: 100%;` : '')}
  }
`;

export default Button;
