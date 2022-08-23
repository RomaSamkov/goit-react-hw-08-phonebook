import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledHeader = styled('div')``;

export const Container = styled('div')`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 45px;

  margin: 0 auto;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
`;

export const Title = styled('h2')``;
