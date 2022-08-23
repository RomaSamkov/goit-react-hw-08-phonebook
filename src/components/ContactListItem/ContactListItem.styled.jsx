import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  width: 100%;
  &:not(:last-child) {
  }
`;

export const Button = styled.button`
  width: 75px;
  height: 25px;

  cursor: pointer;
  &:hover,
  &:focus {
    box-shadow: 0px 0px 7px #fff;
  }
`;
