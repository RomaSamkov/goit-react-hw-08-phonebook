import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled('div')``;

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 50px;
  padding: 20px;
  padding-left: 80px;
  padding-right: 80px;
  box-shadow: 0px 10px 21px -2px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 10px 21px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 10px 21px -2px rgba(0, 0, 0, 0.5);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled('h2')`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  padding: 10px 25px;
  border-radius: 25px;
  margin: 0;
  color: #0d6efd;
  background-color: rgb(221, 216, 236);
  &:hover,
  :focus {
    color: #fff;
    background-color: rgb(100, 70, 192);
  }
`;