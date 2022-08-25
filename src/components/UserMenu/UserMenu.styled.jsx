import styled from 'styled-components';
import LogoutIcon from '@mui/icons-material/Logout';

export const Account = styled('div')`
  margin-right: 7px;
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
  margin-left: 10px;
  color: #fff;
  cursor: pointer;
  background-color: #0d6efd;

  &:hover,
  &:focus {
    color: #fff;
    background-color: rgb(100, 70, 192);
  }
`;

export const CustimIcon = styled(LogoutIcon)`
  /* color: #0d6efd; */
  color: #fff;
  &:hover,
  :focus {
    color: #fff;
  }
`;
