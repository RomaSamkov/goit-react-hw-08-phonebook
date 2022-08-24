import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled('div')``;

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 45px;
  padding: 20px;
  box-shadow: 0px 10px 21px -2px rgba(0, 0, 0, 0.5);
  -webkit-box-shadow: 0px 10px 21px -2px rgba(0, 0, 0, 0.5);
  -moz-box-shadow: 0px 10px 21px -2px rgba(0, 0, 0, 0.5);
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled('h2')`
  margin: 0;
`;
