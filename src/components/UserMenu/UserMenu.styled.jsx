import styled from 'styled-components';

export const ImgWrap = styled('div')`
  width: 40px;
  height: 40px;
  margin-right: 7px;
  border-radius: 50%;
  overflow: hidden;
`;

export const Container = styled('div')`
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Button = styled('button')`
  width: 40px;
  height: 40px;
  border: none;
  outline: none;
  border-radius: 50%;

  &:hover,
  &:focus {
    background-color: #fff;
  }
`;
