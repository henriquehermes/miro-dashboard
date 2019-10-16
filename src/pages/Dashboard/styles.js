import styled, { css } from 'styled-components';
import AnimateHeight from 'react-animate-height';

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

const defaultButton = css`
  border-color: #282a36;
  border-width: 2px;
  background: #fff;
  cursor: pointer;
  color: #282a36;
  border-radius: 6px;
  width: 100px;
  height: 30px;
  font-weight: bold;
  border-style: solid;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background: #282a36;
  flex: 1;
  height: 100%;
  padding: 40px;
`;

export const SearchBar = styled.div`
  background: #f6f6f6;
  padding: 20px 16px;
  border-radius: 6px;
  display: flex;
  flex-direction: row;
  height: 40px;
  width: 100%;
  align-items: center;
  justify-content: center;

  & > input {
    height: 40px;
    width: 100%;
    margin: 10px 0;
    padding: 0 10px;
    border: none;
    background: #f6f6f6;
    ${defaultFont}
  }

  & > button {
    cursor: pointer;
    height: 40px;
    width: 80px;
    ${defaultFont}
    border: none;
    background: #f6f6f6;
  }
`;

export const Content = styled.div`
  background: #f6f6f6;
  margin-top: 20px;
  padding: 20px 16px;
  border-radius: 6px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: flex-start;
  justify-content: center;
`;

export const Title = styled.h1`
  ${defaultFont}
  margin-bottom: 20px;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 20px 10px 20px;
  width: 100%;
  background: #fff;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  height: 45px;
  align-items: center;
  width: 100%;
  margin-bottom: 10px;

  @media (max-width: 767px) {
    flex-direction: column;
    height: auto;
  }
`;

export const BookExpand = styled.button`
  ${defaultButton}
  background: ${props => (props.active ? '#282a36' : '#fff')};
  color: ${props => (props.active ? '#fff' : '#282a36')};
  margin-right: 5px;
`;

export const BookRent = styled.button`
  opacity: ${props => (props.disabled ? 0.5 : 1)};
  ${defaultButton};
  margin: 0px 5px;
`;

export const BookTitle = styled.h4`
  display: flex;
  flex: 1;
  font-weight: normal;
`;

export const DValue = styled.h4`
  font-weight: normal;
`;

export const Animated = styled(AnimateHeight)`
  width: 100%;
  margin-bottom: 15px;
  ${defaultBox}
`;

export const Button = styled.button`
  margin-left: 15px;
  ${defaultButton};
  height: 45px;

  @media (max-width: 767px) {
    width: 100%;
    margin-left: 0px;
    margin-top: 5px;
    border-width: 1px;
  }
`;
