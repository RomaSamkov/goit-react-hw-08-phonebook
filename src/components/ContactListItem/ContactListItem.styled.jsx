import styled from 'styled-components';

export const Item = styled.li`
  /* display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: 500;
  width: 100%;
  &:not(:last-child) {
  } */
  display: flex;
  justify-content: space-between;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 5px;
  border-radius: 4px;
  background-color: #fff;
`;

export const Contact = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 280px;
  margin-left: 30px;
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
